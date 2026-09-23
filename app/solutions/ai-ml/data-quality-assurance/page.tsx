import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/data-quality-assurance">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Data Quality <span className="gradient-text">Assurance</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Measure, benchmark, and elevate label consistency before data reaches model training pipelines.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Data Quality Assurance.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Data Quality Assurance Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Data Quality Assurance?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Data Quality Assurance (QA) in machine learning is the structured methodology of evaluating ground-truth dataset correctness, agreement, and completeness before training begins. Inconsistent labels inject noise into loss functions and degrade performance. Our QA framework applies rigorous statistical tracking, gold-standard benchmark inserts, agreement metrics, and spot-check audits to ensure training sets meet strict accuracy targets.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Rigorous quality control processes guaranteeing ground-truth data standards.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_qa.jpg" alt="Gold-Standard Test Sets" width={600} height={338} /></div>
              <h3>Gold-Standard Test Sets</h3>
              <p>Curate highly vetted reference evaluation sets created by senior domain leads to continuously benchmark annotator accuracy and detect drift early.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/sentiment_analysis.jpg" alt="Inter-Annotator Agreement" width={600} height={338} /></div>
              <h3>Inter-Annotator Agreement</h3>
              <p>Calculate statistical metrics (Cohen&apos;s Kappa, Fleiss&apos; Kappa, Intersection over Union) across team members to surface ambiguous guidelines and clarify definitions.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_sampling.jpg" alt="Sampling Audits" width={600} height={338} /></div>
              <h3>Sampling Audits</h3>
              <p>Perform random and stratified sample audits on completed dataset batches to verify adherence to target quality thresholds prior to pipeline export.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/model_evaluation.jpg" alt="Error Analysis Reports" width={600} height={338} /></div>
              <h3>Error Analysis Reports</h3>
              <p>Receive detailed metric breakdowns categorizing mislabeling trends, edge-case bottlenecks, and actionable feedback loops for continuous annotation improvement.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
