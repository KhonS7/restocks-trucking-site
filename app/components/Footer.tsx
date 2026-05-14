import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div className="foot-links">
          <Link href="/">Home</Link>
          <Link href="/team">Team</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/sms-terms">SMS Terms</Link>
          <a href="mailto:admin@restocks.ai">Contact</a>
        </div>
        <div className="foot-legal">
          © 2026 AESTRA INC. Restocks is a product of AESTRA INC.
        </div>
      </div>
    </footer>
  );
}
