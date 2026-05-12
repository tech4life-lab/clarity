import { LegalShell } from '../components/legal/LegalShell'

export function DisclaimerPage() {
  return (
    <LegalShell title="Disclaimer">
      <p>
        Clarity is not therapy, medical care, or crisis intervention. Nothing on this site or inside the product should
        be read as professional mental-health advice, diagnosis, or treatment.
      </p>
      <p>
        If you are in crisis or may harm yourself or others, contact local emergency services or a crisis hotline
        immediately. AI reflections cannot replace human clinicians where they are needed.
      </p>
      <p>
        Early-access features may change or produce imperfect outputs. Use judgment and seek qualified professionals for
        clinical concerns.
      </p>
    </LegalShell>
  )
}
