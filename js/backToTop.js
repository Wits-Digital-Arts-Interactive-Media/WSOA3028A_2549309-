document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const backToTopButton = document.getElementById("back-to-top");
        console.log("Scroll event triggered");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        console.log("Button found");
        backToTopButton.addEventListener('click', function() {
            console.log("Back to top button clicked");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.log("Button not found");
    }
});
