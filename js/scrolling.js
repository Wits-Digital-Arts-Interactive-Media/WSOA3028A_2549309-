
 // JavaScript to handle the ToC highlight and scrolling
 document.addEventListener('DOMContentLoaded', function () {
  const tocLinks = document.querySelectorAll('.toc-container a');
  const sections = document.querySelectorAll('main section');

  // Smooth scroll function
  tocLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust this value based on your header height
        behavior: 'smooth'
      });
    });
  });

  function activateLink() {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) {} // Adjust this value to match the header height

    tocLinks.forEach((link) => link.classList.remove('active'));
    if (index >= 0) {
      tocLinks[index].classList.add('active');
    }
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
/*navigation for wireframes */
let slideIndexes = { 'carousel1': 0, 'carousel2': 0 };

function changeSlide(n, carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-slide');
    slideIndexes[carouselId] += n;

    if (slideIndexes[carouselId] >= slides.length) {
        slideIndexes[carouselId] = 0;
    } else if (slideIndexes[carouselId] < 0) {
        slideIndexes[carouselId] = slides.length - 1;
    }

    const carouselContainer = carousel.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(${-slideIndexes[carouselId] * 100}%)`;
}

// Initialize first slide for all carousels
Object.keys(slideIndexes).forEach(id => changeSlide(0, id));

