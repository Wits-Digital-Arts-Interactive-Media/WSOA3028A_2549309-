document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('table-of-contents');
    const headings = document.querySelectorAll('h2, h3, h4');
    const list = document.createElement('ul');

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`; // Ensures the heading has an ID
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();
        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    toc.appendChild(list);
});
//back to top button function stuff
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButtons = document.querySelectorAll('.back-to-top');
    
    backToTopButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  });
  