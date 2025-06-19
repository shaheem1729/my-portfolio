// animation.js

document.addEventListener('DOMContentLoaded', () => {
    // This part ensures the body fades in smoothly when the page loads
    document.body.classList.add('page-loaded');

    // Select all elements that should animate on scroll
    // Elements will have data-aos="fade-up" attribute
    const animatedElements = document.querySelectorAll('[data-aos="fade-up"]');

    // Configuration for the Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function for the Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is intersecting (in view), add the 'aos-animate' class
                // This class will trigger the CSS animation
                entry.target.classList.add('aos-animate');
                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Add initial styles and observe each animated element
    animatedElements.forEach(element => {
        // Add a class that hides the element initially and prepares it for animation
        element.classList.add('aos-init');
        // Start observing the element
        observer.observe(element);
    });
});
