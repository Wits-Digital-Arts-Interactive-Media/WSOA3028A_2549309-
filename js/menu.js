document.addEventListener('DOMContentLoaded', () => {
    const basePath = window.location.hostname.includes('github.io') ? '/WSOA3028A_2549309/' : '/';

    // Function to generate navigation HTML
    function generateNavHTML(basePath) {
        return `
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
    }

    // Function to add event listeners for menu toggle
    function addMenuToggleListeners() {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        } else {
            console.error('navToggle element not found');
        }

        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        } else {
            console.error('navClose element not found');
        }
    }

    // Function to set the active navigation link based on the current URL
    function setActiveNavLink() {
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }

    // Insert the navigation HTML into the document
    document.body.insertAdjacentHTML('afterbegin', generateNavHTML(basePath));
    addMenuToggleListeners();
    setActiveNavLink();
});
