import Image from 'next/image';

export default function TextAnnotationPage() {
  return (
    <main className="page">
      <section className="hero center">
        <div className="container hero-content">
          <h1>Text <span className="gradient-text">Annotation</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/annotation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Text Annotation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Text Annotation?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Text annotation is the foundational step in building any powerful Natural Language Processing system. It is the process of labeling raw text, words, phrases, sentences, and entire documents, with structured metadata that machine learning models can learn from. Without annotation, a model sees nothing more than a sequence of characters. With annotation, it understands meaning: who is mentioned, what category a document belongs to, how words relate syntactically, and what a writer intends. At PIBI Solutions, our annotation pipeline covers everything from basic text categorization and phrase chunking to advanced semantic labeling and entity linking against external knowledge bases. Every label is applied following strict guidelines, reviewed for consistency, and delivered in your required format, giving your models the reliable ground truth they need to perform with exceptional accuracy in production.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Our text annotation pipelines are designed for precision at scale.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_categorization.jpg" alt="Text Categorization" width={600} height={338} /></div>
              <h3>Text Categorization</h3>
              <p>We classify documents, paragraphs, or sentences into predefined categories, enabling your models to quickly sort through massive volumes of unstructured text with high accuracy and domain relevance.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Semantic Annotation" width={600} height={338} /></div>
              <h3>Semantic Annotation</h3>
              <p>Capture the deep meaning of text. We label the semantic roles of words and phrases to help NLP models understand intent, context, and the subtle nuances of human language beyond just keywords.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/phrase_chunking.jpg" alt="Phrase Chunking" width={600} height={338} /></div>
              <h3>Phrase Chunking</h3>
              <p>Break sentences down into syntactically correlated parts like noun or verb phrases. This essential syntactic parsing step gives your models the structural understanding needed for complex language generation.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/entity_linking.jpg" alt="Entity Linking" width={600} height={338} /></div>
              <h3>Entity Linking</h3>
              <p>We connect identified entities within text to comprehensive knowledge bases, enriching your training data with real-world contextual anchors for disambiguation and knowledge graph population.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
