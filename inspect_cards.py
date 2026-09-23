import os
import re

nlp = r"c:\Users\acer\OneDrive\Desktop\data web v2\app\solutions\nlp"
for item in sorted(os.listdir(nlp)):
    p = os.path.join(nlp, item, "page.tsx")
    if os.path.exists(p):
        c = open(p, encoding="utf-8").read()
        imgs = re.findall(r'src="(/images/[^"]+)"', c)
        cards = re.findall(r'<div className="premium-card">.*?<h3>(.*?)</h3>', c, re.DOTALL)
        print(f"{item} ({len(cards)} cards, {len(imgs)} images): {imgs}")
