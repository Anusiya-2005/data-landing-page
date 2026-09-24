'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { openDatasetModal } from '@/components/DatasetModal';

type OpenDropdown = 'solutions' | 'industries' | null;

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (name: 'solutions' | 'industries') => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  const isSolutionsActive = pathname.startsWith('/solutions');
  const isIndustriesActive = pathname.startsWith('/industries');

  return (
    <header className="header" ref={headerRef}>
      <div className="navbar">
        <Link href="/" className="brand" aria-label="PI-BI Technologies home" onClick={closeAll}>
          <img src="/images/pibi_logo.png" alt="Pibi Tech" />
        </Link>
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenDropdown(null);
          }}
        >
          <svg className="icon" aria-hidden="true"><use href="#i-menu" /></svg>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <Link
            href="/"
            className={pathname === '/' ? 'active' : ''}
            aria-current={pathname === '/' ? 'page' : undefined}
            onClick={closeAll}
          >
            Home
          </Link>
          <div className={`has-menu ${isSolutionsActive ? 'active' : ''} ${openDropdown === 'solutions' ? 'open' : ''}`} data-sol>
            <button
              type="button"
              aria-expanded={openDropdown === 'solutions'}
              aria-haspopup="true"
              onClick={() => toggleDropdown('solutions')}
            >
              Solutions <svg className="icon chev" aria-hidden="true"><use href="#i-chev" /></svg>
            </button>
            <div className="menu">
              <Link href="/solutions/ai-ml" className={pathname.startsWith('/solutions/ai-ml') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-brain" /></svg>
                </span>
                <span>AI/ML<small>Data for machine learning models</small></span>
              </Link>
              <Link href="/solutions/nlp" className={pathname.startsWith('/solutions/nlp') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-chat" /></svg>
                </span>
                <span>NLP<small>Text and speech data</small></span>
              </Link>
              <Link href="/solutions/generative-ai" className={pathname.startsWith('/solutions/generative-ai') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-spark" /></svg>
                </span>
                <span>Generative AI<small>LLM training and evaluation</small></span>
              </Link>
              <Link href="/solutions/computer-vision" className={pathname.startsWith('/solutions/computer-vision') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-eye" /></svg>
                </span>
                <span>Computer Vision<small>Image, video, and 3D data</small></span>
              </Link>
            </div>
          </div>
          <div className={`has-menu ${isIndustriesActive ? 'active' : ''} ${openDropdown === 'industries' ? 'open' : ''}`}>
            <button
              type="button"
              aria-expanded={openDropdown === 'industries'}
              aria-haspopup="true"
              onClick={() => toggleDropdown('industries')}
            >
              Industries <svg className="icon chev" aria-hidden="true"><use href="#i-chev" /></svg>
            </button>
            <div className="menu">
              <Link href="/industries/autonomous-vehicles" className={pathname.startsWith('/industries/autonomous-vehicles') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-route"/></svg>
                </span>
                <span>Autonomous Vehicles<small>3D sensor, LiDAR &amp; bounding boxes</small></span>
              </Link>
              <Link href="/industries/healthcare" className={pathname.startsWith('/industries/healthcare') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-health"/></svg>
                </span>
                <span>Healthcare<small>Medical imaging &amp; clinical NLP</small></span>
              </Link>
              <Link href="/industries/finance" className={pathname.startsWith('/industries/finance') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-bank"/></svg>
                </span>
                <span>Finance<small>KYC, document digitization &amp; sentiment</small></span>
              </Link>
              <Link href="/industries/retail" className={pathname.startsWith('/industries/retail') ? 'active' : ''} onClick={closeAll}>
                <span className="m-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-tag"/></svg>
                </span>
                <span>Retail &amp; E-commerce<small>Product categorization &amp; visual search</small></span>
              </Link>
            </div>
          </div>
          <Link href="/use-cases" className={pathname === '/use-cases' ? 'active' : ''} onClick={closeAll}>Use Cases</Link>
          <Link href="/company" className={pathname === '/company' ? 'active' : ''} onClick={closeAll}>Company</Link>
          <Link href="/contact-us" className={pathname === '/contact-us' || pathname === '/contact' ? 'active' : ''} onClick={closeAll}>Contact Us</Link>
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-cta"
            onClick={() => {
              closeAll();
              openDatasetModal();
            }}
          >
            <svg className="icon" aria-hidden="true" style={{ width: 14, height: 14 }}><use href="#i-arrow" /></svg>
            <span>Talk to Our Team</span>
          </button>
        </div>
      </div>
    </header>
  );
}
