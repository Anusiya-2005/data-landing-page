import Image from 'next/image';

export default function TypesOfVideoAnnotationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Types of Video <span className="gradient-text">Annotation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/types of video annotataion.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Types of Video Annotation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Specialized Video Labeling <span className="gradient-text">Techniques</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Video datasets demand diverse labeling styles to capture complex motion dynamics, spatial geometry, lane paths, and multi-object interactions over time. PIBI Solutions provides expert labeling across all 8 specialized video annotation techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all eight video annotation styles.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="2D Bounding Boxes" width={600} height={338} />
              </div>
              <h3>2D Bounding Boxes</h3>
              <p>Tracking moving targets across consecutive video frames using 2D boxes with linear interpolation to maintain temporal bounding continuity.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="3D Cuboid Annotation" width={600} height={338} />
              </div>
              <h3>3D Cuboid Annotation</h3>
              <p>Bounding dynamic 3D volumetric shapes across camera frames to track physical depth, vehicle orientation, and spatial velocity.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="3D Point Cloud Annotation" width={600} height={338} />
              </div>
              <h3>3D Point Cloud Annotation</h3>
              <p>Annotating sequential LiDAR point cloud video streams to track spatial object positions and 3D trajectories across time.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Landmark Annotation" width={600} height={338} />
              </div>
              <h3>Landmark Annotation</h3>
              <p>Marking facial features, joint points, or structural landmarks across video sequences for expression tracking and biometric analysis.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/theme_detection.jpg" alt="Lines & Splines" width={600} height={338} />
              </div>
              <h3>Lines &amp; Splines</h3>
              <p>Tracing continuous lane boundaries, road dividers, trajectories, and navigation paths across moving road footage for autonomous driving systems.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/sentiment_analysis.jpg" alt="Polygon Annotation" width={600} height={338} />
              </div>
              <h3>Polygon Annotation</h3>
              <p>Tracing detailed, changing contours of flexible objects like pedestrians, animals, or fluids across sequential video frames.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/product_categorization.jpg" alt="Events Classification" width={600} height={338} />
              </div>
              <h3>Events Classification</h3>
              <p>Categorizing specific activity windows, gesture events, or scene transitions with exact start and end timestamps in continuous footage.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/language_id.jpg" alt="Event Tracking" width={600} height={338} />
              </div>
              <h3>Event Tracking</h3>
              <p>Following multi-object interactions, lane changes, overtakes, or assembly line steps continuously to build temporal behavior datasets.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
