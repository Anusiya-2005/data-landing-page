import Image from 'next/image';

export default function RelationExtractionPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Relation Extraction</h1>
          <p>
            Record how entities in a passage connect to one another, from simple links to domain-specific relations.
          </p>
          <div className="premium-image-wrapper">
            <div style={{width: '100%', height: '500px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>Image Placeholder</div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our relation extraction approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/relation extraction.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Relation Extraction Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Relation Extraction Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              While recognizing entities (like names or places) is crucial, understanding how they interact is what transforms text into knowledge graphs. Relation extraction maps out these semantic connections—such as who works for which company, or which symptom relates to which disease—giving AI models the ability to comprehend complex narratives and factual dependencies.
            </p>
            <p>
              We provide precise annotation services to capture both explicit and implicit relationships within your data. Whether utilizing open extraction for broad discovery or targeted extraction for specific ontological structures, our labeled data empowers your algorithms to build intelligent, interconnected knowledge bases that drive deep analytics and sophisticated reasoning.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Mapping the complex web of relationships within your text.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Open Relationship Extraction</h3>
              <p>Discover and label diverse relationships as they naturally appear in text, ideal for broad knowledge discovery without predefined schemas.</p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Supervised Relation Extraction</h3>
              <p>Train models using carefully annotated examples of predefined relations, ensuring high accuracy for specific domain applications.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
