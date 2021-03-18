(function() {
    
    const slides = document.querySelectorAll('.fade-slider__item');
    const active_class = 'fade-slider__item--visible';
    let index = 0;

    setInterval(function() {
        slides[index].classList.remove(active_class);
        index++;
        if (index == slides.length - 1) {
            index = 0
        };
        slides[index].classList.add(active_class);
    }, 5000);
}());