import Link from 'next/link';

export default function FinancePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f7ff 0%, #eef9f6 100%)' }}>
        <div className="container">
          <span className="section-kicker">INDUSTRY</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '1rem auto 0' }}>
            AI Data Services for Banking &amp; Finance
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.18rem', lineHeight: 1.7, maxWidth: '760px', margin: '1.5rem auto 2.5rem' }}>
            Power your FinTech and banking AI models with highly accurate document digitization, sentiment analysis, and entity extraction. We deliver the structured, compliant training data your financial AI needs to perform at scale.
          </p>
          <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '16px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div className="hero-stat"><strong>200M+</strong><span>Financial documents processed</span></div>
            <div className="hero-stat"><strong>99.1%</strong><span>Document extraction accuracy</span></div>
            <div className="hero-stat"><strong>40+</strong><span>Languages supported</span></div>
            <div className="hero-stat"><strong>SOC2</strong><span>Compliant data handling</span></div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we cover</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Specialized financial data annotation covering documents, transactions, sentiment, and identity verification.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Document Digitization</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Extracting precise structured data from receipts, invoices, contracts, and financial statements at production scale.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>KYC &amp; Identity Verification Data</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Annotating identity documents and biometric data to train robust fraud detection, AML compliance, and onboarding models.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Financial Sentiment Analysis</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Tagging market news, earnings reports, analyst notes, and social media content with fine-grained sentiment signals for investment intelligence.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Fraud Detection Data Labeling</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Categorizing transactional anomalies, suspicious behavioral patterns, and risk signals for real-time fraud prevention systems.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2642 0%, #123C64 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your financial AI dataset?</h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our finance data specialists deliver the high-accuracy, compliant training datasets your models need to make confident decisions.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
