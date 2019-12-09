// INDEX
window.addEventListener('scroll', function (e) {
    let scrolled = window.pageYOffset;

    let first_background = document.querySelector('.indexBoxOne');
    first_background.style.opacity = 1 - 1.3 * scrolled / screen.height;

    let last_boxes = document.querySelector('.indexBoxTwo');
    last_boxes.style.opacity = 0 + 1.3 * scrolled / screen.height;
})
// END OF INDEX