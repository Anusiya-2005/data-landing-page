import os
import re

directory = r"c:\pibi-solutions\app\solutions\nlp"

SINGLE_PARA = {
    "text-annotation": (
        "What is Text Annotation?",
        "Text annotation is the foundational step in building any powerful Natural Language Processing system. It is the process of labeling raw text — words, phrases, sentences, and entire documents — with structured metadata that machine learning models can learn from. Without annotation, a model sees nothing more than a sequence of characters. With annotation, it understands meaning: who is mentioned, what category a document belongs to, how words relate syntactically, and what a writer intends. At PIBI Solutions, our annotation pipeline covers everything from basic text categorization and phrase chunking to advanced semantic labeling and entity linking against external knowledge bases. Every label is applied following strict guidelines, reviewed for consistency, and delivered in your required format — giving your models the reliable ground truth they need to perform with exceptional accuracy in production."
    ),
    "text-classification": (
        "What is Text Classification?",
        "Text classification is the task of automatically assigning one or more predefined labels to a piece of text, enabling machines to sort, route, and understand content at a scale no human team could match. From deciding which department should handle a support ticket, to detecting the language of an incoming message, to categorizing thousands of product listings in an e-commerce catalog, text classification is the engine behind countless intelligent automation workflows. At PIBI Solutions, we prepare the high-quality labeled datasets that train these classifiers. Our annotators apply taxonomy-aligned labels across product descriptions, reviews, articles, and conversation threads — covering product categorization, language identification, sentiment analysis, and theme detection. Each dataset is built to the precision your model needs to generalize confidently to real-world, unseen text."
    ),
    "video-transcription": (
        "What is Video Transcription?",
        "Video transcription is the process of converting the spoken audio within video content into accurate, well-structured written text that is temporally aligned with the footage. As video has become the dominant format for corporate training, medical documentation, legal proceedings, and consumer media, the ability to transform that audio content into machine-readable text is critical for search, accessibility, and AI model training. At PIBI Solutions, we handle the full transcription pipeline — from processing multi-speaker conversations with overlapping dialogue and domain-specific jargon, to formatting the resulting transcripts with speaker diarization, precise timestamps, and custom metadata tags. We also support translation across multiple languages, ensuring that meaning, tone, and timing are preserved across every target locale, not just words swapped out literally."
    ),
    "relation-extraction": (
        "What is Relation Extraction?",
        "Relation extraction is the NLP task of identifying and labeling the semantic connections between entities mentioned in text — for example, recognizing that a person works at an organization, that a chemical compound causes a specific disease, or that a company acquired another company on a given date. This structured knowledge, derived from raw unstructured text, is the backbone of knowledge graphs, intelligent question-answering systems, and automated research tools. At PIBI Solutions, we build the annotated training datasets that power relation extraction models at scale. Whether your project requires open extraction to discover any relationships that appear in a corpus, supervised extraction using a predefined schema, or targeted extraction focused only on the entity pairs that matter to your domain, our annotation team delivers precise, consistent, and comprehensive labeled data ready for your pipeline."
    ),
    "named-entity-recognition": (
        "What is Named Entity Recognition?",
        "Named Entity Recognition, or NER, is the process of automatically locating and classifying named items — such as people, organizations, locations, dates, products, and monetary values — within unstructured text. It is one of the most fundamental and widely applied tasks in NLP, underpinning search engines, recommendation systems, document intelligence platforms, and automated data entry workflows. At PIBI Solutions, we provide end-to-end NER annotation services tailored to your domain. Whether you need standard entity types across general text, highly specific custom categories like drug names or legal contract clauses, or a fully supervised annotation pipeline to train production-level models, our expert labeling team delivers ground-truth datasets with exceptional consistency and accuracy — formatted in CoNLL, JSON, BRAT, or any custom schema your pipeline requires."
    ),
    "chatbot-training": (
        "What is Chatbot Training Data?",
        "A chatbot or conversational AI model is only as good as the data it was trained on. Chatbot training requires carefully curated datasets of real-world messages paired with ideal responses, intent labels, entity tags, and conversation flow annotations — across both text and voice modalities. The data must reflect the full diversity of how real users communicate: different phrasings of the same intent, regional slang, typos, multi-turn context, and ambiguous requests that require a clarifying question. At PIBI Solutions, we build these conversational training datasets from the ground up. Our teams annotate message recognition data, create ideal response pairs aligned to your brand voice and business rules, and label the conversational protocols — greetings, escalations, and hand-offs — that ensure your assistant behaves professionally and consistently across every interaction type."
    ),
    "sentiment-analysis": (
        "What is Sentiment Analysis?",
        "Sentiment analysis is the NLP task of automatically identifying and categorizing the opinions, emotions, and attitudes expressed in text. It goes far beyond binary positive or negative classification — nuanced sentiment labeling distinguishes between a writer directly expressing a personal opinion, language that conveys emotion indirectly through word choice and tone, and neutral factual reporting of what someone else said. This level of precision is essential for building models that accurately understand customer feedback, monitor brand perception, analyze survey responses, and power recommendation systems. At PIBI Solutions, we provide fine-grained sentiment annotation services covering expressive-subjective tagging, direct-subjective tagging, and objective-speech-event tagging — giving your models the richly detailed ground truth they need to understand not just what people say, but how they truly feel."
    ),
    "feature-classification": (
        "What is Feature Classification?",
        "Feature classification is the process of labeling text samples with the specific linguistic or content features they exhibit — such as whether the text expresses a subjective opinion, reports a neutral fact, or carries implicit emotional content. These feature labels are used to train models that can intelligently route, analyze, and extract value from large volumes of diverse text. Feature classification is especially important in domains like product review mining, customer feedback analysis, and content moderation, where the distinction between an objective statement and a personal opinion fundamentally changes how the text should be processed. At PIBI Solutions, we prepare labeled training samples that describe the key features of each text unit — covering expressive-subjective, direct-subjective, and objective-speech-event categories — delivered in a format ready for direct ingestion into your training pipeline."
    ),
    "intent-classification": (
        "What is Intent Classification?",
        "Intent classification is the NLP task of identifying what a user wants to accomplish with a given message or query, so that a system can route it, respond to it, or trigger the correct action. It is the core mechanism that allows conversational AI systems, voice assistants, and automated support platforms to understand user goals — distinguishing between a customer wanting to track an order, change a delivery address, or speak to a human agent, even when each of those requests is phrased differently across thousands of interactions. At PIBI Solutions, we build the intent-labeled datasets that make this possible. Our process begins with ingesting and auditing your existing message logs to define a clean, non-overlapping intent taxonomy, and culminates in applying those labels at scale across thousands of utterances — including edge cases, ambiguous phrasings, and multi-intent messages — to give your model the comprehensive ground truth it needs."
    ),
}

for folder, (heading, paragraph) in SINGLE_PARA.items():
    filepath = os.path.join(directory, folder, "page.tsx")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the entire section (section with svc-list) with a clean single-para section
    new_section = f'''<section className="section">
        <div className="container">
          <div style={{{{ maxWidth: '780px', margin: '0 auto' }}}}>
            <h2 style={{{{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}}}>{heading}</h2>
            <p style={{{{ color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.9, fontFamily: 'var(--font)' }}}}>{paragraph}</p>
          </div>
        </div>
      </section>'''

    # Replace the section block (section with svc-list) 
    content = re.sub(
        r'<section className="section">.*?</section>',
        new_section,
        content,
        count=1,
        flags=re.DOTALL
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {folder}")

print("All done.")
