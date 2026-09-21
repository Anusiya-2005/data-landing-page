import os
import re

directory = r"c:\pibi-solutions\app\solutions\nlp"

DETAILED_ITEMS = {
    "text-annotation": [
        ("Text Categorization", "Assigns predefined labels to documents, paragraphs, or sentences so your models can rapidly sort and route large volumes of unstructured text. From news articles to support tickets, every piece of content is labeled with precision, ensuring downstream models act on it instantly with high confidence."),
        ("Semantic Annotation", "Labels the semantic roles of words and phrases — subjects, objects, predicates, and arguments — helping NLP models understand the true intent behind language far beyond surface-level keyword matching. This enables your models to interpret what a sentence genuinely means, not just what words it contains."),
        ("Phrase Chunking", "Breaks sentences into syntactically correlated groups such as noun phrases, verb phrases, and prepositional phrases. This essential parsing step gives models the structural understanding needed for complex language generation, machine translation, and advanced information retrieval tasks."),
        ("Entity Linking", "Connects identified entities within text to comprehensive knowledge bases such as Wikidata or custom domain ontologies, enriching training data with real-world contextual anchors. This helps models resolve ambiguity — for example, distinguishing between Apple the fruit and Apple the technology company."),
    ],
    "text-classification": [
        ("Product Categorization", "Organizes e-commerce inventories by labeling product titles, descriptions, and attributes against a taxonomy hierarchy. Accurate product categorization ensures users can discover exactly what they are looking for while powering recommendation engines and search relevance algorithms at scale."),
        ("Language Identification", "Provides multilingual data labeling to train models that automatically detect the language of incoming text streams. This enables intelligent routing of support tickets, user-generated content, and documents to the correct regional teams or translation pipelines without any manual intervention."),
        ("Sentiment Analysis", "Goes beyond simple positive or negative labels to categorize the exact sentiment and emotional tone of reviews, social media posts, and customer feedback. This nuanced labeling gives your models a richer understanding of user sentiment, enabling proactive brand monitoring and customer experience improvements."),
        ("Theme Detection", "Identifies the core topics and recurring themes across long-form content, articles, or customer conversations. This labeled data helps algorithms build summarization engines, content recommendation pipelines, and topic modeling systems that surface the most relevant information to the right audience."),
    ],
    "video-transcription": [
        ("Video-to-Text & Text-to-Video Transcription", "Transcribes audio from complex video environments — including multiple speakers, overlapping dialogue, background noise, and domain-specific jargon — delivering pristine text data synced with precise video timestamps. The reverse process, aligning pre-written scripts to video footage, is also handled with equal care and accuracy."),
        ("Video-to-Text & Text-to-Video Translation", "Translates transcribed text into multiple target languages while preserving the original context, speaker intent, and timing. This enables global training datasets for localised AI assistants, subtitle generation, and multilingual content distribution — maintaining meaning rather than just literal word-for-word conversion."),
        ("Video Transcripts Formatting", "Structures and formats transcripts to meet the exact intake schemas required by your machine learning pipelines. This includes speaker diarization labels, precise timestamps, custom metadata tags, paragraph breaks, and punctuation conventions — all tailored to the style guide agreed for your specific project."),
        ("Video Transcripts Customization", "Adapts transcripts to your domain requirements — handling specialized medical, legal, or technical vocabulary, applying redaction for sensitive content, or restructuring output to align with a specific downstream application's data model and annotation schema."),
    ],
    "relation-extraction": [
        ("Text Annotation", "Marks entities and contextual spans in raw text, forming the essential foundation before extracting the semantic relationships that connect them. This preparatory step ensures all entity boundaries are clearly defined for precise relation labeling in subsequent pipeline stages."),
        ("Open Relationship Extraction", "Discovers and labels diverse relationships as they naturally appear in text without restricting annotation to a fixed schema. This approach is ideal for broad knowledge discovery projects where the full range of entity relationships within a corpus needs to be surfaced and catalogued."),
        ("Supervised Relation Extraction", "Trains models on carefully annotated examples of predefined relation types — such as works_at, acquired_by, or located_in — to achieve high accuracy for domain-specific applications like knowledge graph population, biomedical literature mining, and corporate intelligence."),
        ("Targeted Relationship Extraction", "Focuses annotation effort on a defined set of high-value entity pairs and relation types most relevant to your application, such as drug-disease interactions or executive-company relationships. This reduces labeling overhead while maximising signal quality for your specific use case."),
        ("Entity Relationship Extraction for NLP", "Builds end-to-end annotated datasets that map entity pairs to their semantic relationships, formatted specifically for NLP model training. These datasets power question-answering systems, dialogue agents, and reasoning models that need to understand complex factual dependencies within text."),
    ],
    "named-entity-recognition": [
        ("NER Annotation", "Identifies and labels standard entity types — persons, organizations, locations, dates, monetary values, and more — across large text corpora. Our annotators follow strict tagging guidelines to ensure consistent, high-quality ground truth data that your NER models can reliably learn from at scale."),
        ("Open Named Entity Recognition", "Detects any entity type that emerges in the text without being constrained to a predefined taxonomy. This open approach is ideal for exploratory projects where you need to understand what types of entities naturally appear in a new domain before committing to a fixed annotation schema."),
        ("Supervised Named Entity Recognition", "Produces large volumes of ground-truth annotated data following a carefully defined label taxonomy. This supervised training data enables your NER models to achieve production-level precision and recall, consistently identifying entities across diverse writing styles and document types."),
        ("Targeted Named Entity Recognition", "Focuses on highly specific, high-value custom entity classes unique to your domain — such as drug names, disease codes, contract clauses, financial instruments, or equipment serial numbers. Targeted NER maximizes annotation ROI by concentrating labeling effort where it matters most."),
        ("Named Entity Recognition for NLP", "Delivers annotated datasets formatted for seamless integration into your existing NLP training and inference pipelines — whether CoNLL, JSON, BRAT, or a custom format. Output includes all metadata your pipeline needs for validation, versioning, and model evaluation."),
    ],
    "chatbot-training": [
        ("Text/Voice Message Recognition Training Data", "Annotates diverse text and voice inputs — including slang, regional phrasing, typos, code-switching, and ambiguous utterances — so your chatbot models handle the full spectrum of real-world user messages accurately. Both spoken and written modalities are covered to ensure cross-channel consistency."),
        ("Training Data for Chatbots to Accurately Respond", "Pairs user queries with ideal model responses, teaching chatbots to answer precisely, empathetically, and within your defined business rules. Our team curates response pairs that reflect your brand voice, knowledge base boundaries, and escalation policies — resulting in conversations users trust."),
        ("Chatbot Training to Maintain Conversational Protocols", "Labels greetings, clarifying questions, confirmations, escalations to human agents, and session hand-off scenarios so your assistants follow correct conversational flows from start to finish. This ensures your chatbot behaves consistently and professionally across every interaction, regardless of topic complexity."),
    ],
    "sentiment-analysis": [
        ("Data Labeling", "Applies fine-grained sentiment labels across reviews, support tickets, social media posts, and survey responses to build rich training corpora. Our labeling goes beyond binary positive/negative to capture nuanced sentiments like frustration, delight, skepticism, and urgency at the sentence and aspect level."),
        ("Expressive-subjective Tagging", "Tags language where the writer's personal feelings or emotions are conveyed indirectly through word choice, irony, enthusiasm, or disappointment — even when no explicit opinion words are present. This allows models to detect nuanced emotional signals embedded in narrative or conversational text."),
        ("Direct-subjective Tagging", "Marks clear, first-person opinion statements where the author directly expresses a view, rating, or assessment of a subject. Separating direct-subjective content from other text types gives models a more accurate picture of explicit user sentiment for brand monitoring and product feedback analysis."),
        ("Objective-speech-event Tagging", "Labels factual reporting of what someone said, did, or announced, distinguishing these neutral speech events from subjective opinions. This separation is critical for models that need to differentiate reported facts from genuine sentiment in news, legal, or research text."),
    ],
    "feature-classification": [
        ("Export Training Samples", "Delivers perfectly formatted, feature-labeled data batches ready for direct ingestion into your model's training and evaluation pipelines. Output formats are customized to match your system's requirements, with all necessary metadata fields included to support versioning, validation, and model benchmarking workflows."),
        ("Expressive-subjective Tagging", "Tags text samples that carry implicit emotional signals through word choice or indirect expression, enabling feature classifiers to distinguish expressive language from neutral, factual descriptions. Especially valuable for product review analysis and customer feedback mining where tone impacts feature weighting."),
        ("Direct-subjective Tagging", "Labels explicit opinion-bearing text segments so feature classifiers can accurately separate first-person user views from objective product descriptions or factual statements. Critical for recommendation engines, review summarisation systems, and aspect-level sentiment models that require precise opinion detection."),
        ("Objective-speech-event Tagging", "Marks neutral, reportorial text segments so models can identify and filter out non-opinionated content during feature extraction. Produces cleaner training sets where feature signals are not diluted by unrelated, objective information, leading to more accurate and reliable model outputs."),
    ],
    "intent-classification": [
        ("Importing Datasets", "Ingests and audits your existing query logs, conversation histories, and user message archives to form the raw material for intent taxonomy development. Our team evaluates data diversity, class balance, and coverage gaps before labeling begins, ensuring the resulting dataset reflects the true distribution of user goals."),
        ("Analyzing Datasets", "Reviews incoming data to define a clean, non-overlapping intent taxonomy that accurately reflects your users' real goals and behaviors. Edge cases, ambiguous utterances, and multi-intent messages are carefully identified and handled according to agreed annotation guidelines, producing a robust schema your models can effectively learn from."),
        ("Tagging Texts", "Applies intent labels across thousands of utterances, covering diverse phrasings, regional language variations, slang, and multi-intent edge cases. Every tagged example is reviewed for consistency, giving your classification model the comprehensive, high-confidence ground truth it needs to generalize accurately across unseen user messages in production."),
    ],
}

for folder, items in DETAILED_ITEMS.items():
    filepath = os.path.join(directory, folder, "page.tsx")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove dark background from premium-hero video wrapper
    content = content.replace(
        "style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}",
        "style={{ marginTop: '2rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(18,60,100,0.12)' }}"
    )
    
    # 2. Also change the premium-hero section to white background
    content = content.replace(
        '<section className="premium-hero">',
        '<section className="premium-hero" style={{ background: "#fff", paddingBottom: "0" }}>'
    )

    # 3. Replace svc-list with detailed versions
    new_items_html = ""
    for topic, desc in items:
        safe_topic = topic.replace("&", "&amp;")
        safe_desc = desc.replace("'", "&apos;")
        new_items_html += f'              <li style={{{{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}}}>\n                <span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span>\n                <span><strong>{safe_topic}</strong><br/><span style={{{{ color: "var(--muted)", fontWeight: 400, fontSize: "0.95rem" }}}}>{desc}</span></span>\n              </li>\n'

    content = re.sub(
        r'<ul className="svc-list">.*?</ul>',
        f'<ul className="svc-list">\n{new_items_html}            </ul>',
        content,
        flags=re.DOTALL
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {folder}")

print("All done.")
