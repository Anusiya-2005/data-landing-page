import os
import re

PAGE_CARD_IMAGES = {
    # AI/ML
    "data-collection-curation": [
        ("Dataset Sourcing", "/images/dataset_sourcing.jpg"),
        ("Cleaning and Deduplication", "/images/data_cleaning.jpg"),
        ("Sampling and Class Balancing", "/images/data_sampling.jpg"),
        ("Metadata and Schema Design", "/images/metadata_schema.jpg"),
    ],
    "data-annotation-labeling": [
        ("Classification and Tagging", "/images/text_categorization.jpg"),
        ("Segmentation and Span Labeling", "/images/data_annotation.jpg"),
        ("Multi-Annotator Labeling", "/images/semantic_annotation.jpg"),
        ("Guideline Design and Updates", "/images/data_qa.jpg"),
    ],
    "data-quality-assurance": [
        ("Gold-Standard Test Sets", "/images/data_qa.jpg"),
        ("Inter-Annotator Agreement", "/images/sentiment_analysis.jpg"),
        ("Sampling Audits", "/images/data_sampling.jpg"),
        ("Error Analysis Reports", "/images/model_evaluation.jpg"),
    ],
    "training-data-preparation": [
        ("Format Conversion and Export", "/images/training_prep.jpg"),
        ("Train, Validation, and Test Splits", "/images/data_sampling.jpg"),
        ("Versioned Datasets", "/images/metadata_schema.jpg"),
        ("Active Learning Sample Selection", "/images/dataset_sourcing.jpg"),
    ],
    "model-evaluation-validation": [
        ("Benchmark Dataset Creation", "/images/model_evaluation.jpg"),
        ("Metric Review and Reporting", "/images/data_qa.jpg"),
        ("Error Slicing by Category", "/images/theme_detection.jpg"),
        ("Bias and Fairness Checks", "/images/entity_linking.jpg"),
    ],
    "data-augmentation-synthetic-data": [
        ("Text, Image, and Audio Augmentation", "/images/synthetic_data.jpg"),
        ("Synthetic Sample Generation", "/images/phrase_chunking.jpg"),
        ("Class Imbalance Handling", "/images/data_sampling.jpg"),
        ("Edge-Case Coverage", "/images/data_annotation.jpg"),
    ],
    "production-monitoring-feedback": [
        ("Drift Review", "/images/production_monitoring.jpg"),
        ("Feedback Labeling", "/images/semantic_annotation.jpg"),
        ("Retraining Data Pipelines", "/images/training_prep.jpg"),
        ("Human-in-the-Loop Review", "/images/product_categorization.jpg"),
    ],
    "responsible-ai-data-governance": [
        ("PII Redaction and Anonymization", "/images/data_qa.jpg"),
        ("Bias Auditing", "/images/model_evaluation.jpg"),
        ("Dataset Documentation", "/images/metadata_schema.jpg"),
        ("Access and Compliance Controls", "/images/dataset_sourcing.jpg"),
    ],
    # Generative AI
    "rlhf": [
        ("Pre-Training Model", "/images/training_prep.jpg"),
        ("Supervised Fine-Tuning", "/images/semantic_annotation.jpg"),
        ("Reward Model Training", "/images/model_evaluation.jpg"),
    ],
    "stress-testing": [
        ("Adversarial Testing", "/images/data_qa.jpg"),
        ("Vulnerability Analysis", "/images/model_evaluation.jpg"),
        ("Report and Feedback", "/images/production_monitoring.jpg"),
        ("Bias Auditing", "/images/data_sampling.jpg"),
        ("Response Refinement", "/images/text_categorization.jpg"),
    ],
    "reliable-training-data": [
        ("Unmatched Compliance", "/images/data_qa.jpg"),
        ("Fairness &amp; Inclusivity", "/images/data_sampling.jpg"),
        ("Transparent Governance", "/images/metadata_schema.jpg"),
        ("Continual Assessment", "/images/production_monitoring.jpg"),
        ("Trustworthiness", "/images/dataset_sourcing.jpg"),
    ],
    "data-labeling-for-llms": [
        ("Pre-Training Data", "/images/dataset_sourcing.jpg"),
        ("Supervised Fine-Tuning", "/images/data_annotation.jpg"),
        ("Code Generation Data", "/images/synthetic_data.jpg"),
        ("Data Conversion", "/images/training_prep.jpg"),
        ("Translation", "/images/language_id.jpg"),
    ],
    "prompt-and-response-generation": [
        ("AI Prompt Design &amp; Generation", "/images/text_annotation_bg.jpg"),
        ("Prompts and Responses for LLMs", "/images/phrase_chunking.jpg"),
        ("Prompt Optimization", "/images/model_evaluation.jpg"),
        ("NLP Prompt Engineering", "/images/text_categorization.jpg"),
        ("STEM Writing Prompt Design", "/images/semantic_annotation.jpg"),
        ("Multimodal Prompt Engineering", "/images/synthetic_data.jpg"),
    ],
    "generative-ai-research-ops": [
        ("High-Context Prompting", "/images/text_classification_bg.jpg"),
        ("Domain Expert Oversight", "/images/production_monitoring.jpg"),
        ("Quality Anchoring", "/images/data_qa.jpg"),
        ("Mass Literature Synthesis", "/images/theme_detection.jpg"),
    ],
}

def process_file(folder, file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Ensure `import Image from 'next/image';` is present
    if "import Image from 'next/image';" not in content and 'import Image from "next/image";' not in content:
        content = "import Image from 'next/image';\n" + content

    cards_info = PAGE_CARD_IMAGES[folder]
    card_idx = [0]

    def replace_card_icon(match):
        idx = card_idx[0]
        if idx < len(cards_info):
            title, img_src = cards_info[idx]
            card_idx[0] += 1
            alt_clean = title.replace("&amp;", "&").replace('"', '&quot;')
            replacement = (
                f'<div className="premium-card">\n'
                f'              <div className="premium-card-img"><Image src="{img_src}" alt="{alt_clean}" width={{600}} height={{338}} /></div>\n'
                f'              <h3>'
            )
            return replacement
        return match.group(0)

    pattern = re.compile(
        r'<div className="premium-card"[^>]*>[\s\S]*?<div className="premium-card-icon"[^>]*>[\s\S]*?</div>\s*<h3>',
        re.DOTALL
    )

    new_content, count = pattern.subn(replace_card_icon, content)

    if count != len(cards_info):
        print(f"WARNING: For {folder}, expected {len(cards_info)} cards, but replaced {count}!")
    else:
        print(f"SUCCESS: {folder} - updated {count} cards with images.")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

for root in [r"app\solutions\ai-ml", r"app\solutions\generative-ai"]:
    for folder in sorted(os.listdir(root)):
        page_file = os.path.join(root, folder, "page.tsx")
        if os.path.exists(page_file) and folder in PAGE_CARD_IMAGES:
            process_file(folder, page_file)

print("\nDone updating all solution pages!")
