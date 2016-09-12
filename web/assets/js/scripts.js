/*jslint browser: true*/
/*global $, jQuery, alert, angular, Placeholdem*/

var appMaster = {

    preLoader: function () {
        'use strict';
        var imageSources = [];
        $('img').each(function () {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if ($(imageSources).load()) {
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function () {
        'use strict';
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    reviewsCarousel: function () {
        'use strict';
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function () {
        'use strict';
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.js-filter-all').on('click', function () {
            $('.filtering').slickUnfilter();
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-one').on('click', function () {
            $('.filtering').slickFilter('.one');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-two').on('click', function () {
            $('.filtering').slickFilter('.two');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-three').on('click', function () {
            $('.filtering').slickFilter('.three');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

    },

    animateScript: function () {
        'use strict';
        $('.scrollpoint.sp-effect1').waypoint(function () {$(this).toggleClass('active'); $(this).toggleClass('animated fadeInLeft'); }, {offset: '100%'});
        $('.scrollpoint.sp-effect2').waypoint(function () {$(this).toggleClass('active'); $(this).toggleClass('animated fadeInRight'); }, {offset: '100%'});
        $('.scrollpoint.sp-effect3').waypoint(function () {$(this).toggleClass('active'); $(this).toggleClass('animated fadeInDown'); }, {offset: '100%'});
        $('.scrollpoint.sp-effect4').waypoint(function () {$(this).toggleClass('active'); $(this).toggleClass('animated fadeIn'); }, {offset: '100%'});
        $('.scrollpoint.sp-effect5').waypoint(function () {$(this).toggleClass('active'); $(this).toggleClass('animated fadeInUp'); }, {offset: '100%'});
    },

    revSlider: function () {
        'use strict';
        var docHeight = $(window).height(),
            mainSlider = $('.tp-banner').revolution({
                delay: 9000,
                startwidth: 1170,
                startheight: docHeight,
                hideThumbs: 10,
                touchenabled: false,
                fullWidth: "on",
                hideTimerBar: "on",
                fullScreen: "on",
                onHoverStop: "off",
                fullScreenOffsetContainer: ""
            });
        return mainSlider;
    },
    scrollMenu: function () {
        'use strict';
        var num = 50; //number of pixels before modifying styles
        if ($(window).scrollTop() > num) {
            $('nav').addClass('scrolled');
        }
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });

        $('ul.navbar-nav li a').bind('click', function () {
            if ($(this).closest('.navbar-collapse').hasClass('in')) {
                $(this).closest('.navbar-collapse').removeClass('in');
            }
        });
    },
    placeHold: function () {
        'use strict';
        // run Placeholdem on all elements with placeholders
        /*jslint newcap: true*/
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

}; // AppMaster


$(document).ready(function () {
    'use strict';

    appMaster.smoothScroll();

    appMaster.reviewsCarousel();

    appMaster.screensCarousel();

    appMaster.animateScript();

    appMaster.revSlider();

    appMaster.scrollMenu();

    appMaster.placeHold();

});
