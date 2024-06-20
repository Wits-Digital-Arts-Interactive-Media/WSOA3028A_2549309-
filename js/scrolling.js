
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
//PORTFOLIO GALLERY NAVIGATION STUFF
document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      openLightbox(item.querySelector('img').src, item.getAttribute('title'));
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    const currentItem = galleryItems[currentIndex];
    openLightbox(currentItem.querySelector('img').src, currentItem.getAttribute('title'));
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    const currentItem = galleryItems[currentIndex];
    openLightbox(currentItem.querySelector('img').src, currentItem.getAttribute('title'));
  });

  function openLightbox(src, title) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    lightboxTitle.textContent = title;
  }
});
