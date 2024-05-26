
 // JavaScript to handle the ToC highlight and scrolling
 document.addEventListener('DOMContentLoaded', function () {
  const tocLinks = document.querySelectorAll('.toc-container a');
  const sections = document.querySelectorAll('main section');

  function activateLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      tocLinks.forEach((link) => link.classList.remove('active'));
      tocLinks[index].classList.add('active');
  }

  activateLink();
  window.addEventListener('scroll', activateLink);
});