// 1. Collapsible Headers Logic
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the active class on the content div immediately following the header
        this.nextElementSibling.classList.toggle('active');
    });
});

// 2. Search Functionality Logic
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const journals = document.querySelectorAll('.journal-section');

    journals.forEach(journal => {
        let hasMatchInJournal = false;
        const items = journal.querySelectorAll('.toc-item');
        const contentDiv = journal.querySelector('.content');

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            
            if (text.includes(searchTerm)) {
                item.classList.remove('hidden');
                hasMatchInJournal = true;
            } else {
                item.classList.add('hidden');
            }
        });

        // If there's a search term and a match is found, auto-expand the journal
        if (searchTerm !== '' && hasMatchInJournal) {
            contentDiv.classList.add('active');
            journal.style.display = 'block';
        } 
        // Hide the entire journal section if nothing in it matches the search
        else if (searchTerm !== '' && !hasMatchInJournal) {
            journal.style.display = 'none';
        } 
        // Reset everything if the search bar is cleared
        else if (searchTerm === '') {
            journal.style.display = 'block';
            contentDiv.classList.remove('active'); // Collapse back to default
        }
    });
});
