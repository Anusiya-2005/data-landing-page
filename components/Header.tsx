'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { openDatasetModal } from '@/components/DatasetModal';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="navbar">
        <Link href="/" className="brand" aria-label="PI-BI Technologies home">
          <img src="/images/pibi_logo.png" alt="Pibi Tech" />
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
          <div className={`has-menu ${industriesOpen ? 'open' : ''}`}>
            <button
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              onClick={() => setIndustriesOpen(!industriesOpen)}
            >
              Industries <svg className="icon chev" aria-hidden="true"><use href="#i-chev" /></svg>
            </button>
            <div className="menu">
              <Link href="/industries/autonomous-vehicles" className={pathname.startsWith('/industries/autonomous-vehicles') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-route"/></svg>
                </span>
                <span>Autonomous Vehicles<small>3D sensor, LiDAR &amp; bounding boxes</small></span>
              </Link>
              <Link href="/industries/healthcare" className={pathname.startsWith('/industries/healthcare') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-health"/></svg>
                </span>
                <span>Healthcare<small>Medical imaging &amp; clinical NLP</small></span>
              </Link>
              <Link href="/industries/finance" className={pathname.startsWith('/industries/finance') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-bank"/></svg>
                </span>
                <span>Finance<small>KYC, document digitization &amp; sentiment</small></span>
              </Link>
              <Link href="/industries/retail" className={pathname.startsWith('/industries/retail') ? 'active' : ''}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-tag"/></svg>
                </span>
                <span>Retail &amp; E-commerce<small>Product categorization &amp; visual search</small></span>
              </Link>
            </div>
          </div>
          <Link href="/use-cases" className={pathname === '/use-cases' ? 'active' : ''}>Use Cases</Link>
          <Link href="/company" className={pathname === '/company' ? 'active' : ''}>Company</Link>
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-cta"
            onClick={openDatasetModal}
          >
            <svg className="icon" aria-hidden="true" style={{ width: 14, height: 14 }}><use href="#i-arrow" /></svg>
            <span>Talk to Our AI Team</span>
          </button>
        </div>
      </div>
    </header>
  );
}
