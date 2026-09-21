import Image from 'next/image';

export default function FeatureClassificationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Feature Classification</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/feature classification.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Feature Classification Overview Video"></video>
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
                <span><strong>Export Training Samples</strong> — Delivers formatted, feature-labeled batches ready for direct pipeline ingestion.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Expressive-subjective Tagging</strong> — Tags implicit emotional language to separate expressive text from neutral descriptions.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Direct-subjective Tagging</strong> — Labels opinion-bearing segments to isolate user views from factual product content.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Objective-speech-event Tagging</strong> — Marks neutral reportorial segments to keep feature signals clean and unambiguous.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Extracting granular features to power intelligent systems.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/product_categorization.jpg" alt="Export Training Samples" width={600} height={338} /></div>
              <h3>Export Training Samples</h3>
              <p>Receive perfectly formatted training batches tailored specifically to your feature extraction model&apos;s input requirements and schema.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_classification_bg.jpg" alt="Multi-dimensional Tagging" width={600} height={338} /></div>
              <h3>Multi-dimensional Tagging</h3>
              <p>Simultaneously label text across multiple feature axes such as categorizing a product review by durability, price, and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
