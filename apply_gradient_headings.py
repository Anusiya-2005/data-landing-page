import os
import re

files = [
    r"c:\pibi-solutions\app\industries\autonomous-vehicles\page.tsx",
    r"c:\pibi-solutions\app\industries\healthcare\page.tsx",
    r"c:\pibi-solutions\app\industries\finance\page.tsx",
    r"c:\pibi-solutions\app\industries\retail\page.tsx",
    r"c:\pibi-solutions\app\industries\page.tsx",
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Wrap the LAST word of each h1 and h2 with a gradient-text span
    # Strategy: for each <h1> and <h2>, find the last word before </h1> or </h2>
    # and wrap it in <span className="gradient-text">word</span>

    def wrap_last_word(m):
        tag = m.group(1)      # h1 or h2
        attrs = m.group(2)    # any attributes
        inner = m.group(3)    # inner text
        inner_stripped = inner.strip()
        
        # Skip if already has gradient-text inside
        if 'gradient-text' in inner:
            return m.group(0)
        
        # Find the last word(s) — last two words for better visual effect
        words = inner_stripped.split()
        if len(words) <= 1:
            return m.group(0)
        
        split = -2 if len(words) > 3 else -1
        main_part = ' '.join(words[:split])
        colored_part = ' '.join(words[split:])
        
        return f'<{tag}{attrs}>{main_part} <span className="gradient-text">{colored_part}</span></{tag}>'

    content = re.sub(
        r'<(h1|h2)([^>]*)>(.*?)<\/\1>',
        wrap_last_word,
        content,
        flags=re.DOTALL
    )

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {os.path.basename(os.path.dirname(fpath)) or fpath}")

print("All done.")
