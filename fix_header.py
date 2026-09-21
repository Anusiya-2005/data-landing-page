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
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change section class from premium-hero to hero so it doesn't get the white gradient text color
    # and keeps the nice white radial background of .hero
    content = content.replace(
        '<section className="premium-hero" style={{ background: "#fff", paddingBottom: "0" }}>',
        '<section className="hero" style={{ paddingBottom: "40px", textAlign: "center" }}>'
    )
    
    # Style the h1 explicitly so it looks nice and dark
    content = re.sub(
        r'<h1>(.*?)</h1>',
        r'<h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", color: "var(--navy)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "900px", margin: "0 auto" }}>\1</h1>',
        content
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated header in: {folder}")

print("All done.")
