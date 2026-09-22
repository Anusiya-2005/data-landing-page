import Image from 'next/image';

export default function TextClassificationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}><span className="gradient-text">Text Classification</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/text classification.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Text Classification Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Text Classification?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Text classification is the task of automatically assigning one or more predefined labels to a piece of text, enabling machines to sort, route, and understand content at a scale no human team could match. From deciding which department should handle a support ticket, to detecting the language of an incoming message, to categorizing thousands of product listings in an e-commerce catalog, text classification is the engine behind countless intelligent automation workflows. At PIBI Solutions, we prepare the high-quality labeled datasets that train these classifiers. Our annotators apply taxonomy-aligned labels across product descriptions, reviews, articles, and conversation threads, covering product categorization, language identification, sentiment analysis, and theme detection. Each dataset is built to the precision your model needs to generalize confidently to real-world, unseen text.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Our text classification services are built for enterprise-scale sorting and routing.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/product_categorization.jpg" alt="Product Categorization" width={600} height={338} /></div>
              <h3>Product Categorization</h3>
              <p>We organize e-commerce inventories by labeling product titles, descriptions, and attributes, ensuring users can find exactly what they are looking for through accurate taxonomy mapping.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/language_id.jpg" alt="Language Identification" width={600} height={338} /></div>
              <h3>Language Identification</h3>
              <p>Automatically detect the language of incoming text streams to route multilingual content and support tickets to the correct regional teams or models without manual effort.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/sentiment_analysis.jpg" alt="Sentiment Analysis" width={600} height={338} /></div>
              <h3>Sentiment Analysis</h3>
              <p>Go beyond simple positive or negative tags. We categorize the exact sentiment and emotional tone of reviews, social media posts, and feedback for richer model training.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="Theme Detection" width={600} height={338} /></div>
              <h3>Theme Detection</h3>
              <p>We identify the core topics and recurring themes in long-form content, helping algorithms build summarization engines and content recommendation pipelines.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
