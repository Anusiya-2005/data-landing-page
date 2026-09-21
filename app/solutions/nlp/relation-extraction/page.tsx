import Image from 'next/image';

export default function RelationExtractionPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Relation Extraction</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/relation extraction.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Relation Extraction Overview Video"></video>
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
                <span><strong>Text Annotation</strong> — Marks entity spans in text as the foundation for downstream relation labeling.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Open Relationship Extraction</strong> — Discovers all relationships in text without a fixed schema, ideal for broad knowledge discovery.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Supervised Relation Extraction</strong> — Annotates predefined relation types for high-accuracy domain-specific model training.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Targeted Relationship Extraction</strong> — Focuses annotation on the high-value entity pairs most relevant to your use case.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Entity Relationship Extraction for NLP</strong> — Builds end-to-end annotated datasets mapping entity pairs to semantic relationships.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Mapping the complex web of relationships within your text.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Open Relationship Extraction" width={600} height={338} /></div>
              <h3>Open Relationship Extraction</h3>
              <p>Discover and label diverse relationships as they naturally appear in text, ideal for broad knowledge discovery without predefined schemas.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="Supervised Relation Extraction" width={600} height={338} /></div>
              <h3>Supervised Relation Extraction</h3>
              <p>Train models using carefully annotated examples of predefined relations, ensuring high accuracy for specific domain applications like knowledge graphs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
