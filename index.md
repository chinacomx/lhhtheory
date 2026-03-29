---
layout: single
classes: wide
title: "Lianhuanhua Theory"
---

<style>
/* Hide the default Minimal Mistakes title */
.page__title { display: none !important; }

/* Sleek, Minimalist, Centered Container */
.archive-wrapper {
    max-width: 800px;
    margin: 0 auto !important; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #333;
}

/* --- HEADER STYLES --- */
.custom-header {
    margin-bottom: 30px;
    border-bottom: 2px solid #222;
    padding-bottom: 20px;
    padding-top: 50px; 
    text-align: center; 
}
.site-title-custom {
    font-size: 2.2em;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #111;
    letter-spacing: -0.5px;
}
.site-subtitle {
    font-size: 1.05em;
    color: #555;
    margin: 0 0 25px 0;
    line-height: 1.6;
}
.journal-list-header {
    display: inline-block;
    text-align: center;
    margin-top: 8px;
    font-size: 0.95em;
}
.journal-item {
    display: block; 
    margin-bottom: 4px;
    color: #444;
}
.journal-item em {
    color: #555;
}
.journal-item .dates {
    color: #888; 
    font-size: 0.9em;
    margin-left: 6px;
}
.custom-nav {
    font-size: 1.05em;
}
.custom-nav a {
    color: #0056b3;
    text-decoration: none;
    font-weight: 500;
}
.custom-nav a:hover {
    text-decoration: underline;
}
.custom-nav .separator {
    color: #ccc;
    margin: 0 10px;
}

/* --- SEARCH & CONTROLS STYLES --- */
.search-controls {
    display: flex;
    gap: 12px;
    margin: 10px 0 40px 0;
}
#searchBar {
    flex-grow: 1;
    padding: 14px 20px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    transition: all 0.3s ease;
}
#searchBar:focus {
    outline: none;
    border-color: #999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.lang-toggle-btn {
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0 20px;
    font-size: 14px;
    color: #444;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    white-space: nowrap;
}
.lang-toggle-btn:hover {
    background-color: #eaeaea;
    color: #111;
}
.hide-en .lang-en { display: none !important; }

/* --- BILINGUAL TOC STYLES --- */
.journal-section { margin-bottom: 25px; }

