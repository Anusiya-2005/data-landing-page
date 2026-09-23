import Image from 'next/image';
export default function GenerativeAIResearchOpsPage() {
  return (
    <main>
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '0 auto' }}>
            Generative AI-Driven <span className="gradient-text">Research Ops</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/Generative AI-Driven Research Ops.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Generative AI Research Ops Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is <span className="gradient-text">Generative AI-Driven Research Ops?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Generative AI can accelerate research workflows dramatically, but only when a domain expert is steering the process. Generative AI-Driven Research Ops is our service for organizations that want to apply large language models to research tasks: synthesizing literature, extracting findings from large document sets, generating structured summaries, and identifying knowledge gaps across corpora that would take human teams months to cover. The difference between AI-assisted research and unreliable AI-generated noise is the quality of the human oversight applied at every step. At PIBI Solutions, domain experts define the prompting strategy, verify that outputs are grounded in source material, apply quality anchors that flag hallucinations or unsupported claims, and sign off on every deliverable. High-context prompting ensures that the model receives sufficient background to produce relevant, specific outputs rather than generic summaries. The result is a research acceleration capability that is both fast and trustworthy, something you can actually cite and build on.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Domain-expert-guided AI for research workflows that need to be trusted.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_classification_bg.jpg" alt="High-Context Prompting" width={600} height={338} /></div>
              <h3>High-Context Prompting</h3>
              <p>Standard prompts yield generic outputs. Our prompting specialists design context-rich instructions that include relevant background, constraints, output format requirements, and examples, so the model produces outputs that are specific, grounded, and immediately usable in your research workflow.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/production_monitoring.jpg" alt="Domain Expert Oversight" width={600} height={338} /></div>
              <h3>Domain Expert Oversight</h3>
              <p>Every research output is reviewed by a subject-matter expert in the relevant field (life sciences, legal, finance, engineering, or social research). Experts verify factual accuracy, flag unsupported claims, correct misattributions, and ensure that conclusions are warranted by the source material.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_qa.jpg" alt="Quality Anchoring" width={600} height={338} /></div>
              <h3>Quality Anchoring</h3>
              <p>We establish quality benchmarks before large-scale synthesis begins: a set of known-good outputs reviewed and approved by your team. All subsequent AI outputs are measured against those anchors for consistency, depth, and accuracy, catching drift before it reaches your final deliverable.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/theme_detection.jpg" alt="Mass Literature Synthesis" width={600} height={338} /></div>
              <h3>Mass Literature Synthesis</h3>
              <p>We process hundreds or thousands of papers, reports, and documents at scale, extracting key findings, methodologies, outcomes, and evidence quality ratings into structured formats. The synthesized output gives your research team a navigable map of the field rather than an unprocessed pile of PDFs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
