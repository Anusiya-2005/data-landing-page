'use client';

import Link from 'next/link';
import { openDatasetModal } from '@/components/DatasetModal';

export default function Page() {
  return (
    <main className="page is-active" data-route="/">
      {/* Hero Section with Data Content & Blue Theme */}
      <section className="hero center" id="home">
        <div className="hero-grid"></div>
        <div className="container hero-content">
          <div className="hero-pill">
            <span className="pulse"></span>
            Data Services at PI-BI Technologies
          </div>
          <h1>
            <span className="gradient-text">Data services</span> for the AI models you are building
          </h1>
          <p className="hero-lead">
            PI-BI Technologies prepares, labels, and validates the data behind AI. Choose a solution to see what we cover.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#solutions">
              View solutions <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
            </a>
            <Link className="btn secondary" href="/company">
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section alt" id="solutions" data-anchor="solutions">
        <div className="container">
          <div className="section-head center">
            <h2>Our solutions</h2>
            <p>Four areas of AI data work, each with its own page.</p>
          </div>
          <div className="sol-grid">
            <Link className="sol" href="/solutions/ai-ml">
              <span className="sol-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-brain" /></svg>
              </span>
              <h3>AI/ML</h3>
              <p>Collection, labeling, quality checks, validation, and monitoring for machine learning datasets.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
            <Link className="sol" href="/solutions/nlp">
              <span className="sol-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-chat" /></svg>
              </span>
              <h3>NLP</h3>
              <p>Text annotation, classification, entity recognition, chatbot training, and video transcription.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
            <Link className="sol" href="/solutions/generative-ai">
              <span className="sol-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-spark" /></svg>
              </span>
              <h3>Generative AI</h3>
              <p>RLHF, stress testing, LLM data labeling, prompt and response design, and model evaluation.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
            <Link className="sol" href="/solutions/computer-vision">
              <span className="sol-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-eye" /></svg>
              </span>
              <h3>Computer Vision</h3>
              <p>Image, video, and 3D point cloud annotation, AI-assisted labeling, and model validation.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section" data-anchor="industries">
        <div className="container">
          <div className="section-head center">
            <h2>Industries We Serve</h2>
            <p>Tailored AI data solutions for domain-specific challenges.</p>
          </div>
          <div className="industry-grid">
            <Link className="industry-card" href="/industries/healthcare">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-health" /></svg>
              </span>
              <h3>Healthcare</h3>
              <p>Medical image annotation, clinical NLP, and HIPAA-compliant data processing.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
            <Link className="industry-card" href="/industries/finance">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-bank" /></svg>
              </span>
              <h3>Finance</h3>
              <p>Document digitization, entity extraction for KYC, and financial sentiment analysis.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
            <Link className="industry-card" href="/industries/retail">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-tag" /></svg>
              </span>
              <h3>Retail & E-commerce</h3>
              <p>Product categorization, visual search tagging, and customer review analysis.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
            <Link className="industry-card" href="/industries/autonomous-vehicles">
              <span className="ind-ico">
                <svg className="icon" aria-hidden="true"><use href="#i-route" /></svg>
              </span>
              <h3>Autonomous Vehicles</h3>
              <p>3D sensor fusion, bounding boxes, semantic segmentation, and LiDAR annotation.</p>
              <span className="go">
                Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Get in Touch CTA Section (matching Screenshot 1) */}
      <section className="section cta-section" id="contact">
        <div className="container">
          <div className="section-head center">
            <span className="section-kicker">GET IN TOUCH</span>
            <h2>Ready to Build AI You Can Trust?</h2>
            <p>
              Create AI-ready data with enterprise dataset creation, Human-in-the-Loop validation, AI evaluation, and governance built for production-scale AI.
            </p>
          </div>

          <div className="cta-box-card">
            <h3>
              Let&apos;s discuss your AI initiative and build the right data foundation for success.
            </h3>
            <button 
              type="button" 
              className="btn primary cta-modal-btn"
              onClick={openDatasetModal}
            >
              Talk to an AI Data Expert
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
