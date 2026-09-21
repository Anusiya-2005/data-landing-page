'use client';

import React, { useState, useEffect } from 'react';

export function openDatasetModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-dataset-modal'));
  }
}

const SERVICES = [
  'Data Collection',
  'Annotation & Labeling',
  'Cleaning & Preparation',
  'Validation & QA',
  'LLM Fine-Tuning',
  'Human-in-the-Loop',
];

export default function DatasetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState('Vision & Computer Vision (Images/Videos)');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Annotation & Labeling']);
  const [summary, setSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener('open-dataset-modal', handleOpen);
    
    // Close on Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-dataset-modal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="dataset-modal-backdrop" onClick={() => setIsOpen(false)}>
      <div 
        className="dataset-modal-card" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          className="dataset-modal-close" 
          onClick={() => setIsOpen(false)} 
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="dataset-modal-badge">
              <span className="pulse"></span>
              DATA PIPELINE BUILDER
            </div>

            <h2 id="modal-title" className="dataset-modal-title">
              Build Your AI Dataset
            </h2>
            <p className="dataset-modal-desc">
              Tell us about your project requirements and our team will customize a tailored dataset pipeline.
            </p>

            <form className="dataset-modal-form" onSubmit={handleSubmit}>
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="user-name">Your Name *</label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="user-email">Work Email *</label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-form-group">
                <label htmlFor="data-modality">Primary Data Modality</label>
                <div className="select-container">
                  <select
                    id="data-modality"
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                  >
                    <option value="Vision & Computer Vision (Images/Videos)">
                      Vision & Computer Vision (Images/Videos)
                    </option>
                    <option value="Natural Language Processing (Text/Speech)">
                      Natural Language Processing (Text/Speech)
                    </option>
                    <option value="Generative AI & LLMs (RLHF/Prompts)">
                      Generative AI & LLMs (RLHF/Prompts)
                    </option>
                    <option value="Multimodal & Sensor Fusion">
                      Multimodal & Sensor Fusion
                    </option>
                    <option value="Audio & Video Transcription">
                      Audio & Video Transcription
                    </option>
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label>Services Required</label>
                <div className="modal-chips-grid">
                  {SERVICES.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        className={`modal-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => toggleService(service)}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="modal-form-group">
                <label htmlFor="project-summary">Project Summary or Specifics</label>
                <textarea
                  id="project-summary"
                  rows={3}
                  placeholder="Describe your dataset requirements, target accuracy, volume, or timeline..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="modal-submit-btn">
                Build Pipeline & Request Consultation →
              </button>
            </form>
          </>
        ) : (
          <div className="dataset-modal-success">
            <div className="success-icon">✓</div>
            <h3>Request Received!</h3>
            <p>
              Thank you, <strong>{name}</strong>. Our AI data engineering team has received your project details for{' '}
              <strong>{modality}</strong> and will contact you at <strong>{email}</strong> within 24 hours with a tailored pipeline plan.
            </p>
            <button className="btn primary" onClick={() => setIsOpen(false)}>
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
