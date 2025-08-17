$(document).ready(function () {
    // Initialize the banner slider

    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Show navigation arrows
        dots: true,   // Show custom indicators
        infinite: true, // Loop the carousel
        speed: 800,     // Transition speed
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,     // Fade effect
        cssEase: 'linear',

        prevArrow: '<button type="button" class="slick-prev custom-arrow"><img src="assets/icons/left-arrow-bold.svg" alt="prev-icon" /></button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow"><img src="assets/icons/right-arrow-bold.svg" alt="next-icon" /></button>',

        // Custom Paging for horizontal rectangular indicators
        customPaging: function (slider, i) {
            return '<button type="button" class="horizontal-indicator"></button>';
        },

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: false,
                },
            },
        ],
    });


    // Initialize the arrival section slider

    $('.arrival').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev custom-arrow"><img src="assets/icons/arrow-left.svg" alt="prev-icon" /></button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow"><img src="assets/icons/arrow-right.svg" alt="next-icon" /></button>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.feedback').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

});
