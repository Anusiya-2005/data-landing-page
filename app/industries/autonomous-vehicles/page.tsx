import Link from 'next/link';

export default function AutonomousVehiclesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f5f0 100%)' }}>
        <div className="container">
          <span className="section-kicker">INDUSTRY</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '900px', margin: '1rem auto 0' }}>
            AI Data Annotation for Autonomous Vehicles
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.18rem', lineHeight: 1.7, maxWidth: '760px', margin: '1.5rem auto 2.5rem' }}>
            High-quality data annotation and labeling services for self-driving cars, drones, and autonomous robotics. We provide pixel-perfect accuracy for the computer vision models that power the next generation of transportation.
          </p>
          <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '16px', border: '1px solid var(--line)', overflow: 'hidden' }}>
            <div className="hero-stat"><strong>100M+</strong><span>Objects labeled for AV models</span></div>
            <div className="hero-stat"><strong>99.4%</strong><span>Bounding box accuracy</span></div>
            <div className="hero-stat"><strong>30+</strong><span>Sensor data formats supported</span></div>
            <div className="hero-stat"><strong>48hr</strong><span>Turnaround for pilot batches</span></div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we cover</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Our autonomous vehicle annotation pipeline supports all major sensor modalities and use cases.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Bounding Boxes &amp; Cuboids</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Precise 2D and 3D tracking of vehicles, pedestrians, cyclists, and moving objects across diverse road environments.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Semantic &amp; Instance Segmentation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Pixel-level labeling of roads, lanes, traffic signs, buildings, and environmental features for full scene understanding.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>LiDAR &amp; 3D Point Cloud Annotation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Fusing camera and sensor data to create a comprehensive spatial understanding of the 3D driving environment at every frame.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Video Tracking &amp; Trajectory Annotation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Predicting object trajectories and annotating motion sequences across video frames for perception and prediction model training.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2642 0%, #123C64 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your AV dataset?</h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our expert annotation teams work around the clock to deliver the high-quality labeled data your autonomous systems need to operate safely.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
