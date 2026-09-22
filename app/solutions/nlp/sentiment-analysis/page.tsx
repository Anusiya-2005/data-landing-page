import Image from 'next/image';

export default function SentimentAnalysisPage() {
  return (
    <main className="page">
      <section className="hero center">
        <div className="container hero-content">
          <h1>Sentiment <span className="gradient-text">Analysis</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/sentiment analysis.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Sentiment Analysis Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Sentiment Analysis?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Sentiment analysis is the NLP task of automatically identifying and categorizing the opinions, emotions, and attitudes expressed in text. It goes far beyond binary positive or negative classification, nuanced sentiment labeling distinguishes between a writer directly expressing a personal opinion, language that conveys emotion indirectly through word choice and tone, and neutral factual reporting of what someone else said. This level of precision is essential for building models that accurately understand customer feedback, monitor brand perception, analyze survey responses, and power recommendation systems. At PIBI Solutions, we provide fine-grained sentiment annotation services covering expressive-subjective tagging, direct-subjective tagging, and objective-speech-event tagging, giving your models the richly detailed ground truth they need to understand not just what people say, but how they truly feel.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed <span className="gradient-text">Offerings</span></h2><p>Capturing the full spectrum of human emotion in text.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/sentiment_analysis.jpg" alt="Expressive-subjective Tagging" width={600} height={338} /></div>
              <h3>Expressive-subjective Tagging</h3>
              <p>Identify subtle expressions of emotion and opinion embedded within complex sentence structures, capturing indirect sentiment signals.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="Objective-speech-event Tagging" width={600} height={338} /></div>
              <h3>Objective-speech-event Tagging</h3>
              <p>Differentiate between factual reporting and subjective opinion so models accurately interpret context and tone across document types.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
