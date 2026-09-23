import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/model-evaluation-validation">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Model Evaluation &amp; <span className="gradient-text">Validation</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Validate model performance, surface hidden failure modes on held-out data, and ensure unbiased predictions before production launch.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Model Evaluation & Validation.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Model Evaluation & Validation Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Model Evaluation &amp; Validation?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Model Evaluation &amp; Validation is the empirical verification of how a trained machine learning model behaves on unseen test sets and corner cases. Macro-level accuracy numbers often hide severe failure modes in specific sub-populations or edge conditions. Our validation framework constructs curated benchmark datasets, conducts granular slice analysis, evaluates key performance indicators (Precision, Recall, F1, ROC-AUC), and audits predictions for algorithmic fairness before deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive model validation, metric reporting, and failure analysis offerings.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/model_evaluation.jpg" alt="Benchmark Dataset Creation" width={600} height={338} /></div>
              <h3>Benchmark Dataset Creation</h3>
              <p>Construct gold-standard evaluation benchmarks representing diverse real-world distributions, noisy scenarios, and challenging adversarial samples.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_qa.jpg" alt="Metric Review and Reporting" width={600} height={338} /></div>
              <h3>Metric Review and Reporting</h3>
              <p>Generate detailed evaluation dashboards analyzing Precision, Recall, F1 score, Confusion Matrices, ROC-AUC curves, and task-specific KPIs.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="Error Slicing by Category" width={600} height={338} /></div>
              <h3>Error Slicing by Category</h3>
              <p>Break down prediction errors across metadata slices, input lengths, lighting conditions, or region demographics to pinpoint exact failure vectors.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/entity_linking.jpg" alt="Bias and Fairness Checks" width={600} height={338} /></div>
              <h3>Bias and Fairness Checks</h3>
              <p>Audit model predictions across demographic sub-groups, measuring disparate impact, equalized odds, and calibration fairness to eliminate bias.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
