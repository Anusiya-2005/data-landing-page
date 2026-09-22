export default function PromptAndResponseGenerationPage() {
  return (
    <main>
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
            Prompt and Response <span className="gradient-text">Generation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/Prompt and Response Generation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Prompt and Response Generation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Prompt and Response Generation?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              A language model learns to behave by example. The prompts you show it define what kinds of requests it should handle, and the responses you pair with those prompts define how it should handle them. Prompt and response generation is the discipline of creating those examples deliberately, at the coverage and quality needed for effective training. At PIBI Solutions, our writers design prompts that span the full range of your use case, from simple single-turn queries to complex multi-step instructions, and write reference responses that are accurate, appropriately styled, and grounded in relevant knowledge. For STEM topics, domain experts verify factual correctness. For multimodal tasks, prompts are paired with the images or audio they reference. Every prompt-response pair passes an optimization review that checks for clarity, completeness, and alignment with your guidelines. The result is a curated training set where every example was written with your model&apos;s learning objectives in mind, not scraped and filtered from the web.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Purposefully designed prompts and reference responses for every modality.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#3D72F2,#2BC59E)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              <h3>AI Prompt Design &amp; Generation</h3>
              <p>We write diverse, coverage-maximizing prompt sets for your specific task (customer service, summarization, Q&amp;A, creative writing, or instruction-following). Each batch includes simple, medium, and complex difficulty tiers with varied phrasing to prevent overfitting to narrow prompt styles.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#1E5B88,#37AFE5)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </div>
              <h3>Prompts and Responses for LLMs</h3>
              <p>Expert writers produce the ideal prompt-response pairs that teach your model how to behave. Every response is reviewed for factual accuracy, completeness, appropriate length, formatting, and tone alignment with your product voice. Multiple reviewers validate high-stakes or domain-specific pairs.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#e67e22,#d35400)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>
              </div>
              <h3>Prompt Optimization</h3>
              <p>We analyze prompt performance metrics and iteratively rewrite prompts that underperform, including those that produce inconsistent model outputs, generate refusals, or fail to elicit the target behavior. Optimization passes improve clarity, specificity, and contextual grounding.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#8e44ad,#6c3483)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="9" y1="10" x2="15" y2="10"/></svg>
              </div>
              <h3>NLP Prompt Engineering</h3>
              <p>We design prompts specifically optimized for NLP tasks (text classification, summarization, entity extraction, and question answering) with phrasing tuned to elicit the structured output your NLP pipeline expects from the model.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#27ae60,#2ecc71)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="9"/><rect x="14" y="7" width="3" height="5"/></svg>
              </div>
              <h3>STEM Writing Prompt Design</h3>
              <p>Subject-matter experts in science, technology, engineering, and mathematics write and verify prompts and reference answers, ensuring factual accuracy, appropriate technical depth, and clear explanations suitable for your model&apos;s target audience.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-icon" style={{ background: 'linear-gradient(135deg,#e67e22,#d35400)', borderRadius: '14px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3>Multimodal Prompt Engineering</h3>
              <p>For multimodal models, we pair text prompts with appropriately licensed images, charts, diagrams, or audio clips and write responses grounded precisely in the provided content, covering vision-language, audio-language, and document-understanding tasks.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
