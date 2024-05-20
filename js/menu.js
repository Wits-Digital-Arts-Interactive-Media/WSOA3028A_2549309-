document.addEventListener('DOMContentLoaded', () => {
    // Dynamically set the base path based on the depth of the current directory
    const depth = window.location.pathname.split('/').filter(part => part.length > 0).length - 1;
    let basePath = '';
    for (let i = 0; i < depth; i++) {
        basePath += '../';
    }

    const navHTML = `
    <header class="header" id="header">
        <nav class="nav container">
            <a href="${basePath}index.html" class="nav__logo">AAMINAH HABIB</a>
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
                        <a href="${basePath}about.html" class="nav__link">
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
                    <a href="https://github.com/" target="_blank" class="nav__social-link">
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
});
