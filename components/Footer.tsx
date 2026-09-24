import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="PI-BI Technologies home">
              <img src="/images/pibi_logo.png" alt="PI-BI Technologies" />
            </Link>
            <p className="footer-desc">
              Empowering enterprise AI with precision data annotation, multimodal labeling, and high-fidelity model evaluation.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/solutions/ai-ml">AI / ML</Link></li>
              <li><Link href="/solutions/nlp">NLP</Link></li>
              <li><Link href="/solutions/generative-ai">Generative AI</Link></li>
              <li><Link href="/solutions/computer-vision">Computer Vision</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><Link href="/industries/healthcare">Healthcare</Link></li>
              <li><Link href="/industries/autonomous-vehicles">Autonomous Vehicles</Link></li>
              <li><Link href="/industries/finance">Finance</Link></li>
              <li><Link href="/industries/retail">Retail</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">About Us</Link></li>
              <li><Link href="/company">Careers</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/company">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 PI-BI Technologies. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
