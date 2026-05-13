import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Restocks (AESTRA INC)",
  description:
    "Privacy policy for Restocks, operated by AESTRA INC. Covers data we collect, how we use it, SMS communications, and your rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header variant="legal" />

      <main>
        <div className="doc-container content-wrap">
          <div className="doc-head">
            <h1>Privacy Policy</h1>
            <p className="effective">
              Last updated: May 13, 2026 · Effective: May 13, 2026
            </p>
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
              AESTRA INC (&quot;AESTRA,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is a U.S. corporation operating the Restocks
              product (<a href="https://restocks.ai">restocks.ai</a>). You can
              reach us at{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>.
            </p>
            <p>
              Restocks is a regulatory compliance and safety platform for U.S.
              motor carriers regulated by the Federal Motor Carrier Safety
              Administration (FMCSA).
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <b>From motor carrier customers (our direct customers):</b>{" "}
                business contact information, US DOT and Motor Carrier numbers,
                billing information, the names and contact details of authorized
                users.
              </li>
              <li>
                <b>From or about commercial drivers (end users of our customers&apos; services):</b>{" "}
                name, date of birth, CDL number, social security number (only
                where required to query federal compliance databases on behalf
                of the carrier), employment history, phone number, drug and
                alcohol test results, and Pre-Employment Screening Program
                (PSP), Compliance Safety Accountability (CSA), and FMCSA Drug
                &amp; Alcohol Clearinghouse records.
              </li>
              <li>
                <b>Mobile phone numbers</b> of safety managers and drivers,
                provided to us by the motor carrier customer.
              </li>
              <li>
                <b>Automatic information</b> from our website (
                <a href="https://restocks.ai">restocks.ai</a>): IP address,
                browser type, pages visited, and similar standard web analytics.
              </li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>
              We use information solely to provide and administer compliance
              services contracted by motor carriers, including: pre-employment
              driver vetting, ongoing driver compliance monitoring, drug &amp;
              alcohol testing program administration, training records
              management, and safety event response. We do not sell personal
              information.
            </p>

            <h2>4. SMS / Text Message Communications</h2>
            <p>
              We send SMS and voice messages to mobile numbers provided to us by
              our motor carrier customers, for the purposes described in our{" "}
              <Link href="/sms-terms">SMS Terms</Link>.
            </p>
            <ul>
              <li>
                <b>
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </b>{" "}
                Mobile opt-in data and consent are excluded from all categories
                of information sharing; this information will not be shared with
                any third parties, with the limited exception of aggregators
                and providers of the text messaging service (such as Twilio)
                for the sole purpose of delivering the messages.
              </li>
              <li>We do not sell, rent, or trade phone numbers.</li>
              <li>
                Recipients may opt out of SMS at any time by replying{" "}
                <b>STOP</b> to any message, or by emailing{" "}
                <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>. Opt-out
                is honored immediately.
              </li>
              <li>
                Reply <b>HELP</b> to any SMS for support.
              </li>
              <li>
                Message and data rates may apply. Message frequency varies based
                on the recipient&apos;s compliance events.
              </li>
            </ul>

            <h2>5. How We Share Information</h2>
            <p>We share information only as needed to provide services:</p>
            <ul>
              <li>
                <b>With the motor carrier</b> that contracted with us (where the
                data concerns a driver employed or considered for employment by
                that carrier).
              </li>
              <li>
                <b>With federal and state compliance authorities</b> as required
                to make compliance queries on the carrier&apos;s behalf (FMCSA
                Portal, Drug &amp; Alcohol Clearinghouse, PSP, state DMVs).
              </li>
              <li>
                <b>With service providers</b> under contract who help us operate
                the service (cloud hosting, SMS gateway, payment processing).
                These providers are bound by data protection terms.
              </li>
              <li>
                <b>As required by law</b> (subpoena, court order, regulatory
                investigation).
              </li>
            </ul>
            <p>We do not sell personal information to third parties.</p>

            <h2>6. Data Retention</h2>
            <p>
              We retain compliance data for the period required by 49 CFR
              (typically 3 years for driver qualification records; 5 years for
              drug &amp; alcohol testing records; longer where Clearinghouse
              rules apply). After the retention period, records are deleted or
              de-identified.
            </p>
            <p>
              Phone numbers used for SMS are retained for the duration of the
              carrier&apos;s service contract and for 1 year after termination,
              then deleted, except where retention is required to honor an
              opt-out request.
            </p>

            <h2>7. Driver Rights</h2>
            <p>
              If you are a commercial driver whose information has been provided
              to us by a current or prospective employer, you have the right to:
            </p>
            <ul>
              <li>Request a copy of the information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>
                Opt out of SMS messaging at any time (reply STOP or email{" "}
                <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>)
              </li>
              <li>
                Request deletion of your information, subject to our legal
                obligation to retain federally required compliance records
              </li>
            </ul>
            <p>
              To exercise these rights, email{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a> with
              sufficient information for us to verify your identity.
            </p>

            <h2>8. Security</h2>
            <p>
              We use commercially reasonable administrative, technical, and
              physical safeguards to protect information, including encryption
              in transit and at rest, access controls, and regular security
              review. No method of transmission or storage is 100% secure; we
              cannot guarantee absolute security.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Restocks is a B2B service. We do not knowingly collect information
              from children under 13. The service is not directed to minors. CDL
              holders are by definition adults under 49 CFR.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The &quot;Last
              updated&quot; date at the top will reflect the most recent change.
              Material changes will be communicated to motor carrier customers
              through the service.
            </p>

            <h2>11. Contact Us</h2>
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
