import Link from 'next/link';

export default function IndustriesPage() {
  return (
    <main className="page" data-route="/industries">
      {/* Hero */}
      <section className="hero center">
        <div className="container hero-grid">
          <div>
            <h1>Industries We <span className="gradient-text">Serve</span></h1>
            <p className="hero-lead">Tailored AI data solutions for domain-specific challenges, from autonomous vehicles to clinical AI.</p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section" id="industries">
        <div className="container">
          <div className="section-head center">
            <span className="section-kicker">SECTORS</span>
            <h2>Powering AI <span className="gradient-text">Across Industries</span></h2>
            <p>We bring deep domain expertise to every dataset we build, ensuring your models perform reliably in the real world.</p>
          </div>
          <div className="industry-grid">
            <Link className="industry-card" href="/industries/autonomous-vehicles">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-route"/></svg>
              </span>
              <h3>Autonomous Vehicles</h3>
              <p>3D sensor fusion, bounding boxes, semantic segmentation, and LiDAR annotation for self-driving systems.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg>
              </span>
            </Link>

            <Link className="industry-card" href="/industries/healthcare">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-health"/></svg>
              </span>
              <h3>Healthcare</h3>
              <p>Medical image annotation, clinical NLP, and HIPAA-compliant data processing for diagnostic AI.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg>
              </span>
            </Link>

            <Link className="industry-card" href="/industries/finance">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-bank"/></svg>
              </span>
              <h3>Finance</h3>
              <p>Document digitization, entity extraction for KYC, and financial sentiment analysis for FinTech AI.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg>
              </span>
            </Link>

            <Link className="industry-card" href="/industries/retail">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-tag"/></svg>
              </span>
              <h3>Retail &amp; E-commerce</h3>
              <p>Product categorization, visual search tagging, and customer review analysis for smarter retail AI.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section alt">
        <div className="container">
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '16px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div className="hero-stat">
              <strong>500M+</strong>
              <span>Data points labeled across industries</span>
            </div>
            <div className="hero-stat">
              <strong>99.2%</strong>
              <span>Average annotation accuracy</span>
            </div>
            <div className="hero-stat">
              <strong>50+</strong>
              <span>Enterprise clients served</span>
            </div>
            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Global annotation coverage</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
