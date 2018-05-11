jQuery(document).ready(function($) {
    
    $(window).on('resize', function() {
    // Additive on Resize from mobile          
        $('.parallax').each(function(el) {
            var eachEl = $('.parallax')[el];
            //console.log(eachEl);
            
            $(eachEl).parallax();
        });
    });
    parallaxLoad();
});


function parallaxLoad () {
    $('.parallax').each(function(el) {
        var eachEl = $('.parallax')[el];
        //console.log(eachEl);        
        $(eachEl).parallax();
    });
}