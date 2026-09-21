'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="navbar">
        <Link href="/" className="brand" aria-label="PI-BI Technologies home">
          <img src="/images/pibi_logo.png" alt="Pibi Tech" />
          <span className="ai-badge">AI</span>
        </Link>
        <button 
          className="menu-btn" 
          aria-label="Open menu" 
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="icon" aria-hidden="true"><use href="#i-menu" /></svg>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <Link href="/" className={pathname === '/' ? 'active' : ''} aria-current={pathname === '/' ? 'page' : undefined}>
            Home
          </Link>
          <div className={`has-menu ${solutionsOpen ? 'open' : ''}`} data-sol>
            <button 
              aria-expanded={solutionsOpen} 
              aria-haspopup="true"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
            >
              Solutions <svg className="icon chev" aria-hidden="true"><use href="#i-chev" /></svg>
            </button>
            <div className="menu">
              <Link href="/solutions/ai-ml" className={pathname.startsWith('/solutions/ai-ml') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-brain" /></svg>
                </span>
                <span>AI/ML<small>Data for machine learning models</small></span>
              </Link>
              <Link href="/solutions/nlp" className={pathname.startsWith('/solutions/nlp') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-chat" /></svg>
                </span>
                <span>NLP<small>Text and speech data</small></span>
              </Link>
              <Link href="/solutions/generative-ai" className={pathname.startsWith('/solutions/generative-ai') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-spark" /></svg>
                </span>
                <span>Generative AI<small>LLM training and evaluation</small></span>
              </Link>
              <Link href="/solutions/computer-vision" className={pathname.startsWith('/solutions/computer-vision') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-eye" /></svg>
                </span>
                <span>Computer Vision<small>Image, video, and 3D data</small></span>
              </Link>
            </div>
          </div>
          <Link href="/industries" className={pathname === '/industries' ? 'active' : ''}>Industries</Link>
          <Link href="/use-cases" className={pathname === '/use-cases' ? 'active' : ''}>Use Cases</Link>
          <Link href="/company" className={pathname === '/company' ? 'active' : ''}>Company</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/company" className="nav-cta">
            <svg className="icon" aria-hidden="true" style={{ width: 14, height: 14 }}><use href="#i-arrow" /></svg>
            <span>Talk to Our AI Team</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
