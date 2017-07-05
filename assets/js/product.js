$(document).foundation();

var thumbs = $(".icon-images").find("img");
thumbs.click(function() {
    var src = $(this).attr("src");
    var dp = $(".display-img");
    dp.attr("src", src);
});