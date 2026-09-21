import re
import json

html_path = '../pibi-next/pibi-solutions-preview.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

home_match = re.search(r'<main class="page" data-route="/">\s*(.*?)\s*</main>', html, re.DOTALL)
if home_match:
    home_html = home_match.group(1)
    
    industries_section = '''
      <section className="section alt" data-anchor="industries">
        <div className="container">
          <div className="section-head center">
            <h2>Industries We Serve</h2>
            <p>Tailored AI data solutions for domain-specific challenges.</p>
          </div>
          <div className="industry-grid">
            <a className="industry-card" href="#/industries/healthcare">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-health"/></svg></span>
              <h3>Healthcare</h3>
              <p>Medical image annotation, clinical NLP, and HIPAA-compliant data processing.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
            <a className="industry-card" href="#/industries/finance">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-bank"/></svg></span>
              <h3>Finance</h3>
              <p>Document digitization, entity extraction for KYC, and financial sentiment analysis.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
            <a className="industry-card" href="#/industries/retail">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-tag"/></svg></span>
              <h3>Retail & E-commerce</h3>
              <p>Product categorization, visual search tagging, and customer review analysis.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
            <a className="industry-card" href="#/industries/autonomous-vehicles">
              <span className="ind-ico"><svg className="icon" aria-hidden="true"><use href="#i-route"/></svg></span>
              <h3>Autonomous Vehicles</h3>
              <p>3D sensor fusion, bounding boxes, semantic segmentation, and LiDAR annotation.</p>
              <span className="go">Learn more <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span>
            </a>
          </div>
        </div>
      </section>
    '''
    
    final_tsx = 'export default function Page() {\n'
    final_tsx += '  return (\n'
    final_tsx += '    <main className="page" data-route="/">\n'
    final_tsx += '      <div dangerouslySetInnerHTML={{__html: ' + json.dumps(home_html) + '}} />\n'
    final_tsx += industries_section
    final_tsx += '    </main>\n'
    final_tsx += '  );\n'
    final_tsx += '}\n'

    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(final_tsx)
    print("Done writing app/page.tsx")
