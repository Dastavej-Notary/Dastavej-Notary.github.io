(function ($) {
    "use strict";

    $(".news-slider").owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });

    $(".testimonial-area").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        nav: false,
        dots: true,
        autoHeight: true,
        pagination: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    $(".main-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        pagination: true,
        autoHeight: false,
        navText: [
            "<img src='./img/slider/rightarrow.png' />",
            "<img src='./img/slider/leftarrow.png' />",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
            $(".navbar").addClass("active");
        } else {
            $(".navbar").removeClass("active");
        }
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 56,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: ".navbar",
        offset: 100,
    });
})(jQuery);
