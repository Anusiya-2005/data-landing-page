import Image from 'next/image';

export default function TypesOfImageAnnotationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Types of Image <span className="gradient-text">Annotation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/types of image annotation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Types of Image Annotation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Annotation Techniques for <span className="gradient-text">Computer Vision</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Different computer vision tasks require specific annotation styles. Whether your model needs simple localization via bounding boxes, detailed boundary detection with polygons, human pose analysis using keypoints, or spatial volume modeling with 3D cuboids, selecting the right annotation type is critical for model accuracy. PIBI Solutions provides expert labeling across all 7 major image annotation techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all seven image annotation styles.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="2D Bounding Boxes" width={600} height={338} />
              </div>
              <h3>2D Bounding Boxes</h3>
              <p>Drawing tight, axis-aligned rectangular boxes around targets to specify spatial coordinates (x, y, width, height) for rapid object localization.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Object Detection" width={600} height={338} />
              </div>
              <h3>Object Detection</h3>
              <p>Combining bounding boxes with class tags to enable algorithms to detect, count, and classify multiple distinct objects within complex visual scenes simultaneously.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="Keypoint Annotation" width={600} height={338} />
              </div>
              <h3>Keypoint Annotation</h3>
              <p>Placing precise landmark points on specific anatomical features or object joints to track facial expressions, hand gestures, and fine motion detail.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Polygon Annotation" width={600} height={338} />
              </div>
              <h3>Polygon Annotation</h3>
              <p>Tracing irregular, detailed boundaries vertex-by-vertex to capture precise object outlines for semantic and instance segmentation tasks.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/theme_detection.jpg" alt="3D Cuboid Annotation" width={600} height={338} />
              </div>
              <h3>3D Cuboid Annotation</h3>
              <p>Annotating 3D bounding boxes to estimate physical length, width, height, yaw orientation, and depth perspective from 2D images.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/sentiment_analysis.jpg" alt="Image Classification" width={600} height={338} />
              </div>
              <h3>Image Classification</h3>
              <p>Assigning global category labels or multi-label attributes to entire images based on visual context, scene composition, or dominant objects.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/product_categorization.jpg" alt="Skeletal Annotation" width={600} height={338} />
              </div>
              <h3>Skeletal Annotation</h3>
              <p>Connecting keypoint nodes with structural lines to represent human or animal skeletal skeletons for pose estimation, gait analysis, and movement modeling.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
