import Image from 'next/image';

export default function RelationExtractionPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}><span className="gradient-text">Relation Extraction</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/relation extraction.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Relation Extraction Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is Relation Extraction?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Relation extraction is the NLP task of identifying and labeling the semantic connections between entities mentioned in text — for example, recognizing that a person works at an organization, that a chemical compound causes a specific disease, or that a company acquired another company on a given date. This structured knowledge, derived from raw unstructured text, is the backbone of knowledge graphs, intelligent question-answering systems, and automated research tools. At PIBI Solutions, we build the annotated training datasets that power relation extraction models at scale. Whether your project requires open extraction to discover any relationships that appear in a corpus, supervised extraction using a predefined schema, or targeted extraction focused only on the entity pairs that matter to your domain, our annotation team delivers precise, consistent, and comprehensive labeled data ready for your pipeline.</p>
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
