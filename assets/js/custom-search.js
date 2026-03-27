document.addEventListener('DOMContentLoaded', function() {
    
    // --- Utility: Debounce (prevents lag while typing) ---
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // --- 1. Language Toggle Logic ---
    const langToggle = document.getElementById('langToggle');
    const archiveContainer = document.getElementById('archive-container');

    if (langToggle && archiveContainer) {
        langToggle.addEventListener('click', function() {
            archiveContainer.classList.toggle('hide-en');
            this.textContent = archiveContainer.classList.contains('hide-en') ? 'Show English' : 'Hide English';
        });
    }

    // --- 2. BULLETPROOF COLLAPSIBLE LOGIC (Event Delegation) ---
    // This listens to the whole document, ensuring clicks always work 
    // even if the HTML loads slightly late.
    document.addEventListener('click', function(e) {
        const header = e.target.closest('.collapsible');
        if (!header) return; // Ignore clicks that aren't on a header

        const parent = header.closest('.journal-section');
        if (!parent) return;

        const content = parent.querySelector('.content');
        if (!content) return;

        const isExpanded = content.classList.toggle('active');
        header.setAttribute('aria-expanded', isExpanded);
    });

    // Keyboard support for collapsibles
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const header = e.target.closest('.collapsible');
            if (header) {
                e.preventDefault();
                header.click();
            }
        }
    });

    // --- 3. Search Bar Logic ---
    const searchBar = document.getElementById('searchBar');

    const handleSearch = debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const journals = document.querySelectorAll('.journal-section');

        journals.forEach(journal => {
            let hasMatchInJournal = false;
            const items = journal.querySelectorAll('.toc-item');
            const contentDiv = journal.querySelector('.content');
            const header = journal.querySelector('.collapsible');

            if (searchTerm === '') {
                items.forEach(item => item.classList.remove('hidden'));
                journal.style.display = 'block';
                return; 
            }

            items.forEach(item => {
                const text = item.textContent.toLowerCase().replace(/\s+/g, ' ');
                if (text.includes(searchTerm)) {
                    item.classList.remove('hidden');
                    hasMatchInJournal = true;
                } else {
                    item.classList.add('hidden');
                }
            });

            if (hasMatchInJournal) {
                journal.style.display = 'block';
                if(contentDiv) contentDiv.classList.add('active');
                if(header) header.setAttribute('aria-expanded', 'true');
            } else {
                journal.style.display = 'none';
            }
        });
    }, 200);

    if (searchBar) {
        searchBar.addEventListener('input', handleSearch);
    }

    // --- 4. Accessibility Widget (Dark Mode & Font Size) ---
    const btnIncrease = document.getElementById('btn-text-increase');
    const btnDecrease = document.getElementById('btn-text-decrease');
    const btnTheme = document.getElementById('btn-theme-toggle');
    const archiveWrapper = document.querySelector('.archive-wrapper');

    let currentZoom = localStorage.getItem('site-zoom') ? parseInt(localStorage.getItem('site-zoom')) : 100;
    
    function applyZoom() {
        if (archiveWrapper) {
            archiveWrapper.style.fontSize = currentZoom + '%';
        }
        localStorage.setItem('site-zoom', currentZoom);
    }

    if (btnIncrease && btnDecrease) {
        applyZoom(); 
        
        btnIncrease.addEventListener('click', () => {
            if (currentZoom < 150) { 
                currentZoom += 10;
                applyZoom();
            }
        });
        
        btnDecrease.addEventListener('click', () => {
            if (currentZoom > 80) { 
                currentZoom -= 10;
                applyZoom();
            }
        });
    }

    let isDarkMode = localStorage.getItem('dark-mode') === 'true';

    function applyTheme() {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            if (btnTheme) btnTheme.textContent = '☀'; 
        } else {
            document.body.classList.remove('dark-mode');
            if (btnTheme) btnTheme.textContent = '☽'; 
        }
    }

    if (btnTheme) {
        applyTheme(); 
        
        btnTheme.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            localStorage.setItem('dark-mode', isDarkMode);
            applyTheme();
        });
    }

});
