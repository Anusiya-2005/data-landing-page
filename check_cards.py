import os
import re

files = [
    r"app\solutions\ai-ml\data-collection-curation\page.tsx",
    r"app\solutions\ai-ml\data-annotation-labeling\page.tsx",
    r"app\solutions\ai-ml\data-quality-assurance\page.tsx",
    r"app\solutions\ai-ml\training-data-preparation\page.tsx",
    r"app\solutions\ai-ml\model-evaluation-validation\page.tsx",
    r"app\solutions\ai-ml\data-augmentation-synthetic-data\page.tsx",
    r"app\solutions\ai-ml\production-monitoring-feedback\page.tsx",
    r"app\solutions\ai-ml\responsible-ai-data-governance\page.tsx",
    r"app\solutions\generative-ai\rlhf\page.tsx",
    r"app\solutions\generative-ai\stress-testing\page.tsx",
    r"app\solutions\generative-ai\reliable-training-data\page.tsx",
    r"app\solutions\generative-ai\data-labeling-for-llms\page.tsx",
    r"app\solutions\generative-ai\prompt-and-response-generation\page.tsx",
    r"app\solutions\generative-ai\generative-ai-research-ops\page.tsx",
]

for f in files:
    content = open(f, encoding="utf-8").read()
    icons = re.findall(r'<div className="premium-card-icon"[^>]*>', content)
    cards = re.findall(r'<div className="premium-card"[^>]*>', content)
    h3s = re.findall(r'<h3>(.*?)</h3>', content)
    print(f"{os.path.basename(os.path.dirname(f))}: cards={len(cards)}, icons={len(icons)}, h3s={len(h3s)}")
