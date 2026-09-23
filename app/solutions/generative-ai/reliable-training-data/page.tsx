import Image from 'next/image';
export default function ReliableTrainingDataPage() {
  return (
    <main>
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
            Reliable Generative AI <span className="gradient-text">Training Data</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/Reliable Generative AI Training Data.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Reliable Generative AI Training Data Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Reliable Generative AI Training Data?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Reliable generative AI training data is not simply a large dataset; it is one you can actually depend on. It meets the five qualities that make the difference between a model that works in testing and one that works in production: compliance with data rights and regulations, fairness across the populations it will serve, transparent governance that documents every source and decision, continual assessment that catches quality drift over time, and an overarching commitment to trustworthiness verified by independent review. At PIBI Solutions, reliability is built into every stage of our data pipeline. We verify that all source content is appropriately licensed and consented. We audit demographic and topical balance before data is released. Every dataset ships with a complete lineage document. Quality reviews are scheduled at regular intervals, not just at delivery. And sign-off from domain experts is required before data is handed over to your team, so that what you receive is not just a file, but a dependable foundation for your model.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Five pillars of reliability built into every dataset we deliver.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_qa.jpg" alt="Unmatched Compliance" width={600} height={338} /></div>
              <h3>Unmatched Compliance</h3>
              <p>We verify that every source of data carries the rights, licenses, and consents required for training use. Our compliance team tracks jurisdiction-specific regulations including GDPR, CCPA, and sector-specific rules, so your dataset is legally defensible from day one.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_sampling.jpg" alt="Fairness & Inclusivity" width={600} height={338} /></div>
              <h3>Fairness &amp; Inclusivity</h3>
              <p>We audit every dataset for demographic balance across gender, ethnicity, language variety, age, and region. Underrepresented perspectives are actively sourced, and we report coverage statistics so you have evidence of representativeness at delivery.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/metadata_schema.jpg" alt="Transparent Governance" width={600} height={338} /></div>
              <h3>Transparent Governance</h3>
              <p>Every dataset ships with full lineage documentation: where each data point came from, who labeled it, which guidelines were in effect, and what review steps it passed. This gives your team complete visibility and supports auditability throughout the model lifecycle.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/production_monitoring.jpg" alt="Continual Assessment" width={600} height={338} /></div>
              <h3>Continual Assessment</h3>
              <p>Data quality degrades as guidelines evolve and annotators change. We schedule systematic re-reviews at agreed intervals and apply updated guidelines retroactively where needed, ensuring the dataset you built on a year ago still meets your current quality standard.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/dataset_sourcing.jpg" alt="Trustworthiness" width={600} height={338} /></div>
              <h3>Trustworthiness</h3>
              <p>Every dataset we deliver requires domain expert sign-off before handover. Trustworthiness is not a self-certification; it is verified through independent review, documented evidence of quality checks, and a delivery report your team can audit at any point.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
