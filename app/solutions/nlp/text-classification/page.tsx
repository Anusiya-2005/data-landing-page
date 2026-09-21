import Image from 'next/image';

export default function TextClassificationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Text Classification</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/text classification.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Text Classification Overview Video"></video>
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
                <span><strong>Product Categorization</strong> — Labels product titles and attributes to power accurate e-commerce search and discovery.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Language Identification</strong> — Detects the language of text streams to route content to the right regional pipeline.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Sentiment Analysis</strong> — Categorizes emotional tone across reviews and feedback with nuanced, fine-grained labels.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Theme Detection</strong> — Identifies recurring topics across content to power summarization and recommendation engines.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
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
