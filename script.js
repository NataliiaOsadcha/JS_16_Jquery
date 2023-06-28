$(document).ready(function() {
    $('.open').click(function() {
        $('.popup-overlay, .popup-content').addClass('active');
    })

    $('.close').click(function() {
        $('.popup-overlay, .popup-content').removeClass('active');
    })
})