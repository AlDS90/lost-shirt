(function() {
    const controlls = document.querySelectorAll('.tab__link');
    const active_class = 'tabs__item--active';

    controlls.forEach(function(control) {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            const tab_name = control.getAttribute('data-tab')
            controlls.forEach(function(link) {
                link.closest('.tabs__item').classList.remove(active_class);
            });
            control.closest('.tabs__item').classList.add(active_class);
        });
    });
}())
