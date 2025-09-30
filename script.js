document.addEventListener('DOMContentLoaded', () => {

    const animatedItems = document.querySelectorAll('.animated-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedItems.forEach(item => {
        observer.observe(item);
    });

});