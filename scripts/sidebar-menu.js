(function() {
    const opening_btn = document.querySelector('.sidebar__hamburger');
    const closing_btn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');


    opening_btn.addEventListener('click', function() {
        sidebar.classList.add('sidebar--opened');
    });

    closing_btn.addEventListener('click', function() {
        sidebar.classList.remove('sidebar--opened');
    });
}())
