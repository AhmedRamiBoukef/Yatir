;(function ($) {
    "use strict";
    $(document).on('ready', function () {

      
        /*--Primary-Menu-Dropdown-Plus-Icon--*/
        $('.primary-menu .sub-menu').parent('li').children('a').append('<i class="plus"></i>');

       /*-- Tigger-Mobile-Menu --*/
        $(".mainmenu-area .navi-trigger").on('click',function() {
            $(this).toggleClass("cross");
        });

        $(".contact-form-popup .trigger-button").on('click',function() {
            $('body').toggleClass("open-contact-form");
        });

        $(".full-wrapper").on('click',function() {
            $('body').removeClass("open-contact-form");
        });

        /*--------------------
        MAGNIFIC POPUP JS
        ----------------------*/
        $('.single-portfolio').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
        $("#drone-video").YTPlayer();
        /*---------------------------
        MICHIMP INTEGRATION
        -----------------------------*/
        $('#mc-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('.subscrie-form input, .subscrie-form button').fadeOut();
                }
            }
        });
        /*-- Testimonail-Slider-Active --*/
        $('.testimonial-slider').slick({
            dots: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="ti-angle-right"></i></button>',
            infinite: true,
            centerMode: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.latest-post-widget').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="ti-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: false,
            vertical: true,
            verticalSwiping: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        window.onload = function() {
            lax.setup({
                breakpoints: { small: 0, large: 1025 }
            }) // init
            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }
            window.requestAnimationFrame(updateLax)
        }

        /*-- Button-Hover-Effect-Script --*/
        $( '.mouse-dir' ).append('<span class="dir-part"></span>');
        $( '.mouse-dir' ).on( 'mouseenter', function ( e ) {
            var parentOffset = $( this ).offset( ),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );
        $( '.mouse-dir' ).on( 'mouseout', function ( e ) {
            var parentOffset = $( this ).offset( ),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );

        /*-- Mobile-Menu-Active --*/
        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="ti-angle-right"></i>',
            openedSymbol: '<i class="ti-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.navi-trigger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });

        $('.feature-box').on('mouseenter',function(){
            $('.feature-box').removeClass('active');
            $(this).addClass('active');
        });

        /*-- Click-Smoth-Scroll-Script --*/
        $('.mainmenu-area a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    });

    $(window).on("load", function () {
        /*-- Preloader-Fade-Out-After-Load-Window --*/
        $('.preloader').fadeOut(500);
        $('body').append('<a href="#" id="scrollUp"><i class="ti-arrow-up"></i></a>');
        $('#scrollUp').on('click',function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
            return false;
        });
    });
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
            $('#scrollUp').addClass('active');    // Fade in the arrow
            $('.contact-form-popup .trigger-button').addClass('active');
        } else {
            $('#scrollUp').removeClass('active');   // Else fade out the arrow            
            $('.contact-form-popup .trigger-button').removeClass('active');
        }
    });

})(jQuery);