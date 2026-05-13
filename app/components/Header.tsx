import Link from "next/link";

type HeaderProps = {
  /** "home" shows in-page anchors + Book-a-demo CTA. "legal" shows simple cross-links. */
  variant?: "home" | "legal";
};

export default function Header({ variant = "legal" }: HeaderProps) {
  return (
    <header>
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="brand-icon" aria-hidden="true">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7h11v10H3z" />
              <path d="M14 10h4l3 3v4h-7z" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17.5" cy="18" r="2" />
            </svg>
          </span>
          Restocks
        </Link>
        <nav className="nav-links">
          {variant === "home" ? (
            <>
              <a href="#features">Product</a>
              <a href="#why">Why Restocks</a>
              <Link href="/privacy">Privacy</Link>
              <Link href="/sms-terms">SMS Terms</Link>
              <a
                className="nav-cta"
                href="mailto:admin@restocks.ai?subject=Restocks%20demo%20request"
              >
                Book a demo
              </a>
            </>
          ) : (
            <>
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/sms-terms">SMS Terms</Link>
              <a href="mailto:admin@restocks.ai">Contact</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
