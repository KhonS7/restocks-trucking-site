import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header variant="home" />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="status">
                <span className="dot"></span> Now onboarding pilot carriers
              </div>
              <h1>
                Trucking compliance,
                <br />
                <span className="accent">without the paperwork.</span>
              </h1>
              <p className="lede">
                Restocks handles pre-employment driver screening, FMCSA Drug &amp;
                Alcohol Clearinghouse queries, CSA monitoring, and driver safety
                notifications — so safety managers can run their fleet instead of
                their inbox.
              </p>
              <div className="cta-row">
                <a
                  className="cta"
                  href="mailto:admin@restocks.ai?subject=Restocks%20demo%20request"
                >
                  Book a demo
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a className="cta-secondary" href="mailto:admin@restocks.ai">
                  Contact us
                </a>
              </div>
            </div>

            {/* Illustration: abstract compliance dashboard */}
            <div className="hero-illo" aria-hidden="true">
              <div className="illo-truck">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7h11v10H3z" />
                  <path d="M14 10h4l3 3v4h-7z" />
                  <circle cx="7" cy="18" r="2" />
                  <circle cx="17.5" cy="18" r="2" />
                </svg>
              </div>

              <div className="illo-card illo-main">
                <div className="illo-main-head">
                  <span className="name">
                    <span className="name-icon"></span>Driver record — example
                  </span>
                  <span className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="illo-row">
                  <div className="left">
                    <div className="ic">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    </div>
                    <div>
                      <div className="label">PSP Report</div>
                      <div className="sub">FMCSA · 5-year history</div>
                    </div>
                  </div>
                  <span className="status-tag ok">✓ Cleared</span>
                </div>

                <div className="illo-row">
                  <div className="left">
                    <div className="ic">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <div className="label">Clearinghouse query</div>
                      <div className="sub">Full driver record</div>
                    </div>
                  </div>
                  <span className="status-tag ok">✓ Cleared</span>
                </div>

                <div className="illo-row">
                  <div className="left">
                    <div className="ic">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    </div>
                    <div>
                      <div className="label">Random drug test</div>
                      <div className="sub">49 CFR Part 382</div>
                    </div>
                  </div>
                  <span className="status-tag pending">Scheduled</span>
                </div>
              </div>

              <div className="illo-card illo-floating">
                <div className="small-eyebrow">DQ file status</div>
                <div className="big">
                  100<span style={{ fontSize: "17px" }}>%</span>
                </div>
                <div className="desc">
                  Driver qualification file current per 391.51
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INLINE FEATURE STRIP */}
        <section className="strip" id="features">
          <div className="container strip-grid">
            <div className="strip-item">
              <div className="strip-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                </svg>
              </div>
              <div>
                <h3>Pre-hire screening</h3>
                <p>PSP · CSA · FMCSA Drug &amp; Alcohol Clearinghouse</p>
              </div>
            </div>
            <div className="strip-item">
              <div className="strip-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 5-3.5 8-9 9-5.5-1-9-4-9-9V5l9-3 9 3z" />
                </svg>
              </div>
              <div>
                <h3>Ongoing compliance</h3>
                <p>49 CFR Part 382 · DQ files · Training records</p>
              </div>
            </div>
            <div className="strip-item">
              <div className="strip-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <h3>Driver safety</h3>
                <p>SMS reminders · STOP/HELP compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Carrier-trust line — also a reviewer convenience link to legal pages */}
        <section className="trust-line">
          <div className="container">
            <p>
              For motor carriers: review our{" "}
              <Link href="/privacy">Privacy Policy</Link>,{" "}
              <Link href="/sms-terms">SMS Terms</Link>, and a{" "}
              <Link href="/sms-consent-sample">
                redacted sample of the executed SMS Communications Consent
              </Link>{" "}
              we sign with every carrier during onboarding.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
