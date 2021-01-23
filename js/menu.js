jQuery(document).ready(function ($) {

    /* prepend menu icon */
    $('#menu').prepend('<div id="menu-icon">&nbsp;</div>');
    

    /* toggle nav */
    $("#menu-icon").on("click", function () {
        $(".menu").slideToggle();
        $(this).toggleClass("active");
    });


    //for execution of jquery on different screen size
    if ($(window).width() < 980) {

        /* toggle nav mobile */
        $("ul.menu").on("click", function () {
            $(this).slideToggle();
            $("#menu-icon").toggleClass("deactive");
        });
    }

});

$(document).ready(function () {

    //------------------------------------- Navigation setup ------------------------------------------------//

    //-------------Highlight the current section in the navigation bar------------//
    var sections = $("section");
    var navigation_links = $("ul.menu a");
    

    sections.waypoint({
        handler: function (event, direction) {

            var active_section;
            active_section = $(this);
            if (direction === "up") {
                active_section = active_section.prev();
            }


            var active_link = $('ul.menu a[href="#' + active_section.attr("id") + '"]');
            
            navigation_links.removeClass("active");
            active_link.addClass("active");
            
          
            
            if (active_section.attr("id") == "ClientsDetails")
            {
                var active_link2 = $('ul.menu a[href="#Clients"]');
                active_link2.addClass("active");
         
            }


      
            
        },
        offset: '35%'
    });


    //------------------------------------- End navigation setup ------------------------------------------------//







    //--------------------------------- To the top handler --------------------------------//

    $().UItoTop({ easingType: 'easeOutQuart' });

    //--------------------------------- End to the top handler --------------------------------//



});








