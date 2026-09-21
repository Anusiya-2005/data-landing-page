import Image from 'next/image';
import Link from 'next/link';

export default function HealthcarePage() {
  return (
    <main>
      <section style={{ padding: '80px 0 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-kicker">INDUSTRY</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '860px', margin: '1rem auto 0' }}>AI Data Solutions <span className="gradient-text">for Healthcare</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.18rem', lineHeight: 1.7, maxWidth: '720px', margin: '1.5rem auto 2.5rem' }}>
            HIPAA-compliant medical image annotation and clinical NLP services. We help medical AI companies build reliable models by delivering expertly labeled datasets that meet the highest standards of clinical accuracy and regulatory compliance.
          </p>
          <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
          <div style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', maxWidth: '1000px', margin: '3rem auto 0', boxShadow: '0 8px 40px rgba(18,60,100,0.12)' }}>
            <Image src="/images/industry_healthcare.jpg" alt="Healthcare AI Annotation" width={1000} height={563} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

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

      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>The data challenge in <span className="gradient-text">healthcare AI</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9 }}>
              Healthcare AI operates in an environment where errors have direct consequences for patient outcomes. A diagnostic model trained on poorly labeled imaging data can miss a tumor, misclassify a lesion, or generate a false negative that delays life-saving treatment. This makes data quality in healthcare AI not just a technical requirement — it is a patient safety imperative. Beyond accuracy, healthcare data carries strict regulatory obligations: HIPAA in the United States, GDPR in Europe, and a growing landscape of country-specific health data protection laws that govern how patient information can be used in AI training.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9, marginTop: '1.25rem' }}>
              At PIBI Solutions, we address both dimensions. Our medical annotation specialists are trained in clinical terminology and anatomical knowledge, and every label is validated by domain reviewers before delivery. Our data governance framework ensures end-to-end HIPAA compliance — from initial ingestion through annotation, quality review, and final export — so your team can focus on building the models, not managing compliance risk.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we <span className="gradient-text">cover</span></h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>End-to-end healthcare data annotation — from raw medical imaging to complex clinical text — built for compliant AI development.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Medical Image Annotation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Precise labeling of X-Rays, MRI, CT Scans, PET scans, ultrasound, and digital pathology slides. Our annotators apply region-of-interest masks, organ segmentations, lesion bounding boxes, and anatomical landmark annotations — validated by clinical experts to meet diagnostic-grade accuracy standards.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Clinical NLP</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Extracting and structuring patient conditions, medications, dosages, procedures, lab results, and treatment plans from unstructured clinical notes, discharge summaries, and electronic health records — enabling your models to reason over free-text medical documentation with high precision.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Genomics Data Labeling</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Annotating complex genomic sequences, variant call files, and biological pathway data to support AI models in precision medicine, drug target identification, and next-generation sequencing analysis pipelines.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Patient Data De-identification</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Detecting and redacting all 18 HIPAA Safe Harbor identifiers — names, dates, geographic data, phone numbers, and more — from medical records, imaging metadata, and clinical notes, ensuring your AI training data is fully compliant for use.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>Why healthcare teams <span className="gradient-text">choose PIBI</span></h2>
            <p>Clinical accuracy meets enterprise data governance in every dataset we deliver.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { title: 'HIPAA-compliant by design', desc: 'End-to-end encryption, role-based access controls, data minimization, and full audit trails built into every workflow. Your patient data never leaves a secure, compliant environment.' },
              { title: 'Clinician-reviewed quality', desc: 'Medical image labels are reviewed by domain experts with clinical backgrounds, ensuring annotations meet diagnostic-grade accuracy standards that regulatory submittals and clinical validation studies require.' },
              { title: 'Multi-modality coverage', desc: 'From MRI and CT to echocardiograms, retinal scans, endoscopy footage, and whole-slide pathology images — we annotate every modality your diagnostic or surgical AI pipeline requires.' },
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
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your healthcare <span className="gradient-text">AI dataset?</span></h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our clinical data specialists deliver HIPAA-compliant, precisely annotated datasets that your medical AI models can rely on.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
