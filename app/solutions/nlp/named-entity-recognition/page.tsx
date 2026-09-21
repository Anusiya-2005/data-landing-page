import Image from 'next/image';

export default function NamedEntityRecognitionPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Named Entity Recognition</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/named entity.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Named Entity Recognition Overview Video"></video>
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
                <span><strong>NER Annotation</strong> — Labels persons, organizations, locations, dates, and values across large text corpora.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Open Named Entity Recognition</strong> — Detects any entity type that naturally appears in text without a fixed taxonomy.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Supervised Named Entity Recognition</strong> — Produces ground-truth labeled data for production-level NER model precision and recall.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Targeted Named Entity Recognition</strong> — Focuses on high-value custom entity classes specific to your domain and use case.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Named Entity Recognition for NLP</strong> — Delivers datasets in your required format — CoNLL, JSON, BRAT, or custom — pipeline-ready.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Extracting the most critical data points from your text.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/entity_linking.jpg" alt="Targeted NER Annotation" width={600} height={338} /></div>
              <h3>Targeted NER Annotation</h3>
              <p>Identify highly specific entities like medical terms, product serial numbers, or legal jargon, customized precisely for your industry needs.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/phrase_chunking.jpg" alt="Supervised Entity Recognition" width={600} height={338} /></div>
              <h3>Supervised Entity Recognition</h3>
              <p>Train robust NER models using large volumes of meticulously annotated ground-truth data, ensuring high precision and recall across diverse document types.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
