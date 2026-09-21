import Image from 'next/image';

export default function IntentClassificationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Intent Classification</h1>
          <p>
            Identify what a user is trying to do in a message so systems can route and answer it correctly.
          </p>
          <div className="premium-image-wrapper">
            <div style={{width: '100%', height: '500px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>Image Placeholder</div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our intent classification approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/intent classifiction.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Intent Classification Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Intent Classification Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              At the core of every intelligent conversational interface or automated routing system is Intent Classification. By accurately determining what a user wants—whether it's checking a balance, requesting a refund, or seeking technical support—systems can act decisively and provide immediate, relevant solutions.
            </p>
            <p>
              We meticulously analyze and tag large datasets of user queries, mapping diverse phrasings, slang, and contextual nuances to specific intent categories. This rigorous labeling process ensures that your AI models do not just rely on keyword matching, but genuinely understand the underlying purpose of a message, drastically improving resolution rates and user satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Decoding user goals to drive automated actions.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Analyzing Datasets</h3>
              <p>We audit existing query logs to define a robust, non-overlapping intent taxonomy tailored to your users' actual behaviors.</p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Tagging Texts</h3>
              <p>Applying intent labels across thousands of utterances, encompassing edge cases, ambiguities, and multi-intent messages.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
