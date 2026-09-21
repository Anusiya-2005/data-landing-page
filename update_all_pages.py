import os

directory = r"c:\pibi-solutions\app\solutions\nlp"
files_to_process = [
    ("text-annotation", "Text Annotation", [
        ("Text Categorization", "Assigns labels to documents and sentences so models can sort and route text at scale."),
        ("Semantic Annotation", "Labels the semantic roles of words and phrases to capture intent beyond keywords."),
        ("Phrase Chunking", "Groups sentences into noun and verb phrases for structural language understanding."),
        ("Entity Linking", "Connects named entities to knowledge bases like Wikidata to resolve ambiguity."),
    ]),
    ("text-classification", "Text Classification", [
        ("Product Categorization", "Labels product titles and attributes to power accurate e-commerce search and discovery."),
        ("Language Identification", "Detects the language of text streams to route content to the right regional pipeline."),
        ("Sentiment Analysis", "Categorizes emotional tone across reviews and feedback with nuanced, fine-grained labels."),
        ("Theme Detection", "Identifies recurring topics across content to power summarization and recommendation engines."),
    ]),
    ("video-transcription", "Video Transcription", [
        ("Video-to-Text & Text-to-Video Transcription", "Converts multi-speaker video audio into clean, timestamped text for model training."),
        ("Video-to-Text & Text-to-Video Translation", "Translates transcripts across languages while preserving context, timing, and speaker intent."),
        ("Video Transcripts Formatting", "Structures transcripts with speaker labels, timestamps, and metadata to fit your pipeline schema."),
        ("Video Transcripts Customization", "Adapts terminology, redaction, and format to match your project's style guide and domain."),
    ]),
    ("relation-extraction", "Relation Extraction", [
        ("Text Annotation", "Marks entity spans in text as the foundation for downstream relation labeling."),
        ("Open Relationship Extraction", "Discovers all relationships in text without a fixed schema, ideal for broad knowledge discovery."),
        ("Supervised Relation Extraction", "Annotates predefined relation types for high-accuracy domain-specific model training."),
        ("Targeted Relationship Extraction", "Focuses annotation on the high-value entity pairs most relevant to your use case."),
        ("Entity Relationship Extraction for NLP", "Builds end-to-end annotated datasets mapping entity pairs to semantic relationships."),
    ]),
    ("named-entity-recognition", "Named Entity Recognition", [
        ("NER Annotation", "Labels persons, organizations, locations, dates, and values across large text corpora."),
        ("Open Named Entity Recognition", "Detects any entity type that naturally appears in text without a fixed taxonomy."),
        ("Supervised Named Entity Recognition", "Produces ground-truth labeled data for production-level NER model precision and recall."),
        ("Targeted Named Entity Recognition", "Focuses on high-value custom entity classes specific to your domain and use case."),
        ("Named Entity Recognition for NLP", "Delivers datasets in your required format — CoNLL, JSON, BRAT, or custom — pipeline-ready."),
    ]),
    ("chatbot-training", "Chatbot Training", [
        ("Text/Voice Message Recognition Training Data", "Annotates diverse inputs — slang, typos, regional phrasing — across text and voice modalities."),
        ("Training Data for Chatbots to Accurately Respond", "Pairs user queries with ideal responses aligned to your brand voice and business rules."),
        ("Chatbot Training to Maintain Conversational Protocols", "Labels greetings, escalations, and hand-offs so assistants follow correct conversational flows."),
    ]),
    ("sentiment-analysis", "Sentiment Analysis", [
        ("Data Labeling", "Applies fine-grained sentiment tags across reviews, tickets, and social posts at scale."),
        ("Expressive-subjective Tagging", "Tags language that conveys emotions indirectly through irony, word choice, or tone."),
        ("Direct-subjective Tagging", "Marks explicit first-person opinion statements for clear sentiment signal extraction."),
        ("Objective-speech-event Tagging", "Labels neutral factual reporting to separate it from genuine opinion in model training."),
    ]),
    ("feature-classification", "Feature Classification", [
        ("Export Training Samples", "Delivers formatted, feature-labeled batches ready for direct pipeline ingestion."),
        ("Expressive-subjective Tagging", "Tags implicit emotional language to separate expressive text from neutral descriptions."),
        ("Direct-subjective Tagging", "Labels opinion-bearing segments to isolate user views from factual product content."),
        ("Objective-speech-event Tagging", "Marks neutral reportorial segments to keep feature signals clean and unambiguous."),
    ]),
    ("intent-classification", "Intent Classification", [
        ("Importing Datasets", "Ingests and audits query logs and conversation histories for taxonomy development."),
        ("Analyzing Datasets", "Reviews data to define a clean, non-overlapping intent taxonomy for your users' goals."),
        ("Tagging Texts", "Applies intent labels across thousands of utterances, including edge cases and multi-intent messages."),
    ]),
]

ICON_MAP = {
    "text-annotation": "i-tag",
    "text-classification": "i-filter",
    "video-transcription": "i-video",
    "relation-extraction": "i-branch",
    "named-entity-recognition": "i-search",
    "chatbot-training": "i-chat",
    "sentiment-analysis": "i-smile",
    "feature-classification": "i-layers",
    "intent-classification": "i-target",
}

VIDEO_MAP = {
    "text-annotation": "/annotation.mp4",
    "text-classification": "/text classification.mp4",
    "video-transcription": "/video transcription.mp4",
    "relation-extraction": "/relation extraction.mp4",
    "named-entity-recognition": "/named entity.mp4",
    "chatbot-training": "/chatbot training.mp4",
    "sentiment-analysis": "/sentiment analysis.mp4",
    "feature-classification": "/feature classification.mp4",
    "intent-classification": "/intent classifiction.mp4",
}

for folder, title, items in files_to_process:
    filepath = f"{directory}\\{folder}\\page.tsx"
    
    # Read existing file to preserve the premium-content section
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract premium-content section
    pc_start = content.find('<section className="premium-content">')
    premium_content = content[pc_start:] if pc_start != -1 else ""
    
    # Build svc-list items — SHORT
    items_html = ""
    for topic, desc in items:
        # Escape & in topic names
        safe_topic = topic.replace("&", "&amp;")
        items_html += f"""              <li>
                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                <span><strong>{safe_topic}</strong> — {desc}</span>
              </li>\n"""

    video_src = VIDEO_MAP.get(folder, "")
    
    new_content = f"""import Image from 'next/image';

export default function {title.replace(' ', '')}Page() {{
  return (
    <main>
      <section className="premium-hero">
        <div className="container">
          <h1>{title}</h1>
          <div className="premium-image-wrapper" style={{{{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}}}>
            <video src="{video_src}" style={{{{ width: '100%', height: 'auto', display: 'block' }}}} controls autoPlay muted loop title="{title} Overview Video"></video>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div style={{{{ maxWidth: '860px', margin: '0 auto' }}}}>
            <h2 style={{{{ color: 'var(--navy)', fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}}}>What we cover</h2>
            <ul className="svc-list">
{items_html}            </ul>
          </div>
        </div>
      </section>

      {premium_content}
    </main>
  );
}}
"""
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Done: {folder}")

print("All done.")
