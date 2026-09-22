import React from 'react';

const useCases = [
  {
    industry: 'Healthcare',

    featuredCase: {
      title: 'Predicting Patient Readmission with Machine Learning',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80',
      challenge: 'A regional health system faced high penalty fees from Medicare due to 30-day patient readmission rates exceeding the national average.',
      solution: 'Cogito Tech curated and cleansed 10 years of historical EHR data to train a predictive model that flags high-risk patients before discharge.',
      outcome: 'The health system reduced 30-day readmissions by 22%, saving over $4 million in penalties and significantly improving post-care patient outcomes.'
    },
    cases: [
      { tag: 'Diagnostics', title: 'Predictive Diagnostics', description: 'Analyze annotated patient data to predict disease risks and outcomes before severe symptoms appear.' },
      { tag: 'Operations', title: 'Patient Readmission', description: 'Forecast the likelihood of patient readmission for proactive care and optimized hospital resource allocation.' },
      { tag: 'Genomics', title: 'Personalized Medicine', description: 'Tailor treatment plans based on individual genetic, clinical, and lifestyle profiles.' },
      { tag: 'Data Prep', title: 'Data Cleaning', description: 'Ensure high-quality, bias-free datasets for training robust clinical decision support systems.' }
    ]
  },
  {
    industry: 'Finance',

    featuredCase: {
      title: 'Real-Time Fraud Detection Using Behavioral Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
      challenge: 'A global credit card processor experienced a 30% spike in sophisticated chargeback fraud, which traditional rule-based engines failed to catch.',
      solution: 'We provided human-in-the-loop validation to label millions of anomalous transactions, training an ML model to detect subtle behavioral deviations in real-time.',
      outcome: 'Fraud detection accuracy improved to 96%, preventing $12 million in fraudulent transactions in the first quarter post-deployment.'
    },
    cases: [
      { tag: 'Security', title: 'Fraud Detection', description: 'Identify anomalous transaction patterns and distinguish between genuine activity and fraudulent behavior.' },
      { tag: 'Risk', title: 'Credit Risk Scoring', description: 'Assess borrower reliability accurately using non-traditional data sources and human-in-the-loop validation.' },
      { tag: 'Trading', title: 'Algorithmic Trading', description: 'Execute high-frequency trades using predictive market models trained on curated financial time-series data.' },
      { tag: 'Compliance', title: 'Anti-Money Laundering', description: 'Detect complex money laundering networks by analyzing relationships between entities and transactions.' }
    ]
  },
  {
    industry: 'Retail & E-commerce',

    featuredCase: {
      title: 'Dynamic Pricing Optimization in Highly Volatile Markets',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717def1?w=400&q=80',
      challenge: 'A leading e-commerce platform was losing market share because manual pricing updates could not keep pace with competitors and supply chain fluctuations.',
      solution: 'Cogito Tech built a high-quality dataset of competitor pricing, seasonal trends, and inventory levels to train an automated dynamic pricing engine.',
      outcome: 'The platform increased overall revenue by 14% and profit margins by 8% by reacting instantly to market demand and competitor actions.'
    },
    cases: [
      { tag: 'Supply Chain', title: 'Demand Forecasting', description: 'Predict future product demand to optimize supply chain, reduce waste, and manage inventory levels efficiently.' },
      { tag: 'Retention', title: 'Customer Churn', description: 'Identify at-risk customers early and deploy targeted retention strategies and personalized offers.' },
      { tag: 'Pricing', title: 'Dynamic Optimization', description: 'Automatically adjust pricing based on market demand, competitor data, and seasonal trends.' },
      { tag: 'Personalization', title: 'Product Recommendations', description: 'Annotating attributes for apparel and accessories to help platforms provide highly accurate recommendations.' }
    ]
  },
  {
    industry: 'Autonomous Vehicles',

    featuredCase: {
      title: 'Sensor Data Fusion for Advanced Environmental Awareness',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80',
      challenge: 'An ADAS developer struggled with sensor discrepancies, where LiDAR and camera inputs would occasionally conflict in low-visibility conditions (e.g., fog, heavy rain).',
      solution: 'Cogito Tech provided synchronized, multi-modal sensor annotation, accurately labeling overlapping data points from LiDAR, radar, and cameras.',
      outcome: 'The sensor fusion algorithm\'s reliability increased by 40% in low-visibility scenarios, ensuring a safer autonomous navigation stack.'
    },
    cases: [
      { tag: 'Sensor Fusion', title: 'Data Integration', description: 'Combine annotated data from LiDAR, radar, and cameras for comprehensive environmental awareness.' },
      { tag: 'Navigation', title: 'Path Planning', description: 'Calculate the safest and most efficient routes in real-time, reacting to dynamic obstacles.' },
      { tag: 'Operations', title: 'Predictive Maintenance', description: 'Monitor vehicle health and sensor telemetry to predict component failures before they occur.' },
      { tag: 'Validation', title: 'ML Model Validation', description: 'Ensure the safety and reliability of ADAS models through rigorous human-in-the-loop testing and edge-case review.' }
    ]
  }
];

export default function AiMlUseCases() {
  return (
    <main className="domain-page">
      <section className="domain-hero" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="domain-hero-content">
            <span className="domain-badge">AI / ML</span>
            <h1 className="hero-title">Artificial Intelligence & Machine Learning</h1>
            <p className="hero-description">
              Harness the power of AI to unlock data-driven insights. High-quality training datasets tailored for predictive modeling and automation.
            </p>
          </div>
        </div>
      </section>

      <section className="domain-content container">
        <div className="domain-industry-list">
          {useCases.map((section, index) => (
            <div key={section.industry} className="domain-industry-section-block" style={{ marginBottom: '100px' }}>
              <div className="industry-visual" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>{section.industry}</h2>
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
