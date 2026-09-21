import Image from 'next/image';

export default function VideoTranscriptionPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Video Transcription</h1>
          <p>
            Turn spoken video content into accurate, well-formatted text aligned precisely with the footage.
          </p>
          <div className="premium-image-wrapper">
            <Image 
              src="/images/video_transcription_bg.jpg" 
              alt="Video Transcription Visualization" 
              width={1600} 
              height={900} 
              priority
            />
          </div>
        </div>
      </section>

      <section className="video-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <h2>Service Overview Video</h2>
          <p style={{ marginBottom: '2rem', color: '#64748b' }}>Learn more about our video transcription approach and methodologies.</p>
          <div className="video-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <video 
              src="/video transcription.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
              controls
              title="Video Transcription Overview Video"
            ></video>
          </div>
          <div className="detailed-explanation" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0', lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Why Video Transcription Matters</h3>
            <p style={{ marginBottom: '1rem' }}>
              In an era dominated by multimedia content, converting spoken words into structured text is essential for making video data searchable, accessible, and analyzable. Video transcription bridges the gap between raw audio-visual input and NLP pipelines, unlocking vast amounts of information previously hidden in media files.
            </p>
            <p>
              Our meticulous transcription process ensures high fidelity, aligning text flawlessly with video timestamps and speaker diarization. By capturing nuanced spoken interactions, technical terminology, and cross-lingual context, we provide the robust, multimodal datasets required to train advanced AI models capable of deep auditory and visual comprehension.
            </p>
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
              <div className="premium-card-img">
                <Image src="/images/video_transcription_bg.jpg" alt="Video-to-Text Transcription" width={600} height={338} />
              </div>
              <h3>Video-to-Text Transcription</h3>
              <p>
                We transcribe audio from complex video environments, including multiple speakers, background noise, and technical jargon, delivering pristine text data synced with video timestamps.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/video_transcription_bg.jpg" alt="Cross-lingual Translation" width={600} height={338} />
              </div>
              <h3>Cross-lingual Translation</h3>
              <p>
                Translate transcribed text into multiple target languages while preserving the original context and timing, enabling global training datasets for localized AI assistants.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/video_transcription_bg.jpg" alt="Transcripts Formatting" width={600} height={338} />
              </div>
              <h3>Transcripts Formatting</h3>
              <p>
                We structure and format transcripts to meet the exact intake schemas required by your machine learning pipelines, including speaker diarization and custom metadata tags.
              </p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/video_transcription_bg.jpg" alt="Time-series Synchronization" width={600} height={338} />
              </div>
              <h3>Time-series Synchronization</h3>
              <p>
                Align textual transcripts with precise video frames and audio waveforms to train advanced multimodal models that understand both auditory and visual context simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
