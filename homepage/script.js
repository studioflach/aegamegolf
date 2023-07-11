document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.services__item');
    const approachStep = document.querySelectorAll('.approach__step');

    function handleClick(elements) {
        elements.forEach((element, i) => {
            element.addEventListener('click', (e) => {
                let isToggle = e.target.classList.contains('toggle');
                let isOpen = e.currentTarget.classList.contains('open');

                if (isToggle && !isOpen) {
                    elements.forEach((element, index) => {
                        if (index !== i) {
                            element.classList.remove('open');
                        } else {
                            element.classList.add('open');
                        }
                    });
                }
            });
        });
    }

    handleClick(serviceItems);
    handleClick(approachStep);

    // Testimonials Carousel
    const testimonialsSlides = document.getElementsByClassName('testimonials__slide');

    let testimonialsCarousel = new Splide('.testimonials__carousel', {
        type: 'fade',
        autoplay: true,
        pauseOnHover: true,
        interval: 6000,
        speed: 300,
        rewind: true,
        pagination: true,
        arrows: false,
        label: 'Testimonials Carousel',
        classes: {
            // Add classes for pagination.
            pagination: 'splide__pagination testimonials__pagination', // container
            page: 'splide__pagination__page testimonials__pagination__page', // each button
        }
    });

    testimonialsCarousel.mount();

    if (testimonialsSlides.length === 1) {
        document.getElementsByClassName('testimonials__pagination')[0].style.visibility = "hidden";
    }
});