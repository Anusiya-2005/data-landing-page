import Image from 'next/image';

export default function NamedEntityRecognitionPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>Named Entity <span className="gradient-text">Recognition</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/named entity.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Named Entity Recognition Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Named Entity Recognition?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Named Entity Recognition, or NER, is the process of automatically locating and classifying named items, such as people, organizations, locations, dates, products, and monetary values, within unstructured text. It is one of the most fundamental and widely applied tasks in NLP, underpinning search engines, recommendation systems, document intelligence platforms, and automated data entry workflows. At PIBI Solutions, we provide end-to-end NER annotation services tailored to your domain. Whether you need standard entity types across general text, highly specific custom categories like drug names or legal contract clauses, or a fully supervised annotation pipeline to train production-level models, our expert labeling team delivers ground-truth datasets with exceptional consistency and accuracy, formatted in CoNLL, JSON, BRAT, or any custom schema your pipeline requires.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed <span className="gradient-text">Offerings</span></h2><p>Extracting the most critical data points from your text.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_categorization.jpg" alt="NER Annotation" width={600} height={338} /></div>
              <h3>NER Annotation</h3>
              <p>Our expert annotators label standard entity types including person, organization, location, date, and product across diverse text domains with strict consistency protocols and inter-annotator agreement checks.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Open Named Entity Recognition" width={600} height={338} /></div>
              <h3>Open Named Entity Recognition</h3>
              <p>Discover and label entities across a broad, open taxonomy without a fixed entity type list, ideal for exploratory projects where you want to understand what kinds of named items appear in your corpus before defining a formal schema.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/phrase_chunking.jpg" alt="Supervised Named Entity Recognition" width={600} height={338} /></div>
              <h3>Supervised Named Entity Recognition</h3>
              <p>Train robust NER models using large volumes of meticulously annotated ground-truth data, ensuring high precision and recall across diverse document types and entity categories in your target domain.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/entity_linking.jpg" alt="Targeted Named Entity Recognition" width={600} height={338} /></div>
              <h3>Targeted Named Entity Recognition</h3>
              <p>Identify highly specific entities like medical terms, product serial numbers, legal jargon, or financial instruments, with annotation customized precisely for the entity categories your industry or use case demands.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="NER for NLP Pipelines" width={600} height={338} /></div>
              <h3>NER for NLP Pipelines</h3>
              <p>End-to-end NER data delivery designed for direct pipeline ingestion, formatted in CoNLL, JSON, BRAT, or your custom schema, with full lineage documentation and quality reports included.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
