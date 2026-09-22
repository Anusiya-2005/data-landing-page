'use client';

import Link from 'next/link';
import Image from 'next/image';
import { openDatasetModal } from '@/components/DatasetModal';

export default function Page() {
  return (
    <main className="page" data-route="/company">
      {/* Hero Section with Blue Theme */}
      <section className="hero center">
        <div className="container hero-content">
          <span className="hero-pill">
            <span className="pulse"></span> About PI-BI Technologies
          </span>
          <h1>
            Pioneering High-Fidelity Data for <span className="gradient-text">Frontier AI</span>
          </h1>
          <p className="hero-lead">
            PI-BI Technologies is a global data engineering and annotation partner powering artificial intelligence at scale. We combine specialized domain expertise, rigorous human-in-the-loop workflows, and secure infrastructure to help enterprise teams build models the world can rely on.
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={openDatasetModal}>
              Talk to Our Leadership <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
            </button>
            <Link className="btn secondary" href="/solutions/ai-ml">
              Explore Our Solutions
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Full-time annotation specialists and domain experts</span>
            </div>
            <div className="hero-stat">
              <strong>7</strong>
              <span>Global and India offices across 4 countries</span>
            </div>
            <div className="hero-stat">
              <strong>99.85%</strong>
              <span>Contractual accuracy and validation SLA</span>
            </div>
            <div className="hero-stat">
              <strong>SOC 2 &amp; ISO</strong>
              <span>Certified security and regulatory compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>
              Our Engineering <span className="gradient-text">Core Values</span>
            </h2>
            <p>
              Three foundational tenets that guide how we curate data, govern human feedback, and protect client intellectual property.
            </p>
          </div>

          <div className="cards">
            <article className="svc v1">
              <div className="svc-head">
                <span className="svc-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-check" /></svg>
                </span>
                <h3>Signal Purity Over Volume</h3>
              </div>
              <div className="svc-body">
                <p>
                  Noisy data degrades model convergence. We enforce multi-stage consensus protocols, golden calibration sets, and statistical confidence scoring to ensure every training sample delivers maximum instructional value.
                </p>
              </div>
            </article>

            <article className="svc v2">
              <div className="svc-head">
                <span className="svc-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-usercheck" /></svg>
                </span>
                <h3>Domain Credentialing</h3>
              </div>
              <div className="svc-body">
                <p>
                  Generalists cannot annotate specialized intelligence. From board-certified radiologists reviewing CT scans to certified accountants parsing fiscal audits, our workforce possesses the credentials your models require.
                </p>
              </div>
            </article>

            <article className="svc v3">
              <div className="svc-head">
                <span className="svc-ico">
                  <svg className="icon" aria-hidden="true"><use href="#i-lock" /></svg>
                </span>
                <h3>Zero-Trust Security</h3>
              </div>
              <div className="svc-body">
                <p>
                  Client datasets represent crown-jewel intellectual property. We operate clean-room facilities with biometric perimeter controls, air-gapped workstations, strict non-retention policies, and continuous compliance audits.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p>
              Our leadership team brings proven experience in technology and strategy. With a strong focus on personalized services and GenAI solutions, they help clients drive scalable and reliable digital transformation.
            </p>
          </div>

          <div className="leadership-grid">
            {/* Siranjeevi Ramdoss */}
            <div className="leader-card">
              <div className="leader-avatar">
                <Image
                  src="/images/siranjeevi_ramdoss.png"
                  alt="Siranjeevi Ramdoss"
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', width: '120px', height: '120px' }}
                />
              </div>
              <h3 className="leader-name">Siranjeevi Ramdoss</h3>
              <p className="leader-role">Founder &amp; CEO</p>
              <a
                href="https://linkedin.com/in/siranjeevi-ramdoss"
                target="_blank"
                rel="noopener noreferrer"
                className="leader-linkedin"
                aria-label="Siranjeevi Ramdoss on LinkedIn"
              >
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Palani Kumar Murugesan */}
            <div className="leader-card">
              <div className="leader-avatar">
                <Image
                  src="/images/palani_kumar.png"
                  alt="Palani Kumar Murugesan"
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', width: '120px', height: '120px' }}
                />
              </div>
              <h3 className="leader-name">Palani Kumar Murugesan</h3>
              <p className="leader-role">CTO</p>
              <a
                href="https://linkedin.com/in/palani-kumar-murugesan"
                target="_blank"
                rel="noopener noreferrer"
                className="leader-linkedin"
                aria-label="Palani Kumar Murugesan on LinkedIn"
              >
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Arsha Fahima */}
            <div className="leader-card">
              <div className="leader-avatar">
                <Image
                  src="/images/arsha_fahima.png"
                  alt="Arsha Fahima"
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', width: '120px', height: '120px' }}
                />
              </div>
              <h3 className="leader-name">Arsha Fahima</h3>
              <p className="leader-role">Business Development Manager</p>
              <a
                href="https://linkedin.com/in/arsha-fahima"
                target="_blank"
                rel="noopener noreferrer"
                className="leader-linkedin"
                aria-label="Arsha Fahima on LinkedIn"
              >
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — now ABOVE the offices */}
      <section className="section alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>
            Let&apos;s Shape the Future of <span className="gradient-text">Reliable AI Together</span>
          </h2>
          <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '1.12rem', lineHeight: '1.75' }}>
            Schedule an introductory consultation with our data architects to design custom annotation pipelines, evaluate sample batches, or audit current model quality.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <button className="btn primary" onClick={openDatasetModal}>
              Contact Our Data Architects <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
            </button>
            <Link className="btn secondary" href="/use-cases">
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="offices-section">
        <div className="container">
          <h2 className="offices-heading">
            Global Offices
          </h2>

          <div className="offices-grid">
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_usa.png" alt="USA" width={68} height={68} />
              </div>
              <h4 className="office-country">USA</h4>
              <p className="office-address">Pflugerville, Travis, Texas 78660</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_canada.png" alt="Canada" width={68} height={68} />
              </div>
              <h4 className="office-country">Canada</h4>
              <p className="office-address">Whitby, Durham Region, Ontario L1N 4W2</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_germany.png" alt="Germany" width={68} height={68} />
              </div>
              <h4 className="office-country">Germany</h4>
              <p className="office-address">Erkelenz, Konigsbergerstr. 19, 41812</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_uae.png" alt="United Arab Emirates" width={68} height={68} />
              </div>
              <h4 className="office-country">United Arab Emirates</h4>
              <p className="office-address">Abu Dhabi, Khalifa City, St. 00971</p>
            </div>
          </div>

          <h2 className="offices-heading" style={{ marginTop: '64px' }}>
            India Offices
          </h2>

          <div className="offices-grid offices-grid-3">
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_chennai.png" alt="Chennai" width={68} height={68} />
              </div>
              <h4 className="office-country">Chennai</h4>
              <p className="office-address">Tharamani, Chennai 600 113</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_coimbatore.png" alt="Coimbatore" width={68} height={68} />
              </div>
              <h4 className="office-country">Coimbatore</h4>
              <p className="office-address">Peelamedu, Coimbatore 641004</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_madurai.png" alt="Madurai" width={68} height={68} />
              </div>
              <h4 className="office-country">Madurai</h4>
              <p className="office-address">Thiruppalai, Madurai 625014</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
