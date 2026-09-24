import React from 'react';

const useCases = [
  {
    industry: 'Healthcare',

    featuredCase: {
      title: 'Automated Clinical Documentation and Discharge Summaries',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80',
      challenge: 'Physicians were spending over 2 hours a day manually typing clinical notes and discharge summaries, leading to severe burnout and reduced patient face-time.',
      solution: 'We fine-tuned a medically-aligned Large Language Model (LLM) to automatically draft comprehensive clinical documentation from raw patient encounter transcripts.',
      outcome: 'Documentation time was reduced by 60%, allowing doctors to see 15% more patients per week while maintaining high compliance standards.'
    },
    cases: [
      { tag: 'LLMs', title: 'Clinical Documentation', description: 'Utilize Large Language Models to automatically draft patient records, visit summaries, and discharge notes.' },
      { tag: 'DataSum', title: 'Literature Summarization', description: 'Quickly synthesize vast amounts of medical literature and trial data to support clinical decision-making.' },
      { tag: 'Synthetic Data', title: 'Privacy-Preserving Training', description: 'Generate realistic medical data for training models without risking patient privacy or HIPAA violations.' },
      { tag: 'Generative Design', title: 'Drug Discovery', description: 'Accelerate the design of novel molecular structures for new medications using generative models.' }
    ]
  },
  {
    industry: 'Finance',

    featuredCase: {
      title: 'Generating Synthetic Fraud Data to Train Detection Systems',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80',
      challenge: 'A digital bank could not effectively train its fraud detection algorithms because real-world fraud examples were too sparse and heavily imbalanced.',
      solution: 'Cogito Tech leveraged Generative Adversarial Networks (GANs) to synthesize millions of highly realistic, evolving fraudulent transaction patterns and synthetic identities.',
      outcome: 'The bank’s fraud detection model improved its True Positive rate by 42% without increasing the false positive rate, saving millions in potential losses.'
    },
    cases: [
      { tag: 'Fine-Tuning', title: 'Automated Reporting', description: 'Fine-tune models to automatically draft market commentary, portfolio performance reports, and Suspicious Activity Reports (SARs).' },
      { tag: 'Red Teaming', title: 'Synthetic Fraud', description: 'Generate sophisticated, evolving fraud scenarios and synthetic identities to stress-test detection systems.' },
      { tag: 'Agentic AI', title: 'Personalized Advice', description: 'Deploy autonomous agents to analyze user portfolios and create hyper-personalized financial planning recommendations.' },
      { tag: 'Code Generation', title: 'Legacy Modernization', description: 'Assist developers in translating legacy COBOL banking systems into modern architectures securely.' }
    ]
  },
  {
    industry: 'Retail & E-commerce',

    featuredCase: {
      title: 'Virtual Photoshoots and Dynamic Lifestyle Imagery',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
      challenge: 'An online fashion retailer was spending over $500,000 annually on physical photoshoots, which delayed their ability to list new inventory quickly.',
      solution: 'Using state-of-the-art Generative Diffusion models, we enabled the automatic generation of high-quality lifestyle imagery placing 3D apparel on virtual models.',
      outcome: 'Time-to-market for new clothing lines decreased from 3 weeks to 2 days, and photography overhead costs were slashed by 80%.'
    },
    cases: [
      { tag: 'Content Gen', title: 'Product Descriptions', description: 'Generate unique, SEO-optimized product descriptions and marketing copy automatically at scale.' },
      { tag: 'RLHF', title: 'Conversational Commerce', description: 'Use Reinforcement Learning with Human Feedback to train highly persuasive and polite sales chatbots.' },
      { tag: 'Visual Gen AI', title: 'Virtual Photoshoots', description: 'Generate high-quality lifestyle imagery of products without the need for expensive physical photoshoots.' },
      { tag: 'Hyper-Personalization', title: 'Dynamic Offers', description: 'Generate highly personalized marketing emails and ad copy tailored to individual browsing behaviors.' }
    ]
  },
  {
    industry: 'Autonomous Vehicles',

    featuredCase: {
      title: 'Synthesizing Edge-Case Environments for Safe Navigation',
      image: 'https://images.unsplash.com/photo-1513687289569-808603ef3110?w=400&q=80',
      challenge: 'An autonomous vehicle company needed to test their navigation algorithms in extreme blizzards and chaotic urban environments, but real-world data collection was too dangerous.',
      solution: 'Cogito Tech utilized generative neural rendering to create highly detailed, photorealistic virtual worlds simulating rare edge-cases and severe weather conditions.',
      outcome: 'The client successfully validated their self-driving stack against 10,000+ synthetic edge-cases, accelerating their path to regulatory approval.'
    },
    cases: [
      { tag: 'Simulation', title: 'Edge-Case Generation', description: 'Generate rare and complex driving scenarios (extreme weather, unusual obstacles) to train self-driving systems.' },
      { tag: 'Synthetic Environments', title: 'Virtual Worlds', description: 'Create highly detailed virtual worlds for autonomous vehicle testing using generative neural rendering.' },
      { tag: 'Data Augmentation', title: 'Dataset Expansion', description: 'Expand limited real-world datasets with synthetically generated variations to improve model robustness.' },
      { tag: 'Explainable AI', title: 'Decision Narration', description: 'Use LLMs to translate complex neural network decisions into plain English for regulatory compliance and debugging.' }
    ]
  }
];

