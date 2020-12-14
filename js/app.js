$(function () {
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header //

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll //

    // $("[data-scroll]").on("click", function (event) {
    //   event.preventDefault();

    //   var $this = $(this),
    //     blockId = $this.data("scroll"),
    //     blockOffset = $(blockId).offset().top - $("header").innerHeight();
    //   $("#nav a").removeClass("active");
    //   $this.addClass("active");

    //   $(".section__title").removeClass("bg-highlight");
    //   $(blockId + " .section__title").addClass("bg-highlight");

    //   $("html, body").animate(
    //     {
    //       scrollTop: blockOffset,
    //     },
    //     500
    //   );
    // });

    // Menu nav toogle //
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Menu nav closed on click
    $(".nav__link").on("click", function (event) {
        $(".nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });
});

// ?Menu lighting active on scroll

jQuery(function ($) {
    const section = $(".section"),
        nav = $(".nav"),
        header = $("#header"),
        navHeight = header.outerHeight(); // получаем высоту навигации
    console.log(navHeight);

    // поворот экрана
    window.addEventListener(
        "orientationchange",
        function () {
            navHeight = header.outerHeight();
        },
        false,
    );

    $(window).on("scroll", function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight - 5,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find("a").removeClass("active");
                section.removeClass("active");

                $(this).addClass("active");
                nav.find('a[href="#' + $(this).attr("id") + '"]').addClass(
                    "active",
                );
            }
        });
    });

    nav.find("a").on("click", function () {
        const id = $(this).attr("href");

        $("html, body").animate(
            {
                scrollTop: $(id).offset().top - navHeight,
            },
            500,
        );

        return false;
    });
});

// ?Collapse //
// TODO: Create Jquery Accordion!!!
// ! Accordion

$(document).ready(function () {
    $(".accordion__header").click(function () {
        if ($(".accordion").hasClass("one")) {
            $(".accordion__header").not($(this)).removeClass("active");
            $(".accordion__content").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300);
    });
    $("#accordion_1").find(".accordion__header").trigger("click");
});

// Slider (SlickJs) //

$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

const container = documument.getElementById("container");
container.addEventListener();
