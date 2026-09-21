import os

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

    # Remove the 'hero' class entirely so the globals.css pseudo-elements (.hero::after, etc.) don't apply.
    # This removes the large curve that overlaps with the video.
    content = content.replace(
        '<section className="hero" style={{ paddingBottom: "40px", textAlign: "center" }}>',
        '<section style={{ padding: "60px 0 40px", textAlign: "center", position: "relative" }}>'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Removed hero curve in: {folder}")

print("All done.")
