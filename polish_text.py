import os
import re

directory = r"c:\pibi-solutions\app\solutions\nlp"
files_to_process = [
    "text-annotation", "text-classification", "video-transcription",
    "relation-extraction", "named-entity-recognition", "chatbot-training",
    "sentiment-analysis", "feature-classification", "intent-classification"
]

OLD_STYLE = 'style={{ marginTop: \'0\', textAlign: \'left\', maxWidth: \'800px\', margin: \'0 auto\', lineHeight: \'1.8\', fontSize: \'1.1rem\', color: \'#334155\' }}'
NEW_STYLE = 'style={{ maxWidth: \'800px\', margin: \'0 auto\', lineHeight: \'2\', fontSize: \'1.1rem\', color: \'#1e293b\' }}'

OLD_H3 = "style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}"
NEW_H3 = "style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.25rem', color: '#0f172a', borderLeft: '4px solid #3D72F2', paddingLeft: '1rem' }}"

for folder in files_to_process:
    filepath = os.path.join(directory, folder, "page.tsx")
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace(OLD_STYLE, NEW_STYLE)
    content = content.replace(OLD_H3, NEW_H3)
    
    # Also upgrade the white section padding and add a max-width wrapper
    content = content.replace(
        "style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}",
        "style={{ backgroundColor: '#ffffff', padding: '5rem 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}"
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Polished {folder}")

print("Done.")
