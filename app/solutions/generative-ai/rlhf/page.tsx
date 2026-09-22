export default function RLHFPage() {
  return (
    <main>
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
            Reinforcement Learning from <span className="gradient-text">Human Feedback</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/RLHF.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="RLHF Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">RLHF?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Reinforcement Learning from Human Feedback (RLHF) is the technique that takes a capable but raw language model and shapes it into one that people actually want to use. The process works in three stages. First, a base model is pre-trained on broad language data, giving it general competence. Second, supervised fine-tuning uses curated prompt-response pairs to teach the model how to follow instructions. Third, human annotators rank multiple model outputs for a given prompt, and those rankings train a separate reward model. The reward model then becomes the signal that guides the language model through reinforcement learning toward responses people consistently prefer. At PIBI Solutions, our trained workforce handles the preference annotation at scale, maintaining clear guidelines and inter-annotator agreement checks so the reward signal your model receives is reliable, consistent, and free from systematic bias.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Our RLHF pipelines cover every stage of the human-feedback loop.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#3D72F2,#2BC59E)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </div>
              <h3>Pre-Training Model</h3>
              <p>We source, clean, and structure diverse pre-training corpora that give your model a broad foundation in language, facts, and reasoning before any fine-tuning begins. High-quality pre-training data is the bedrock of every strong LLM.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#1E5B88,#37AFE5)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </div>
              <h3>Supervised Fine-Tuning</h3>
              <p>Our experts write and curate high-quality prompt-response pairs tailored to your target domain including legal, medical, customer support, or general-purpose. Each pair is reviewed for accuracy, tone, and instruction-following quality before being added to your SFT dataset.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#2BC59E,#3D72F2)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h3>Reward Model Training</h3>
              <p>Annotators compare pairs of model outputs and select which is more helpful, harmless, and honest. We maintain strict inter-rater reliability, run calibration sessions, and produce preference datasets that train reward models with low noise and high signal, so your RL loop improves the right behaviors.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
