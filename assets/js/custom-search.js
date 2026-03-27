// Add a simple debounce function to prevent lag while typing
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 1. Robust Collapsible Logic with Keyboard Support
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(button => {
    // Make them focusable for keyboard users
    button.setAttribute('tabindex', '0');
    button.setAttribute('aria-expanded', 'false');

    const toggleSection = function() {
        // More robust: find the specific content div within the parent
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

// 2. Improved Search with State Preservation
const searchBar = document.getElementById('searchBar');

const handleSearch = debounce(function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const journals = document.querySelectorAll('.journal-section');

    journals.forEach(journal => {
        let hasMatchInJournal = false;
        const items = journal.querySelectorAll('.toc-item');
        const contentDiv = journal.querySelector('.content');
        const header = journal.querySelector('.collapsible');

        // If search is empty, restore to default view (don't force close everything)
        if (searchTerm === '') {
            items.forEach(item => item.classList.remove('hidden'));
            journal.style.display = 'block';
            // We leave the open/closed state exactly as the user left it
            return; 
        }

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
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
}, 200); // 200ms delay

searchBar.addEventListener('input', handleSearch);
