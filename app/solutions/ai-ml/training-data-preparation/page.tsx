import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/training-data-preparation">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Training Data <span className="gradient-text">Preparation</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Convert, split, version, and optimize labeled datasets into model-ready structures for frictionless ML pipeline ingestion.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Training Data Preparation.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Training Data Preparation Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Training Data Preparation?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Training Data Preparation connects raw annotated assets to machine learning model training scripts. Raw annotations must be packaged into exact framework tensor structures, partitioned into non-overlapping evaluation splits, tracked with data versioning systems, and optimized for high-throughput GPU dataloading. Our pipeline automation handles the complete preprocessing lifecycle so your engineering teams can start training immediately without data wrangling delays.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>End-to-end dataset formatting, partitioning, and pipeline optimization offerings.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/training_prep.jpg" alt="Format Conversion and Export" width={600} height={338} /></div>
              <h3>Format Conversion and Export</h3>
              <p>Export labeled datasets into PyTorch, TensorFlow, TFRecord, COCO, YOLO, Hugging Face Datasets, or custom JSON/Parquet binary formats seamlessly.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_sampling.jpg" alt="Train, Validation, and Test Splits" width={600} height={338} /></div>
              <h3>Train, Validation, and Test Splits</h3>
              <p>Construct leakage-free, stratified train, validation, and test splits to guarantee reliable generalization metrics and prevent data contamination.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/metadata_schema.jpg" alt="Versioned Datasets" width={600} height={338} /></div>
              <h3>Versioned Datasets</h3>
              <p>Implement dataset versioning (using DVC, LakeFS, or MLflow) so every training run, hyperparameter sweep, and model checkpoint is 100% reproducible and auditable.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/dataset_sourcing.jpg" alt="Active Learning Sample Selection" width={600} height={338} /></div>
              <h3>Active Learning Sample Selection</h3>
              <p>Leverage model entropy and uncertainty sampling to prioritize high-value unlabelled instances for annotation, reducing data preparation costs significantly.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
