import Image from 'next/image';

export default function TextAnnotationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Text Annotation</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/annotation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Text Annotation Overview Video"></video>
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
                <span><strong>Text Categorization</strong> — Assigns labels to documents and sentences so models can sort and route text at scale.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Semantic Annotation</strong> — Labels the semantic roles of words and phrases to capture intent beyond keywords.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Phrase Chunking</strong> — Groups sentences into noun and verb phrases for structural language understanding.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Entity Linking</strong> — Connects named entities to knowledge bases like Wikidata to resolve ambiguity.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
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
