'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    industry: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="contact-page-wrapper" data-route="/contact-us">
      {/* Top Contact Form Section */}
      <section className="contact-top-section">
        <div className="container">
          <div className="contact-layout">
            {/* Left Info Column */}
            <div className="contact-info-col">
              <h1>
                Let&apos;s Build Intelligent Systems for{' '}
                <span className="gradient-text">Your Business</span>
              </h1>
              <p className="contact-lead">
                Share your challenges with us. Our team will help you design, deploy, and scale AI and Agentic AI solutions that fit your enterprise goals.
              </p>

              <div className="contact-direct-list">
                <a href="tel:+919597867340" className="contact-direct-item">
                  <svg className="icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(+91) 9597867340</span>
                </a>

                <a href="mailto:business@pibitech.com" className="contact-direct-item">
                  <svg className="icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>business@pibitech.com</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {formSubmitted ? (
                  <div className="contact-success-msg">
                    <h4>Message Received</h4>
                    <p>Thank you for reaching out. An AI solutions consultant will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="contact-form-grid-2">
                      <div className="contact-field-group">
                        <label htmlFor="firstName">
                          First Name <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          placeholder="Enter first name"
                          className="contact-input"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="contact-field-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          placeholder="Enter last name"
                          className="contact-input"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="phone">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="00000 00000"
                        className="contact-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="email">
                        Email ID <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="gmail, outlook..."
                        className="contact-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="industry">
                        Industry <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="industry"
                        required
                        placeholder="Type your industry"
                        className="contact-input"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="country">
                        Country <span className="req">*</span>
                      </label>
                      <select
                        id="country"
                        required
                        className="contact-select"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        <option value="" disabled>Select Country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="message">
                        How can we help you <span className="req">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Description"
                        className="contact-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & India Offices Section */}
      <section className="offices-section">
        <div className="container">
          <h2 className="offices-heading">
            Global Offices
          </h2>

          <div className="offices-grid-3">
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_usa.png" alt="USA" width={80} height={80} />
              </div>
              <h3 className="office-country">USA</h3>
              <p className="office-address">Pflugerville, Travis, Texas 78660</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_germany.png" alt="Germany" width={80} height={80} />
              </div>
              <h3 className="office-country">Germany</h3>
              <p className="office-address">Erkelenz, Königsbergerstr. 19, 41812</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_uae.png" alt="United Arab Emirates" width={80} height={80} />
              </div>
              <h3 className="office-country">United Arab Emirates</h3>
              <p className="office-address">Abu Dhabi, Khalifa City, St. 00971</p>
            </div>
          </div>

          <h2 className="offices-heading" style={{ marginTop: '72px' }}>
            India Offices
          </h2>

          <div className="offices-grid-2">
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_chennai.png" alt="Chennai" width={80} height={80} />
              </div>
              <h3 className="office-country">Chennai</h3>
              <p className="office-address">Tharamani, Chennai - 600 113</p>
            </div>
            <div className="office-item">
              <div className="office-icon">
                <Image src="/images/office_madurai.png" alt="Madurai" width={80} height={80} />
              </div>
              <h3 className="office-country">Madurai</h3>
              <p className="office-address">Thiruppalai, Madurai - 625014</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
