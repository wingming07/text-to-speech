// Scroll to top button visibility
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animate skill bars on scroll
window.addEventListener('scroll', function() {
    const skillSections = document.querySelectorAll('.skills-section');
    skillSections.forEach(function(section) {
        if (isInViewport(section)) {
            const bars = section.querySelectorAll('.bar');
            bars.forEach(function(bar) {
                bar.style.width = bar.getAttribute('data-width');
            });
        }
    });
});

// Check if section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
