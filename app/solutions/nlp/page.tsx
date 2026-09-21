import Link from 'next/link';

export default function Page() {
  return (
    <main className="page" data-route="/solutions/nlp">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Turn text and speech into data that models understand</h1>
            <p className="hero-lead">From entity labels to chatbot conversations and video transcripts, we prepare language data with clear guidelines and careful review.</p>
            <div className="hero-actions">
              <button className="btn primary" data-scroll="services">Explore services <svg className="icon" aria-hidden="true"><use href="#i-arrow"/></svg></button>
              <button className="btn secondary" data-scroll="faq">Read the FAQ</button>
            </div>
          </div>
          <div className="media"><div className="mock"><div className="win"><div className="win-bar"><i></i><i></i><i></i><span>Entity annotation</span></div><div className="win-body"><p className="ner"><mark className="e1">Maria Alvarez<b>PERSON</b></mark> joined <mark className="e2">Northwind Health<b>ORG</b></mark> in <mark className="e3">Chennai<b>LOCATION</b></mark> on <mark className="e4">3 March 2026<b>DATE</b></mark> to lead the new clinical data team.</p><div className="tagrow"><span className="pill b">PERSON</span><span className="pill t">ORG</span><span className="pill c">LOCATION</span><span className="pill g">DATE</span></div></div></div></div></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container overview">
          <div>
            <h2>Language data for NLP models</h2>
            <p>Natural language processing lets software read, interpret, and respond to human language. It depends on datasets where people have marked what text means: who and what is mentioned, how texts should be sorted, what a writer feels, and what a user wants. Our NLP services cover text, conversations, and video transcripts.</p>
          </div>
          <div className="jump">
            <h3>Jump to a service</h3>
            <div className="chips">
              <button className="chip" data-scroll="text-annotation">Text Annotation</button>
              <button className="chip" data-scroll="text-classification">Text Classification</button>
              <button className="chip" data-scroll="video-transcription">Video Transcription</button>
              <button className="chip" data-scroll="relation-extraction">Relation Extraction</button>
              <button className="chip" data-scroll="named-entity-recognition">Named Entity Recognition</button>
              <button className="chip" data-scroll="chatbot-training">Chatbot Training</button>
              <button className="chip" data-scroll="sentiment-analysis">Sentiment Analysis</button>
              <button className="chip" data-scroll="feature-classification">Feature Classification</button>
              <button className="chip" data-scroll="intent-classification">Intent Classification</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-anchor="services">
        <div className="container">
          <div className="section-head">
            <h2>NLP services</h2>
            <p>Nine service areas, each with the tasks it includes.</p>
          </div>
          <div className="cards">

            {/* Text Annotation */}
            <Link href="/solutions/nlp/text-annotation" className="svc v1">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-tag"/></svg></span>
                <h3>Text Annotation</h3>
              </div>
              <div className="svc-body">
                <p>Add structure to raw text so models can learn meaning, context, and how words relate.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Text Categorization</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Semantic Annotation</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Phrase Chunking</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Entity Linking</span></li>
                </ul>
              </div>
            </Link>

            {/* Text Classification */}
            <Link href="/solutions/nlp/text-classification" className="svc v2">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-filter"/></svg></span>
                <h3>Text Classification</h3>
              </div>
              <div className="svc-body">
                <p>Sort documents, messages, and listings into consistent categories that models can rely on.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Product Categorization</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Language Identification</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Sentiment Analysis</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Theme Detection</span></li>
                </ul>
              </div>
            </Link>

            {/* Video Transcription */}
            <Link href="/solutions/nlp/video-transcription" className="svc v3">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-video"/></svg></span>
                <h3>Video Transcription</h3>
              </div>
              <div className="svc-body">
                <p>Turn spoken video content into accurate, well-formatted text aligned with the footage.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Video-to-Text &amp; Text-to-Video Transcription</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Video-to-Text &amp; Text-to-Video Translation</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Video Transcripts Formatting</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Video Transcripts Customization</span></li>
                </ul>
              </div>
            </Link>

            {/* Relation Extraction */}
            <Link href="/solutions/nlp/relation-extraction" className="svc v1">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-branch"/></svg></span>
                <h3>Relation Extraction</h3>
              </div>
              <div className="svc-body">
                <p>Record how entities in a passage connect to one another, from simple links to domain-specific relations.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Text Annotation</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Open Relationship Extraction</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Supervised Relation Extraction</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Targeted Relationship Extraction</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Entity Relationship Extraction for NLP</span></li>
                </ul>
              </div>
            </Link>

            {/* Named Entity Recognition */}
            <Link href="/solutions/nlp/named-entity-recognition" className="svc v2">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-search"/></svg></span>
                <h3>Named Entity Recognition</h3>
              </div>
              <div className="svc-body">
                <p>Locate and label people, organizations, places, dates, and other named items in unstructured text.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>NER Annotation</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Open Named Entity Recognition</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Supervised Named Entity Recognition</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Targeted Named Entity Recognition</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>NER for NLP Pipelines</span></li>
                </ul>
              </div>
            </Link>

            {/* Chatbot Training */}
            <Link href="/solutions/nlp/chatbot-training" className="svc v3">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-chat"/></svg></span>
                <h3>Chatbot Training</h3>
              </div>
              <div className="svc-body">
                <p>Prepare conversation data that helps assistants understand messages and respond appropriately.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Text/Voice Message Recognition Training Data</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Training Data for Accurate Responses</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Chatbot Training for Conversational Protocols</span></li>
                </ul>
              </div>
            </Link>

            {/* Sentiment Analysis */}
            <Link href="/solutions/nlp/sentiment-analysis" className="svc v1">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-smile"/></svg></span>
                <h3>Sentiment Analysis</h3>
              </div>
              <div className="svc-body">
                <p>Label opinion, emotion, and speaker attitude at the level of detail your model needs.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Data Labeling</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Expressive-subjective Tagging</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Direct-subjective Tagging</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Objective-speech-event Tagging</span></li>
                </ul>
              </div>
            </Link>

            {/* Feature Classification */}
            <Link href="/solutions/nlp/feature-classification" className="svc v2">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-layers"/></svg></span>
                <h3>Feature Classification</h3>
              </div>
              <div className="svc-body">
                <p>Prepare labeled samples that describe the features of a text, ready for your training pipeline.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Export Training Samples</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Expressive-subjective Tagging</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Direct-subjective Tagging</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Objective-speech-event Tagging</span></li>
                </ul>
              </div>
            </Link>

            {/* Intent Classification */}
            <Link href="/solutions/nlp/intent-classification" className="svc v3">
              <div className="svc-head">
                <span className="svc-ico"><svg className="icon" aria-hidden="true"><use href="#i-target"/></svg></span>
                <h3>Intent Classification</h3>
              </div>
              <div className="svc-body">
                <p>Identify what a user is trying to do in a message so systems can route and answer it correctly.</p>
                <ul className="svc-list">
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Importing Datasets</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Analyzing Datasets</span></li>
                  <li><span className="tick"><svg className="icon" aria-hidden="true"><use href="#i-check"/></svg></span><span>Tagging Texts</span></li>
                </ul>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="section alt"><div className="container"><div className="rows"><div className="row"><div className="row-text"><h3>Finding entities and the links between them</h3><p>Named entity recognition marks the people, organizations, places, dates, and products that appear in text. Relation extraction then records how those entities connect, so a model can tell who works where, who acquired whom, and what happened when.</p><p>Open, supervised, and targeted approaches suit different projects. Open extraction discovers relationships as they appear, while supervised and targeted approaches follow a defined set of labels.</p><div className="row-tags"><span>Entity annotation</span><span>Entity linking</span><span>Open extraction</span><span>Targeted extraction</span></div></div><div className="media"><div className="mock"><div className="win"><div className="win-bar"><i></i><i></i><i></i><span>Relation extraction</span></div><div className="win-body"><svg viewBox="0 0 520 290" role="img" aria-label="Entity relationship graph" style={{display: 'block', width: '100%', height: 'auto'}}><defs><marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1E5B88"/></marker></defs><line x1="190" y1="60" x2="320" y2="60" stroke="#1E5B88" strokeWidth="2" marker-end="url(#ar8)"/><rect x="211" y="48" width="88" height="24" rx="12" fill="#fff" stroke="#DEE8F0"/><text x="255" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="#1E5B88">works_at</text><line x1="430" y1="88" x2="430" y2="202" stroke="#1E5B88" strokeWidth="2" marker-end="url(#ar8)"/><rect x="386" y="133" width="88" height="24" rx="12" fill="#fff" stroke="#DEE8F0"/><text x="430" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#1E5B88">based_in</text><line x1="120" y1="88" x2="120" y2="202" stroke="#1E5B88" strokeWidth="2" marker-end="url(#ar8)"/><rect x="76" y="133" width="88" height="24" rx="12" fill="#fff" stroke="#DEE8F0"/><text x="120" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#1E5B88">leads</text><rect x="20" y="38" width="170" height="46" rx="12" fill="rgba(61,114,242,.12)" stroke="#3D72F2" strokeWidth="2"/><text x="105.0" y="67" text-anchor="middle" font-size="15" font-weight="700" fill="#123C64">Maria Alvarez</text><rect x="320" y="38" width="200" height="46" rx="12" fill="rgba(43,197,158,.16)" stroke="#2BC59E" strokeWidth="2"/><text x="420.0" y="67" text-anchor="middle" font-size="15" font-weight="700" fill="#123C64">Northwind Health</text><rect x="350" y="206" width="160" height="46" rx="12" fill="rgba(55,175,229,.16)" stroke="#37AFE5" strokeWidth="2"/><text x="430.0" y="235" text-anchor="middle" font-size="15" font-weight="700" fill="#123C64">Chennai</text><rect x="20" y="206" width="200" height="46" rx="12" fill="rgba(30,91,136,.12)" stroke="#1E5B88" strokeWidth="2"/><text x="120.0" y="235" text-anchor="middle" font-size="15" font-weight="700" fill="#123C64">Clinical data team</text></svg><div className="tagrow"><span className="pill b">works_at</span><span className="pill t">based_in</span><span className="pill c">leads</span></div></div></div></div></div></div><div className="row flip"><div className="row-text"><h3>From spoken video to usable transcripts</h3><p>Video transcription converts speech into text and keeps it aligned with the footage. Transcripts can be formatted and customized to match the speaker labels, timestamps, and style rules your project defines.</p><p>Translation between languages is handled as its own step, so that meaning, and not just wording, carries across.</p><div className="row-tags"><span>Transcription</span><span>Translation</span><span>Formatting</span><span>Customization</span></div></div><div className="media"><div className="mock"><div className="win"><div className="win-bar"><i></i><i></i><i></i><span>Video transcript</span></div><div className="win-body"><div className="vid"><span className="play"><svg className="icon" aria-hidden="true"><use href="#i-video"/></svg></span><span className="bar"><i></i></span></div><div className="tr"><time>00:04</time><div>Welcome back. Today we are looking at how the new intake process works.<small>Translated (ES): Bienvenidos de nuevo. Hoy veremos cómo funciona el nuevo proceso de admisión.</small></div></div><div className="tr"><time>00:11</time><div>First, the form is reviewed by a coordinator.<small>Speaker 2</small></div></div></div></div></div></div></div><div className="row"><div className="row-text"><h3>Training assistants to understand and respond</h3><p>Chatbots learn from examples of real messages paired with suitable replies. Well-prepared text and voice data helps a model recognize what people mean, answer accurately, and follow conversational conventions such as greetings, clarifying questions, and hand-offs.</p><p>Intent classification adds the layer that ties it together: each message is tagged with the goal behind it, which lets the system choose the right action.</p><div className="row-tags"><span>Message recognition</span><span>Response training</span><span>Conversational protocols</span><span>Intent tagging</span></div></div><div className="media"><div className="mock"><div className="win"><div className="win-bar"><i></i><i></i><i></i><span>Conversation labeling</span></div><div className="win-body"><div className="chat"><div className="side r"><div className="bub u">Can I change my delivery address?</div><div className="tagrow"><span className="pill b">intent: update_address</span></div></div><div className="side"><div className="bub a">Of course. What is the new address?</div><div className="tagrow"><span className="pill t">response: ask_detail</span></div></div><div className="side r"><div className="bub u">Flat 4B, 22 Lake Road</div><div className="tagrow"><span className="pill c">entity: address</span></div></div></div></div></div></div></div></div><div className="row flip"><div className="row-text"><h3>Reading opinion and emotion in text</h3><p>Sentiment labeling goes beyond positive and negative. Expressive-subjective, direct-subjective, and objective-speech-event tagging separate opinions from reported speech and neutral statements, giving models a more careful view of tone.</p><p>Text classification and feature classification build on the same labels, turning reviews, tickets, and product listings into organized, trainable datasets.</p><div className="row-tags"><span>Sentiment</span><span>Theme detection</span><span>Feature classification</span><span>Product categorization</span></div></div><div className="media"><div className="mock"><div className="win"><div className="win-bar"><i></i><i></i><i></i><span>Sentiment labeling</span></div><div className="win-body"><div className="srow"><span>The setup was quick and the support team was great.</span><span className="pills"><span className="pill t">Direct-subjective</span><span className="pill t">Positive</span></span></div><div className="srow"><span>The company says the update ships on Friday.</span><span className="pills"><span className="pill c">Objective-speech-event</span><span className="pill g">Neutral</span></span></div><div className="srow"><span>Honestly, I expected more from the battery.</span><span className="pills"><span className="pill b">Expressive-subjective</span><span className="pill n">Negative</span></span></div></div></div></div></div></div></div></div></section>

      <section className="section" data-anchor="faq"><div className="container faq-wrap"><div className="section-head"><h2>NLP FAQ</h2><p>Short answers to common questions about NLP data services.</p></div><div className="faq-list"><details className="faq"><summary>What is NLP data annotation?</summary><p>It is the process of labeling text, and transcribed speech, so that language models can learn from it. Common labels mark entities, categories, sentiment, and intent.</p></details><details className="faq"><summary>How does text annotation differ from text classification?</summary><p>Text annotation labels parts of a text, such as words, phrases, and the links between entities. Text classification assigns a label to a whole document, message, or product listing.</p></details><details className="faq"><summary>What can named entity recognition label?</summary><p>Typically people, organizations, locations, dates, and products, plus any custom categories a project needs, such as medication names or account numbers.</p></details><details className="faq"><summary>What is the difference between open, supervised, and targeted extraction?</summary><p>Open extraction finds relationships as they appear in the text, without a fixed list. Supervised extraction learns from labeled examples of predefined relations. Targeted extraction focuses only on the specific relations or entities you care about.</p></details><details className="faq"><summary>Why does a chatbot need intent-labeled data?</summary><p>Intent labels tell a model what a user wants, such as tracking an order or changing an address. With them, the chatbot can pick the right response or action rather than guessing from keywords.</p></details><details className="faq"><summary>How is sentiment labeling more detailed than positive or negative?</summary><p>Tagging can separate opinions a writer states directly, subjective or expressive language, and objective reports of what someone said. That helps models handle tone and reported speech more carefully.</p></details><details className="faq"><summary>How are video transcripts kept accurate?</summary><p>Speech is transcribed and then reviewed against the footage for wording, speaker labels, and timestamps. The result is formatted to the style guide agreed for the project.</p></details></div></div></section>
    </main>
  );
}
