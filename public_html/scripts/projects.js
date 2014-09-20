$(document).ready(function () {
    //Slide controls
    //Moves the slide to the left/ right at a width of each container size(20%)
    $('.slider-counters').on('click', 'span', function () {
        $(".slider").css("transform", "translateX(" + $(this).index() * -20 + "%)");
        $(".slider-counters span").removeClass("currentslide");
        $(this).addClass("currentslide");
    });

    ////Used to 'initialize'transform. Must make sure the slide is currently 0%
    //$(".slider").css("transform", "translateX(" + $(this).index() * -0 + "%)");


    //Variables for each data
    var web = $('.slider li').filter(function () {
        return $(this).data('web') == "web";
    });

    var print = $('.slider li').filter(function () {
        return $(this).data('print') == "print";
    });

    var art = $('.slider li').filter(function () {
        return $(this).data('art') == "art";
    });

    var photoshop = $('.slider li').filter(function () {
        return $(this).data('photoshop') == "photoshop";
    });

    var development = $('.slider li').filter(function () {
        return $(this).data('development') == "development";
    });

    // A variable that holds all the projects
    var $li = $('.slider li');


    // Anon function that adds the projects to each of the slides
    //Six for each slide when the page loads

    //(function () {

    //    $li.each(function () {
    //        var li = this;
    //        $($li).slice(0, 6).appendTo($(".slider-first_slide"));
    //        $($li).slice(6, 12).appendTo($(".slider-second_slide"));
    //        $($li).slice(12, 18).appendTo($(".slider-third_slide"));
    //        $($li).slice(18, 24).appendTo($(".slider-fourth_slide"));
    //        $($li).slice(24, 30).appendTo($(".fifth-slide"));

    //    });


    //}());

    $('.show_all-projects').on('click', function () {

        //Show all projects
        web.show();
        art.show();
        photoshop.show();
        print.show();
        development.show();


        //Place the list in the correct slide
        $($li).slice(0, 6).appendTo($(".slider-first_slide"));
        $($li).slice(6, 12).appendTo($(".slider-second_slide"));
        $($li).slice(12, 18).appendTo($(".slider-third_slide"));
        $($li).slice(18, 24).appendTo($(".slider-fourth_slide"));



        $(".slider").css("transform", "translateX(" + -0 + "%)");


        $("ul.slide_filter-list li").removeClass("active-tab");
        $(".show_all-projects").addClass("active-tab");

        //Show counters
        $(".counter1").show();
        $(".counter2").show();
        $(".counter3").show();
        $(".counter4").show();

        $(".slider-counters span").removeClass("currentslide");
        $(".slider-counters .counter1").addClass("currentslide");

    });


    //Show web button
    $('.show_web-projects').on('click', function () {

        //Show all projects
        art.hide();
        photoshop.hide();
        print.hide();
        development.hide();
        web.show();


        //Place the list in the correct slide
        $(web).slice(0, 6).appendTo($(".slider-first_slide"));
        $(web).slice(6, 12).appendTo($(".slider-second_slide"));
        $(web).slice(12, 18).appendTo($(".slider-third_slide"));
        $(web).slice(18, 24).appendTo($(".slider-fourth_slide"));


        //Resets the slider
        $(".slider").css("transform", "translateX(" + -0 + "%)");
        $(".slider-counters span").removeClass("currentslide");
        $(".counter1").addClass("currentslide");

        //Change the color of the active tab
        $("ul.slide_filter-list li").removeClass("active-tab");
        $(".show_web-projects").addClass("active-tab");


        //Show counters
        $(".counter1").show();

        //hide unecessary counters
        $(".counter2").hide();
        $(".counter3").hide();
        $(".counter4").hide();


    });

    //Show print button
    $('.show_print-projects').on('click', function () {

        //Show all
        web.hide();
        art.hide();
        photoshop.hide();
        development.hide();
        print.show();


        //Place the list in the correct slide
        $(print).slice(0, 6).appendTo($(".slider-first_slide"));
        $(print).slice(6, 12).appendTo($(".slider-second_slide"));
        $(print).slice(12, 18).appendTo($(".slider-third_slide"));
        $(print).slice(18, 24).appendTo($(".slider-fourth_slide"));


        //Resets the slider
        $(".slider").css("transform", "translateX(" + -0 + "%)");

        //Change the color of the active tab
        $("ul.slide_filter-list li").removeClass("active-tab");
        $(".show_print-projects").addClass("active-tab");

        //Show counters
        $(".counter1").show();
        $(".counter2").show();

        //Hide unecessary counters
        $(".counter3").hide();
        $(".counter4").hide();

        $(".slider-counters .counter1").addClass("currentslide");
    });

    //Show art button
    $('.show_art-projects').on('click', function () {

        //Show all
        web.hide();
        photoshop.hide();
        development.hide();
        print.hide();
        art.show();

        //Place the list in the correct slide
        $(art).slice(0, 6).appendTo($(".slider-first_slide"));
        $(art).slice(6, 12).appendTo($(".slider-second_slide"));
        $(art).slice(12, 18).appendTo($(".slider-third_slide"));
        $(art).slice(18, 24).appendTo($(".slider-fourth_slide"));


        //Resets the slider
        $(".slider").css("transform", "translateX(" + -0 + "%)");


        //Change the color of the active tab
        $("ul.slide_filter-list li").removeClass("active-tab");
        $(".show_art-projects").addClass("active-tab");


        //Show counters
        $(".counter1").show();
      

        //Hide uncessary counters
        $(".counter2").hide();
        $(".counter3").hide();
        $(".counter3").hide();
        $(".counter4").hide();

        $(".slider-counters .counter1").addClass("currentslide");
    });

    //Show photoshop button
    $('.show_photoshop-projects').on('click', function () {
        //Show all
        web.hide();
        development.hide();
        print.hide();
        art.hide();
        photoshop.show();

        //Place the list in the correct slide
        $(photoshop).slice(0, 6).appendTo($(".slider-first_slide"));
        $(photoshop).slice(6, 12).appendTo($(".slider-second_slide"));
        $(photoshop).slice(12, 18).appendTo($(".slider-third_slide"));
        $(photoshop).slice(18, 24).appendTo($(".slider-fourth_slide"));


        //Resets the slider
        $(".slider").css("transform", "translateX(" + -0 + "%)");


        //Change the color of the active tab
        $("ul.slide_filter-list li").removeClass("active-tab");
        $(".show_photoshop-projects").addClass("active-tab");

        //Show counters
        $(".counter1").show();

        //hide unecessary counters
        $(".counter2").hide();
        $(".counter3").hide();
        $(".counter4").hide();

        $(".slider-counters .counter1").addClass("currentslide");
    });

    //Show development button
    $('.show_development-projects').on('click', function () {
        //Show all
        web.hide();
        photoshop.hide();
        print.hide();
        art.hide();
        development.show();

        //Place the list in the correct slide
        $(development).slice(0, 6).appendTo($(".slider-first_slide"));
        $(development).slice(6, 12).appendTo($(".slider-second_slide"));
        $(development).slice(12, 18).appendTo($(".slider-third_slide"));
        $(development).slice(18, 24).appendTo($(".slider-fourth_slide"));


        //Resets the slider
        $(".slider").css("transform", "translateX(" + -0 + "%)");


        //Change the color of the active tab
        $("ul.slide_filter-list li").removeClass("active-tab");
        $(".show_development-projects").addClass("active-tab");


        //Show counters
        $(".counter1").show();

        //hide unecessary counters
        $(".counter2").hide();
        $(".counter3").hide();
        $(".counter4").hide();

        $(".slider-counters .counter1").addClass("currentslide");

    });
});