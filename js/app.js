$(function () {
    let header = $("#header__fixed"),
        introH = $("#intro").outerHeight(),
        headerH = $("#header__fixed").outerHeight(),
        fixedmenu = introH - headerH,
        scrollOffset = $(window).scrollTop();

    // !Fixed Header //

    checkScroll(scrollOffset);

    $(window).on("scroll resize", function () {
        scrollOffset = $(this).scrollTop() + 25;
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= fixedmenu) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    }

    // !Menu nav toogle //
    $(".nav-toggle").on("click", function (event) {
        event.preventDefault();

        // $(this).toggleClass("active");
        $(".nav").toggleClass("active");
    });

    // !Menu nav closed on click
    $(".nav__link").on("click", function (event) {
        event.preventDefault();

        $(".nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });
});

// !Menu lighting active on scroll

jQuery(function ($) {
    const section = $(".section"),
        nav = $(".nav"),
        header = $(".header__fixed"),
        navHeight = header.outerHeight(); // получаем высоту навигации

    console.log(navHeight, header);

    // поворот экрана
    window.addEventListener(
        "orientationchange",
        function () {
            navHeight = header.outerHeight();
        },
        false,
    );

    $(window).on("scroll resize", function () {
        const position = $(this).scrollTop() + 15;

        section.each(function () {
            const top = $(this).offset().top - navHeight,
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

// !Slider (SlickJs) // https://kenwheeler.github.io/slick/

// !Reviews Slider

$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".slider__inner").on("setPosition", function (event, slick) {
    var length_slid = $(".slider__inner .slider__inner-unit.slick-slide")
        .length;
    if (length_slid <= 4) {
        $(".slider-front-nav").addClass("stop-transform");
    } else {
        $(".slider-front-nav").removeClass("stop-transform");
    }
});

//  !Intro Slider
$(".intro__slider").slick({
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".slider__inner",
    accessibility: false,
});

$(".slider__inner").slick({
    draggable: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".intro__slider",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    accessibility: false,
    centerPadding: "0px",
    useTransform: false,
    useCss: false,
});

// $('.slider__inner').on('setPosition', function(event, slick){
//     var length_slid = $('slider__inner.slick-initialized.slick-slider').length;
//     if (length_slid <= 4) {
//       $('.slider__inner').addClass("stop-transform");
//     }else{
//       $('.slider__inner').removeClass("stop-transform");
//     }
//   });
