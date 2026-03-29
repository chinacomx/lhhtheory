---
layout: single
classes: wide
permalink: /about/
title: "Lianhuanhua Theory"
---

<style>
/* Hide default Minimal Mistakes title */
.page__title { display: none !important; }

/* Sleek, Minimalist, Centered Container */
.archive-wrapper {
    max-width: 800px;
    margin: 0 auto !important; 
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
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
.about-content h3 {
    font-size: 1.5em;
    color: #222;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 8px;
    margin-top: 35px;
    margin-bottom: 15px;
}
.about-content h4 {
    font-size: 1.1em;
    color: #555;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 500;
}

.academic-byline {
    font-size: 0.95em;
    color: #666;
    font-style: italic;
    margin-bottom: 25px;
    margin-top: -5px;
}
.academic-byline strong {
    font-style: normal;
    color: #222;
    font-weight: 600;
}

/* --- CITATION BOX STYLES --- */
.citation-wrapper {
    position: relative;
    margin: 20px 0 40px 0;
}
.citation-box {
    background-color: #f8f9fa;
    border-left: 4px solid #b8221f;
    padding: 18px 105px 18px 20px; 
    border-radius: 0 6px 6px 0;
    font-size: 0.95em;
    color: #333;
    line-height: 1.6;
}
.copy-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 80px;
    text-align: center;
    background-color: #eaeaea;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px 0;
    font-size: 0.85em;
    cursor: pointer;
    color: #444;
    font-weight: 500;
    transition: all 0.2s ease;
}
.copy-btn:hover {
    background-color: #ddd;
    color: #111;
}
.copy-btn.copied {
    background-color: #28a745;
    color: white;
    border-color: #28a745;
}

