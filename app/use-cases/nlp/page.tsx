import React from 'react';

const useCases = [
  {
    industry: 'Healthcare',

    featuredCase: {
      title: 'Automating Clinical Coding from Unstructured EHR Data',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
      challenge: 'A major hospital network struggled with the manual, time-consuming process of mapping doctor notes to specific ICD-10 codes, leading to billing delays and revenue leakage.',
      solution: 'PI-BI Tech implemented a custom NLP pipeline to extract clinical entities, diagnoses, and treatments, mapping them automatically to standardized medical codes.',
      outcome: 'The automated system reduced coding time by 75%, minimized human error, and accelerated the revenue cycle management process significantly.'
    },
    cases: [
      { tag: 'Clinical NLP', title: 'Coding & Billing Automation', description: 'Automate clinical coding by mapping unstructured doctor notes to ICD-10 and CPT codes.' },
      { tag: 'Data Extraction', title: 'Symptom Extraction', description: 'Extract symptoms, diagnoses, and treatments from EHRs for predictive analytics and population health.' },
      { tag: 'Triage', title: 'Emergency Department Triage', description: 'Analyze incoming patient queries or intake forms to prioritize urgency and route to the correct specialist.' },
      { tag: 'Patient Sentiment', title: 'Feedback Analysis', description: 'Analyze patient feedback surveys at scale to improve healthcare service delivery and patient experience.' }
    ]
  },
  {
    industry: 'Finance',

    featuredCase: {
      title: 'Intelligent Document Processing for Loan Origination',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
      challenge: 'A global bank required manual review of thousands of complex loan applications, W-2s, and tax returns, severely bottlenecking the loan origination process.',
      solution: 'We deployed advanced OCR and NLP intent classification to digitize documents and extract structured, validated financial data instantly.',
      outcome: 'Loan processing times dropped from 3 days to under 4 hours, and operational costs related to document handling decreased by 60%.'
    },
    cases: [
      { tag: 'Intelligent Doc Processing', title: 'Invoice & Contract Analysis', description: 'Automate the review of legal documents and extract structured data from scanned invoices or checks.' },
      { tag: 'Text Summarization', title: 'Earnings Call Summaries', description: 'Generate concise, accurate summaries of lengthy financial reports, market research, and earnings calls.' },
      { tag: 'Sentiment Analysis', title: 'Market Sentiment', description: 'Monitor news feeds and social media to gauge market sentiment for specific equities or commodities.' },
      { tag: 'Conversational AI', title: 'Support Chatbots', description: 'Train intent classification models to handle routine banking inquiries and account management automatically.' }
    ]
  },
  {
    industry: 'Retail & E-commerce',

    featuredCase: {
      title: 'Voice-Activated Shopping and Search Understanding',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
      challenge: 'An e-commerce giant noted high cart abandonment rates on mobile due to clunky text search and a lack of conversational search capabilities.',
      solution: 'PI-BI Tech trained custom acoustic and language models for a voice assistant capable of understanding nuanced, multi-turn product queries and intents.',
      outcome: 'Mobile conversion rates increased by 22%, and the new voice search feature saw a 300% adoption rate within the first month of launch.'
    },
    cases: [
      { tag: 'Review Analysis', title: 'Customer Insights', description: 'Analyze product reviews at scale to extract feature-level sentiment (e.g., "battery life is great, but screen is dim").' },
      { tag: 'Search & Discovery', title: 'Search Understanding', description: 'Improve product search accuracy by annotating product attributes and understanding nuanced user intent.' },
      { tag: 'Voice Commerce', title: 'Voice Activated Shopping', description: 'Enable seamless shopping experiences through speech-to-text and contextual intent understanding.' },
      { tag: 'Categorization', title: 'Product Tagging', description: 'Automatically categorize millions of SKUs into appropriate taxonomy hierarchies based on descriptions.' }
    ]
  },
  {
    industry: 'Autonomous Vehicles',

    featuredCase: {
      title: 'Multilingual In-Cabin Voice Assistants',
      image: '/images/use_case_av_cabin.jpg',
      challenge: 'An automotive manufacturer needed their in-cabin voice assistant to understand heavy regional accents and colloquialisms for a global vehicle launch.',
      solution: 'We provided highly diverse, localized audio transcription and intent annotation across 15 different languages and regional dialects.',
      outcome: 'The in-cabin assistant achieved a 95% intent recognition accuracy globally, vastly improving the hands-free driver experience.'
    },
    cases: [
      { tag: 'Voice Assistants', title: 'In-Cabin Commands', description: 'Process complex, conversational navigation and media requests naturally, without rigid command structures.' },
      { tag: 'Acoustic Analysis', title: 'Driver State Monitoring', description: 'Analyze vocal stress, tone, and speech patterns to monitor driver fatigue or distress levels.' },
      { tag: 'Multimodal AI', title: 'Contextual Action', description: 'Combine voice commands with gaze detection to understand context (e.g., "Park over there").' },
      { tag: 'Localization', title: 'Multilingual Support', description: 'Train acoustic and language models for diverse dialects and languages for global vehicle deployments.' }
    ]
  }
];

export default function NlpUseCases() {
  return (
    <main className="domain-page">
      <section
        className="domain-hero"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(5, 24, 20, 0.74) 0%, rgba(6, 32, 26, 0.86) 100%), url("/images/use_case_nlp_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="domain-hero-content">
            <span className="domain-badge" style={{ borderColor: 'rgba(52, 211, 153, 0.45)' }}>NLP</span>
            <h1 className="hero-title">
              Natural Language{' '}
              <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #34d399 0%, #2dd4bf 50%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Processing
              </span>
            </h1>
            <p className="hero-description">
              Empower your systems to understand, interpret, and generate human language in ways that bring instant value to your users.
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
