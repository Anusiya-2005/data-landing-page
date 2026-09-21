import Link from 'next/link';

export default function HealthcarePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f9ff 0%, #edfaf5 100%)' }}>
        <div className="container">
          <span className="section-kicker">INDUSTRY</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '1rem auto 0' }}>
            AI Data Solutions for Healthcare
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.18rem', lineHeight: 1.7, maxWidth: '760px', margin: '1.5rem auto 2.5rem' }}>
            HIPAA-compliant medical image annotation and clinical NLP services. We help medical AI models learn from precise, expertly-labeled datasets that meet the highest standards of accuracy and regulatory compliance.
          </p>
          <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '16px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div className="hero-stat"><strong>50M+</strong><span>Medical images annotated</span></div>
            <div className="hero-stat"><strong>100%</strong><span>HIPAA-compliant workflows</span></div>
            <div className="hero-stat"><strong>15+</strong><span>Imaging modalities covered</span></div>
            <div className="hero-stat"><strong>Expert</strong><span>Clinician-reviewed labels</span></div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we cover</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>End-to-end healthcare data services from raw imaging to clinical text, built for compliant AI development.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Medical Image Annotation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Labeling X-Rays, MRI, CT Scans, and pathology slides with high clinical precision to train diagnostic AI models.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Clinical NLP</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Extracting patient conditions, medications, dosages, and treatment plans from unstructured medical records and physician notes.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Genomics Data Labeling</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Annotating complex biological and genomics datasets to support advanced research in precision medicine and drug discovery.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Patient Data De-identification</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Ensuring strict HIPAA compliance by accurately detecting and redacting all sensitive PHI from medical records and imaging data.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2642 0%, #123C64 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your healthcare AI dataset?</h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our clinical data experts deliver HIPAA-compliant, precisely annotated datasets that your medical AI models can rely on.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
