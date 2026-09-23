import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/responsible-ai-data-governance">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Responsible AI &amp; <span className="gradient-text">Data Governance</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Ensure data privacy, regulatory compliance, bias mitigation, and transparent data lineage across enterprise AI initiatives.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Responsible AI & Data Governance.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Responsible AI & Data Governance Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Responsible AI &amp; Data Governance?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Responsible AI &amp; Data Governance is the enterprise operational framework managing data privacy, legal compliance, algorithmic fairness, and data provenance across the machine learning lifecycle. As AI regulations expand globally (GDPR, HIPAA, EU AI Act), organizations must ensure sensitive Personally Identifiable Information (PII) is securely redacted, training data origin is fully documented, and potential bias is audited and neutralized before deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive privacy protection, compliance auditing, and data lineage solutions.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_qa.jpg" alt="PII Redaction and Anonymization" width={600} height={338} /></div>
              <h3>PII Redaction and Anonymization</h3>
              <p>Automate entity masking, token hashing, face blurring, license plate blurring, and sensitive attribute redaction across text, audio, and visual datasets to preserve privacy.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/model_evaluation.jpg" alt="Bias Auditing" width={600} height={338} /></div>
              <h3>Bias Auditing</h3>
              <p>Execute quantitative fairness audits across protected demographic attributes to measure disparate impact, equal opportunity, and representation balance.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/metadata_schema.jpg" alt="Dataset Documentation" width={600} height={338} /></div>
              <h3>Dataset Documentation</h3>
              <p>Generate standardized Datasheets for Datasets detailing data origin, copyright consent rights, curation methods, and intended operational boundaries.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/dataset_sourcing.jpg" alt="Access and Compliance Controls" width={600} height={338} /></div>
              <h3>Access and Compliance Controls</h3>
              <p>Enforce strict role-based access controls (RBAC), end-to-end encryption, data retention policies, and SOC2 / ISO 27001 / HIPAA audit standards across all data workflows.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
