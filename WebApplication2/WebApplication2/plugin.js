$(Document).ready(function () {
    //nice scroll
    $("html").niceScroll();

    //show color options
    $(".fa-cog").click(function () {
        $(".color-option").toggle();
    });
    $(".color-option ul li")
        .eq(0).css("backgroundColor", "#0e0f66").end()
        .eq(1).css("backgroundColor", "#E41B17").end();

    var colorli = $(".color-option ul li");
    colorli.click(function () {
        $("link[href*='color']").attr("href", $(this).attr("data-value"));

    });


    //scroll top
    var scrollButton = $("#scroll_top");
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    //click
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

});

$(window).on('load', function () {
    $(".load").fadeOut(5000, function () {
       $("body").css("overflow", "auto");
    });
});
