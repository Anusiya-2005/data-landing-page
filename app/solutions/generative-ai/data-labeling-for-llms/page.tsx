export default function DataLabelingForLLMsPage() {
  return (
    <main>
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
            <span className="gradient-text">Data Labeling for Large Language Models</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/Data Labeling for Large Language Models.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Data Labeling for LLMs Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is Data Labeling for LLMs?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Large language models are only as good as the labeled data they are trained on. Data labeling for LLMs is the specialized work of preparing that data across every stage of the development lifecycle. At pre-training, it means curating and cleaning vast corpora so that fundamental patterns in language, facts, and reasoning are learned cleanly. At the supervised fine-tuning stage, it means producing high-quality prompt-response pairs that teach the model how to follow instructions in your target domain. Beyond text, modern LLMs also need labeled code — generation, completion, and debugging examples — and multi-language translation datasets that preserve meaning across languages. Data conversion work transforms unstructured content into the structured formats models can ingest. At PIBI Solutions, every labeling task is governed by a detailed annotation guideline, executed by a trained and calibrated workforce, reviewed for quality, and delivered with the lineage information your team needs to understand exactly what was built and why.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>Labeled data for every phase of large language model development.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#3D72F2,#1E5B88)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3>Pre-Training Data</h3>
              <p>We source, filter, deduplicate, and quality-check large text corpora from web, books, code, and domain-specific sources. Every document passes toxicity screening, near-duplicate removal, and relevance scoring before being added to your pre-training pool.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#2BC59E,#1E5B88)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </div>
              <h3>Supervised Fine-Tuning</h3>
              <p>Domain experts and skilled writers produce prompt-response pairs for your specific use case — customer support, legal summarization, medical Q&amp;A, or coding assistance. Each pair is reviewed for factual accuracy, instruction adherence, and tone before final delivery.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#f39c12,#e67e22)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Code Generation Data</h3>
              <p>We produce labeled datasets for code generation, completion, debugging, and explanation tasks across Python, JavaScript, SQL, and other languages. Human reviewers check correctness, efficiency, and documentation quality so your coding model learns from genuinely good examples.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#27ae60,#1e8449)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
              </div>
              <h3>Data Conversion</h3>
              <p>We transform content from PDFs, scanned documents, tables, audio transcripts, and legacy formats into clean, structured training-ready datasets — with full provenance tracking, schema mapping, and quality validation at every conversion step.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#8e44ad,#6c3483)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              </div>
              <h3>Translation</h3>
              <p>Our multilingual teams produce high-quality translated training pairs that preserve meaning, register, tone, and cultural nuance across languages — giving your multilingual model the accurate parallel data it needs to learn genuine cross-language understanding.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
