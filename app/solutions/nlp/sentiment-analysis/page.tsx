import Image from 'next/image';

export default function SentimentAnalysisPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Sentiment Analysis</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/sentiment analysis.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Sentiment Analysis Overview Video"></video>
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
                <span><strong>Data Labeling</strong> — Applies fine-grained sentiment tags across reviews, tickets, and social posts at scale.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Expressive-subjective Tagging</strong> — Tags language that conveys emotions indirectly through irony, word choice, or tone.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Direct-subjective Tagging</strong> — Marks explicit first-person opinion statements for clear sentiment signal extraction.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Objective-speech-event Tagging</strong> — Labels neutral factual reporting to separate it from genuine opinion in model training.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Capturing the full spectrum of human emotion in text.</p></div>
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
