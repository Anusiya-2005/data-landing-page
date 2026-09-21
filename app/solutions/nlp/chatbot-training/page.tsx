import Image from 'next/image';

export default function ChatbotTrainingPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Chatbot Training</h1>
          <p>
            Prepare conversation data that helps assistants understand messages and respond appropriately.
          </p>
          <div className="premium-image-wrapper">
            <div style={{width: '100%', height: '500px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>Image Placeholder</div>
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our chatbot training approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/chatbot training.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Chatbot Training Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Chatbot Training Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              An effective conversational AI must do more than parse keywords—it must understand user intent, maintain context over multiple turns, and provide natural, empathetic responses. High-quality chatbot training data is the key to achieving this fluid conversational intelligence, transforming frustrating automated menus into helpful digital assistants.
            </p>
            <p>
              We curate, structure, and annotate conversational datasets that teach models the intricacies of human dialogue. By labeling intents, tracking dialogue states, and generating ideal response pairs, our data ensures your chatbots can seamlessly handle diverse queries, adhere to conversational protocols, and deliver an exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Empowering conversational AI with context and intelligence.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Message Recognition Training</h3>
              <p>Annotate text and voice inputs to help models accurately recognize slang, typos, and nuanced user phrasing.</p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img" style={{height: '200px', background: '#cbd5e1'}}></div>
              <h3>Conversational Protocols</h3>
              <p>Train chatbots to follow specific business logic, maintain polite tone, and seamlessly hand off to human agents when needed.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
