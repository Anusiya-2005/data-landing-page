import Image from 'next/image';
export default function Page() {
  return (
    <main className="page" data-route="/solutions/ai-ml/data-annotation-labeling">
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            Data Annotation &amp; <span className="gradient-text">Labeling</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "720px", margin: "1rem auto 2.5rem", lineHeight: 1.6 }}>
            Apply accurate, consistent annotations across text, vision, audio, and multi-modal datasets using domain-specific guidelines.
          </p>
          <div className="premium-image-wrapper" style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}>
            <video 
              src="/Data Annotation & Labeling.mp4" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              controls 
              autoPlay 
              muted 
              loop 
              title="Data Annotation & Labeling Video"
            ></video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What is <span className="gradient-text">Data Annotation &amp; Labeling?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}>
              Data Annotation &amp; Labeling is the process of attaching ground-truth metadata-such as bounding boxes, polygon masks, semantic tags, and intent spans-to raw unstructured data. Supervised machine learning algorithms learn by recognizing patterns between inputs and their corresponding human-verified labels. At PIBI Solutions, we combine trained domain annotators with active QA workflows to label complex image, video, audio, and text assets at scale, maintaining high accuracy across complex edge cases.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-content">
        <div className="container">
          <div className="section-head center">
            <h2>Detailed <span className="gradient-text">Offerings</span></h2>
            <p>High-precision annotation capabilities covering multi-modal datasets.</p>
          </div>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/text_categorization.jpg" alt="Classification and Tagging" width={600} height={338} /></div>
              <h3>Classification and Tagging</h3>
              <p>Categorize documents, queries, images, and audio clips into multi-class, hierarchical, or multi-label taxonomies with high precision and strict adherence to project schemas.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_annotation.jpg" alt="Segmentation and Span Labeling" width={600} height={338} /></div>
              <h3>Segmentation and Span Labeling</h3>
              <p>Execute token-level text tagging, named entity span extraction, pixel-wise semantic image segmentation, polyline lane tracking, and 3D bounding box annotations for computer vision and NLP models.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/semantic_annotation.jpg" alt="Multi-Annotator Labeling" width={600} height={338} /></div>
              <h3>Multi-Annotator Labeling</h3>
              <p>Deploy redundant annotator assignments per data sample combined with majority voting and agreement algorithms to neutralize individual bias and maximize label confidence.</p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img"><Image src="/images/data_qa.jpg" alt="Guideline Design and Updates" width={600} height={338} /></div>
              <h3>Guideline Design and Updates</h3>
              <p>Draft comprehensive annotation guidelines, edge-case decision trees, and visual benchmark dictionaries that evolve iteratively alongside incoming edge cases.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
