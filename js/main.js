/* credit to https://www.youtube.com/watch?v=kQGKU4u9Dng for helping with this */
/*for navigation menu */
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//breadcrumbs for essays
document.addEventListener('DOMContentLoaded', function () {
    const breadcrumbContainer = document.querySelector('.breadcrumbs');

    if (breadcrumbContainer) {
        const path = window.location.pathname.split('/').filter(segment => segment);
        const isEssayPage = path.includes('essays');

        let breadcrumbHtml = `<a href="/WSOA3028A_2549309/index.html">Home</a>`;

        if (isEssayPage) {
            breadcrumbHtml += ` > <a href="/WSOA3028A_2549309/essays/index.html">Essays</a>`;
            const essayIndex = path.indexOf('essays') + 1;
            if (essayIndex < path.length) {
                const essayTitle = path[essayIndex].replace('.html', '').replace(/-/g, ' ').toUpperCase();
                breadcrumbHtml += ` > ${essayTitle}`;
            }
        }

        breadcrumbContainer.innerHTML = breadcrumbHtml;
    }
});

/*Sidebar menu for the individual essays */
document.addEventListener('DOMContentLoaded', () => {
    const essays = [
        { title: "UX & UI Analysis", link: "essay1.html" },
        { title: "Digital Colonialism", link: "essay2.html" }
    ];

    const essayDropdown = document.getElementById('essay-dropdown');
    const currentPath = window.location.pathname.split('/').pop();
    let currentEssayIndex = essays.findIndex(essay => essay.link === currentPath);

    if (essayDropdown) {
        essays.forEach((essay, index) => {
            const option = document.createElement('option');
            option.value = essay.link;
            option.textContent = essay.title;
            if (index === currentEssayIndex) {
                option.selected = true;
            }
            essayDropdown.appendChild(option);
        });

        essayDropdown.addEventListener('change', (event) => {
            const selectedEssay = event.target.value;
            if (selectedEssay) {
                window.location.href = selectedEssay;
            }
        });
    }
});
/*For back to top button*/ 
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const backToTopButton = document.getElementById("back-to-top");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

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
  // Portfolio gallery navigation
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

// Navigation for wireframes
const slideIndexes = { 'carousel1': 0, 'carousel2': 0 };

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