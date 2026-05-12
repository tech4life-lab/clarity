/**
 * Builds the site, serves preview locally, exports a PDF of the full landing page
 * using Google Chrome / Chromium headless (no extra browser downloads).
 *
 * Usage: npm run export:pdf
 * Outputs:
 *   - clarity-site-full.pdf (project root)
 *   - public/clarity-site-full.pdf (served as /clarity-site-full.pdf with vite dev/preview)
 *
 * Requires Chrome/Chromium (or CHROME_PATH=/path/to/chrome).
 *
 * If Chrome exits with SIGABRT in a sandboxed terminal, run the same command in Terminal.app.
 */
import { execFile, spawn } from 'node:child_process'
import { access, constants, copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const outFile = path.join(root, 'clarity-site-full.pdf')
const url = 'http://127.0.0.1:4173/'

async function executableExists(p) {
  if (!p) return false
  try {
    await access(p, process.platform === 'win32' ? constants.F_OK : constants.X_OK)
    return true
  } catch {
    try {
      await access(p)
      return true
    } catch {
      return false
    }
  }
}

async function resolveChromeExecutable() {
  const envPath = process.env.CHROME_PATH?.trim()
  if (envPath && (await executableExists(envPath))) return envPath

  const darwin = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ]
  const linux = [
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ]
  const win = [
    path.join(process.env.PROGRAMFILES ?? 'C:\\Program Files', 'Google', 'Chrome', 'Application', 'chrome.exe'),
    path.join(
      process.env['PROGRAMFILES(X86)'] ?? 'C:\\Program Files (x86)',
      'Google',
      'Chrome',
      'Application',
      'chrome.exe',
    ),
  ]

  const list = process.platform === 'darwin' ? darwin : process.platform === 'win32' ? win : linux
  for (const p of list) {
    if (await executableExists(p)) return p
  }
  return null
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const p = spawn('npm', ['run', 'build'], {
      cwd: root,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`build exited ${code}`))))
  })
}

function startPreview() {
  return spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
    cwd: root,
    stdio: 'pipe',
    shell: process.platform === 'win32',
  })
}

async function waitForHttpReady(maxMs = 60000) {
  const start = Date.now()
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      /* ignore */
    }
    await new Promise((r) => setTimeout(r, 300))
  }
  throw new Error(`Timed out waiting for preview at ${url}`)
}

async function printToPdf(chromePath, targetUrl, pdfPath) {
  const userDataDir = path.join(root, '.chrome-pdf-profile')
  await mkdir(userDataDir, { recursive: true })

  const args = [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--hide-scrollbars',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    targetUrl,
  ]

  try {
    const { stderr } = await execFileAsync(chromePath, args, {
      timeout: 180000,
      windowsHide: true,
    })
    if (stderr) process.stderr.write(stderr)
  } catch (err) {
    if (err.stderr) process.stderr.write(Buffer.isBuffer(err.stderr) ? err.stderr : String(err.stderr))
    throw err
  }
}

async function main() {
  await mkdir(path.dirname(outFile), { recursive: true })

  const chromePath = await resolveChromeExecutable()
  if (!chromePath) {
    console.error(
      'Could not find Chrome/Chromium. Install Google Chrome, or set CHROME_PATH to your browser executable.',
    )
    process.exit(1)
  }

  await runBuild()

  const preview = startPreview()
  try {
    await waitForHttpReady()
    await printToPdf(chromePath, url, outFile)

    const publicCopy = path.join(root, 'public', 'clarity-site-full.pdf')
    await mkdir(path.join(root, 'public'), { recursive: true })
    await copyFile(outFile, publicCopy)

    console.info(`Wrote ${outFile}`)
    console.info(`Copied to ${publicCopy} — download at http://localhost:5173/clarity-site-full.pdf when dev server is running`)
  } finally {
    preview.kill('SIGTERM')
    await new Promise((r) => setTimeout(r, 500))
    try {
      preview.kill('SIGKILL')
    } catch {
      /* ignore */
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
