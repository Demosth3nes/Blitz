$(document).ready(function () {
    //Slide controls
    //Moves the slide to the left/ right at a width of each container size(25%)
    $('.slider-counters').on('click', 'span', function () {
        $(".slider").css("transform", "translateX(" + $(this).index() * -25 + "%)");
        $(".slider-counters span").removeClass("currentslide");
        $(this).addClass("currentslide");
    });

    ////Used to 'initialize'transform. Must make sure the slide is currently 0%
    //$(".slider").css("transform", "translateX(" + $(this).index() * -0 + "%)");

});