import Image from 'next/image';

export default function VideoAnnotationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Video <span className="gradient-text">Annotation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/video annotation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Video Annotation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Continuous Frame Labeling for <span className="gradient-text">Video Models</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Video annotation involves labeling frame-by-frame sequences to train models on motion, trajectories, event detection, and temporal context. Unlike static images, video data requires maintaining consistent object IDs across frames, interpolation, and handling occlusions. PIBI Solutions delivers robust video annotation pipelines across all key video labeling phases.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all four core video annotation steps.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="Reviewing Frames" width={600} height={338} />
              </div>
              <h3>1. Reviewing Frames</h3>
              <p>Inspecting video streams frame-by-frame or keyframe-by-keyframe, extracting usable frame rates, removing blur or artifacts, and establishing temporal benchmarks for tracking accuracy.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Assigning Annotations" width={600} height={338} />
              </div>
              <h3>2. Assigning Annotations &amp; Object IDs</h3>
              <p>Applying persistent bounding boxes, polygons, or cuboids across consecutive frames with unique object ID retention, handling frame interpolation and occlusions seamlessly.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/theme_detection.jpg" alt="Classifying Images" width={600} height={338} />
              </div>
              <h3>3. Classifying Images &amp; Frame Events</h3>
              <p>Tagging individual video frames or clip segments with action categories, temporal event timestamps, and environmental condition metadata.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Segmenting Video" width={600} height={338} />
              </div>
              <h3>4. Segmenting Video</h3>
              <p>Applying temporal and spatial video segmentation to isolate moving foreground subjects, dynamic obstacle boundaries, and background environments over time.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
