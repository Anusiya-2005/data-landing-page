import Image from 'next/image';
import Link from 'next/link';

export default function AutonomousVehiclesPage() {
  return (
    <main>
      {/* Hero — white background */}
      <section style={{ padding: '80px 0 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-kicker">INDUSTRY</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', color: 'var(--navy)', fontWeight: 800, letterSpacing: '-0.04em', maxWidth: '860px', margin: '1rem auto 0' }}>AI Data Annotation for <span className="gradient-text">Autonomous Vehicles</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.18rem', lineHeight: 1.7, maxWidth: '720px', margin: '1.5rem auto 2.5rem' }}>
            High-quality data annotation and labeling services for self-driving cars, drones, and autonomous robotics. We deliver pixel-perfect accuracy for the perception and prediction models that make autonomous systems safe and reliable on public roads.
          </p>
          <Link href="/#contact" className="btn primary">Get a Custom Dataset Quote</Link>
          <div style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', maxWidth: '1000px', margin: '3rem auto 0', boxShadow: '0 8px 40px rgba(18,60,100,0.12)' }}>
            <Image src="/images/industry_autonomous.jpg" alt="Autonomous Vehicle AI Annotation" width={1000} height={563} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
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

      {/* Overview */}
      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>The data challenge in <span className="gradient-text">autonomous driving</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9 }}>
              Autonomous vehicles operate in an incredibly complex world — dynamic road conditions, unpredictable pedestrian behavior, varying lighting, weather, and sensor noise. Every edge case a self-driving system encounters must be represented in its training data. This requires not just large volumes of labeled data, but annotated data of exceptional quality and diversity. A single misclassified object or poorly drawn bounding box can propagate errors that compromise safety-critical decisions downstream.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.9, marginTop: '1.25rem' }}>
              At PIBI Solutions, we build the training datasets that AV programs trust. Our annotation pipelines cover every modality — 2D camera, LiDAR, RADAR, and sensor-fused multi-modal datasets — with rigorous quality assurance processes that ensure every label meets the precision standards required for safety-critical AI deployment.
            </p>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>What we <span className="gradient-text">cover</span></h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Our AV annotation pipeline supports all major sensor modalities and annotation types required by Tier 1 autonomous vehicle programs.</p>
            <ul className="svc-list">
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Bounding Boxes &amp; Cuboids</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Precise 2D and 3D tracking of vehicles, pedestrians, cyclists, motorcyclists, and moving obstacles across diverse road environments, intersections, and challenging weather. Supports KITTI, nuScenes, Waymo, and custom formats.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Semantic &amp; Instance Segmentation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Pixel-perfect labeling of roads, lane markings, crosswalks, traffic signs, traffic lights, sidewalks, vegetation, and sky — delivering full scene understanding at every frame across day, night, and adverse weather conditions.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>LiDAR &amp; 3D Point Cloud Annotation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Fusing camera and LiDAR sensor data to build a precise spatial map of the 3D driving environment. We annotate 3D cuboids, ground plane segmentation, and drivable surface labels that power accurate depth perception and object localization.</span></span>
              </li>
              <li style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Video Tracking &amp; Trajectory Annotation</strong><br/><span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.95rem' }}>Annotating object trajectories, motion vectors, and behavioral event sequences across video frame sequences — providing the temporal ground truth your perception and prediction models need to anticipate what other road users will do next.</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why PIBI */}
      <section className="section alt">
        <div className="container">
          <div className="section-head center">
            <h2>Why AV teams <span className="gradient-text">choose PIBI</span></h2>
            <p>We operate at the precision and scale that safety-critical autonomous systems demand — with no compromise on quality.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { title: 'Safety-critical precision', desc: 'Every label undergoes a mandatory second-annotator review. Our multi-pass QA process ensures zero-compromise accuracy for applications where errors have real-world safety consequences.' },
              { title: 'Full sensor modality coverage', desc: 'We work across camera, LiDAR, RADAR, and ultrasonic data — fusing multiple sensor streams for the complete spatial understanding modern AV stacks require.' },
              { title: 'Scalable global workforce', desc: 'From a 10,000-frame pilot to a 10-million-frame production run, our distributed annotation workforce scales instantly to meet your project timeline without quality tradeoffs.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--line)', background: '#fff', boxShadow: '0 2px 12px rgba(18,60,100,0.05)' }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0d2642 0%, #123C64 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your <span className="gradient-text">AV dataset?</span></h2>
          <p style={{ color: '#c7dcee', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Our expert annotation teams work around the clock to deliver the high-quality labeled data your autonomous systems need to operate safely in the real world.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}
