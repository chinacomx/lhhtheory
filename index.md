---
layout: single
classes: wide
---

<style>
/* Hide the default Minimal Mistakes title so we can build our own */
.page__title {
    display: none !important;
}

/* Sleek, Minimalist, Centered Container */
.archive-wrapper {
    max-width: 800px;
    margin: 0 auto !important; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #333;
}

/* --- HEADER STYLES --- */
.custom-header {
    margin-bottom: 40px;
    border-bottom: 2px solid #222;
    padding-bottom: 20px;
}
.site-title-custom {
    font-size: 2.2em;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #111;
    letter-spacing: -0.5px;
}
.site-subtitle {
    font-size: 1.1em;
    color: #555;
    margin: 0 0 20px 0;
    line-height: 1.5;
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

/* The magic class that hides English when applied */
.hide-en .lang-en {
    display: none !important;
}

/* Bilingual Typography */
.lang-zh { display: block; font-weight: 600; color: #111; }
.lang-en { display: block; font-size: 0.65em; color: #777; font-weight: 400; margin-top: 4px; letter-spacing: 0.2px; }

.collapsible .lang-zh { font-size: 1.6em; }
.collapsible .lang-en { font-size: 0.9em; margin-top: 6px; }

.content {
    display: none;
    padding: 20px 0 30px 0;
    animation: fadeIn 0.3s ease-out;
}
.content.active {
    display: block;
}

.issue-header {
    margin: 30px 0 15px 0;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 8px;
}
.issue-header .lang-zh { font-size: 1.1em; color: #444; }
.issue-header .lang-en { font-size: 0.85em; text-transform: uppercase; }

.content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.toc-item {
    padding: 12px 0;
    line-height: 1.4;
    border-bottom: 1px dashed #f0f0f0;
}
.toc-item:last-child {
    border-bottom: none;
}
.toc-item:hover {
    background-color: #fafafa;
}
.toc-item .lang-zh { font-size: 1.05em; font-weight: 500; }
.toc-item .lang-en { font-size: 0.9em; font-style: italic; color: #666; }
.author-text { font-weight: 400; color: #888; }

.hidden { display: none !important; }
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>

<div class="archive-wrapper">
  
  <div class="custom-header">
    <h1 class="site-title-custom">ChinaComx: Lianhuanhua Theory</h1>
    <p class="site-subtitle">Table of Contents for 连环画研究(1955-1957, 1978-1983) ，连环画论丛 (1980-1986)，and 连环画艺术 (1987-2012)</p>
    
    <div class="custom-nav">
      <a href="{{ '/' | relative_url }}">Browse</a>
      <span class="separator">|</span>
      <a href="{{ '/about/' | relative_url }}">About</a>
      <span class="separator">|</span>
      <a href="https://chinacomx.github.io/">ChinaComx: Home</a>
    </div>
  </div>

<div class="search-controls">
    <input type="text" id="searchBar" placeholder="Search articles, authors, or issues...">
    <button id="langToggle" class="lang-toggle-btn">Hide English</button>
  </div>
  
  <div id="archive-container">
    {% for journal in site.data.journals %}
    <div class="journal-section">
      
      <div class="collapsible" tabindex="0" aria-expanded="false">
        <span class="lang-zh">{{ journal.title_zh }}</span>
        <span class="lang-en">{{ journal.title_en }}</span>
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
            <span class="lang-zh">
              {{ article.title_zh }} 
              {% if article.author_zh %}<span class="author-text">— {{ article.author_zh }}</span>{% endif %}
            </span>
            <span class="lang-en">
              {{ article.title_en }}
              {% if article.author_en %}<span class="author-text">— {{ article.author_en }}</span>{% endif %}
            </span>
          </li>
          {% endfor %}
        </ul>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/custom-search.js' | relative_url }}"></script>
