import Image from 'next/image';

export default function IntentClassificationPage() {
  return (
    <main className="page">
      <section className="hero center">
        <div className="container hero-content">
          <h1>Intent <span className="gradient-text">Classification</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/intent classifiction.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Intent Classification Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Intent Classification?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Intent classification is the NLP task of identifying what a user wants to accomplish with a given message or query, so that a system can route it, respond to it, or trigger the correct action. It is the core mechanism that allows conversational AI systems, voice assistants, and automated support platforms to understand user goals, distinguishing between a customer wanting to track an order, change a delivery address, or speak to a human agent, even when each of those requests is phrased differently across thousands of interactions. At PIBI Solutions, we build the intent-labeled datasets that make this possible. Our process begins with ingesting and auditing your existing message logs to define a clean, non-overlapping intent taxonomy, and culminates in applying those labels at scale across thousands of utterances, including edge cases, ambiguous phrasings, and multi-intent messages, to give your model the comprehensive ground truth it needs.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed <span className="gradient-text">Offerings</span></h2><p>Decoding user goals to drive automated actions.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Analyzing Datasets" width={600} height={338} /></div>
              <h3>Analyzing Datasets</h3>
              <p>We audit existing query logs to define a robust, non-overlapping intent taxonomy tailored to your users&apos; actual behaviors and goals.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/language_id.jpg" alt="Tagging Texts" width={600} height={338} /></div>
              <h3>Tagging Texts</h3>
              <p>Applying intent labels across thousands of utterances, encompassing edge cases, ambiguities, and multi-intent messages for robust model coverage.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
