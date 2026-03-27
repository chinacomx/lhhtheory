---
layout: single
title: "Journals Archive"
---

<input type="text" id="searchBar" placeholder="Search articles, authors, or issues..." style="width: 100%; padding: 12px; margin-bottom: 30px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">

<div id="archive-container">
  {% for journal in site.data.journals %}
  <div class="journal-section">
    
    <h2 class="collapsible" tabindex="0" aria-expanded="false" style="cursor: pointer; background-color: #f7f7f7; padding: 15px; border-left: 4px solid #555; margin-top: 20px; margin-bottom: 0;">
      {{ journal.title }}
    </h2>
    
    <div class="content" style="display: none; padding: 15px; border: 1px solid #f7f7f7; border-top: none;">
      {% for issue in journal.issues %}
      <h3 style="font-size: 1.1em; color: #555; margin-top: 20px;">{{ issue.name }}</h3>
      
      <ul style="list-style-type: square; padding-left: 20px;">
        {% for article in issue.articles %}
        <li class="toc-item" style="margin-bottom: 8px;">
          <strong>{{ article.title }}</strong> 
          {% if article.author %} — <em>{{ article.author }}</em>{% endif %}
        </li>
        {% endfor %}
      </ul>
      
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<script src="{{ '/assets/js/custom-search.js' | relative_url }}"></script>
