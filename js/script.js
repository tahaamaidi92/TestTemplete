$(document).ready(function(){

    // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    // Show Navbar when Click on icon

    //sticky navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){  // Show Sticky Navbar
            $('header').addClass('sticky');
            $('header').css("margin-top", "0");
        }
        else if(sc == 0){
            $('header').css("margin-top", "15px"); 
        }
        else {
            $('header').removeClass('sticky');
        }
        if ( sc > 500) { // Fade The Scroll Top Btn
            
            $('.scrollTop').fadeIn();
            
        } else {
            
            $('.scrollTop').fadeOut();
            
        }

         // Scroll to Top
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    });

    // smooth Scroll 
    $('.list a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
        
    });
    //sticky navbar

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        navText: [
			"<i class='fa fa-arrow-left' aria-hidden='true'></i>",
			"<i class='fa fa-arrow-right' aria-hidden='true'></i>"
			],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    $("body").niceScroll({
        cursorcolor: "#b59524",
        cursorwidth: "5px",
    });

})