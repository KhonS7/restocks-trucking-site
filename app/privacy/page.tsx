import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Restocks (AESTRA INC)",
  description:
    "Privacy policy for Restocks, operated by AESTRA INC. SMS communications, data sharing, and rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header variant="legal" />

      <main>
        <div className="doc-container content-wrap">
          <div className="doc-head">
            <h1>Privacy Policy</h1>
            <p className="effective">Last updated: May 13, 2026</p>
          </div>

          <div className="legal-banner">
            <div>
              <b>Operated by</b>AESTRA INC, a Nevada Corporation, d/b/a Restocks
            </div>
            <div>
              <b>Location</b>United States
            </div>
            <div>
              <b>Contact</b>
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>
            </div>
          </div>

          <div className="doc-content">
            <h2>1. Who We Are</h2>
            <p>
              AESTRA INC (&quot;AESTRA,&quot; &quot;we,&quot; &quot;us&quot;) is
              a U.S. corporation operating the Restocks product (
              <a href="https://restocks.ai">restocks.ai</a>), a regulatory
              compliance and safety platform for U.S. motor carriers regulated
              by the Federal Motor Carrier Safety Administration (FMCSA).
              Contact: <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>.
            </p>

            <h2>2. Information We Collect &amp; How We Use It</h2>
            <p>
              We collect business contact information from motor carrier
              customers (including US DOT / MC numbers and authorized user
              details), and driver information needed to query federal
              compliance databases on the carrier&apos;s behalf (name, CDL
              number, employment history, drug &amp; alcohol testing records,
              and Pre-Employment Screening Program / CSA / FMCSA Drug &amp;
              Alcohol Clearinghouse records). We also collect mobile phone
              numbers provided to us by the motor carrier customer. We use this
              information solely to provide and administer contracted
              compliance services. We do not sell personal information.
            </p>

            <h2>3. SMS / Text Message Communications</h2>
            <p>
              We send SMS messages to mobile numbers provided to us by motor
              carrier customers for the purposes described in our{" "}
              <Link href="/sms-terms">SMS Terms</Link>.
            </p>
            <ul>
              <li>
                <b>
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </b>{" "}
                Mobile opt-in data and consent are excluded from all
                information-sharing categories; this data is not shared with
                any third party, except aggregators and providers of the text
                messaging service (such as Twilio) for the sole purpose of
                delivering the messages.
              </li>
              <li>We do not sell, rent, or trade phone numbers.</li>
              <li>
                Reply <b>STOP</b> to any message (or email{" "}
                <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>) to opt
                out. Opt-out is honored immediately.
              </li>
              <li>
                Reply <b>HELP</b> for support. Message and data rates may apply.
              </li>
            </ul>

            <h2>4. How We Share Information &amp; Retention</h2>
            <p>
              We share information only as needed: with the motor carrier that
              contracted with us, with federal/state compliance authorities to
              perform queries on the carrier&apos;s behalf (FMCSA Portal, Drug
              &amp; Alcohol Clearinghouse, PSP, state DMVs), with service
              providers under data-protection contracts (cloud hosting, SMS
              gateway, payment processing), and as required by law. We retain
              compliance records for the period required by 49 CFR and similar
              regulations, after which records are deleted or de-identified.
            </p>

            <h2>5. Your Rights &amp; Security</h2>
            <p>
              You may request a copy of, correction to, or deletion of your
              information by emailing{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>, subject
              to our legal obligation to retain federally required compliance
              records. We use commercially reasonable safeguards (encryption in
              transit and at rest, access controls, regular review). Restocks
              is a B2B service and does not knowingly collect information from
              children under 13.
            </p>

            <h2>6. Changes &amp; Contact</h2>
            <p>
              We may update this policy; the &quot;Last updated&quot; date
              reflects the most recent change. Contact:
            </p>
            <p>
              AESTRA INC (d/b/a Restocks)
              <br />
              United States
              <br />
              Email: <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
