$(document).ready(function () {
    //Home Page Slider
    $('.slider-counters').on('click', 'span', function () {
        //Multiplies the index by 25%, each 25% representing an image
        $(".slider").css("transform", "translateX(" + $(this).index() * -25 + "%)");


        $(".slider-counters span").removeClass("currentslide");
        $(this).addClass("currentslide");
    });

    // A click function for the slider-counters that will find
    //the current index and then change the html according to the image shown
    $('.slider-counters').on('click', function () {

        // Variable to find the current index as identified by the currentslide
        var currentIndex = $(".currentslide").index(".slider-counters span");
        // alert(currentIndex);

        // A switch statement that changes the html based on the current index
        switch (currentIndex) {

            case 0:
                $(".slider-container figure").html("<h2>Jesus Typography Wallpaper</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus non diam et lacus pulvinar venenatis et vestibulum velit.Pellentesque interdum faucibus dui hendrerit ultrices. Aliquam erat volutpat. Duis commodo turpis id diam pulvinar hendrerit.</p>");
                break;
            case 1:
                $(".slider-container figure").html("<h2>Top Ten Web Design Blogs</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>");
                break;
            case 2:
                $(".slider-container figure").html("<h2>Time to draw Avatar Aang</h2><p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. </p>");
                break;
            case 3:
                $(".slider-container figure").html("<h2>Learn to create a fansite</h2><p> Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.  </p>");
                break;
        }
    });

    var query = Modernizr.mq("(max-width: 41.07em)");

    if (query) {

        $(".slider img[src = 'graphics/home/slider-image1.jpg']").attr("src", "graphics/home/slider-image1_mobile.jpg");
        $(".slider img[src = 'graphics/home/slider-image2.jpg']").attr("src", "graphics/home/slider-image2_mobile.jpg");
        $(".slider img[src = 'graphics/home/slider-image3.jpg']").attr("src", "graphics/home/slider-image3_mobile.jpg");
        $(".slider img[src = 'graphics/home/slider-image4.jpg']").attr("src", "graphics/home/slider-image4_mobile.jpg");
    } else {

        $(".slider img[src = 'graphics/home/slider-image1_mobile.jpg']").attr("src", "graphics/home/slider-image1.jpg");
        $(".slider img[src = 'graphics/home/slider-image2_mobile.jpg']").attr("src", "graphics/home/slider-image2.jpg");
        $(".slider img[src = 'graphics/home/slider-image3_mobile.jpg']").attr("src", "graphics/home/slider-image3.jpg");
        $(".slider img[src = 'graphics/home/slider-image4_mobile.jpg']").attr("src", "graphics/home/slider-image4.jpg");
    }
});

//Modernizr function to apply changes based on a max-width. Occurs at every resize.
$(window).resize(function () {


    var query = Modernizr.mq("(max-width: 41.07em)");

    if (query) {

        $(".slider img[src = 'graphics/home/slider-image1.jpg']").attr("src", "graphics/home/slider-image1_mobile.jpg");
        $(".slider img[src = 'graphics/home/slider-image2.jpg']").attr("src", "graphics/home/slider-image2_mobile.jpg");
        $(".slider img[src = 'graphics/home/slider-image3.jpg']").attr("src", "graphics/home/slider-image3_mobile.jpg");
        $(".slider img[src = 'graphics/home/slider-image4.jpg']").attr("src", "graphics/home/slider-image4_mobile.jpg");
    } else {

        $(".slider img[src = 'graphics/home/slider-image1_mobile.jpg']").attr("src", "graphics/home/slider-image1.jpg");
        $(".slider img[src = 'graphics/home/slider-image2_mobile.jpg']").attr("src", "graphics/home/slider-image2.jpg");
        $(".slider img[src = 'graphics/home/slider-image3_mobile.jpg']").attr("src", "graphics/home/slider-image3.jpg");
        $(".slider img[src = 'graphics/home/slider-image4_mobile.jpg']").attr("src", "graphics/home/slider-image4.jpg");
    }
});


