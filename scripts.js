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

    const pepeRocket = document.getElementById('pepeRocket');
    pepeRocket.addEventListener('click', () => {
        pepeRocket.classList.add('clicked');
        setTimeout(() => {
            pepeRocket.classList.remove('clicked');
        }, 2000);
    });

    const coinFlip = document.getElementById('coinFlip');
    coinFlip.addEventListener('click', () => {
        coinFlip.classList.add('clicked');
        setTimeout(() => {
            coinFlip.classList.remove('clicked');
        }, 2000);
    });

    const confettiButton = document.getElementById('confettiButton');
    confettiButton.addEventListener('click', () => {
        confetti();
    });

    function confetti() {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }

    const dancingMeme = document.getElementById('dancingMeme');
    dancingMeme.addEventListener('mouseover', () => {
        dancingMeme.classList.add('dance');
    });
    dancingMeme.addEventListener('mouseout', () => {
        dancingMeme.classList.remove('dance');
    });
});
