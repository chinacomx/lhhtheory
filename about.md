---
layout: single
classes: wide
permalink: /about/
---

<style>
/* Hide default Minimal Mistakes title */
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
    margin: 0 0 15px 0;
    color: #111;
    letter-spacing: -0.5px;
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

/* --- CONTENT STYLES --- */
.about-content {
    line-height: 1.8;
    font-size: 1.1em;
    color: #444;
}
.about-content p {
    margin-bottom: 20px;
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
    
</style>

<div class="archive-wrapper">
  
  <div class="custom-header">
    <h1 class="site-title-custom">About the Archive</h1>
    
    <div class="custom-nav">
      <a href="{{ '/' | relative_url }}">Browse</a>
      <span class="separator">&#124;</span>
      <a href="{{ '/about/' | relative_url }}">About</a>
      <span class="separator">&#124;</span>
      <a href="https://chinacomx.github.io/">ChinaComx: Home</a>
    </div>
  </div>

  <div class="about-content">
    <p>This reference space is dedicated to the study of Lianhuanhua theory. It aggregates tables of contents from key journals published between 1955 and 2012, providing a bilingual searchable index for researchers and enthusiasts.</p>
    
    <p><em>[Add your project history, methodology, acknowledgments, or contact details here...]</em></p>
  </div>
  
  <div class="floating-controls">
    <button id="btn-text-decrease" aria-label="Decrease text size">A−</button>
    <button id="btn-text-increase" aria-label="Increase text size">A+</button>
    <button id="btn-theme-toggle" aria-label="Toggle dark mode">☽</button>
  </div>

</div>

<script src="{{ '/assets/js/custom-search.js' | relative_url }}"></script>
