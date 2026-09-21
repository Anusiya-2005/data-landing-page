import re

filepath = r"c:\pibi-solutions\app\solutions\nlp\page.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# In svc-list items, remove everything after </strong> inside a <span>
# Pattern: <span><strong>Topic Name</strong> — some description.</span>
# Replace with: <span>Topic Name</span>
content = re.sub(
    r'<span><strong>([^<]+)</strong>[^<]*</span>',
    r'<span>\1</span>',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done — NLP main page cards cleaned to just topic names.")
