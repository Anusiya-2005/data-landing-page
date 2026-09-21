import Image from 'next/image';

export default function FeatureClassificationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>Feature Classification</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/feature classification.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Feature Classification Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is Feature Classification?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Feature classification is the process of labeling text samples with the specific linguistic or content features they exhibit — such as whether the text expresses a subjective opinion, reports a neutral fact, or carries implicit emotional content. These feature labels are used to train models that can intelligently route, analyze, and extract value from large volumes of diverse text. Feature classification is especially important in domains like product review mining, customer feedback analysis, and content moderation, where the distinction between an objective statement and a personal opinion fundamentally changes how the text should be processed. At PIBI Solutions, we prepare labeled training samples that describe the key features of each text unit — covering expressive-subjective, direct-subjective, and objective-speech-event categories — delivered in a format ready for direct ingestion into your training pipeline.</p>
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
