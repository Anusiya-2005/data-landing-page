import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Data Labeling Services for AI and ML Models | PI-BI Technologies',
  description: 'PiBi Tech provides accurate data annotation and labeling services for image, video, audio, and text datasets across AI/ML, NLP, Generative AI, and Computer Vision.',
};

export default function DataLabelingServicesPage() {
  return (
    <main className="page" data-route="/data-labeling-services">
      {/* Hero Section */}
      <section className="hero center" style={{ padding: '80px 0 60px' }}>
        <div className="hero-grid"></div>
        <div className="container hero-content">
          <div className="hero-pill">
            <span className="pulse"></span>
            Comprehensive Annotation &amp; Curation
          </div>
          <h1 style={{ maxWidth: '960px', margin: '0 auto 20px', lineHeight: 1.2 }}>
            Data labeling Services for <span className="gradient-text">AI and ML Models</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
            Transforming raw data into high-precision, production-grade training datasets with human-in-the-loop expertise, automated quality control, and scalable domain annotation.
          </p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <a className="btn primary" href="#services-list">
              Explore All Services <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
            </a>
            <Link className="btn secondary" href="/contact">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Core Content Sections */}
      <section className="section alt" id="services-list" style={{ padding: '80px 0 100px' }}>
        <div className="container">
          <div className="rows">

            {/* 1. Data Annotation */}
            <div className="row">
              <div className="row-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(61, 114, 242, 0.1)', color: 'var(--blue)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
                  <svg className="icon" style={{ width: '16px', height: '16px' }} aria-hidden="true"><use href="#i-tag" /></svg>
                  01. Data Annotation
                </div>
                <h3>Data Annotation</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginTop: '16px' }}>
                  PiBi Tech provides accurate data annotation and labeling services for image, video, audio, and text datasets. Our trained annotators and quality checks ensure consistent, high-quality data for{' '}
                  <Link
                    href="/solutions/ai-ml"
                    style={{
                      color: 'var(--blue)',
                      fontWeight: 700,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      transition: 'color 0.2s',
                    }}
                  >
                    AI and machine learning applications
                  </Link>.
                </p>
                <div className="row-tags" style={{ marginTop: '20px' }}>
                  <span>Image &amp; Video</span>
                  <span>Audio Datasets</span>
                  <span>Text Labeling</span>
                  <span>Quality Assurance</span>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <Link href="/solutions/ai-ml" className="btn primary">
                    Explore AI/ML Services <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                  </Link>
                </div>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar">
                      <i></i><i></i><i></i>
                      <span>Multi-modal Dataset Annotation</span>
                    </div>
                    <div className="win-body">
                      <table className="ds">
                        <thead>
                          <tr>
                            <th>Dataset Type</th>
                            <th>Sample Modality</th>
                            <th>Annotation Task</th>
                            <th>QA Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong style={{ color: 'var(--navy)' }}>Visual Data</strong></td>
                            <td><span className="pill c">Images / 4K</span></td>
                            <td>Multi-class Bounding Boxes</td>
                            <td><span className="pill t">100% Verified</span></td>
                          </tr>
                          <tr>
                            <td><strong style={{ color: 'var(--navy)' }}>Speech Data</strong></td>
                            <td><span className="pill b">Audio / Multilingual</span></td>
                            <td>Timestamp &amp; Phoneme</td>
                            <td><span className="pill t">100% Verified</span></td>
                          </tr>
                          <tr>
                            <td><strong style={{ color: 'var(--navy)' }}>Text Corpus</strong></td>
                            <td><span className="pill c">Tabular / JSON</span></td>
                            <td>Entity &amp; Intent Tagging</td>
                            <td><span className="pill t">100% Verified</span></td>
                          </tr>
                          <tr>
                            <td><strong style={{ color: 'var(--navy)' }}>Video Stream</strong></td>
                            <td><span className="pill g">Sensor / 60 FPS</span></td>
                            <td>Tracking &amp; Keypoint Polygons</td>
                            <td><span className="pill b">In Progress</span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="life-loop" style={{ marginTop: '16px', background: '#eef8f5', borderColor: '#c4eee3', color: '#0d7d63' }}>
                        <svg className="icon" aria-hidden="true"><use href="#i-shield" /></svg> Trained annotators with automated 3-tier validation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Text Annotation (Flipped) */}
            <div className="row flip">
              <div className="row-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(34, 184, 176, 0.12)', color: 'var(--teal)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
                  <svg className="icon" style={{ width: '16px', height: '16px' }} aria-hidden="true"><use href="#i-chat" /></svg>
                  02. Text Annotation
                </div>
                <h3>Text Annotation</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginTop: '16px' }}>
                  PiBi Tech transforms raw text into structured, AI-ready data through precise text annotation. Our services cover text classification, entity recognition, sentiment analysis, semantic labeling, and{' '}
                  <Link
                    href="/solutions/nlp"
                    style={{
                      color: 'var(--blue)',
                      fontWeight: 700,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      transition: 'color 0.2s',
                    }}
                  >
                    NLP annotation
                  </Link>{' '}
                  with strong quality control.
                </p>
                <div className="row-tags" style={{ marginTop: '20px' }}>
                  <span>Entity Recognition</span>
                  <span>Sentiment Analysis</span>
                  <span>Semantic Labeling</span>
                  <span>NLP Quality Control</span>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <Link href="/solutions/nlp" className="btn primary">
                    Explore NLP Services <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                  </Link>
                </div>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar">
                      <i></i><i></i><i></i>
                      <span>Semantic &amp; NER Text Annotation</span>
                    </div>
                    <div className="win-body">
                      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '16px', fontSize: '0.92rem', lineHeight: 1.8 }}>
                        <div style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: '8px', fontSize: '0.98rem', borderBottom: '1px solid var(--line)', paddingBottom: '6px' }}>
                          Structured Entity &amp; Sentiment Extraction
                        </div>
                        <p style={{ color: '#334155' }}>
                          Patient presents with acute{' '}
                          <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px', fontWeight: 600, border: '1px solid #bae6fd' }}>
                            glaucoma <small style={{ fontSize: '0.72rem', color: '#0284c7' }}>[CONDITION]</small>
                          </span>{' '}
                          and recurring symptoms of{' '}
                          <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px', fontWeight: 600, border: '1px solid #bae6fd' }}>
                            chronic bronchitis <small style={{ fontSize: '0.72rem', color: '#0284c7' }}>[CONDITION]</small>
                          </span>.
                          Reported side effect:{' '}
                          <span style={{ background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '6px', fontWeight: 600, border: '1px solid #fde68a' }}>
                            drowsiness <small style={{ fontSize: '0.72rem', color: '#d97706' }}>[SIDE-EFFECT]</small>
                          </span>.
                          Sentiment assessed as{' '}
                          <span style={{ background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '6px', fontWeight: 600, border: '1px solid #bbf7d0' }}>
                            Moderate Urgency <small style={{ fontSize: '0.72rem', color: '#16a34a' }}>[SENTIMENT]</small>
                          </span>.
                        </p>
                      </div>
                      <div className="cl" style={{ marginTop: '14px' }}>
                        <div className="li">
                          <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                          <span><strong>100% Consensus:</strong> Validated by certified NLP annotators</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Data Labeling for LLM */}
            <div className="row">
              <div className="row-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(61, 114, 242, 0.1)', color: 'var(--blue)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
                  <svg className="icon" style={{ width: '16px', height: '16px' }} aria-hidden="true"><use href="#i-spark" /></svg>
                  03. Generative AI &amp; LLM
                </div>
                <h3>Data Labeling for LLM</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginTop: '16px' }}>
                  PiBi Tech prepares high-quality datasets for Large Language Models through prompt-response labeling, data curation, classification, and instruction tuning. Our annotation workflows help build reliable datasets for{' '}
                  <Link
                    href="/solutions/generative-ai"
                    style={{
                      color: 'var(--blue)',
                      fontWeight: 700,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      transition: 'color 0.2s',
                    }}
                  >
                    training and fine-tuning AI models
                  </Link>.
                </p>
                <div className="row-tags" style={{ marginTop: '20px' }}>
                  <span>Prompt-Response Pairs</span>
                  <span>Instruction Tuning</span>
                  <span>RLHF Ranking</span>
                  <span>Safety &amp; Hallucination Checks</span>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <Link href="/solutions/generative-ai" className="btn primary">
                    Explore Generative AI Services <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                  </Link>
                </div>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar">
                      <i></i><i></i><i></i>
                      <span>LLM Prompt &amp; Instruction Tuning</span>
                    </div>
                    <div className="win-body">
                      <div style={{ background: '#f8fafc', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px 14px', marginBottom: '12px' }}>
                        <small style={{ color: 'var(--muted)', fontWeight: 700, display: 'block', textTransform: 'uppercase', fontSize: '0.72rem' }}>User Prompt</small>
                        <span style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem' }}>"Summarize the legal contract terms and identify liability clauses."</span>
                      </div>
                      <div style={{ background: '#fff', border: '1.5px solid #2BC59E', borderRadius: '10px', padding: '12px 14px', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <small style={{ color: '#0d7d63', fontWeight: 800, fontSize: '0.75rem' }}>Response Evaluation (RLHF Rank #1)</small>
                          <span className="pill t">Score: 9.9/10</span>
                        </div>
                        <p style={{ color: '#334155', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                          Key terms extracted with full clause attribution, no hallucinations, and structured risk ratings.
                        </p>
                      </div>
                      <div className="life-loop" style={{ marginTop: '12px' }}>
                        <svg className="icon" aria-hidden="true"><use href="#i-check" /></svg> Human-curated ground truth for fine-tuning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Image Annotation (Flipped) */}
            <div className="row flip">
              <div className="row-text">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(34, 184, 176, 0.12)', color: 'var(--teal)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
                  <svg className="icon" style={{ width: '16px', height: '16px' }} aria-hidden="true"><use href="#i-cam" /></svg>
                  04. Computer Vision
                </div>
                <h3>Image Annotation</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginTop: '16px' }}>
                  PiBi Tech delivers accurate image annotation and video annotation for{' '}
                  <Link
                    href="/solutions/computer-vision"
                    style={{
                      color: 'var(--blue)',
                      fontWeight: 700,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      transition: 'color 0.2s',
                    }}
                  >
                    computer vision applications
                  </Link>{' '}
                  using bounding boxes, polygons, keypoints, and segmentation. Our solutions support AI use cases across healthcare, retail, autonomous systems, and industrial applications.
                </p>
                <div className="row-tags" style={{ marginTop: '20px' }}>
                  <span>Bounding Boxes</span>
                  <span>Polygon Segmentation</span>
                  <span>Keypoint Annotation</span>
                  <span>Video Frame Tracking</span>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <Link href="/solutions/computer-vision" className="btn primary">
                    Explore Computer Vision Services <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
                  </Link>
                </div>
              </div>
              <div className="media">
                <div className="mock">
                  <div className="win">
                    <div className="win-bar">
                      <i></i><i></i><i></i>
                      <span>Computer Vision &amp; Spatial Labeling</span>
                    </div>
                    <div className="win-body">
                      <div style={{ position: 'relative', width: '100%', height: '170px', borderRadius: '12px', overflow: 'hidden', background: 'linear-gradient(135deg, #1e293b, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Visual SVG bounding box canvas */}
                        <svg viewBox="0 0 400 170" style={{ width: '100%', height: '100%' }}>
                          {/* Grid background */}
                          <defs>
                            <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                            </pattern>
                          </defs>
                          <rect width="400" height="170" fill="url(#gridPattern)" />

                          {/* Bounding box 1 */}
                          <rect x="30" y="30" width="130" height="105" fill="rgba(34, 197, 94, 0.18)" stroke="#22c55e" strokeWidth="2.5" rx="4" />
                          <rect x="30" y="16" width="112" height="18" fill="#22c55e" rx="3" />
                          <text x="35" y="29" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif">Vehicle: 99.4%</text>

                          {/* Bounding box 2 */}
                          <rect x="200" y="45" width="170" height="85" fill="rgba(59, 130, 246, 0.18)" stroke="#3b82f6" strokeWidth="2.5" rx="4" />
                          <rect x="200" y="31" width="138" height="18" fill="#3b82f6" rx="3" />
                          <text x="205" y="44" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif">Polygon Segment: 98.8%</text>

                          {/* Keypoint markers */}
                          <circle cx="285" cy="85" r="4" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
                          <circle cx="250" cy="110" r="4" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
                          <circle cx="320" cy="110" r="4" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
                          <line x1="285" y1="85" x2="250" y2="110" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                          <line x1="285" y1="85" x2="320" y2="110" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                        </svg>
                      </div>
                      <div className="tagrow" style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span className="pill c">Pixel-accurate 2D/3D</span>
                        <span className="pill t">Automated IoU Check</span>
                        <span className="pill b">Multi-layer Polygons</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              padding: '48px 36px',
              borderRadius: '24px',
              border: '1px solid var(--line)',
              background: 'linear-gradient(135deg, #123C64 0%, #1E5B88 100%)',
              color: '#ffffff',
              boxShadow: 'var(--shadow2)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Ready to Accelerate Your AI Pipeline?
            </h2>
            <p style={{ margin: '16px auto 0', maxWidth: '640px', color: '#DEE8F0', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Get in touch with our data annotation specialists today to discuss sample pilots, SLA terms, and custom dataset curation.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link className="btn primary" href="/contact">
                Request Dataset Quote <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </Link>
              <Link className="btn secondary" href="/" style={{ background: '#ffffff', color: 'var(--navy)', borderColor: '#ffffff', fontWeight: 700 }}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
