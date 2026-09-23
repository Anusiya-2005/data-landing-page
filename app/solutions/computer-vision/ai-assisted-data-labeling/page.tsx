import Image from 'next/image';

export default function AiAssistedDataLabelingPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            AI-Assisted <span className="gradient-text">Data Labeling</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/computer vision Ai-associated data Labeling.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="AI-Assisted Data Labeling Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Accelerating Annotation with <span className="gradient-text">Human-in-the-Loop AI</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              AI-assisted labeling leverages pre-trained foundation models, smart interactive tools, and automated segmenters to generate preliminary annotations rapidly. Human annotators then review, refine, and approve these suggestions, dramatically increasing throughput while maintaining 100% human-verified accuracy. PIBI Solutions combines model automation with skilled human review across all four key AI-assisted labeling workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all four AI-assisted data labeling services.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="Polyline Data Labeling" width={600} height={338} />
              </div>
              <h3>Polyline Data Labeling</h3>
              <p>Automated curve and linear feature detection models pre-draft polylines for road lanes and boundaries, which human annotators quickly adjust and validate.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Polygon Data Labeling" width={600} height={338} />
              </div>
              <h3>Polygon Data Labeling</h3>
              <p>Interactive AI-driven contour estimation (e.g., SAM) proposes high-precision polygon boundaries with a single click, allowing annotators to rapidly refine vertices.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="Semantic Segmentation Data Labeling" width={600} height={338} />
              </div>
              <h3>Semantic Segmentation Data Labeling</h3>
              <p>Pre-segmentation neural networks generate pixel-level class mask drafts, reducing manual mask painting time by up to 70% while human reviewers ensure ground-truth perfection.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="3D Boxes Data Labeling" width={600} height={338} />
              </div>
              <h3>3D Boxes Data Labeling</h3>
              <p>Model-assisted 3D bounding box initialization in point clouds automatically snaps to object clusters, allowing annotators to swiftly fine-tune rotation, size, and position.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
