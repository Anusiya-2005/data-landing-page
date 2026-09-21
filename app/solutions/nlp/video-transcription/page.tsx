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
