document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hover');
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('hover');
        });
    });
});
