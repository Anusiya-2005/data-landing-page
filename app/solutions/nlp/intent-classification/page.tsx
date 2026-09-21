import Image from 'next/image';

export default function IntentClassificationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Intent Classification</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/intent classifiction.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Intent Classification Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>What we cover</h2>
            <ul className="svc-list">
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Importing Datasets</strong> — Ingests and audits query logs and conversation histories for taxonomy development.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Analyzing Datasets</strong> — Reviews data to define a clean, non-overlapping intent taxonomy for your users' goals.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Tagging Texts</strong> — Applies intent labels across thousands of utterances, including edge cases and multi-intent messages.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Decoding user goals to drive automated actions.</p></div>
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
