import Image from 'next/image';
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
              <div className="premium-card-img"><Image src="/images/text_annotation_bg.jpg" alt="AI Prompt Design & Generation" width={600} height={338} /></div>
              <h3>AI Prompt Design &amp; Generation</h3>
              <p>We write diverse, coverage-maximizing prompt sets for your specific task (customer service, summarization, Q&amp;A, creative writing, or instruction-following). Each batch includes simple, medium, and complex difficulty tiers with varied phrasing to prevent overfitting to narrow prompt styles.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/phrase_chunking.jpg" alt="Prompts and Responses for LLMs" width={600} height={338} /></div>
              <h3>Prompts and Responses for LLMs</h3>
              <p>Expert writers produce the ideal prompt-response pairs that teach your model how to behave. Every response is reviewed for factual accuracy, completeness, appropriate length, formatting, and tone alignment with your product voice. Multiple reviewers validate high-stakes or domain-specific pairs.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/model_evaluation.jpg" alt="Prompt Optimization" width={600} height={338} /></div>
              <h3>Prompt Optimization</h3>
              <p>We analyze prompt performance metrics and iteratively rewrite prompts that underperform, including those that produce inconsistent model outputs, generate refusals, or fail to elicit the target behavior. Optimization passes improve clarity, specificity, and contextual grounding.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_categorization.jpg" alt="NLP Prompt Engineering" width={600} height={338} /></div>
              <h3>NLP Prompt Engineering</h3>
              <p>We design prompts specifically optimized for NLP tasks (text classification, summarization, entity extraction, and question answering) with phrasing tuned to elicit the structured output your NLP pipeline expects from the model.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="STEM Writing Prompt Design" width={600} height={338} /></div>
              <h3>STEM Writing Prompt Design</h3>
              <p>Subject-matter experts in science, technology, engineering, and mathematics write and verify prompts and reference answers, ensuring factual accuracy, appropriate technical depth, and clear explanations suitable for your model&apos;s target audience.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/synthetic_data.jpg" alt="Multimodal Prompt Engineering" width={600} height={338} /></div>
              <h3>Multimodal Prompt Engineering</h3>
              <p>For multimodal models, we pair text prompts with appropriately licensed images, charts, diagrams, or audio clips and write responses grounded precisely in the provided content, covering vision-language, audio-language, and document-understanding tasks.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
