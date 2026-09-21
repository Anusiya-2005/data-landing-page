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
