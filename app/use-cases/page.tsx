import React from 'react';
import Link from 'next/link';

export default function UseCasesDirectory() {
  return (
    <main className="page" data-route="/use-cases">
      {/* Hero Section */}
      <section className="use-cases-hero modern-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="dot"></span> Production AI in Action
          </div>
          <h1 className="hero-title">
            Real-World Deployments<br />
            Powered by <span className="gradient-text">Precision Data</span>
          </h1>
          <p className="hero-description">
            Discover how leading engineering teams rely on PI-BI Technologies to accelerate foundation models, train autonomous systems, and validate enterprise-grade intelligence with uncompromised accuracy.
          </p>
          <div className="hero-cta-group">
            <a href="#" className="btn-primary" data-scroll="domain-rows">Explore Use Cases &rarr;</a>
            <a href="#" className="btn-secondary" data-scroll="overview">Read Overview</a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section alt" data-anchor="overview">
        <div className="container overview">
          <div>
            <h2>Data Solutions Across <span className="gradient-text">Every Domain</span></h2>
            <p>
              Whether you are training LLMs, fine-tuning computer vision algorithms, or deploying predictive machine learning models, your success depends on high-quality, domain-specific data.
              Our specialized teams provide targeted annotation, extraction, and validation services tailored to your exact industry requirements.
            </p>
          </div>
          <div className="jump">
            <h3>Jump to a domain</h3>
            <div className="chips">
              <button className="chip" data-scroll="ai-ml">AI & Machine Learning</button>
              <button className="chip" data-scroll="nlp">Natural Language Processing</button>
              <button className="chip" data-scroll="gen-ai">Generative AI</button>
              <button className="chip" data-scroll="computer-vision">Computer Vision</button>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Rows */}
      <section className="section" data-anchor="domain-rows">
        <div className="container">
          <div className="section-head">
            <h2>Explore by <span className="gradient-text">Technology</span></h2>
            <p>Deep dive into industry-specific applications across our four core technology domains.</p>
          </div>

          <div className="rows">
            {/* AI/ML Row */}
            <div className="row" data-anchor="ai-ml">
              <div className="row-text">
                <h3>AI & Machine Learning</h3>
                <p>
                  Harness the power of predictive models and structured data analytics. We build the high-quality training datasets required for complex forecasting, fraud detection, and algorithmic decision-making.
                </p>
                <div className="row-tags">
                  <span>Predictive Diagnostics</span>
                  <span>Fraud Detection</span>
                  <span>Demand Forecasting</span>
                  <span>Sensor Fusion</span>
                </div>
                <Link href="/use-cases/ai-ml" className="btn primary" style={{ marginTop: '24px' }}>
                  View AI/ML Cases <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                </Link>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar"><i></i><i></i><i></i><span>Predictive Model Output</span></div>
                    <div className="win-body">
                      <div className="life">
                        <div className="st"><span className="n" style={{ background: '#3b82f6' }}>1</span><b>Ingest</b><span>Clean financial data</span></div>
                        <div className="st"><span className="n" style={{ background: '#3b82f6' }}>2</span><b>Label</b><span>Annotate anomalies</span></div>
                        <div className="st"><span className="n" style={{ background: '#3b82f6' }}>3</span><b>Train</b><span>Detect fraud patterns</span></div>
                      </div>
                      <div className="life-loop">
                        <svg className="icon" aria-hidden="true"><use href="#i-shield" /></svg> 96% Fraud Detection Accuracy Reached
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NLP Row (Flip) */}
            <div className="row flip" data-anchor="nlp">
              <div className="row-text">
                <h3>Natural Language Processing</h3>
                <p>
                  Empower your systems to understand, interpret, and generate human language. From medical coding extraction to global multilingual voice assistants, we provide the nuanced linguistic annotation you need.
                </p>
                <div className="row-tags">
                  <span>Clinical NLP</span>
                  <span>Doc Processing</span>
                  <span>Voice Commerce</span>
                  <span>Driver Monitoring</span>
                </div>
                <Link href="/use-cases/nlp" className="btn primary" style={{ marginTop: '24px' }}>
                  View NLP Cases <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                </Link>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar"><i></i><i></i><i></i><span>Entity Extraction Review</span></div>
                    <div className="win-body">
                      <div className="qa-item">"Patient presents with <span className="pill c">severe migraine</span> and <span className="pill c">nausea</span>."</div>
                      <div className="votes">
                        <div><small>Entity 1</small><span className="pill t">Symptom: Migraine</span></div>
                        <div><small>Entity 2</small><span className="pill t">Symptom: Nausea</span></div>
                        <div><small>Code mapped</small><span className="pill b">ICD-10: G43.9</span></div>
                      </div>
                      <div className="cl">
                        <div className="li"><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check" /></svg></span>Clinical review passed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gen AI Row */}
            <div className="row" data-anchor="gen-ai">
              <div className="row-text">
                <h3>Generative AI</h3>
                <p>
                  Push the boundaries of creativity and automation. Leverage RLHF, Fine-Tuning, and synthetic data generation to produce text, lifestyle imagery, and complex edge-case scenarios safely and accurately.
                </p>
                <div className="row-tags">
                  <span>LLM Fine-Tuning</span>
                  <span>Synthetic Fraud Data</span>
                  <span>Virtual Photoshoots</span>
                  <span>Edge-Case Simulation</span>
                </div>
                <Link href="/use-cases/generative-ai" className="btn primary" style={{ marginTop: '24px' }}>
                  View Gen AI Cases <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                </Link>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar"><i></i><i></i><i></i><span>RLHF Pipeline</span></div>
                    <div className="win-body">
                      <div className="qa-item">Prompt: "Summarize patient discharge notes."</div>
                      <div className="votes" style={{ gridTemplateColumns: '1fr' }}>
                        <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '8px' }}>
                          <small>Model Output A</small>
                          <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>Detailed summary missing medication schedule.</p>
                          <span className="pill c" style={{ marginTop: '8px' }}>Rank: 2</span>
                        </div>
                        <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                          <small>Model Output B</small>
                          <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>Concise summary with accurate dosage instructions.</p>
                          <span className="pill t" style={{ marginTop: '8px' }}>Rank: 1 (Preferred)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Computer Vision Row (Flip) */}
            <div className="row flip" data-anchor="computer-vision">
              <div className="row-text">
                <h3>Computer Vision</h3>
                <p>
                  Enable your systems to perceive and react to the physical world. We deliver pixel-perfect bounding boxes, polygons, and 3D LiDAR annotations for autonomous vehicles, medical imaging, and smart retail.
                </p>
                <div className="row-tags">
                  <span>3D MRI Segmentation</span>
                  <span>KYC Automation</span>
                  <span>Cashierless Checkout</span>
                  <span>LiDAR Annotation</span>
                </div>
                <Link href="/use-cases/computer-vision" className="btn primary" style={{ marginTop: '24px' }}>
                  View Vision Cases <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                </Link>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar"><i></i><i></i><i></i><span>LiDAR Point Cloud Annotation</span></div>
                    <div className="win-body" style={{ position: 'relative', height: '220px', background: '#0f172a', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Simulating a computer vision overlay */}
                      <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }}>
                        <rect x="50" y="80" width="80" height="60" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
                        <text x="50" y="72" fill="#10b981" fontSize="12" fontFamily="monospace">Vehicle: 98%</text>

                        <rect x="220" y="100" width="40" height="90" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
                        <text x="220" y="92" fill="#3b82f6" fontSize="12" fontFamily="monospace">Pedestrian: 95%</text>

                        <polygon points="320,120 380,120 370,180 330,180" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
                        <text x="320" y="112" fill="#f59e0b" fontSize="12" fontFamily="monospace">Obstacle</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
