/*for mavigation bar too*/
document.addEventListener('DOMContentLoaded', () => {
    const basePath = window.location.hostname.includes('github.io') ? '/WSOA3028A_2549309/' : '/';

    const navHTML = `
    <header class="header" id="header">
        <nav class="nav container">
            <a href="${basePath}index.html" class="nav__logo">HABIBTEA</a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="${basePath}index.html" class="nav__link">
                            <i class="ri-arrow-right-up-line"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="${basePath}blogs/index.html" class="nav__link">
                            <i class="ri-arrow-right-up-line"></i>
                            <span>Blogs</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="${basePath}portfolio/index.html" class="nav__link">
                            <i class="ri-arrow-right-up-line"></i>
                            <span>Portfolio</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="${basePath}essays/index.html" class="nav__link">
                            <i class="ri-arrow-right-up-line"></i>
                            <span>Essays</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="${basePath}design/index.html" class="nav__link">
                            <i class="ri-arrow-right-up-line"></i>
                            <span>Design Process</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="${basePath}About.html" class="nav__link">
                            <i class="ri-arrow-right-up-line"></i>
                            <span>About</span>
                        </a>
                    </li>
                </ul>
                <div class="nav__close" id="nav-close">
                    <i class="ri-close-large-line"></i>
                </div>
                <div class="nav__social">
                    <a href="https://www.instagram.com/" target="_blank" class="nav__social-link">
                        <i class="ri-instagram-line"></i>
                    </a>
                    <a href="https://github.com/Aaminah1/" target="_blank" class="nav__social-link">
                        <i class="ri-github-line"></i>
                    </a>
                </div>
            </div>
            <div class="nav__toggle" id="nav-toggle">
                <i class="ri-menu-line"></i>
            </div>
        </nav>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Add active class to the current page link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
