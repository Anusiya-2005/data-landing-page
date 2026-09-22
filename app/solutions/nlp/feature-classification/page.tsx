import Image from 'next/image';

export default function FeatureClassificationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>Feature <span className="gradient-text">Classification</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/feature classification.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Feature Classification Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Feature Classification?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Feature classification is the process of labeling text samples with the specific linguistic or content features they exhibit, such as whether the text expresses a subjective opinion, reports a neutral fact, or carries implicit emotional content. These feature labels are used to train models that can intelligently route, analyze, and extract value from large volumes of diverse text. Feature classification is especially important in domains like product review mining, customer feedback analysis, and content moderation, where the distinction between an objective statement and a personal opinion fundamentally changes how the text should be processed. At PIBI Solutions, we prepare labeled training samples that describe the key features of each text unit, covering expressive-subjective, direct-subjective, and objective-speech-event categories, delivered in a format ready for direct ingestion into your training pipeline.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed <span className="gradient-text">Offerings</span></h2><p>Extracting granular features to power intelligent systems.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/product_categorization.jpg" alt="Export Training Samples" width={600} height={338} /></div>
              <h3>Export Training Samples</h3>
              <p>Receive perfectly formatted training batches tailored specifically to your feature extraction model&apos;s input requirements (JSON, CSV, or custom schema) with full annotation lineage included.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/sentiment_analysis.jpg" alt="Expressive-subjective Tagging" width={600} height={338} /></div>
              <h3>Expressive-subjective Tagging</h3>
              <p>Label text samples that convey emotion or opinion indirectly through connotation, rhetorical devices, or framing, so your model learns to detect sentiment embedded beneath the surface of language.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Direct-subjective Tagging" width={600} height={338} /></div>
              <h3>Direct-subjective Tagging</h3>
              <p>Identify and label first-person explicit opinions and evaluations, giving your model a clear signal for text where the author directly states a preference, judgment, or point of view.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="Objective-speech-event Tagging" width={600} height={338} /></div>
              <h3>Objective-speech-event Tagging</h3>
              <p>Classify text that objectively reports what someone said or did, without any personal opinion attached, a critical distinction for content moderation, news analysis, and survey processing pipelines.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
