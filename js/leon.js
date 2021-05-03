// Caching The Scroll Top Element

var scrollButton = $("#scroll-top");

$(window).scroll(function() {
    $(this).scrollTop() >= 80 ? scrollButton.fadeIn() : scrollButton.fadeOut();
});

// Click on Button to Scroll top

scrollButton.on('click', function() {
    $("html,body").animate({ scrollTop: 0 }, 0);
    return false;
});