$(document).foundation();

$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
    });
});

$(".openwindow").click(function(){
    window.location.href = "wooden.html"
})