$(document).ready(function () {

    $('.tech__slider').slick();

    /* --------   Nav Menu(BurgerMenu)    ---------  */

    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $('#nav').toggleClass("active");
    })

})