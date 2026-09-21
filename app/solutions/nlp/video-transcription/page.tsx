import Image from 'next/image';

export default function VideoTranscriptionPage() {
  return (
    <main>
      <section className="premium-hero" style={{ background: "#fff", paddingBottom: "0" }}>
        <div className="container">
          <h1>Video Transcription</h1>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video src="/video transcription.mp4" style={{ width: '100%', height: 'auto', display: 'block' }} controls autoPlay muted loop title="Video Transcription Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What is Video Transcription?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>Video transcription is the process of converting the spoken audio within video content into accurate, well-structured written text that is temporally aligned with the footage. As video has become the dominant format for corporate training, medical documentation, legal proceedings, and consumer media, the ability to transform that audio content into machine-readable text is critical for search, accessibility, and AI model training. At PIBI Solutions, we handle the full transcription pipeline — from processing multi-speaker conversations with overlapping dialogue and domain-specific jargon, to formatting the resulting transcripts with speaker diarization, precise timestamps, and custom metadata tags. We also support translation across multiple languages, ensuring that meaning, tone, and timing are preserved across every target locale, not just words swapped out literally.</p>
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
