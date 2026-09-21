import Image from 'next/image';

export default function TextAnnotationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Text Annotation</h1>
          <p>
            Add structure to raw text so machine learning models can learn meaning, context, and how words relate.
          </p>
          <div className="premium-image-wrapper">
            <Image 
              src="/images/text_annotation_bg.jpg" 
              alt="Text Annotation Visualization" 
              width={1600} 
              height={900} 
              priority
            />
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our text annotation approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/annotation.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Text Annotation Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Text Annotation Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              Text annotation is the foundational step in building powerful Natural Language Processing (NLP) models. By accurately labeling words, phrases, and semantic structures, we transform unstructured text into high-quality, structured training data. This enables algorithms to comprehend context, intent, and nuance—bridging the gap between human communication and machine understanding.
            </p>
            <p>
              Our meticulous annotation process ensures that every dataset is handled with precision. Whether it's tagging parts of speech, categorizing entire documents, or identifying complex entity relationships, our expert team provides the reliable ground truth your AI models need to perform in real-world scenarios with exceptional accuracy.
            </p>
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
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="Text Categorization" width={600} height={338} />
              </div>
              <h3>Text Categorization</h3>
              <p>
                We classify documents, paragraphs, or sentences into predefined categories, enabling your models to quickly sort through massive volumes of unstructured text with high accuracy and domain relevance.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Semantic Annotation" width={600} height={338} />
              </div>
              <h3>Semantic Annotation</h3>
              <p>
                Capture the deep meaning of text. We label the semantic roles of words and phrases to help NLP models understand intent, context, and the subtle nuances of human language beyond just keywords.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="Phrase Chunking" width={600} height={338} />
              </div>
              <h3>Phrase Chunking</h3>
              <p>
                Break sentences down into syntactically correlated parts like noun or verb phrases. This essential syntactic parsing step gives your models the structural understanding needed for complex language generation.
              </p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Entity Linking" width={600} height={338} />
              </div>
              <h3>Entity Linking</h3>
              <p>
                We connect identified entities within text to comprehensive knowledge bases (like Wikidata or custom ontologies), enriching your training data with real-world contextual anchors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
