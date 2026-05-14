import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SMS Terms — Restocks (AESTRA INC)",
  description:
    "SMS Terms of Use for Restocks, operated by AESTRA INC. Message categories, frequency, opt-out (STOP), help (HELP), and rates.",
};

export default function SmsTermsPage() {
  return (
    <>
      <Header variant="legal" />

      <main>
        <div className="doc-container content-wrap">
          <div className="doc-head">
            <h1>SMS Terms of Use</h1>
            <p className="effective">Last updated: May 13, 2026</p>
          </div>

          <div className="legal-banner">
            <div>
              <b>Operated by</b>AESTRA INC, a Nevada Corporation, d/b/a Restocks
            </div>
            <div>
              <b>Sender SMS number</b>+1 (844) 223-4074
            </div>
            <div>
              <b>Contact</b>
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>
            </div>
          </div>

          <div className="doc-content">
            <h2>1. Service</h2>
            <p>
              AESTRA INC (&quot;AESTRA,&quot; &quot;we,&quot; &quot;us&quot;)
              sends SMS messages from <b>+1 (844) 223-4074</b> to mobile phone
              numbers provided to us by U.S. motor carrier customers, in
              connection with the carrier&apos;s regulatory compliance program
              under 49 CFR. We do <b>not</b> send marketing or promotional SMS
              on this number.
            </p>

            <h2>2. Categories of Messages</h2>
            <ul>
              <li>CDL expiration and renewal reminders</li>
              <li>
                DOT drug and alcohol test selection notifications (random,
                post-accident, reasonable suspicion, return-to-duty, follow-up)
              </li>
              <li>
                FMCSA Drug &amp; Alcohol Clearinghouse query result
                notifications
              </li>
              <li>Hours-of-Service and safety training due-date reminders</li>
              <li>
                Safety event notifications (speeding events, harsh braking,
                ELD violations)
              </li>
              <li>
                Account and service notifications related to the
                recipient&apos;s role with the motor carrier
              </li>
            </ul>

            <h2>3. Frequency &amp; Cost</h2>
            <p>
              Frequency varies based on compliance events. A typical CDL driver
              receives 1–10 messages per month. Message and data rates may
              apply. AESTRA INC is not responsible for charges from your
              wireless carrier.
            </p>

            <h2>4. Opt Out (STOP) &amp; Help (HELP)</h2>
            <p>
              Reply <b>STOP</b> to any SMS (or email{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>) to opt
              out. After opt-out, you will receive one final confirmation
              message. Reply <b>HELP</b> for sender identification and support.
            </p>

            <h2>5. Consent</h2>
            <p>
              By providing your mobile phone number to AESTRA INC (directly or
              through your employer), you consent to receive SMS messages in
              the categories above. Consent is not a condition of any
              employment or service.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Mobile phone numbers and SMS content are handled per our{" "}
              <Link href="/privacy">Privacy Policy</Link>.{" "}
              <b>
                No mobile information is shared with third parties for
                marketing or promotional purposes.
              </b>{" "}
              Mobile opt-in data and consent are not shared with any third
              party except aggregators and providers of the text messaging
              service (such as Twilio) for the sole purpose of delivering
              messages.
            </p>

            <h2>7. Contact</h2>
            <p>
              AESTRA INC (d/b/a Restocks)
              <br />
              United States
              <br />
              Email: <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>
              <br />
              SMS sender: +1 (844) 223-4074
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
