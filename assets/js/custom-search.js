document.addEventListener('DOMContentLoaded', function() {
    
    // --- Utility: Debounce (prevents lag while typing) ---
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    } // <- This is the bracket that was missing!

    // --- 1. Language Toggle Logic ---
    const langToggle = document.getElementById('langToggle');
    const archiveContainer = document.getElementById('archive-container');

    if (langToggle && archiveContainer) {
        langToggle.addEventListener('click', function() {
            // Toggle the 'hide-en' class on the whole archive
            archiveContainer.classList.toggle('hide-en');
            
            // Update the button text
            if (archiveContainer.classList.contains('hide-en')) {
                this.textContent = 'Show English';
            } else {
                this.textContent = 'Hide English';
            }
        });
    }

    // --- 2. Collapsible Headers Logic ---
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(button => {
        button.setAttribute('tabindex', '0');
        button.setAttribute('aria-expanded', 'false');

        const toggleSection = function() {
            const parent = this.closest('.journal-section');
            const content = parent.querySelector('.content');
            
            const isExpanded = content.classList.toggle('active');
            this.setAttribute('aria-expanded', isExpanded);
        };

        button.addEventListener('click', toggleSection);
        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection.call(this);
            }
        });
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
                // The .replace(/\s+/g, ' ') handles the spacing between the Chinese and English spans
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
                contentDiv.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            } else {
                journal.style.display = 'none';
            }
        });
    }, 200);

    if (searchBar) {
        searchBar.addEventListener('input', handleSearch);
    }
});
