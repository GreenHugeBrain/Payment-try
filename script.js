var gtabutton = document.querySelector('.gtabuy');
var buyersplate = document.querySelector('.buyers');

gtabutton.addEventListener('click', () => {
    // Set initial opacity to 0%
    buyersplate.style.opacity = '0';
    buyersplate.style.display = 'block';

    // Use setTimeout to delay changing the opacity after 2 seconds
    setTimeout(() => {
        // Change opacity to 100% and trigger a smooth transition
        buyersplate.style.opacity = '1';
    }, 0.500); // 2000 milliseconds = 2 seconds
});
