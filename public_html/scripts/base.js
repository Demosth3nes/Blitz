$(document).ready(function () {
    $('.nav-toggle').click(function () {
        $('.nav-panel').slideToggle('fast');
    });

   
        var query = Modernizr.mq("(max-width: 41.07em)");

        if (query) {
            $('.nav-panel').css("display", "none");

        } else {
            $('.nav-panel').css("display", "block");

        }
  
        Modernizr.load({
            test: window.matchMedia,
            yep: 'scripts/base_matchMedia.js',
            nope: ['scripts/media.match.js', 'scripts/base_matchMedia.js']
        });
});



