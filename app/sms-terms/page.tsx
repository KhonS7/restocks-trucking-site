import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SMS Terms — Restocks (AESTRA INC)",
  description:
    "SMS Terms of Use for Restocks, operated by AESTRA INC. Covers message categories, frequency, opt-out (STOP), help (HELP), and rates.",
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
            <h2>1. Description of Service</h2>
            <p>
              AESTRA INC (&quot;AESTRA,&quot; &quot;we,&quot; &quot;us&quot;)
              sends SMS and MMS messages from <b>+1 (844) 223-4074</b> to mobile
              phone numbers provided to us by U.S. motor carrier customers.
              Messages are sent in connection with the carrier&apos;s regulatory
              compliance program under 49 CFR.
            </p>

            <h2>2. Categories of Messages</h2>
            <p>Recipients may receive SMS messages in the following categories:</p>
            <ul>
              <li>
                <b>CDL expiration and renewal reminders</b>
              </li>
              <li>
                <b>DOT drug and alcohol test selection notifications</b>{" "}
                (random, post-accident, reasonable suspicion, return-to-duty,
                follow-up)
              </li>
              <li>
                <b>FMCSA Drug &amp; Alcohol Clearinghouse query result notifications</b>
              </li>
              <li>
                <b>Hours-of-Service and safety training due-date reminders</b>
              </li>
              <li>
                <b>Safety event notifications</b> (e.g., speeding events
                recorded by Electronic Logging Devices, harsh braking, lane
                departure)
              </li>
              <li>
                <b>Account and service notifications</b> related to the
                recipient&apos;s role with the motor carrier
              </li>
            </ul>
            <p>
              We do <b>not</b> send marketing or promotional SMS on this number.
            </p>

            <h2>3. Frequency</h2>
            <p>
              Message frequency varies based on the recipient&apos;s compliance
              events. A typical commercial driver may receive 1–10 messages per
              month. Frequency may increase around random drug-test cycles,
              training enrollment periods, or safety reviews.
            </p>

            <h2>4. Cost</h2>
            <p>
              Message and data rates may apply. AESTRA INC is not responsible
              for charges from your wireless carrier. Carriers are not liable
              for delayed or undelivered messages.
            </p>

            <h2>5. Opt Out (STOP)</h2>
            <p>
              You can withdraw consent and stop receiving SMS from this number
              at any time by:
            </p>
            <ul>
              <li>
                Replying <b>STOP</b> to any SMS message received from us; or
              </li>
              <li>
                Emailing{" "}
                <a href="mailto:admin@restocks.ai">admin@restocks.ai</a> with
                the phone number you want unsubscribed.
              </li>
            </ul>
            <p>
              After opting out, you will receive one final confirmation message.
              Opting out does not terminate any other relationship you may have
              with the motor carrier or AESTRA INC.
            </p>

            <h2>6. Help (HELP)</h2>
            <p>
              Reply <b>HELP</b> to any SMS for sender identification and support
              contact information, or email{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>.
            </p>

            <h2>7. Consent and Authority</h2>
            <p>
              By providing your mobile phone number to AESTRA INC (directly or
              through your employer), you confirm that you are the account
              holder or have the account holder&apos;s permission, and you
              consent to receive SMS messages in the categories above. Consent
              is not a condition of any employment or service.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Mobile phone numbers and SMS content are handled according to our{" "}
              <Link href="/privacy">Privacy Policy</Link>.{" "}
              <b>
                No mobile information is shared with third parties for marketing
                or promotional purposes.
              </b>{" "}
              Mobile opt-in data and consent are not shared with any third
              party except aggregators and providers of the text messaging
              service (e.g., Twilio) for the sole purpose of delivering
              messages.
            </p>

            <h2>9. Supported Carriers</h2>
            <p>
              Supported U.S. wireless carriers include AT&amp;T, T-Mobile,
              Verizon, US Cellular, and most regional carriers. SMS delivery
              may be unavailable on some carriers or to some phone numbers.
            </p>

            <h2>10. Contact</h2>
            <p>
              AESTRA INC (d/b/a Restocks)
              <br />
              United States
              <br />
              Email: <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>
              <br />
              SMS number: +1 (844) 223-4074
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
