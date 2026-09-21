import os

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

    # The outer div that was incorrectly added:
    bad_line = '<div className="detailed-explanation" style={{ marginTop: \'4rem\', textAlign: \'left\', lineHeight: \'1.8\', fontSize: \'1.1rem\' }}>\n'
    
    if bad_line in content:
        # We need to remove the bad line, but we ALSO need to make sure the inner div is properly closed, 
        # wait, earlier the inner div was closed but the outer div wasn't. 
        # By removing the outer div's opening tag, the inner div is closed properly by the existing </div>!
        content = content.replace(bad_line, '')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {folder}")

print("Done.")
