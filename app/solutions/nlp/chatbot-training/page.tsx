import Image from 'next/image';

export default function ChatbotTrainingPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}><span className="gradient-text">Chatbot Training</span></h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/chatbot training.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Chatbot Training Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is Chatbot Training Data?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>A chatbot or conversational AI model is only as good as the data it was trained on. Chatbot training requires carefully curated datasets of real-world messages paired with ideal responses, intent labels, entity tags, and conversation flow annotations — across both text and voice modalities. The data must reflect the full diversity of how real users communicate: different phrasings of the same intent, regional slang, typos, multi-turn context, and ambiguous requests that require a clarifying question. At PIBI Solutions, we build these conversational training datasets from the ground up. Our teams annotate message recognition data, create ideal response pairs aligned to your brand voice and business rules, and label the conversational protocols — greetings, escalations, and hand-offs — that ensure your assistant behaves professionally and consistently across every interaction type.</p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center"><h2>Detailed Offerings</h2><p>Empowering conversational AI with context and intelligence.</p></div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/language_id.jpg" alt="Text/Voice Message Recognition Training Data" width={600} height={338} /></div>
              <h3>Text/Voice Message Recognition Training Data</h3>
              <p>Annotate text and voice inputs to help models accurately recognize slang, typos, regional phrasings, and nuanced user intent across all channels and languages.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_categorization.jpg" alt="Training Data for Accurate Responses" width={600} height={338} /></div>
              <h3>Training Data for Accurate Responses</h3>
              <p>Curate high-quality prompt-response pairs aligned to your brand voice and business rules, giving your model the reliable ground truth it needs to answer user queries correctly and consistently.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Chatbot Training for Conversational Protocols" width={600} height={338} /></div>
              <h3>Chatbot Training for Conversational Protocols</h3>
              <p>Label greetings, escalations, clarifying questions, and agent hand-offs so your assistant follows the exact conversational flow your business requires — professionally and consistently across every interaction.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
