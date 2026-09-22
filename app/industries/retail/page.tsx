import Image from 'next/image';
import Link from 'next/link';

export default function RetailPage() {
  return (
    <main className="page">
      <section className="hero center">
        <div className="container hero-content">
          <span className="section-kicker">INDUSTRY</span>
          <h1>AI Data Enrichment for Retail <span className="gradient-text">&amp; E-commerce</span></h1>
          <p className="hero-lead">
            Enhance search relevance, product discovery, and customer experience with meticulously categorized product data and visual tagging. We provide the AI-ready data that makes retail smarter, at any scale.
          </p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
          </div>
          <div style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', maxWidth: '1000px', margin: '3rem auto 0', boxShadow: '0 8px 40px rgba(18,60,100,0.12)' }}>
            <Image src="/images/industry_retail.jpg" alt="Retail AI Data Annotation" width={1000} height={563} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

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

      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>The data challenge in <span className="gradient-text">retail AI</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9 }}>
              Modern e-commerce platforms manage millions of product listings across thousands of categories, constantly updated by thousands of sellers. The quality of the data attached to each product (including category, attributes, images, and descriptions) directly determines whether customers can find it, whether search algorithms rank it correctly, and whether recommendation engines surface it to the right shoppers. Poor product data is one of the leading causes of lost revenue in e-commerce. Yet maintaining data quality at catalog scale is a challenge that no manual process can solve alone.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9, marginTop: '1.25rem' }}>
              At PIBI Solutions, we build the structured, enriched product datasets that power retail AI at scale. From taxonomy mapping and attribute extraction to visual tagging, sentiment analysis, and behavioral signal labeling, our annotation pipelines cover every data type your merchandising, search, and personalization models require, delivered with the speed and consistency that modern retail operations demand.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we <span className="gradient-text">cover</span></h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Complete retail data enrichment services from product taxonomy and visual intelligence to customer sentiment and personalization signals.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Product Categorization &amp; Taxonomy Mapping</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Organizing millions of product listings into standardized, searchable category hierarchies mapped to Google Product Taxonomy, Amazon Browse Nodes, or your proprietary schema. We ensure consistent categorization across every seller and product type, eliminating the catalog chaos that degrades search performance and customer experience.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Visual Search Tagging</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Identifying and labeling items, colors, patterns, styles, materials, occasions, and brand attributes in product and lifestyle images, building the visual attribute layer that powers AI-driven visual search, outfit completion, and cross-sell recommendation systems.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Customer Review Sentiment Analysis</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Extracting fine-grained, aspect-level sentiment from millions of shopper reviews covering product quality, sizing accuracy, packaging, delivery experience, and customer service. This labeled data powers competitive intelligence dashboards, quality monitoring systems, and NPS prediction models.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Personalized Recommendation Data</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Labeling user behavioral signals (dwell times, click paths, add-to-cart events, and purchase sequences) alongside product attribute enrichment, to train collaborative filtering and content-based recommendation models that drive measurable improvements in conversion rate and average order value.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
