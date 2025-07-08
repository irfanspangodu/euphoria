$(document).ready(function () {
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
        nextArrow: '<button type="button" class="slick-next custom-arrow"><img src="assets/icons/right-arrow-bold.svg" alt="next-icon" /><</button>',
        
        // Custom Paging for horizontal rectangular indicators
        customPaging: function (slider, i) {
            return '<button type="button" class="horizontal-indicator"></button>';
        }
    });
});
