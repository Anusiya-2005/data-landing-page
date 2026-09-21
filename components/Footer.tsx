import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <Link href="/" className="brand" aria-label="PI-BI Technologies home">
            <img src="/images/pibi_logo.png" alt="PI-BI Technologies" />
          </Link>
          <div className="footer-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div className="footer-copy">© 2024 PI-BI Technologies. All rights reserved.</div>
      </div>
    </footer>
  );
}
