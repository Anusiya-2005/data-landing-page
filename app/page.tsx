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

      {/* Powering AI with High-Quality Data Section */}
      <section className="section" style={{ padding: '64px 0 24px' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              padding: '48px 40px',
              borderRadius: '24px',
              border: '1px solid var(--line)',
              background: 'linear-gradient(180deg, #ffffff 0%, var(--soft) 100%)',
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: 'var(--navy)', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.2 }}>
              Powering AI with <span className="gradient-text">High-Quality Data</span>
            </h2>
            <p style={{ margin: '20px auto 0', maxWidth: '780px', color: '#475569', fontSize: '1.06rem', lineHeight: 1.75 }}>
              PiBi Tech delivers intelligent data labeling and curation solutions designed to help businesses build accurate, reliable, and AI-ready datasets. Our domain-focused approach combines human expertise, automation, and quality validation to transform raw data into high-quality training data for AI and machine learning applications.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
              <Link className="btn primary" href="/data-labeling-services">
                Continue Exploring <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section alt" id="solutions" data-anchor="solutions">
        <div className="container">
          <div className="section-head center">
            <h2>Our <span className="gradient-text">Solutions</span></h2>
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
            <h2>Industries We <span className="gradient-text">Serve</span></h2>
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
            <h2>Ready to Build AI <span className="gradient-text">You Can Trust?</span></h2>
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
