$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.slide');
    const indicators = $('.indicator');
    const totalSlides = slides.length;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Reset all slides and indicators
        slides.removeClass('active');
        indicators.removeClass('active');

        // Set the current slide and indicator
        currentSlide = index;
        slides.eq(currentSlide).addClass('active');
        indicators.eq(currentSlide).addClass('active');
    }

    // Next slide function
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= totalSlides) next = 0;
        showSlide(next);
    }

    // Previous slide function
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = totalSlides - 1;
        showSlide(prev);
    }

    // Auto slide
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Event listeners
    $('.next-btn').click(function () {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    $('.prev-btn').click(function () {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    $('.indicator').click(function () {
        const slideIndex = $(this).data('slide');
        showSlide(slideIndex);
        stopAutoSlide();
        startAutoSlide();
    });

    // Initialize auto slide
    startAutoSlide();

    // Pause on hover
    $('.carousel-container').hover(
        function () {
            stopAutoSlide();
        },
        function () {
            startAutoSlide();
        }
    );
});