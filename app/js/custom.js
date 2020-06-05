// Custom JS
$(document).ready(function() {

    $('.my-calendar').calendar();

    $('.info-message .close').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.info-message').addClass('d-none');
    });
});