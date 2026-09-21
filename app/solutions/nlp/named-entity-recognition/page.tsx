import Image from 'next/image';

export default function NamedEntityRecognitionPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Named Entity Recognition</h1>
          <p>
            Locate and label people, organizations, places, dates, and other named items in unstructured text.
          </p>
          <div className="premium-image-wrapper">
            <div style={{width: '100%', height: '500px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>Image Placeholder</div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our Named Entity Recognition approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/named entity.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="NER Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Named Entity Recognition Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              Named Entity Recognition (NER) is a cornerstone of information extraction. By automatically identifying and classifying key elements—such as names, locations, organizations, and monetary values—NER transforms dense, unstructured paragraphs into easily querying data points. This is essential for search engines, recommendation systems, and automated data entry.
            </p>
            <p>
              Our expert labeling services provide highly accurate NER annotations tailored to your specific domain, whether it's legal, medical, or financial text. We ensure that your language models can confidently parse complex documents, extracting the vital entities needed to power intelligent analytics and streamline downstream processes.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Extracting the most critical data points from your text.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Targeted NER Annotation</h3>
              <p>Identify highly specific entities like medical terms, product serial numbers, or legal jargon, customized precisely for your industry needs.</p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Supervised Entity Recognition</h3>
              <p>Train robust NER models using large volumes of meticulously annotated ground-truth data, ensuring high precision and recall.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
