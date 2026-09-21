import Image from 'next/image';

export default function VideoTranscriptionPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Video Transcription</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}>
            <video src="/video transcription.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Video Transcription Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>What we cover</h2>
            <ul className="svc-list">
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Video-to-Text &amp; Text-to-Video Transcription</strong> — Converts multi-speaker video audio into clean, timestamped text for model training.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Video-to-Text &amp; Text-to-Video Translation</strong> — Translates transcripts across languages while preserving context, timing, and speaker intent.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Video Transcripts Formatting</strong> — Structures transcripts with speaker labels, timestamps, and metadata to fit your pipeline schema.</span>
              </li>
              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>Video Transcripts Customization</strong> — Adapts terminology, redaction, and format to match your project's style guide and domain.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed Offerings</h2>
            <p>High-fidelity audio-visual transcription and alignment for multimodal AI.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/video_transcription_bg.jpg" alt="Video-to-Text Transcription" width={600} height={338} /></div>
              <h3>Video-to-Text Transcription</h3>
              <p>Pristine text data synced with video timestamps, handling multiple speakers, background noise, and technical jargon with high accuracy.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/video_transcription_bg.jpg" alt="Cross-lingual Translation" width={600} height={338} /></div>
              <h3>Cross-lingual Translation</h3>
              <p>Translate transcribed text into multiple target languages while preserving context and timing for global training datasets.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/video_transcription_bg.jpg" alt="Transcripts Formatting" width={600} height={338} /></div>
              <h3>Transcripts Formatting</h3>
              <p>Structure and format transcripts to meet the exact intake schemas required by your ML pipelines, with speaker diarization and custom metadata tags.</p>
            </div>
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/video_transcription_bg.jpg" alt="Time-series Synchronization" width={600} height={338} /></div>
              <h3>Time-series Synchronization</h3>
              <p>Align textual transcripts with precise video frames and audio waveforms to train advanced multimodal models that understand both auditory and visual context.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
