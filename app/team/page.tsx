import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Team — Restocks (AESTRA INC)",
  description:
    "Restocks is built by a small team from NYU Tandon, Stanford, and the University of Michigan. AESTRA INC d/b/a Restocks.",
};

type Founder = {
  name: string;
  initials: string;
  photo?: string;
  role: string;
  school: string;
  detail: string;
  email: string;
  linkedin: string;
};

const founders: Founder[] = [
  {
    name: "Khon Sultan",
    initials: "KS",
    photo: "/team/khon.jpg",
    role: "Co-founder",
    school: "NYU Tandon",
    detail: "MS, Management of Technology",
    email: "khon@restocks.ai",
    linkedin: "https://www.linkedin.com/in/khon/",
  },
  {
    name: "Azimkhon Sultankhodjaev",
    initials: "AS",
    photo: "/team/azim.jpg",
    role: "Co-founder",
    school: "Stanford University",
    detail: "MS, Science & Engineering",
    email: "azim@restocks.ai",
    linkedin:
      "https://www.linkedin.com/in/azimkhon-sultankhodjaev-750991360/",
  },
  {
    name: "Yongnuo (Edwin) Liang",
    initials: "EL",
    photo: "/team/edwin.jpg",
    role: "Co-founder",
    school: "University of Michigan",
    detail: "BS, Computer Science & Economics",
    email: "edwin@restocks.ai",
    linkedin: "https://www.linkedin.com/in/yongnuo-liang/",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header variant="legal" />

      <main>
        <div className="doc-container content-wrap">
          <div className="doc-head">
            <p className="eyebrow-small">Team</p>
            <h1 className="team-title">The people building Restocks.</h1>
            <p className="team-intro">
              We&apos;re a small team from NYU Tandon, Stanford, and the
              University of Michigan. We met working on applied AI research and
              started Restocks (operated by AESTRA INC) to take the federal
              compliance paperwork off motor carriers&apos; safety managers.
            </p>
          </div>

          <div className="team-grid">
            {founders.map((f) => (
              <article key={f.name} className="team-card">
                <div className="team-avatar" aria-hidden="true">
                  {f.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={f.photo} alt={`${f.name} headshot`} />
                  ) : (
                    <span className="team-avatar-initials">{f.initials}</span>
                  )}
                </div>
                <h3 className="team-name">{f.name}</h3>
                <p className="team-role">{f.role}</p>
                <p className="team-school">
                  <strong>{f.school}</strong>
                  <br />
                  <span>{f.detail}</span>
                </p>

                <div className="team-actions">
                  <a className="team-link" href={`mailto:${f.email}`}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {f.email}
                  </a>
                  <a
                    className="team-link team-link-secondary"
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.name} on LinkedIn`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="team-foot">
            Restocks is operated by <strong>AESTRA INC</strong>, a U.S.
            corporation. For general inquiries, reach{" "}
            <a href="mailto:admin@restocks.ai">admin@restocks.ai</a>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
