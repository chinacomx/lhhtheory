---
layout: single
title: "Journals Archive"
classes: wide
---

<style>
/* Sleek, Minimalist, Centered Design */
.archive-wrapper {
    max-width: 800px;
    margin: 0 auto !important; /* Forces centering */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #333;
}
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
/* Adds a sleek + / - indicator */
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
