import os
import re

directory = r"c:\pibi-solutions\app\solutions\nlp"
files_to_process = [
    "text-annotation", "text-classification", "video-transcription",
    "relation-extraction", "named-entity-recognition", "chatbot-training",
    "sentiment-analysis", "feature-classification", "intent-classification"
]

images_map = {
    "relation-extraction": ["/images/semantic_annotation.jpg", "/images/theme_detection.jpg"],
    "named-entity-recognition": ["/images/entity_linking.jpg", "/images/phrase_chunking.jpg"],
    "chatbot-training": ["/images/language_id.jpg", "/images/text_categorization.jpg"],
    "sentiment-analysis": ["/images/sentiment_analysis.jpg", "/images/theme_detection.jpg"],
    "feature-classification": ["/images/product_categorization.jpg", "/images/text_classification_bg.jpg"],
    "intent-classification": ["/images/semantic_annotation.jpg", "/images/language_id.jpg"]
}

for folder in files_to_process:
    filepath = os.path.join(directory, folder, "page.tsx")
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (does not exist)")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extract the video src and title
    video_src_match = re.search(r'<video\s+src="([^"]+)"', content)
    video_title_match = re.search(r'title="([^"]+)"', content)
    
    video_src = video_src_match.group(1) if video_src_match else ""
    video_title = video_title_match.group(1) if video_title_match else ""

    # 2. Extract the detailed-explanation block
    expl_start = content.find('<div className="detailed-explanation"')
    expl_end_marker = "</div>\n        </div>\n      </section>"
    expl_end = content.find(expl_end_marker, expl_start)
    
    detailed_expl = content[expl_start:expl_end].strip() if expl_start != -1 else ""

    # Clean up the detailed_expl inner content
    inner_expl = detailed_expl
    inner_match = re.search(r'<div className="detailed-explanation"[^>]*>(.*)</div>', detailed_expl, re.DOTALL)
    if inner_match:
        inner_expl = inner_match.group(1).strip()
    
    hero_end = content.find('</section>', content.find('<section className="premium-hero"'))
    hero_content = content[:hero_end]
    
    # Remove premium-image-wrapper block
    wrapper_start = hero_content.find('<div className="premium-image-wrapper">')
    wrapper_end = hero_content.find('</div>\n        </div>', wrapper_start)
    
    if wrapper_start != -1 and wrapper_end != -1:
        new_media_block = f'''<div className="premium-image-wrapper" style={{{{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#000' }}}}>
            <video 
              src="{video_src}" 
              style={{{{ width: '100%', height: 'auto', display: 'block' }}}}
              controls
              autoPlay
              muted
              loop
              title="{video_title}"
            ></video>
          </div>
          
          <div className="detailed-explanation" style={{{{ marginTop: '4rem', textAlign: 'left', lineHeight: '1.8', fontSize: '1.1rem' }}}}>
            {inner_expl}
          </div>'''

        hero_content = hero_content[:wrapper_start] + new_media_block + hero_content[wrapper_end+6:]
        
    # Remove the video-section entirely
    video_sec_start = content.find('<section className="video-section"')
    video_sec_end = content.find('</section>', video_sec_start) + 10
    
    if video_sec_start != -1:
        new_content = hero_content + "</section>\n\n" + content[video_sec_end:].strip()
    else:
        new_content = content
        
    # For the 6 new pages, replace the placeholder divs with Images
    if folder in images_map:
        imgs = images_map[folder]
        new_content = re.sub(
            r'<div className="premium-card-img"[^>]*></div>',
            f'<div className="premium-card-img"><Image src="{imgs[0]}" alt="Card Image 1" width={{600}} height={{338}} /></div>',
            new_content, count=1
        )
        new_content = re.sub(
            r'<div className="premium-card-img"[^>]*></div>',
            f'<div className="premium-card-img"><Image src="{imgs[1]}" alt="Card Image 2" width={{600}} height={{338}} /></div>',
            new_content, count=1
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated {folder}")

print("Done.")