export default function GenAiUseCases() {
  return (
    <main className="domain-page">
      <section
        className="domain-hero"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(24, 12, 6, 0.74) 0%, rgba(32, 16, 8, 0.86) 100%), url("/images/use_case_genai_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="domain-hero-content">
            <span className="domain-badge" style={{ borderColor: 'rgba(251, 146, 60, 0.45)' }}>Generative AI</span>
            <h1 className="hero-title">
              Generative{' '}
              <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 50%, #fde047 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI
              </span>
            </h1>
            <p className="hero-description">
              Push the boundaries of creativity and automation. Leverage RLHF, Fine-Tuning, and Agentic AI to produce text, images, and complex data structures.
            </p>
          </div>
        </div>
      </section>

      <section className="domain-content container">
        <div className="domain-industry-list">
          {useCases.map((section, index) => (
            <div key={section.industry} className="domain-industry-section-block" style={{ marginBottom: '100px' }}>
              <div className="industry-visual" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>
                  {section.industry.split(' ').length > 1 ? (
                    <>
                      {section.industry.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="gradient-text">{section.industry.split(' ').slice(-1)[0]}</span>
                    </>
                  ) : (
                    <span className="gradient-text">{section.industry}</span>
                  )}
                </h2>
              </div>

              {/* Featured Case Study Layout */}
              <div className="featured-case-study">
                <h3 className="case-study-title">{section.featuredCase.title}</h3>
                <div className="case-study-grid">
                  <div className="case-study-col">
                    <div className="case-study-image-wrapper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={section.featuredCase.image} alt={section.featuredCase.title} className="case-study-image" />
                    </div>
                  </div>
                  <div className="case-study-col">
                    <h4>Challenge</h4>
                    <p>{section.featuredCase.challenge}</p>
                  </div>
                  <div className="case-study-col">
                    <h4>Solution</h4>
                    <p>{section.featuredCase.solution}</p>
                  </div>
                  <div className="case-study-col">
                    <h4>Outcome</h4>
                    <p>{section.featuredCase.outcome}</p>
                  </div>
                </div>
                <div className="case-study-footer">
                  <a href="#" className="case-study-btn">Read more</a>
                </div>
              </div>

              {/* Grid of Other Use Cases */}
              <div className="industry-details expanded-grid">
                {section.cases.map((useCase, idx) => (
                  <div key={idx} className="detail-card">
                    <span className="case-tag">{useCase.tag}</span>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
