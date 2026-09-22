export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/production-monitoring-feedback">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Production Monitoring &amp; <span className="gradient-text">Feedback</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Keep models accurate post-launch with real-time drift detection, human feedback loops, and continuous retraining.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Production Monitoring & Feedback.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Production Monitoring & Feedback Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Production Monitoring &amp; Feedback?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Production Monitoring &amp; Feedback ensures deployed AI models maintain high accuracy as real-world data distributions evolve. Once deployed, models inevitably encounter concept drift, covariate shift, and changing user terminology. By deploying automated drift alerts, collecting live production inference samples, routing low-confidence predictions to human-in-the-loop reviewers, and continuously feeding verified samples back into retraining pipelines, we protect your AI investment against performance degradation over time.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Continuous monitoring, human feedback loops, and automated retraining operations.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #1E5B88, #37AFE5)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Drift Review</h3>
              <p>Monitor live model inference data using Kolmogorov-Smirnov statistical tests and Wasserstein distances to detect feature and concept drift before model accuracy drops.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #02AAB0, #00CDAC)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>Feedback Labeling</h3>
              <p>Capture user interactions, explicit corrections, and flag misclassifications to rapidly annotate edge cases for target model retraining datasets.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #FF512F, #DD2476)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 4v6h-6" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              </div>
              <h3>Retraining Data Pipelines</h3>
              <p>Automate continuous data sampling, curation, and validation workflows that feed verified production samples directly into continuous model retraining loops.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg, #614385, #516395)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Human-in-the-Loop Review</h3>
              <p>Establish real-time fallback queues routing low-confidence predictions, high-stakes decisions, and outlier samples to human specialists for verification.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
