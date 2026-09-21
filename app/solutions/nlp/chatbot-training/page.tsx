import Image from 'next/image';

export default function ChatbotTrainingPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Chatbot Training</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/chatbot training.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Chatbot Training Overview Video"></video>
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
                <span><strong>Text/Voice Message Recognition Training Data</strong> — Annotates diverse inputs — slang, typos, regional phrasing — across text and voice modalities.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Training Data for Chatbots to Accurately Respond</strong> — Pairs user queries with ideal responses aligned to your brand voice and business rules.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Chatbot Training to Maintain Conversational Protocols</strong> — Labels greetings, escalations, and hand-offs so assistants follow correct conversational flows.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Empowering conversational AI with context and intelligence.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/language_id.jpg" alt="Message Recognition Training" width={600} height={338} /></div>
              <h3>Message Recognition Training</h3>
              <p>Annotate text and voice inputs to help models accurately recognize slang, typos, and nuanced user phrasing across all channels.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_categorization.jpg" alt="Conversational Protocols" width={600} height={338} /></div>
              <h3>Conversational Protocols</h3>
              <p>Train chatbots to follow specific business logic, maintain a polite tone, and seamlessly hand off to human agents when needed.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
