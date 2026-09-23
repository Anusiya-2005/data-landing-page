import Image from 'next/image';

export default function TimeSeriesDataLabelingPage() {
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Time Series <span className="gradient-text">Data Labeling</span>
          </h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/time series.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Time Series Data Labeling Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Temporal Sequence &amp; <span className="gradient-text">Pattern Annotation</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Time series data labeling involves tagging sequential data streams from cameras, IoT sensors, industrial telemetry, and video channels over time. By marking anomaly start/end points, tracking trend shifts, and segmenting temporal patterns, predictive models learn to forecast events accurately. PIBI Solutions delivers end-to-end time series annotation across all three core operational pillars.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>Comprehensive definitions for all three time series data labeling services.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/text_categorization.jpg" alt="Time Series Tracking" width={600} height={338} />
              </div>
              <h3>1. Tracking</h3>
              <p>Following dynamic state transitions, spatial velocity vectors, kinematic trajectories, and persistent object movement across continuous time-stamped visual and sensor feeds.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/semantic_annotation.jpg" alt="Time Series Monitoring" width={600} height={338} />
              </div>
              <h3>2. Monitoring</h3>
              <p>Tagging anomalous signal spikes, sensor dropouts, threshold breaches, and unexpected temporal shifts in real-time streams for early hazard detection and operational alerting.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/phrase_chunking.jpg" alt="Time Series Analyzing" width={600} height={338} />
              </div>
              <h3>3. Analyzing</h3>
              <p>Segmenting recurring seasonal cycles, periodic waveforms, multi-sensor correlations, and trend patterns to build robust ground-truth data for predictive maintenance and forecasting models.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
