import Image from 'next/image';

export default function ImageAnnotationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Image <span className="gradient-text">Annotation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/image annotation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Image Annotation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Image Annotation?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Image annotation is the process of labeling images to train computer vision models. By adding structured metadata such as bounding boxes, polygons, keypoints, or semantic tags to visual data, machines learn to identify objects, classify visual elements, and understand spatial context. At PIBI Solutions, our four-step image annotation workflow ensures pixel-perfect accuracy, high consistency, and rapid dataset delivery tailored for autonomous driving, retail analytics, medical imaging, and industrial inspection.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Our complete four-step workflow for producing accurate, high-quality image datasets.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="Collecting Images" width={600} height={338} />
              </div>
              <h3>1. Collecting Images</h3>
              <p>Gathering high-resolution, diverse visual datasets tailored to your specific application environment, camera optics, lighting conditions, and edge-case scenarios to prevent data distribution gaps.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Labeling Images" width={600} height={338} />
              </div>
              <h3>2. Labeling Images</h3>
              <p>Applying precise annotations including bounding boxes, polygons, keypoint skeletons, or classification tags according to comprehensive, project-tailored labeling instructions.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/theme_detection.jpg" alt="Verifying Accuracy" width={600} height={338} />
              </div>
              <h3>3. Verifying Accuracy</h3>
              <p>Executing multi-stage quality assurance audits, measuring inter-annotator agreement (IOU), and conducting gold-standard benchmarks to eliminate labeling errors before export.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Uploading Data" width={600} height={338} />
              </div>
              <h3>4. Uploading Data</h3>
              <p>Structuring and exporting finalized annotations into COCO, Pascal VOC, YOLO, TFRecord, or custom JSON schemas ready for seamless integration into your training pipeline.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
