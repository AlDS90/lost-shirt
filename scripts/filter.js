(function () {
    const elem = document.querySelector('.products__list');
    const iso = new Isotope(elem, {
        itemSelector: '.products__item',
        filter: '.new',
    });

    const controlls = document.querySelectorAll('.filter__link');
    const active_class = 'filter__item--active'


    controlls.forEach(function(control) {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            const  filter_name = control.getAttribute('data-filter')
            controlls.forEach(function(link) {
                link.closest('.filter__item').classList.remove(active_class);
            });
            control.closest('.filter__item').classList.add(active_class);
            iso.arrange({
                filter: `.${filter_name}`,
            });
        });
    });
}());