.footer-logos {
    max-width: 100%;
    height: auto;
    mix-blend-mode: multiply;
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
body.dark-mode .about-content h3 {
    color: #fcfcfc;
    border-color: #333;
}
body.dark-mode .about-content h4 {
    color: #ccc;
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
body.dark-mode .custom-chinacomx-footer { border-color: #333 !important; }
body.dark-mode .citation-box { background-color: #1a1a1a; border-left-color: #b8221f; color: #ccc; }
body.dark-mode .copy-btn { background-color: #333; border-color: #444; color: #ddd; }
body.dark-mode .copy-btn:hover { background-color: #444; color: #fff; }

body.dark-mode .footer-logos {
    mix-blend-mode: normal; /* Turns off the shadow-swallowing effect */
    opacity: 0.85; /* Softens the bright white */
    border-radius: 4px; /* Optional: rounds the corners of the image slightly */
}

</style>

<div class="archive-wrapper">
  
  <div class="custom-header">
    <h1 class="site-title-custom">ChinaComx: Lianhuanhua Theory</h1>
    
    <div class="custom-nav">
      <a href="{{ '/' | relative_url }}">Browse</a>
      <span class="separator">&#124;</span>
      <a href="{{ '/about/' | relative_url }}">About</a>
      <span class="separator">&#124;</span>
      <a href="https://chinacomx.github.io/">ChinaComx: Home</a>
    </div>
  </div>

  <div class="about-content">

<h3 id="a-few-words">A Few Words on Lianhuanhua Theory Journals</h3>

<div class="academic-byline">
  <i>by Damian Mandzunowski &bull; 1 April 2026</i>
</div>

<p>The Chinese socialist mediascape was diverse, and pictorial journals enjoyed a stable presence within it. As textual-visual extensions of ongoing propaganda drives, titles such as <i>Renmin huabao</i> 人民画报, which circulated around the world as <a href="https://www.bannedthought.net/China/Magazines/ChinaPictorial/index.htm" target="_blank"><i>China Pictorial</i></a>, featured carefully selected, high-quality photo-stories in large formats and on glossy paper. Others focused more on comic strips and cartoons; of these, perhaps the two most well-known are <i>Manhua yuekan</i> 漫画月刊 (Manhua Monthly), published from 1950 to 1960 and presenting primarily political and social critique in the form of caricature, and <i>Lianhuanhua bao</i> 连环画报 (Picture Story), published from 1951 to 1960 and then restarted in 1973 as the major publication for multi-panel visual-textual narratives. Alongside these and dozens of other pictorials, China’s newsstands also featured a wide range of art and literature theory journals. Titles such as <i>Meishu</i> 美术 or <i>Dushu</i> 读书 catered to an informed readership of thinkers, writers, art practitioners, publishers, journalists, and academics, and tended to be more text-heavy.</p>

<p>Even though many important discussions about the style and contents of new socialist lianhuanhua played out on the pages of <i>Lianhuanhua bao</i>, the journals whose (semi complete) tables of contents we feature on this website—<i>Lianhuanhua yanjiu</i> 连环画研究 (Lianhuanhua Research), <i>Lianhuanhua luncong</i> 连环画论丛 (Lianhuanhua Discussion Series), and <i>Lianhuanhua yishu</i> 连环画艺术 (Lianhuanhua Art)—were the three most important publications of the period entirely focused on presenting lianhuanhua theory, analyses, criticism, and, later on, readers’ letters and creators’ recollections. As such, all three journals are of great relevance for the study of lianhuanhua: they inform us about the internal discussions between the people hands-on involved in the creation of lianhuanhua over decades; they provide insights into the impact of politics on these processes, both via early campaign-related criticism and later market-driven recommendations; and they showcase feedback and texts sent in by actual readers that were deemed relevant enough to be printed and circulated within the broader lianhuanhua community. Given all this, and also due to their relative rarity in available library collections, we decided to create this searchable overview of their tables of contents to offer a window into this fascinating source.</p>

<p><i>Lianhuanhua yanjiu</i> 连环画研究 (Lianhuanhua Research), initially called <i>Lianhuantuhua yanjiu</i> 连环图画研究 (Lianhuantuhua Research), was published by the Shanghai People's Fine Arts Publishing House Lianhuanhua Editorial Office 上海人民美术出版社连环画编辑室. Its first twelve issues came out between 1955 and 1957; then, restarted and rebranded, another thirteen issues were published between 1978 and 1984. The journal was a subscription-only publication, branded in its initial run with the <i>feimai pin</i> 非卖品 (not for sale) mark and as a <i>neibu kanwu</i> 内部刊物 (internal publication) in its second iteration. This means that the texts found here are potentially more critical and potentially more urgent than those created for wide public circulation. It also means that the breadth of topics covered was somewhat more nuanced, as they could include themes deemed inappropriate or otherwise problematic for non-expert readers. Yet it also means that—and this is of particular interest given that the first iteration of <i>Lianhuantuhua yanjiu</i> was coming out concurrently not only to a large-scale top-down campaign to regulate the lianhuanhua industry but also with the Hundred Flowers and Anti-Rightist campaigns—the journal existed during a highly tense and politically loaded time. We present here the full tables of contents for all twenty-five issues.</p>

<p><i>Lianhuanhua luncong</i> 连环画论丛 (Lianhuanhua Discussion Series) ran for a total of fourteen issues from 1983 to 1986. The journal presented lengthy theoretical discussions that at times followed a semi-academic ambition; however, it was an open-market journal available for purchase by anyone willing to spend 0.42 RMB or, from 1986 onwards, 0.80 RMB. The first ten issues were published by the People’s Fine Arts Publishing House 人民美术出版社 (the same institution that brought out dozens of lianhuanhua each year) under the joint editorship of a <i>Lianhuanhua luncong</i> Editorial Committee《连环画论丛》编辑委员会. The editor-in-chief was Jiang Weipu 姜维扑, one of the most influential figures in the post-1949 lianhuanhua industry, with Cao Zuorei 曹作锐 and later Bai Zi 白字 serving as co-editors. From 1986 (issues eleven to fourteen), the newly founded China Lianhuanhua Publishing House 中国连环画出版社 took over publishing duties, with editorship moving to the China Lianhuanhua Research Committee <i>Lianhuanhua luncong</i> Editorial Committee 中国连环画研究会《连环画论丛》编辑部. (This change was partially related to the launch of a new lianhuanhua pictorial titled <i>Zhongguo Lianhuanhua</i> 中国连环画 (China Lianhuanhua) in 1985, which would continue to appear in competition with <i>Lianhuanhua bao</i> until 1998 when the two journals merged.) We present here the full tables of contents for thirteen of the fourteen issues of <i>Lianhuanhua luncong</i>, missing only the first issue.</p>

<p><i>Lianhuanhua luncong</i> ceased publication in December 1986 only to restart in January 1987 as <i>Lianhuanhua yishu</i> 连环画艺术 (Lianhuanhua Art). <i>Lianhuanhua yishu</i> was prepared by the China Lianhuanhua Research Committee <i>Lianhuanhua yishu</i> Editorial Committee 中国连环画研究会《连环画艺术》编辑部, which arose directly from <i>Lianhuanhua luncong's</i> editorial committee and retained at start the same editor-in-chief, vice editors, and extended team. <i>Lianhuanhua yishu</i> would run until 2012, reaching a total of forty-four issues. We are currently focusing on obtaining and evaluating its initial five years, up to 1991. In this period, <i>Lianhuanhua yishu</i> retained the overall style, design, and type of content of its predecessor, but the price changed in mid-1988 when it doubled to 1.60 RMB. Over time, both <i>Lianhuanhua luncong</i> and especially <i>Lianhuanhua yishu</i> featured an increasing number of texts about Japanese, European, and North American comics, signaling a growing interest in (and perhaps worried awareness of) other forms of graphic narratives. We present here the full tables of contents for eleven of the eighteen issues published up to 1991.</p>

<p>The ChinaComx team is working on obtaining all the missing issues of these journals, and we will add the related content whenever it becomes available to us. We are also preparing other lianhuanhua theory journals for a future update.</p>

 <h3>About the website</h3>

<p>This site was developed as part of the ERC-funded project <a href="https://chinacomx.github.io/" target="_blank">ChinaComx: Comics Culture in the PRC</a>. The digital tables of contents for the three most prominent lianhuanhua theory journals were compiled by the ChinaComx team using materials kindly provided by the <a href="https://www.cats.uni-heidelberg.de/library/" target="_blank">CATS Library</a> and the <a href="https://staatsbibliothek-berlin.de/en/" target="_blank">Berlin State Library</a> via <a href="https://crossasia.org/en/" target="_blank">CrossAsia</a>, alongside our own collection of sources. We extend our gratitude to our research assistants for their help in digitizing the journals. Additionally, the tables of contents for <em>Lianhuantuhua yanjiu</em> 连环图画研究 ８ (1957.04), 9 (1957.05), and 10 (1957.07) were adapted from <a href="https://doi.org/10.14943/2115.98424" target="_blank">an overview article</a> by Takeda Masaya.</p>
        
<p>The website was designed by <a href="https://chinacomx.github.io/team/damian/" target="_blank">Damian Mandzunowski</a>, with coding assistance from Gemini 3.1 Pro, and was very much inspired by Konrad Lawson’s <a href="https://froginawell.net/tokyo-gazette/index.html" target="_blank">searchable table of contents of the Tokyo Gazette</a> as well as his kind and useful advice.</p>

<h3>How to cite</h3>

<p>If you use this archive in your research, please cite it as follows:</p>
    
<div class="citation-wrapper">
      <div class="citation-box" id="citation-text">
        <em>Lianhuanhua Theory</em> (Version 1.0), compiled by Damian Mandzunowski with Lena Henningsen, Jiu Song, Astrid Xiao, and Aijia Zhang. ERC-ChinaComx, 1 April 2026. https://chinacomx.github.io/lhhtheory.
      </div>
      <button class="copy-btn" id="copy-citation-btn" aria-label="Copy citation to clipboard">Copy</button>
     </div>

 <p style="text-align:center;">*</p>

<p><em>This repository is intended for academic and educational purposes. If you have any questions, suggestions, or information regarding the few missing journal issues, please contact us <a href="https://chinacomx.github.io/contact/">here</a>.</em></p>

  </div>

  <div class="custom-chinacomx-footer" style="text-align: center; margin-top: 60px; padding-top: 30px; border-top: 1px solid #eaeaea; padding-bottom: 40px;">
    <p style="color: #555; font-size: 0.9em; margin-bottom: 15px;">
      <i>Work on this repository was sponsored by the following institutions — learn more <a href="https://chinacomx.github.io/about/" target="_blank" style="color: #0056b3; text-decoration: none;">here</a></i>:
    </p>
    <div style="display: flex; justify-content: center;">
      <img src="{{ '/assets/images/lhhtheory-footer-logos.jpg' | relative_url }}" alt="Sponsoring Institutions" class="footer-logos">
    </div>
  </div>
  
  <div class="floating-controls">
    <button id="btn-text-decrease" aria-label="Decrease text size">A−</button>
    <button id="btn-text-increase" aria-label="Increase text size">A+</button>
    <button id="btn-theme-toggle" aria-label="Toggle dark mode">☽</button>
  </div>

</div>

<script src="{{ '/assets/js/custom-search.js' | relative_url }}"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-citation-btn');
    const citationText = document.getElementById('citation-text');

    if (copyBtn && citationText) {
        copyBtn.addEventListener('click', function() {
            const textToCopy = citationText.innerText.trim();
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('copied');
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
</script>