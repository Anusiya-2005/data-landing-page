import Link from 'next/link';

export default function RetailPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f8f2 100%)' }}>
        <div className="container">
          <span className="section-kicker">INDUSTRY</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '1rem auto 0' }}>
            AI Data Enrichment for Retail &amp; E-commerce
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.18rem', lineHeight: 1.7, maxWidth: '760px', margin: '1.5rem auto 2.5rem' }}>
            Enhance search relevance, product discovery, and customer experience with meticulously categorized product data and visual tagging. We help retail AI models understand products, shoppers, and intent at scale.
          </p>
          <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '16px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div className="hero-stat"><strong>300M+</strong><span>Products categorized</span></div>
            <div className="hero-stat"><strong>99.3%</strong><span>Taxonomy accuracy rate</span></div>
            <div className="hero-stat"><strong>50+</strong><span>Product verticals covered</span></div>
            <div className="hero-stat"><strong>72hr</strong><span>Average dataset turnaround</span></div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we cover</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Complete retail data services — from product taxonomy to visual intelligence and customer sentiment.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Product Categorization &amp; Taxonomy Mapping</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Organizing large product inventories into standardized, searchable hierarchies for maximum discoverability and catalog consistency.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Visual Search Tagging</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Identifying and labeling items, colors, styles, materials, and brand attributes in lifestyle images for seamless visual search and product recommendations.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Customer Review Sentiment Analysis</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Extracting fine-grained, product-level insights and aspect-based sentiment from millions of shopper reviews for competitive intelligence.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Personalized Recommendation Data</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Labeling user behaviors, purchase histories, and product attributes to train smarter, more relevant recommendation and search ranking engines.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2642 0%, #123C64 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to supercharge your retail AI?</h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our retail data specialists deliver precisely enriched product and customer datasets that power smarter shopping experiences.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
