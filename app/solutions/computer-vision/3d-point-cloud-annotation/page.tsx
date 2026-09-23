import Image from 'next/image';

export default function PointCloudAnnotationPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            3D Point Cloud <span className="gradient-text">Annotation</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/3D point cloud annotation.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="3D Point Cloud Annotation Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Precision LiDAR &amp; 3D Sensor <span className="gradient-text">Data Labeling</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Point cloud annotation converts unorganized 3D spatial points from LiDAR, RADAR, and depth sensors into rich ground truth data. Models rely on 3D cuboids, polylines, and semantic segmentation to navigate complex environments, measure distance, and detect obstacles. PIBI Solutions delivers high-precision 3D point cloud annotation across all four core techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all four 3D point cloud annotation styles.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="Polyline Annotation" width={600} height={338} />
              </div>
              <h3>Polyline Annotation</h3>
              <p>Tracing 3D continuous lines through point cloud scans to mark road curbs, lane dividers, guardrails, power lines, and structural linear boundaries.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/entity_linking.jpg" alt="Polygon Annotation" width={600} height={338} />
              </div>
              <h3>Polygon Annotation</h3>
              <p>Defining 3D planar region boundaries and complex surface contours in spatial sensor datasets for terrain mapping, building extraction, and surface geometry modeling.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Semantic Segmentation Annotation" width={600} height={338} />
              </div>
              <h3>Semantic Segmentation Annotation</h3>
              <p>Assigning explicit class labels (e.g., drivable road, sidewalk, vegetation, vehicle, building) point-by-point across dense 3D point cloud environments.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="3D Boxes" width={600} height={338} />
              </div>
              <h3>3D Boxes (Cuboid Labeling)</h3>
              <p>Fitting tight 9-DOF (degrees of freedom) 3D bounding boxes around vehicles, pedestrians, cyclists, and static obstacles with exact center coordinates, dimensions, and rotation angles.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
