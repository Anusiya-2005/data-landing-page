import Image from 'next/image';

export default function MachineLearningModelValidationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Machine Learning <span className="gradient-text">Model Validation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/computer vision ML.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Machine Learning Model Validation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Rigorous Evaluation &amp; <span className="gradient-text">Benchmark Auditing</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Model validation evaluates how accurately a computer vision or machine learning model performs on unseen real-world data before deployment. By utilizing rigorous cross-validation techniques, holdout test sets, error slicing, and statistical bootstrapping, engineering teams can detect overfitting, data leakage, and corner-case failures early. PIBI Solutions provides end-to-end validation methodologies across all 5 core model validation strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all five machine learning model validation methodologies.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="Resubstitution" width={600} height={338} />
              </div>
              <h3>Resubstitution Validation</h3>
              <p>Evaluating model performance directly on the training dataset to compute baseline training error, assess model capacity, and detect early optimization issues.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Holdout Validation" width={600} height={338} />
              </div>
              <h3>Holdout Validation</h3>
              <p>Splitting datasets into strict, isolated training, validation, and test subsets to measure unbiased model generalization on previously unseen data samples.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="Leave-One-Out Cross-Validation" width={600} height={338} />
              </div>
              <h3>Leave-One-Out Cross-Validation (LOOCV)</h3>
              <p>Iteratively training the model on N-1 samples and testing on the remaining single sample across all iterations, providing maximal data utilization for rare or small datasets.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Random Subsampling" width={600} height={338} />
              </div>
              <h3>Random Subsampling Validation</h3>
              <p>Performing multiple randomized data partitions into training and test splits to compute average performance metrics and reduce variance from fixed data splits.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/theme_detection.jpg" alt="Bootstrapping" width={600} height={338} />
              </div>
              <h3>Bootstrapping Validation</h3>
              <p>Sampling with replacement from the original dataset to generate multiple pseudo-replicate datasets, enabling robust confidence interval estimation and error variance modeling.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
