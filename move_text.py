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

    # Find detailed-explanation block
    match = re.search(r'<div className="detailed-explanation".*?</div>', content, re.DOTALL)
    if not match:
        continue
        
    detailed_expl = match.group(0)
    
    # Remove it from its current position
    content = content.replace(detailed_expl, '')
    
    # Now, find the end of premium-hero section
    hero_end = content.find('</section>\n\n<section className="premium-content">')
    if hero_end == -1:
        hero_end = content.find('</section>\n\n      <section className="premium-content">')
        
    if hero_end == -1:
        hero_end = content.find('</section>', content.find('<section className="premium-hero"'))
    
    # Modify the extracted block to remove margins
    modified_expl = detailed_expl.replace("marginTop: '3rem'", "marginTop: '0'").replace("margin: '3rem auto 0'", "margin: '0 auto'")
    
    # Insert it wrapped in a new section
    new_section = f"""
      <section className="section" style={{{{ backgroundColor: '#ffffff', padding: '4rem 0' }}}}>
        <div className="container">
          {modified_expl}
        </div>
      </section>
"""
    
    content = content[:hero_end+10] + new_section + content[hero_end+10:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {folder}")

print("Done.")
