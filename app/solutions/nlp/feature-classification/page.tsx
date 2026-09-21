import Image from 'next/image';

export default function FeatureClassificationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Feature Classification</h1>
          <p>
            Prepare labeled samples that describe the features of a text, ready for your training pipeline.
          </p>
          <div className="premium-image-wrapper">
            <div style={{width: '100%', height: '500px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>Image Placeholder</div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our feature classification approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/feature classification.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Feature Classification Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Feature Classification Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              Feature classification is the engine behind advanced recommendation systems, faceted search, and granular content analysis. By isolating and labeling specific attributes within a text—such as product specifications, pricing, style, or performance metrics—you create a highly organized dataset that powers precision targeting.
            </p>
            <p>
              Our feature labeling pipelines break down large volumes of text into digestible, highly specific data points. We provide customized tagging architectures that match your exact business logic, ensuring your machine learning models can confidently extract the exact features necessary to drive user engagement and optimize analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Extracting granular features to power intelligent systems.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Export Training Samples</h3>
              <p>Receive perfectly formatted training batches tailored specifically to your feature extraction model's input requirements.</p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Multi-dimensional Tagging</h3>
              <p>Simultaneously label text across multiple feature axes, such as categorizing a product review by durability, price, and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
