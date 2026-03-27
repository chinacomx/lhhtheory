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

/* --- NEW HEADER STYLES --- */
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

/* --- SEARCH BAR & TOC STYLES --- */
#searchBar {
    width: 100%;
    padding: 14px 20px;
    margin: 10px 0 40px 0;
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
.journal-section {
    margin-bottom: 25px;
}
.collapsible {
    cursor: pointer;
    padding: 12px 0;
    border-bottom: 2px solid #eaeaea;
    margin: 0;
    font-size: 1.6em;
    font-weight: 600;
    color: #222;
    transition: color 0.2s;
    user-select: none;
}
.collapsible:hover {
    color: #666;
}
.collapsible::after {
    content: '+';
    float: right;
    font-size: 1.2em;
    color: #bbb;
    font-weight: 400;
}
.collapsible[aria-expanded="true"]::after {
    content: '−';
}
.content {
    display: none;
    padding: 20px 0 30px 0;
    animation: fadeIn 0.3s ease-out;
}
.content.active {
    display: block;
}
.content h3 {
    font-size: 1.1em;
    color: #555;
    margin: 30px 0 15px 0;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.toc-item {
    padding: 8px 0;
    line-height: 1.6;
    border-bottom: 1px solid transparent;
}
.toc-item:hover {
    background-color: #fafafa;
}
.hidden {
    display: none !important;
}
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

  <input type="text" id="searchBar" placeholder="Search articles, authors, or issues...">

  <div id="archive-container">
    {% for journal in site.data.journals %}
    <div class="journal-section">
      <h2 class="collapsible" tabindex="0" aria-expanded="false">{{ journal.title }}</h2>
      <div class="content">
        {% for issue in journal.issues %}
        <h3>{{ issue.name }}</h3>
        <ul>
          {% for article in issue.articles %}
          <li class="toc-item">
            <strong>{{ article.title }}</strong> 
            {% if article.author %} — <em style="color: #666;">{{ article.author }}</em>{% endif %}
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
