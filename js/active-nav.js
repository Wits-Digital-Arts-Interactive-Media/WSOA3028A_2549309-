document.addEventListener("DOMContentLoaded", function() {
    // Query all navigation links within the <nav> element
    const navLinks = document.querySelectorAll('nav a');
    const currentUrl = window.location.pathname;
    const baseDir = '/';

    // Iterate through each link and apply styling if it matches the current URL
    navLinks.forEach(link => {
        let normalizedHref = new URL(link.href).pathname;
        // Check if the current URL ends with the link's pathname or matches after removing the base directory
        if (currentUrl.endsWith(normalizedHref) || currentUrl.replace(baseDir, '') === normalizedHref) {
            // Apply styles to highlight the active navigation link
            link.style.fontWeight = 'bold';
            link.style.color = '#4CAF50';
            link.style.textDecoration = 'none';
        }
    });
});
