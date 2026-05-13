import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SMS Communications Consent — Signed Sample — Restocks (AESTRA INC)",
  description:
    "Redacted sample of an executed SMS Communications Consent and Limited Power of Attorney from a Restocks pilot motor carrier. Carrier identifying details redacted at carrier's request.",
  robots: { index: false, follow: false },
};

export default function ConsentSamplePage() {
  return (
    <>
      <Header variant="legal" />

      <main>
        <div className="doc-container content-wrap">
          <div className="doc-head">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> &nbsp;/&nbsp;{" "}
              <Link href="/sms-terms">SMS Terms</Link> &nbsp;/&nbsp; Signed
              Consent Sample
            </div>
            <h1 className="sample-title">
              SMS Communications Consent &amp; Services Authorization
            </h1>
            <p className="doc-sub">
              Redacted sample of an executed agreement with a Restocks pilot
              motor carrier.
            </p>
          </div>

          <div className="disclosure">
            <span className="label">
              Sample copy &nbsp;·&nbsp; carrier details redacted
            </span>
            <strong>This is a real, executed copy</strong> of the AESTRA INC
            d/b/a Restocks SMS Communications Consent (v3.0) signed by a
            Restocks pilot motor carrier. The carrier&apos;s identifying details
            (legal name, US DOT number, contact name, driver phone numbers, and
            signature) have been redacted at the carrier&apos;s request to
            preserve their privacy in a publicly-hosted regulatory sample. The
            Restocks-side execution is unredacted. An unredacted copy is
            available to Twilio Trust &amp; Safety reviewers on request from{" "}
            <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>.
          </div>

          <div className="legal-header">
            <p className="entity">
              AESTRA INC{" "}
              <span style={{ color: "var(--text-soft)", fontWeight: 500 }}>
                (doing business as{" "}
                <strong style={{ color: "var(--text-strong)" }}>
                  &quot;Restocks&quot;
                </strong>
                )
              </span>
            </p>
            <p className="row">
              Operating from the United States · Web:{" "}
              <a href="https://restocks.ai">restocks.ai</a> · Email:{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>
            </p>
            <p className="row">
              Privacy: <Link href="/privacy">restocks.ai/privacy</Link> · SMS
              Terms: <Link href="/sms-terms">restocks.ai/sms-terms</Link>
            </p>
          </div>

          <div className="doc-content consent">
            <h2>Part A — Disclosures</h2>

            <h3>1. Sender and Purpose</h3>
            <p>
              This document records (i) the express, written consent of the
              Client identified below to receive SMS/MMS text messages from{" "}
              <strong>AESTRA INC d/b/a Restocks</strong> (&quot;Restocks,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) in connection
              with the Restocks Services, and (ii) the Client&apos;s limited
              authorization for Restocks to act on the Client&apos;s behalf in
              connection with federal motor carrier compliance portals (see
              Part E).
            </p>
            <p>
              This SMS Communications Consent is <strong>separate</strong>{" "}
              from, and <strong>not a condition of</strong>, the Restocks
              Service Agreement. Client may decline this consent and continue to
              receive Services through other communication channels.
            </p>

            <h3>2. Categories of Messages You Will Receive</h3>
            <p>
              By providing the consent below, Client and each Authorized
              Recipient agree to receive recurring SMS/MMS messages from
              Restocks in the following categories:
            </p>
            <ul>
              <li>CDL expiration and renewal reminders</li>
              <li>
                DOT drug and alcohol test selection notifications under 49 CFR
                Part 382 (random, post-accident, reasonable suspicion,
                return-to-duty, follow-up)
              </li>
              <li>
                FMCSA Drug &amp; Alcohol Clearinghouse query result
                notifications
              </li>
              <li>
                Hours-of-Service and safety training due-date reminders
              </li>
              <li>
                Safety event notifications (speeding, harsh braking, ELD
                violations, etc.)
              </li>
              <li>
                Account and service notifications related to the
                recipient&apos;s role with the Client
              </li>
            </ul>
            <p>
              Restocks does <strong>not</strong> send marketing or promotional
              SMS under this consent.
            </p>

            <h3>3. Message Frequency &amp; Cost</h3>
            <p>
              Message frequency varies. A typical CDL driver may receive 1–10
              messages per month. Message and data rates may apply.
            </p>

            <h3>4. How to Opt Out (STOP) and Get Help (HELP)</h3>
            <p>
              Reply <strong>STOP</strong> to any SMS message received from
              Restocks, or email{" "}
              <a href="mailto:admin@restocks.ai">admin@restocks.ai</a> to opt
              out. Reply <strong>HELP</strong> for assistance.
            </p>

            <h3>5. Privacy and Mobile Information</h3>
            <p>
              <strong>
                No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes.
              </strong>{" "}
              All categories of information sharing exclude text messaging
              originator opt-in data and consent. Phone numbers and SMS content
              are processed in accordance with the Restocks Privacy Policy (
              <Link href="/privacy">restocks.ai/privacy</Link>) and the
              Restocks SMS Terms (
              <Link href="/sms-terms">restocks.ai/sms-terms</Link>).
            </p>

            <h3>6. Client Representations</h3>
            <p>
              Client represents and warrants that each driver phone number
              provided to Restocks has been collected under the Client&apos;s
              employment paperwork with the driver&apos;s prior express consent
              to receive operational and compliance SMS messages from the
              Client and the Client&apos;s service providers (including
              Restocks).
            </p>

            <h2>Part B — Client Information &amp; Authorized Phone Numbers</h2>

            <p>
              <strong>Client Legal Name:</strong>{" "}
              <span className="field redacted-label">
                [Pilot Carrier — name redacted at carrier&apos;s request]
              </span>
            </p>
            <p>
              <strong>US DOT Number:</strong>{" "}
              <span className="field redacted-label">[REDACTED]</span>
            </p>
            <p>
              <strong>MC Number:</strong>{" "}
              <span className="field redacted-label">[REDACTED]</span>
            </p>
            <p>
              <strong>Primary Contact Name:</strong>{" "}
              <span className="field redacted-label">[REDACTED]</span>
            </p>
            <p>
              <strong>Primary Contact Title:</strong> Safety Manager
            </p>
            <p>
              <strong>Primary Contact Email:</strong>{" "}
              <span className="field redacted-label">[REDACTED]</span>
            </p>

            <h3>Phone Numbers Authorized to Receive SMS from Restocks</h3>
            <table className="recipients">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Recipient name</th>
                  <th>Role</th>
                  <th>Mobile phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="redacted-cell">[REDACTED]</td>
                  <td>Safety Manager</td>
                  <td className="redacted-cell">[REDACTED]</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="redacted-cell">[REDACTED]</td>
                  <td>CDL Driver</td>
                  <td className="redacted-cell">[REDACTED]</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="redacted-cell">[REDACTED]</td>
                  <td>CDL Driver</td>
                  <td className="redacted-cell">[REDACTED]</td>
                </tr>
              </tbody>
            </table>

            <h2>
              Part C — Express Written Consent{" "}
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-soft)",
                }}
              >
                (initialed)
              </span>
            </h2>
            <div className="quote-sample">
              By initialing this Part C, I expressly authorize AESTRA INC d/b/a
              Restocks to send recurring compliance and safety SMS/MMS text
              messages, in the categories described in Part A, Section 2, to
              the mobile number(s) listed in Part B. Message frequency varies.
              Message and data rates may apply. Reply HELP for help, reply STOP
              to unsubscribe at any time. Consent to receive SMS is NOT a
              condition of any purchase, service, or agreement with AESTRA INC.
              I have read and agree to the Privacy Policy at
              https://restocks.ai/privacy and the SMS Terms at
              https://restocks.ai/sms-terms.
            </div>
            <p>
              <strong>Client Initials:</strong>{" "}
              <span className="field redacted-label">[REDACTED]</span>{" "}
              &nbsp;·&nbsp; <strong>Date:</strong> 2026-05-XX
            </p>

            <h2>Part D — Driver Consent Pass-Through</h2>
            <p>
              Client acknowledges that each commercial driver whose mobile
              number is provided to Restocks under this Consent must have
              separately authorized SMS contact from the Client and the
              Client&apos;s compliance service providers as part of the
              Client&apos;s standard driver hiring or onboarding paperwork,
              using Restocks&apos;s standard driver SMS authorization template
              (or substantially equivalent language), with signed copies
              retained in each driver&apos;s qualification file. Client is
              solely responsible for obtaining and maintaining driver consent;
              Restocks relies on Client&apos;s representation.
            </p>

            <h2>
              Part E — Limited Power of Attorney{" "}
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-soft)",
                }}
              >
                (initialed)
              </span>
            </h2>
            <p>
              Client appoints AESTRA INC d/b/a Restocks as its limited agent
              and attorney-in-fact for the sole purpose of:
            </p>
            <ol>
              <li>
                Accessing the Client&apos;s accounts on the FMCSA Portal, PSP,
                FMCSA Drug &amp; Alcohol Clearinghouse, CSA Safety Measurement
                System, DataQs, and similar federal motor-carrier compliance
                portals;
              </li>
              <li>
                Registering Restocks-provided telephone numbers as the MFA /
                2FA contact number on those portals on the Client&apos;s
                behalf;
              </li>
              <li>
                Receiving, on the Client&apos;s behalf, MFA / 2FA verification
                codes sent to such Restocks-provided telephone numbers, and
                using such codes solely to access the portals to perform
                contracted services;
              </li>
              <li>
                Designating authorized Restocks personnel who may exercise this
                authority.
              </li>
            </ol>
            <p>
              This Limited Power of Attorney is limited in scope to (1)–(4)
              above, revocable at any time by written notice, coterminous with
              the Restocks Service Agreement, and is not a general power of
              attorney.
            </p>
            <p>
              <strong>Client Initials:</strong>{" "}
              <span className="field redacted-label">[REDACTED]</span>
            </p>

            <h2>Part F — Signatures</h2>

            <div className="sig-grid">
              {/* Client (Carrier) signature, redacted */}
              <div className="sig-block">
                <h4>Client (Motor Carrier)</h4>
                <div className="sig-line">
                  <span className="key">Signature</span>
                  <span
                    className="sig-redacted"
                    aria-label="redacted signature"
                  ></span>
                </div>
                <div className="sig-line">
                  <span className="key">Printed name</span>
                  <span className="sig-value">
                    [REDACTED at carrier&apos;s request]
                  </span>
                </div>
                <div className="sig-line">
                  <span className="key">Title</span>
                  <span className="sig-value">Safety Manager</span>
                </div>
                <div className="sig-line">
                  <span className="key">Date</span>
                  <span className="sig-value">2026-05-XX</span>
                </div>
              </div>

              {/* Restocks (AESTRA INC) signature */}
              <div className="sig-block">
                <h4>Restocks (AESTRA INC)</h4>
                <div className="sig-line">
                  <span className="key">Signature</span>
                  <span className="sig-handwritten">
                    Azimkhon Sultankhodjaev
                  </span>
                </div>
                <div className="sig-line">
                  <span className="key">Printed name</span>
                  <span className="sig-value">Azimkhon Sultankhodjaev</span>
                </div>
                <div className="sig-line">
                  <span className="key">Title</span>
                  <span className="sig-value">
                    President &amp; Director, AESTRA INC
                  </span>
                </div>
                <div className="sig-line">
                  <span className="key">Date</span>
                  <span className="sig-value">2026-05-13</span>
                </div>
              </div>
            </div>

            <p className="sample-foot">
              AESTRA INC d/b/a Restocks · admin@restocks.ai · restocks.ai
              <br />
              SMS Communications Consent &amp; Services Authorization · v3.0 ·
              Effective May 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
