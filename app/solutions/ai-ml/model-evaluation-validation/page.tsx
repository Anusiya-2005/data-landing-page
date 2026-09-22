export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/model-evaluation-validation">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            <span className="gradient-text">Model Evaluation &amp; Validation</span>
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
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #1E5B88, #37AFE5)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3>Benchmark Dataset Creation</h3>
              <p>Construct gold-standard evaluation benchmarks representing diverse real-world distributions, noisy scenarios, and challenging adversarial samples.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #02AAB0, #00CDAC)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>Metric Review and Reporting</h3>
              <p>Generate detailed evaluation dashboards analyzing Precision, Recall, F1 score, Confusion Matrices, ROC-AUC curves, and task-specific KPIs.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #FF512F, #DD2476)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <h3>Error Slicing by Category</h3>
              <p>Break down prediction errors across metadata slices, input lengths, lighting conditions, or region demographics to pinpoint exact failure vectors.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #614385, #516395)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Bias and Fairness Checks</h3>
              <p>Audit model predictions across demographic sub-groups, measuring disparate impact, equalized odds, and calibration fairness to eliminate bias.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
