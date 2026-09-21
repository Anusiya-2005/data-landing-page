export default function Page() {
  return (
    <main className="page is-active" data-route="/">
      <div dangerouslySetInnerHTML={{__html: "<section class=\"hero center\"><div class=\"container hero-grid\"><div><h1>Data services for the AI models you are building</h1><p class=\"hero-lead\" style=\"margin-inline:auto\">PI-BI Technologies prepares, labels, and validates the data behind AI. Choose a solution to see what we cover.</p><div class=\"hero-actions\"><button class=\"btn primary\" data-scroll=\"solutions\">View solutions <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-arrow\"/></svg></button></div></div></div></section><section class=\"section alt\" data-anchor=\"solutions\"><div class=\"container\"><div class=\"section-head center\"><h2>Our solutions</h2><p>Four areas of AI data work, each with its own page.</p></div><div class=\"sol-grid\"><a class=\"sol\" href=\"#/solutions/ai-ml\"><span class=\"sol-ico\"><svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-brain\"/></svg></span><h3>AI/ML</h3><p>Collection, labeling, quality checks, validation, and monitoring for machine learning datasets.</p><span class=\"go\">Learn more <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-arrow\"/></svg></span></a><a class=\"sol\" href=\"#/solutions/nlp\"><span class=\"sol-ico\"><svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-chat\"/></svg></span><h3>NLP</h3><p>Text annotation, classification, entity recognition, chatbot training, and video transcription.</p><span class=\"go\">Learn more <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-arrow\"/></svg></span></a><a class=\"sol\" href=\"#/solutions/generative-ai\"><span class=\"sol-ico\"><svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-spark\"/></svg></span><h3>Generative AI</h3><p>RLHF, stress testing, LLM data labeling, prompt and response design, and model evaluation.</p><span class=\"go\">Learn more <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-arrow\"/></svg></span></a><a class=\"sol\" href=\"#/solutions/computer-vision\"><span class=\"sol-ico\"><svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-eye\"/></svg></span><h3>Computer Vision</h3><p>Image, video, and 3D point cloud annotation, AI-assisted labeling, and model validation.</p><span class=\"go\">Learn more <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#i-arrow\"/></svg></span></a></div></div></section>"}} />

      <section className="section alt" data-anchor="industries">
        <div className="container">
          <div className="section-head center">
            <h2>Industries We Serve</h2>
            <p>Tailored AI data solutions for domain-specific challenges.</p>
          </div>
          <div className="industry-grid">
            <a className="industry-card" href="#/industries/healthcare">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-health"/></svg></span>
              <h3>Healthcare</h3>
              <p>Medical image annotation, clinical NLP, and HIPAA-compliant data processing.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
            <a className="industry-card" href="#/industries/finance">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-bank"/></svg></span>
              <h3>Finance</h3>
              <p>Document digitization, entity extraction for KYC, and financial sentiment analysis.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
            <a className="industry-card" href="#/industries/retail">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-tag"/></svg></span>
              <h3>Retail & E-commerce</h3>
              <p>Product categorization, visual search tagging, and customer review analysis.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
            <a className="industry-card" href="#/industries/autonomous-vehicles">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-route"/></svg></span>
              <h3>Autonomous Vehicles</h3>
              <p>3D sensor fusion, bounding boxes, semantic segmentation, and LiDAR annotation.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
          </div>
        </div>
      </section>
        </main>
  );
}
