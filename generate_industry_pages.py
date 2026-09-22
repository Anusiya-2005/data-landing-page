import os

pages_data = {
    "autonomous-vehicles": {
        "title": "Autonomous Vehicles",
        "desc": "High-quality data annotation and labeling services for self-driving cars, drones, and autonomous robotics. We provide pixel-perfect accuracy for computer vision models.",
        "cover": [
            ("Bounding Boxes & Cuboids", "Precise tracking of vehicles, pedestrians, and moving objects in 2D and 3D space."),
            ("Semantic & Instance Segmentation", "Detailed labeling of roads, lanes, obstacles, and environmental features at the pixel level."),
            ("LiDAR & 3D Point Cloud Annotation", "Fusing camera and sensor data for a comprehensive understanding of the 3D environment."),
            ("Video Tracking", "Predicting trajectories and annotating sequences for continuous motion understanding.")
        ],
        "image": "images/autonomous.jpg" # Placeholder path, can use anything we have or just rely on a default look without image
    },
    "healthcare": {
        "title": "Healthcare",
        "desc": "HIPAA-compliant medical image annotation and clinical NLP services. We help medical AI models learn from precise, expertly-labeled datasets.",
        "cover": [
            ("Medical Image Annotation", "Labeling X-Rays, MRI, and CT Scans with high precision for diagnostic AI."),
            ("Clinical NLP", "Extracting patient conditions, medications, and treatments from unstructured medical records."),
            ("Genomics Data Labeling", "Annotating complex biological datasets for advanced healthcare research."),
            ("Patient Data De-identification", "Ensuring strict data privacy and compliance by redacting sensitive PHI.")
        ],
        "image": "images/healthcare.jpg"
    },
    "finance": {
        "title": "Finance",
        "desc": "Power your FinTech and banking AI models with highly accurate document digitization, sentiment analysis, and entity extraction.",
        "cover": [
            ("Document Digitization", "Extracting key data from receipts, invoices, contracts, and financial statements."),
            ("KYC & Identity Verification Data", "Annotating identity documents to train robust fraud detection and compliance models."),
            ("Financial Sentiment Analysis", "Tagging market news, earnings reports, and social chatter for investment signals."),
            ("Fraud Detection Data Labeling", "Categorizing transactional anomalies and suspicious patterns.")
        ],
        "image": "images/finance.jpg"
    },
    "retail": {
        "title": "Retail & E-commerce",
        "desc": "Enhance search relevance, product discovery, and customer experience with meticulously categorized product data and visual tagging.",
        "cover": [
            ("Product Categorization & Taxonomy Mapping", "Organizing large inventories into standardized, easy-to-navigate hierarchies."),
            ("Visual Search Tagging", "Identifying and labeling items in lifestyle images for seamless visual discovery."),
            ("Customer Review Sentiment Analysis", "Extracting actionable insights and nuanced feedback from shopper reviews."),
            ("Personalized Recommendation Data", "Labeling user behaviors and product attributes to train smarter recommendation engines.")
        ],
        "image": "images/retail.jpg"
    }
}

base_dir = r"c:\pibi-solutions\app\industries"

for industry, data in pages_data.items():
    ind_dir = os.path.join(base_dir, industry)
    os.makedirs(ind_dir, exist_ok=True)
    
    # Generate the page content similar to the services pages
    items_html = ""
    for idx, (topic, detail) in enumerate(data['cover']):
        items_html += f'''              <li style={{{{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}}}>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>{topic}</strong><br/><span style={{{{ color: "var(--muted)", fontWeight: 400, fontSize: "0.95rem" }}}}>{detail}</span></span>
              </li>
'''

    content = f'''import Image from 'next/image';
import Link from 'next/link';

export default function {industry.replace("-", " ").title().replace(" ", "")}Page() {{
  return (
    <main>
      <section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>
            AI Data Services for {data["title"]}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '1.5rem auto 0' }}>
            {data["desc"]}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>What we cover</h2>
            <ul className="svc-list">
{items_html}            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--soft)' }}>
        <div className="container center">
          <h2>Ready to scale your AI data?</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>Our expert teams are ready to build the custom datasets your models need.</p>
          <Link href="/#contact" className="btn primary">Talk to our experts</Link>
        </div>
      </section>
    </main>
  );
}}
'''
    with open(os.path.join(ind_dir, "page.tsx"), 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created industry page for {industry}")
