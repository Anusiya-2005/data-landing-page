import Image from 'next/image';

export default function SentimentAnalysisPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Sentiment Analysis</h1>
          <p>
            Label opinion, emotion, and speaker attitude at the level of detail your model needs.
          </p>
          <div className="premium-image-wrapper">
            <div style={{width: '100%', height: '500px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>Image Placeholder</div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our sentiment analysis approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/sentiment analysis.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Sentiment Analysis Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Sentiment Analysis Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              Understanding the emotion and subjective tone behind text is crucial for brand monitoring, customer feedback analysis, and personalized user experiences. Sentiment analysis goes beyond basic positive/negative classifications, delving into nuanced emotions like frustration, joy, sarcasm, or urgency.
            </p>
            <p>
              We provide highly detailed sentiment tagging, distinguishing between expressive-subjective opinions and objective-speech events. By providing richly annotated datasets, we enable your AI to interpret the true feelings and attitudes of your users, allowing you to proactively respond to customer needs and market trends.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Capturing the full spectrum of human emotion in text.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Expressive-Subjective Tagging</h3>
              <p>Identify subtle expressions of emotion, opinion, or sentiment that are embedded within complex sentence structures.</p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Objective-Speech-Event Tagging</h3>
              <p>Differentiate between factual reporting and subjective opinion, ensuring models accurately interpret context and tone.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
