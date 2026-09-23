import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/data-augmentation-synthetic-data">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Data Augmentation &amp; <span className="gradient-text">Synthetic Data</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Expand limited training sets, simulate rare corner cases, and overcome class imbalances without expensive manual collection.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Data Augmentation & Synthetic Data.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Data Augmentation & Synthetic Data Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Data Augmentation &amp; Synthetic Data?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Data Augmentation &amp; Synthetic Data generation are advanced techniques to expand dataset volume and diversity without manual collection overhead. Real-world training data is often constrained by high collection costs, extreme class imbalance, or privacy regulations. By leveraging domain-informed transformations, generative models, and 3D simulation engines, we generate realistic, high-entropy training samples that improve model robustness and generalization.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Advanced synthetic generation and multi-modal data augmentation capabilities.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/synthetic_data.jpg" alt="Text, Image, and Audio Augmentation" width={600} height={338} /></div>
              <h3>Text, Image, and Audio Augmentation</h3>
              <p>Apply back-translation, synonym swap, random cropping, rotation, color jitter, noise injection, and pitch scaling to diversify your existing training corpus.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/phrase_chunking.jpg" alt="Synthetic Sample Generation" width={600} height={338} /></div>
              <h3>Synthetic Sample Generation</h3>
              <p>Generate high-fidelity synthetic text scenarios, realistic tabular records, or 3D rendered sensor assets matching true underlying statistical distributions.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_sampling.jpg" alt="Class Imbalance Handling" width={600} height={338} /></div>
              <h3>Class Imbalance Handling</h3>
              <p>Overcome severe class imbalances using SMOTE, generative oversampling, and controlled synthetic insertion for underrepresented target categories.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_annotation.jpg" alt="Edge-Case Coverage" width={600} height={338} /></div>
              <h3>Edge-Case Coverage</h3>
              <p>Synthesize rare out-of-distribution events, extreme weather conditions, and unusual fault states to harden model performance against unexpected inputs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
