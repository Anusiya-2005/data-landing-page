import React from 'react';

const useCases = [
  {
    industry: 'Healthcare',

    featuredCase: {
      title: 'Accelerating Tumor Detection with 3D MRI Segmentation',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
      challenge: 'A medical AI startup needed to train a highly accurate diagnostic model but struggled to find reliable, pixel-perfect 3D segmentation data for MRI scans.',
      solution: 'Cogito Tech provided a dedicated team of medical annotators to meticulously segment thousands of MRI slices using polygon and 3D voxel annotation techniques.',
      outcome: 'The client’s AI model achieved a 94% accuracy rate in early-stage tumor detection, securing FDA clearance for their diagnostic software.'
    },
    cases: [
      { tag: 'Medical Imaging', title: 'X-Ray & MRI Annotation', description: 'Expert annotation of X-rays, CT scans, MRIs, and digital pathology slides to enhance diagnostic accuracy for tumor detection and anomalies.' },
      { tag: 'Patient Monitoring', title: 'Real-time Alert Validation', description: 'AI-assisted video and audio analysis for real-time patient monitoring and alert validation in ICUs and general wards.' },
      { tag: 'Surgical Analysis', title: 'Procedural Tracking', description: 'Analyze surgical videos using semantic segmentation to track instruments and assist in training and quality assurance.' },
      { tag: 'Remote Care', title: 'Telehealth Diagnostics', description: 'Enable remote preliminary diagnostics by analyzing patient-submitted images of skin conditions or injuries.' }
    ]
  },
  {
    industry: 'Finance',

    featuredCase: {
      title: 'Automated KYC and Fraud Prevention at Scale',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
      challenge: 'A leading FinTech app faced a massive backlog in user onboarding due to manual identity verification, while synthetic identity fraud was on the rise.',
      solution: 'We deployed a computer vision pipeline trained on millions of labeled IDs and selfies to perform facial matching, liveness detection, and document OCR.',
      outcome: 'Onboarding time was reduced from 2 days to under 3 minutes, while instances of synthetic identity fraud dropped by 88%.'
    },
    cases: [
      { tag: 'KYC / AML', title: 'Identity Verification', description: 'Process and verify government IDs, biometric data, and onboarding documents to detect synthetic identities and document forgery.' },
      { tag: 'Document OCR', title: 'Structured Data Extraction', description: 'Extract structured data from physical checks, deposit slips, and scanned financial documents instantly.' },
      { tag: 'Security', title: 'Branch Surveillance', description: 'Analyze ATM and branch footage using object detection to detect suspicious behaviors and enhance physical security.' },
      { tag: 'Authentication', title: 'Biometric Access', description: 'Implement facial recognition models for secure, frictionless customer authentication at digital and physical touchpoints.' }
    ]
  },
  {
    industry: 'Retail & E-commerce',

    featuredCase: {
      title: 'Powering Cashierless Checkout in Smart Stores',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400&q=80',
      challenge: 'A major retail chain wanted to launch "grab-and-go" automated convenience stores but their computer vision models struggled with occlusions and visually similar items.',
      solution: 'Cogito Tech labeled thousands of hours of high-density store footage, applying bounding boxes and object tracking to accurately monitor customer behavior and item picking.',
      outcome: 'The computer vision system achieved 99.5% accuracy in cart tracking, allowing the retailer to successfully launch 15 automated stores nationwide.'
    },
    cases: [
      { tag: 'Store Automation', title: 'Cashierless Checkout', description: 'Track items picked by customers using video annotation for automatic billing without traditional registers.' },
      { tag: 'AR / VR', title: 'Virtual Fitting Rooms', description: 'Use computer vision to enable virtual try-on experiences, including body measurement and garment simulation.' },
      { tag: 'Inventory', title: 'Shelf Tracking', description: 'Monitor inventory levels on store shelves in real-time, detecting out-of-stock items or misplaced products.' },
      { tag: 'Search', title: 'Visual Product Search', description: 'Allow customers to find similar products by uploading images, powered by deep feature extraction.' }
    ]
  },
  {
    industry: 'Autonomous Vehicles',

    featuredCase: {
      title: 'Managing Autonomous Surveillance Robots in Real-World Edge Cases',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80',
      challenge: 'A robotics company was ready to move its autonomous surveillance robots from pilot testing into live, complex real-world environments but faced navigation issues.',
      solution: 'For uninterrupted patrol operations, Cogito Tech delivered a remote monitoring and teleoperation framework, along with extensive LiDAR point cloud annotation.',
      outcome: 'During active shifts, our team attained 98% robot uptime. We resolved more than 85% of edge-case navigation issues remotely in a matter of seconds.'
    },
    cases: [
      { tag: 'LiDAR / 3D', title: 'Sensor Data Annotation', description: 'Expert labeling of LiDAR point cloud data and images to help vehicles perceive distance and environments.' },
      { tag: 'Navigation', title: 'Object Detection', description: 'Use of 3D cuboids and polygon annotation to accurately identify pedestrians, motorcycles, and irregular obstacles.' },
      { tag: 'Lane Detection', title: 'Polyline Annotation', description: 'Help vehicles identify lane markings, bicycle tracks, and traffic directions for safe autonomous navigation.' },
      { tag: 'Fleet Ops', title: 'Last Mile Automation', description: 'Integrate AI with delivery robotics and autonomous fleet vehicles to streamline logistics operations.' }
    ]
  }
];

export default function ComputerVisionUseCases() {
  return (
    <main className="domain-page">
      <section className="domain-hero" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #db2777 100%)' }}>
        <div className="container">
          <div className="domain-hero-content">
            <span className="domain-badge">Computer Vision</span>
            <h1 className="hero-title">Computer Vision</h1>
            <p className="hero-description">
              Enable your systems to derive meaningful information from digital images, videos, and LiDAR inputs. High-quality data annotation for the visual world.
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
