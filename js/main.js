// Navigation menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.add('show-menu');
        } else {
            console.error('Navigation menu element not found.');
        }
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        } else {
            console.error('Navigation menu element not found.');
        }
    });
}

// generate Breadcrumbs for essays
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
    } else {
        console.error('Breadcrumb container not found.');
    }
});

// Sidebar menu for the individual essays
document.addEventListener('DOMContentLoaded', () => {
    const essays = [
        { title: "UX & UI Analysis", link: "essay1.html" },
        { title: "Digital Colonialism", link: "essay2.html" }
    ];

    const essayDropdown = document.getElementById('essay-dropdown');
    const currentPath = window.location.pathname.split('/').pop();
    let currentEssayIndex = essays.findIndex(essay => essay.link === currentPath);

 // Populate dropdown menu with essay titles
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

// Navigate to selected essay
        essayDropdown.addEventListener('change', (event) => {
            const selectedEssay = event.target.value;
            if (selectedEssay) {
                window.location.href = selectedEssay;
            }
        });
    } else {
        console.error('Essay dropdown element not found.');
    }
});

// Back to top button functionality
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const backToTopButton = document.getElementById("back-to-top");
        if (backToTopButton) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        } else {
            console.error('Back to top button not found.');
        }
    }

    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.error('Back to top button not found.');
    }
});

// Table of contents highlight and scrolling
document.addEventListener('DOMContentLoaded', function () {
    const tocLinks = document.querySelectorAll('.toc-container a');
    const sections = document.querySelectorAll('main section');

    // Highlight active section in the table of contents
    if (tocLinks.length && sections.length) {
        function activateLink() {
            let index = sections.length;

            while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

            tocLinks.forEach((link) => link.classList.remove('active'));
            tocLinks[index].classList.add('active');
        }

        activateLink();
        window.addEventListener('scroll', activateLink);
    } else {
        console.error('Table of contents links or sections not found.');
    }
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

    // Open lightbox with selected image and title
    if (galleryItems.length && lightbox && lightboxImg && lightboxTitle && closeBtn && prevBtn && nextBtn) {
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
    } else {
        console.error('Gallery items or lightbox elements not found.');
    }
});

// Navigation for wireframes
const slideIndexes = { 'carousel1': 0, 'carousel2': 0 };

function changeSlide(n, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) {
        console.error(`Carousel with ID ${carouselId} not found.`);
        return;
    }
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) {
        console.error(`No slides found for carousel with ID ${carouselId}.`);
        return;
    }
    slideIndexes[carouselId] += n;

    if (slideIndexes[carouselId] >= slides.length) {
        slideIndexes[carouselId] = 0;
    } else if (slideIndexes[carouselId] < 0) {
        slideIndexes[carouselId] = slides.length - 1;
    }

    const carouselContainer = carousel.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.style.transform = `translateX(${-slideIndexes[carouselId] * 100}%)`;
    } else {
        console.error(`Carousel container not found for carousel with ID ${carouselId}.`);
    }
}

// Initialize first slide for all carousels
Object.keys(slideIndexes).forEach(id => changeSlide(0, id));
