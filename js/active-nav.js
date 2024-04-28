document.addEventListener("DOMContentLoaded", function() {
   
    const navLinks = document.querySelectorAll('nav a');
    const currentUrl = window.location.pathname;
    const baseDir = '/';

    navLinks.forEach(link => {
        let normalizedHref = new URL(link.href).pathname;
        if (currentUrl.endsWith(normalizedHref) || currentUrl.replace(baseDir, '') === normalizedHref) {
            link.style.fontWeight = 'bold';
            link.style.color = '#4CAF50';
            link.style.textDecoration = 'none';
        }
    });
});
