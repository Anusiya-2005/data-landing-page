export default function StressTestingPage() {
  return (
    <main>
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
            <span className="gradient-text">Stress Testing Your AI Models</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/Stress Testing Your AI Models (1).mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Stress Testing AI Models Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is AI Stress Testing?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              AI stress testing is a systematic process of probing a language model for failure modes before it is deployed to real users. Where standard evaluation checks whether a model performs well on expected inputs, stress testing deliberately seeks out the inputs it handles badly — adversarial prompts designed to cause harmful outputs, edge cases that expose inconsistent reasoning, and scenarios that test the model across demographic groups for fairness. At PIBI Solutions, our red-teaming teams write and execute hundreds of targeted attack scenarios. Vulnerability analysis documents every failure in a structured report: what the prompt was, what the model produced, how severe the issue is, and what kind of fix is needed. Bias auditing runs the same prompts across different population groups and measures divergence. Response refinement then closes the gaps, with re-testing on the original failing prompts to confirm each fix holds. The full cycle repeats until the model meets your safety and quality bar.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>End-to-end adversarial evaluation that finds problems before your users do.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#e74c3c,#c0392b)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Adversarial Testing</h3>
              <p>Our red-team annotators craft prompt injection attempts, jailbreak sequences, and manipulation scenarios drawn from real attack patterns. Each prompt is logged with its intent, the model output, and a severity rating so your engineering team can triage fixes efficiently.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#f39c12,#e67e22)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3>Vulnerability Analysis</h3>
              <p>We classify every identified weakness by category — harmful content, factual hallucination, unsafe instruction-following, or privacy leakage — and produce a structured report with reproduction steps, affected prompt classes, and recommended mitigations.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#2980b9,#1a5276)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h3>Report and Feedback</h3>
              <p>Every testing cycle produces a clear, structured report: which scenarios failed, what the model produced, severity ratings, category breakdowns, and prioritized remediation recommendations — so your team has an actionable roadmap for every fix.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#8e44ad,#6c3483)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h3>Bias Auditing</h3>
              <p>We run equivalent prompts across gender, ethnicity, religion, age, and other sensitive attributes and measure divergence in model responses. Disparate treatment is flagged, documented, and surfaced with concrete examples that highlight where alignment work is needed.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#27ae60,#1e8449)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <h3>Response Refinement</h3>
              <p>After your team applies fixes, we re-run the original failing scenarios to verify each improvement holds and has not introduced regressions. This closed-loop cycle continues until the model passes every scenario in the test suite to the agreed acceptance threshold.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
