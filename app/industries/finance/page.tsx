import Image from 'next/image';
import Link from 'next/link';

export default function FinancePage() {
  return (
    <main className="page">
      <section className="hero center">
        <div className="container hero-content">
          <span className="section-kicker">INDUSTRY</span>
          <h1>AI Data Services for Banking <span className="gradient-text">&amp; Finance</span></h1>
          <p className="hero-lead">
            Power your FinTech and banking AI models with highly accurate document digitization, sentiment analysis, and entity extraction, delivered at enterprise scale with full regulatory compliance.
          </p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
          </div>
          <div style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', maxWidth: '1000px', margin: '3rem auto 0', boxShadow: '0 8px 40px rgba(18,60,100,0.12)' }}>
            <Image src="/images/industry_finance.jpg" alt="Finance AI Data Annotation" width={1000} height={563} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

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

      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>The data challenge in <span className="gradient-text">financial AI</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9 }}>
              Financial institutions generate and process more data than almost any other industry, including loan applications, transaction records, KYC documents, earnings calls, market news, and customer interactions, yet the majority of this data exists in unstructured form that AI models cannot directly consume. The challenge is transforming this raw information into structured, labeled training data that is both highly accurate and fully compliant with financial regulations including AML requirements, GDPR, SOC2, and sector-specific standards.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9, marginTop: '1.25rem' }}>
              At PIBI Solutions, we specialize in building the annotated datasets that power document intelligence, risk detection, and sentiment analysis AI for banking and FinTech companies. Our annotators are trained in financial terminology, accounting standards, and KYC documentation, and our data governance framework ensures every dataset we deliver meets your compliance requirements without exception.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we <span className="gradient-text">cover</span></h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Specialized financial data annotation from document extraction to fraud signals, covering every AI use case in modern banking and FinTech.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Document Digitization</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Extracting precise structured data from invoices, purchase orders, contracts, bank statements, tax forms, and financial reports. Our annotators identify key fields, table structures, and entity relationships, producing clean, structured output ready for downstream AI processing and ERP integration.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>KYC &amp; Identity Verification Data</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Annotating passports, national IDs, driver licenses, utility bills, and selfie-liveness pairs to train identity document classifiers, OCR extraction models, and biometric verification systems that power compliant digital onboarding and AML screening.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Financial Sentiment Analysis</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Tagging earnings call transcripts, analyst research notes, market news articles, regulatory filings, and financial social media with fine-grained directional and aspect-level sentiment signals that power alpha generation, risk monitoring, and investor intelligence platforms.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Fraud Detection Data Labeling</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Categorizing transactional anomalies, account takeover behavioral patterns, synthetic identity signals, and card-not-present fraud indicators, building the richly labeled ground truth datasets that train real-time fraud detection and risk scoring models.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>Why financial institutions <span className="gradient-text">choose PIBI</span></h2>
            <p>Domain knowledge, regulatory rigor, and enterprise reliability in every dataset we build.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { title: 'Regulatory compliance', desc: 'SOC2-compliant workflows with full audit trails, data minimization, and granular access control, built for regulated financial environments and third-party due diligence requirements.' },
              { title: 'Finance-expert annotators', desc: 'Our financial data teams include specialists trained in banking terminology, GAAP/IFRS accounting standards, AML typologies, and KYC documentation requirements.' },
              { title: 'Multi-language at scale', desc: 'We process financial documents in 40+ languages, enabling global banks and FinTechs to build AI models that work consistently across every market they operate in.' },
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
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your financial <span className="gradient-text">AI dataset?</span></h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our finance data specialists deliver high-accuracy, compliant training datasets that your models need to make confident decisions at scale.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
