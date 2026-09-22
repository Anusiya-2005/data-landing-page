import Image from 'next/image';
import Link from 'next/link';
import WhatWeCoverList from '@/components/WhatWeCoverList';

export default function RetailPage() {
  return (
    <main className="page">
      <section className="hero center">
        <div className="container hero-content">
          <span className="section-kicker">INDUSTRY</span>
          <h1>AI Data Solutions for <span className="gradient-text">Retail &amp; E-Commerce</span></h1>
          <p className="hero-lead">
            High-accuracy catalog enrichment, visual search dataset creation, review sentiment extraction, and personalization data pipelines that help leading retailers transform how customers discover and purchase products.
          </p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn primary">Scale Your Retail AI Data</Link>
          </div>
          <div style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', maxWidth: '1000px', margin: '3rem auto 0', boxShadow: '0 8px 40px rgba(18,60,100,0.12)' }}>
            <Image src="/images/industry_retail.jpg" alt="Retail AI Data Solutions" width={1000} height={563} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '16px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div className="hero-stat"><strong>250M+</strong><span>Products categorized &amp; enriched</span></div>
            <div className="hero-stat"><strong>99.2%</strong><span>Taxonomy mapping accuracy</span></div>
            <div className="hero-stat"><strong>40+</strong><span>Retail verticals supported</span></div>
            <div className="hero-stat"><strong>3x</strong><span>Faster catalog onboarding</span></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>The data engine behind <span className="gradient-text">modern retail</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9 }}>
              E-commerce catalogs are growing faster than human teams can curate them. Millions of new SKUs, inconsistent seller descriptions, missing attributes, and unstructured customer reviews create massive data quality gaps that directly hurt conversion, search relevance, and recommendation accuracy. High-performing retail AI requires massive, continuous pipelines of accurately structured and labeled data.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9, marginTop: '1.25rem' }}>
              PIBI Solutions provides the human-in-the-loop and automated data enrichment services that leading e-commerce platforms rely on to power intelligent search, computer vision-based product discovery, and hyper-personalized shopping experiences at scale.
            </p>
          </div>
        </div>
      </section>

      {/* What we cover - Pop-out interactive list */}
      <WhatWeCoverList industry="retail" />

      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>Why retail teams <span className="gradient-text">choose PIBI</span></h2>
            <p>Scale, speed, and cross-vertical expertise: everything retail AI teams need in a data partner.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { title: 'Catalog scale, fast', desc: 'Categorize millions of SKUs in days, not months. Our global annotation workforce handles Black Friday-scale catalog surges without compromising on quality or turnaround time.' },
              { title: 'Cross-vertical specialist teams', desc: 'From fashion and electronics to grocery, furniture, and automotive parts, we assign domain-trained annotators who understand the product category they are labeling.' },
              { title: 'Taxonomy & schema alignment', desc: 'We map products to Google Product Taxonomy, Amazon Browse Nodes, or any custom internal schema, ensuring your catalog integrates cleanly with every downstream channel and platform.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--line)', background: '#fff', boxShadow: '0 2px 12px rgba(18,60,100,0.05)' }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #0d2642 0%, #123C64 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to supercharge your <span className="gradient-text">retail AI?</span></h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our retail data specialists deliver precisely enriched product and customer datasets that power smarter shopping experiences at scale.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
