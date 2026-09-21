import re

with open(r'C:\Users\Anushiya Selvaraj\.gemini\antigravity-ide\scratch\pibi-solutions\app\solutions\nlp\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('export default function Page() {', 'import Link from \'next/link\';\n\nexport default function Page() {')

def repl_article(m):
    anchor = m.group(2)
    inner = m.group(3)
    cls = m.group(1)
    href = f'/solutions/nlp/{anchor}'
    return f'<Link href="{href}" className="{cls}">{inner}</Link>'

content = re.sub(r'<article className="([^"]+)" data-anchor="([^"]+)">(.*?)</article>', repl_article, content)

with open(r'C:\Users\Anushiya Selvaraj\.gemini\antigravity-ide\scratch\pibi-solutions\app\solutions\nlp\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
