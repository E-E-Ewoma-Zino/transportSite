/*-----------------------------------------------------------------------------------

    Theme Name: Upfront - Transport and Logistics HTML Template
    Description: Transport and Logistics HTML Template
    Author: Website Design Templates
    Version: 2.0
                    
    ---------------------------------- */

!function (o) {
    "use strict";
    var i = o(window);
    function t() {
        var e,
            t;
        e = o(".full-screen"),
        t = i.height(),
        e.css("min-height", t),
        e = o("header").height(),
        t = o(".screen-height"),
        e = i.height() - e,
        t.css("height", e)
    }
    o("#preloader").fadeOut("normall", function () {
        o(this).remove()
    }),
    i.on("scroll", function () {
        var e = i.scrollTop(),
            t = o(".navbar-brand img"),
            a = o(".navbar-brand.logodefault img");
        e <= 50 ? (o("header").removeClass("scrollHeader").addClass("fixedHeader"), t.attr("src", "/assets/img/logos/logo-inner1.png")) : (o("header").removeClass("fixedHeader").addClass("scrollHeader"), t.attr("src", "/assets/img/logos/logo1.png")),
        a.attr("src", "/assets/img/logos/logo1.png")
    }),
    i.on("scroll", function () {
        500 < o(this).scrollTop() ? o(".scroll-to-top").fadeIn(400) : o(".scroll-to-top").fadeOut(400)
    }),
    o(".scroll-to-top").on("click", function (e) {
        e.preventDefault(),
        o("html, body").animate({
            scrollTop: 0
        }, 600)
    }),
    o(".parallax,.bg-img").each(function (e) {
        o(this).attr("data-background") && o(this).css("background-image", "url(" + o(this).data("background") + ")")
    }),
    o(".story-video").magnificPopup({delegate: ".video", type: "iframe"}),
    o(".popup-social-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }),
    o(".source-modal").magnificPopup({type: "inline", mainClass: "mfp-fade", removalDelay: 160}),
    0 !== o(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), o(".copy-clipboard").on("click", function () {
        var e = o(this);
        e.text();
        e.text("Copied"),
        setTimeout(function () {
            e.text("Copy")
        }, 2e3)
    })),
    o(".tab1").click(function () {
        o(".second, .third, .four").fadeOut(),
        o(".first").fadeIn(1e3)
    }),
    o(".tab2").click(function () {
        o(".first, .third, .four").fadeOut(),
        o(".second").fadeIn(1e3)
    }),
    o(".tab3").click(function () {
        o(".second, .first, .four").fadeOut(),
        o(".third").fadeIn(1e3)
    }),
    o(".tab4").click(function () {
        o(".first, .second, .third").fadeOut(),
        o(".four").fadeIn(1e3)
    }),
    i.resize(function (e) {
        setTimeout(function () {
            t()
        }, 500),
        e.preventDefault()
    }),
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(),
    o(".text-animation").waypoint(function () {
        o(".text-animation.animated").textillate()
    }, {offset: "100%"}),
    o(".page-title-section .text-animation").textillate(),
    t(),
    o(document).ready(function () {
        o(".portfolio-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            autoplayHoverPause: !0,
            dots: !1,
            margin: 30,
            navText: [
                "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        }),
        o(".portfolio2-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !0,
            margin: 30,
            navText: [
                "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        }),
        o(".testimonial-style2").owlCarousel({
            items: 1,
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            margin: 0,
            smartSpeed: 1500
        }),
        o(".testimonial-style3").owlCarousel({
            items: 1,
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            margin: 0,
            smartSpeed: 1500
        }),
        o(".slider-fade1").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            nav: !1,
            navText: [
                "<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"
            ],
            autoplay: !0,
            smartSpeed: 1500,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                992: {
                    nav: !0,
                    dots: !1
                }
            }
        }),
        o(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            autoplay: !0,
            smartSpeed: 500
        }),
        o(".slider-fade1").on("changed.owl.carousel", function (e) {
            e = e.item.index - 2;
            o(".small-title").removeClass("animated fadeInUp"),
            o(".title").removeClass("animated fadeInUp"),
            o(".butn").removeClass("animated fadeInUp"),
            o(".owl-item").not(".cloned").eq(e).find(".small-title").addClass("animated fadeInUp"),
            o(".owl-item").not(".cloned").eq(e).find(".title").addClass("animated fadeInUp"),
            o(".owl-item").not(".cloned").eq(e).find(".butn").addClass("animated fadeInUp")
        }),
        0 !== o(".horizontaltab").length && o(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var t = o(this),
                    a = o("#nested-tabInfo");
                o("span", a).text(t.text()),
                a.show()
            }
        }),
        o(".current-year").text((new Date).getFullYear()),
        o(".countup").counterUp({delay: 25, time: 2e3}),
        o(".countdown").countdown({date: "01 Dec 2024 00:01:00", format: "on"})
    }),
    i.on("load", function () {
        o(".portfolio-gallery").lightGallery(),
        o(".portfolio-link").on("click", e => {
            e.stopPropagation()
        }),
        i.stellar()
    })
}(jQuery);
