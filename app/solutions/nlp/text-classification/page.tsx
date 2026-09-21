import Image from 'next/image';

export default function TextClassificationPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>Text Classification</h1>
          <p>
            Sort documents, messages, and listings into consistent categories that machine learning models can rely on.
          </p>
          <div className="premium-image-wrapper">
            <Image 
              src="/images/text_classification_bg.jpg" 
              alt="Text Classification Visualization" 
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
            <p>Our text classification services are built for enterprise-scale sorting and routing.</p>
          </div>
          
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/product_categorization.jpg" alt="Product Categorization" width={600} height={338} />
              </div>
              <h3>Product Categorization</h3>
              <p>
                We organize e-commerce inventories by labeling product titles, descriptions, and attributes, ensuring users can find exactly what they are looking for through accurate taxonomy mapping.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/language_id.jpg" alt="Language Identification" width={600} height={338} />
              </div>
              <h3>Language Identification</h3>
              <p>
                Automatically detect the language of incoming text streams. We provide multi-lingual data labeling to train models that seamlessly route support tickets and user-generated content to the correct regional teams.
              </p>
            </div>
            
            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/sentiment_analysis.jpg" alt="Sentiment Analysis" width={600} height={338} />
              </div>
              <h3>Sentiment Analysis</h3>
              <p>
                Go beyond simple positive or negative tags. We categorize the exact sentiment and emotional tone of reviews, social media posts, and feedback to give models a nuanced understanding of user sentiment.
              </p>
            </div>

            <div className="premium-card">
              <div className="premium-card-img">
                <Image src="/images/theme_detection.jpg" alt="Theme Detection" width={600} height={338} />
              </div>
              <h3>Theme Detection</h3>
              <p>
                We identify the core topics and recurring themes in long-form content, helping algorithms build summarization engines and content recommendation pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
