// Custom JS
$(document).ready(function() {

    $('.my-calendar').calendar();

    $('body').css('paddingTop', $('.info-message').outerHeight(true));
    $('html, body').animate({
        scrollTop: 0
    }, 800);

    $('.info-message .close').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.info-message').addClass('hide');
        $('body').css('paddingTop', 0);
    });
});