.collapsible {
    cursor: pointer;
    padding: 16px 0;
    border-bottom: 2px solid #eaeaea;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    user-select: none;
    transition: background-color 0.2s ease;
}
.collapsible:hover { background-color: #fcfcfc; }
.titles-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px; 
}
.collapsible .lang-zh { font-size: 1.6em; font-weight: 600; color: #222; line-height: 1.2; }
.collapsible .lang-en { font-size: 0.9em; color: #777; font-weight: 400; letter-spacing: 0.2px; }

.collapsible::after {
    content: '+';
    font-size: 1.8em;
    color: #999;
    font-weight: 300;
    padding-left: 20px;
}
.collapsible[aria-expanded="true"]::after { content: '−'; }

.content {
    display: none;
    padding: 10px 0 30px 0;
    animation: fadeIn 0.3s ease-out;
}
.content.active { display: block; }
.issue-header {
    margin: 30px 0 15px 0;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 8px;
}
.issue-header .lang-zh { display: block; font-size: 1.1em; color: #444; font-weight: 600; }
.issue-header .lang-en { display: block; font-size: 0.85em; color: #777; text-transform: uppercase; margin-top: 4px; }

.content ul { list-style: none; padding: 0; margin: 0; }

.toc-item {
    padding: 12px 0;
    line-height: 1.4;
    border-bottom: 1px dashed #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.toc-item:last-child { border-bottom: none; }
.toc-item:hover { background-color: #fafafa; }

.toc-item-content {
    flex-grow: 1;
    padding-right: 20px;
}
.toc-item-content .lang-zh { display: block; font-size: 1.05em; font-weight: 500; color: #111; }
.toc-item-content .lang-en { display: block; font-size: 0.9em; font-style: italic; color: #666; margin-top: 4px; }
.author-text { font-weight: 400; color: #888; font-style: normal; }

.toc-item-page {
    font-size: 0.95em;
    color: #666;
    white-space: nowrap; 
}

.hidden { display: none !important; }
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}
    
/* --- FLOATING ACCESSIBILITY WIDGET --- */
.floating-controls {
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    display: flex;
    gap: 18px;
    z-index: 1000;
    border: 1px solid #eaeaea;
    transition: background-color 0.3s, border-color 0.3s;
}
.floating-controls button {
    background: none;
    border: none;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    color: #333;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
    font-family: inherit;
}
.floating-controls button:hover {
    color: #0056b3;
}

/* --- DARK MODE OVERRIDES --- */
body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
}
body.dark-mode .archive-wrapper,
body.dark-mode .custom-header,
body.dark-mode .site-subtitle,
body.dark-mode .about-content {
    color: #e0e0e0;
}
body.dark-mode .site-title-custom,
body.dark-mode .collapsible .lang-zh,
body.dark-mode .issue-header .lang-zh,
body.dark-mode .toc-item-content .lang-zh {
    color: #fcfcfc;
}
body.dark-mode .custom-header,
body.dark-mode .issue-header,
body.dark-mode .collapsible,
body.dark-mode .toc-item {
    border-color: #333;
}
body.dark-mode .collapsible:hover,
body.dark-mode .toc-item:hover {
    background-color: #1a1a1a;
}
body.dark-mode #searchBar,
body.dark-mode .lang-toggle-btn {
    background: #1e1e1e;
    color: #f5f5f5;
    border-color: #444;
}
body.dark-mode .floating-controls {
    background: #1e1e1e;
    border-color: #444;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}
body.dark-mode .floating-controls button {
    color: #e0e0e0;
}
body.dark-mode .floating-controls button:hover {
    color: #66b2ff;
}
body.dark-mode .journal-item { color: #ccc; }
    
</style>

<div class="archive-wrapper">
  
  <div class="custom-header">
    <h1 class="site-title-custom">ChinaComx: Lianhuanhua Theory</h1>
    <div class="site-subtitle">
      <span class="journal-list-header">
        <span class="journal-item">Tables of Contents for the theory journals:</span>
        <span class="journal-item">连环画研究 <em>Lianhuanhua Research</em> <span class="dates">(1955-1957, 1978-1983)</span></span>
        <span class="journal-item">连环画论丛 <em>Lianhuanhua Discussion Series</em> <span class="dates">(1980-1986)</span></span>
        <span class="journal-item">连环画艺术 <em>Lianhuanhua Art</em> <span class="dates">(1987-2012)</span></span>
      </span>
    </div>
    
    <div class="custom-nav">
      <a href="{{ '/' | relative_url }}">Browse</a>
      <span class="separator">&#124;</span>
      <a href="{{ '/about/' | relative_url }}">About</a>
      <span class="separator">&#124;</span>
      <a href="https://chinacomx.github.io/">ChinaComx: Home</a>
    </div>
  </div>

  <div class="search-controls">
    <input type="text" id="searchBar" placeholder="Search articles, authors, or issues...">
    <button id="langToggle" class="lang-toggle-btn">Hide Translation</button>
  </div>

  <div id="archive-container">
    {% for journal in site.data.journals %}
    <div class="journal-section">
      
      <div class="collapsible" tabindex="0" aria-expanded="false">
        <div class="titles-wrapper">
          <span class="lang-zh">{{ journal.title_zh }}</span>
          <span class="lang-en">{{ journal.title_en }}</span>
        </div>
      </div>
      
      <div class="content">
        {% for issue in journal.issues %}
        <div class="issue-header">
          <span class="lang-zh">{{ issue.name_zh }}</span>
          <span class="lang-en">{{ issue.name_en }}</span>
        </div>
        
        <ul>
          {% for article in issue.articles %}
          <li class="toc-item">
            <div class="toc-item-content">
              <span class="lang-zh">
                {{ article.title_zh }} 
                {% if article.author_zh %}<span class="author-text">— {{ article.author_zh }}</span>{% endif %}
              </span>
              <span class="lang-en">
                {{ article.title_en }}
                {% if article.author_en %}<span class="author-text">— {{ article.author_en }}</span>{% endif %}
              </span>
            </div>
            
            {% if article.page %}
            <div class="toc-item-page">
              p. {{ article.page }}
            </div>
            {% endif %}
          </li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="floating-controls">
    <button id="btn-text-decrease" aria-label="Decrease text size">A−</button>
    <button id="btn-text-increase" aria-label="Increase text size">A+</button>
    <button id="btn-theme-toggle" aria-label="Toggle dark mode">☽</button>
  </div>

</div>

<script src="{{ '/assets/js/custom-search.js' | relative_url }}"></script>
