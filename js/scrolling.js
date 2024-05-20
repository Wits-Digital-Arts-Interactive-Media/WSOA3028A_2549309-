document.addEventListener('DOMContentLoaded', function() {
    setupTableOfContents();
    setupBackToTopButton();
  });
  
  function setupTableOfContents() {
    const toc = document.getElementById('table-of-contents');
    const headings = document.querySelectorAll('h2, h3, h4');
    const list = document.createElement('ul');
  
    headings.forEach((heading, index) => {
        ensureHeadingHasID(heading, index);
        const listItem = createTOCItem(heading);
        list.appendChild(listItem);
    });
  
    toc.appendChild(list);
  }
  
  function ensureHeadingHasID(heading, index) {
    if (!heading.id) {
        heading.id = `heading-${index}`; // Assign an ID if absent
    }
  }
  
  function createTOCItem(heading) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.trim();
    listItem.appendChild(link);
    return listItem;
  }
  
  function setupBackToTopButton() {
    var backToTopButtons = document.querySelectorAll('.back-to-top');
  
    backToTopButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
  }
  