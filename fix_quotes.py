import os
import re

directory = r"c:\pibi-solutions\app\solutions\nlp"
files_to_process = [
    "text-annotation", "text-classification", "video-transcription",
    "relation-extraction", "named-entity-recognition", "chatbot-training",
    "sentiment-analysis", "feature-classification", "intent-classification"
]

for folder in files_to_process:
    filepath = os.path.join(directory, folder, "page.tsx")
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace specific contractions that cause unescaped entity errors in React text nodes
    replacements = {
        "it's": "it&apos;s",
        "It's": "It&apos;s",
        "model's": "model&apos;s",
        "users'": "users&apos;",
        "doesn't": "doesn&apos;t",
        "don't": "don&apos;t",
    }
    
    # Only replace outside of HTML attributes and JSX expressions, but the simplest is just 
    # to replace the exact word boundaries or specific words.
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed unescaped entities.")
