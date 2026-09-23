import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/data-collection-curation">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Data Collection &amp; <span className="gradient-text">Curation</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Build high-fidelity datasets that reflect real-world operational distributions, drawn from clean, fully compliant, and structured sources.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Data Collection & Curation.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Data Collection & Curation Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Data Collection &amp; Curation?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Data Collection &amp; Curation is the foundational phase of acquiring, filtering, structuring, and standardizing raw information to feed machine learning algorithms. Production AI systems fail when trained on narrow, noisy, or unrepresentative data. Our end-to-end data curation pipeline extracts multi-modal inputs across web, API, sensors, and enterprise databases. We perform automated deduplication, semantic noise reduction, stratified sampling, and metadata enrichment to guarantee that your model receives clean, unbiased, and high-density training samples designed to generalize across complex real-world environments.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Complete data curation lifecycle tailored for machine learning excellence.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/dataset_sourcing.jpg" alt="Dataset Sourcing" width={600} height={338} /></div>
              <h3>Dataset Sourcing</h3>
              <p>Acquire diverse text, vision, speech, and tabular datasets from multi-channel web scraping, proprietary partner networks, and synthetic generation frameworks while maintaining strict copyright and privacy compliance.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_cleaning.jpg" alt="Cleaning and Deduplication" width={600} height={338} /></div>
              <h3>Cleaning and Deduplication</h3>
              <p>Eliminate corrupt samples, near-duplicate images/documents using MinHash and perceptual hashing, remove boilerplate code/text, and filter out irrelevant noise to drastically reduce model training compute costs.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_sampling.jpg" alt="Sampling and Class Balancing" width={600} height={338} /></div>
              <h3>Sampling and Class Balancing</h3>
              <p>Prevent model prediction bias by engineering balanced class distributions using stratified sampling, undersampling dominant categories, and oversampling underrepresented edge-case scenarios.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/metadata_schema.jpg" alt="Metadata and Schema Design" width={600} height={338} /></div>
              <h3>Metadata and Schema Design</h3>
              <p>Design standardized JSON/Parquet schemas, granular attribute tags, provenance tracking, and relational metadata definitions that ensure complete data lineage and fast dataset queryability.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
