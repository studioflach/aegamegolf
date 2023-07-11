var Webflow = Webflow || [];
Webflow.push(function () {
    // Dynamic copyright year
    const thisYear = new Date().getFullYear();
    document.querySelector('.copyright-year').textContent = thisYear

    // Navigation bar hamburguer toggle open menu
    const hamburguer = document.querySelector('.nav__list--hamburger');

    hamburguer.addEventListener('click', () => {
        if (document.documentElement.classList.contains('nav-open')) {
            document.documentElement.classList.remove('nav-open');
        } else {
            document.documentElement.classList.add('nav-open');
        }
    });

    // Reviews Splide Carousel instance
    const reviews = document.getElementsByClassName('reviews__carousel');
    if (reviews) {
        for (let i = 0; i < reviews.length; i++) {
            let reviewCarousel = new Splide(reviews[i], {
                type: 'loop',
                autoplay: true,
                interval: 3000,
                speed: 600,
                perPage: 4,
                focus: 1,
                arrows: false,
                updateOnMove: true,
                label: 'Reviews Carousel',
                gap: 20,
                breakpoints: {
                    991: {
                        perPage: 2,
                        padding: { left: 0, right: "20%" },
                        focus: 0,
                    },
                    767: {
                        perPage: 1,
                    },
                },
                classes: {
                    // Add classes for pagination.
                    pagination: 'splide__pagination reviews__pagination', // container
                    page: 'splide__pagination__page reviews__pagination__page', // each button
                }
            });


            reviewCarousel.mount();
        }
    }

    // Prices list Splide Carousel instance
    const prices = document.getElementsByClassName('prices__carousel');
    if (prices) {
        for (let i = 0; i < prices.length; i++) {
            let priceCarousel = new Splide(prices[i], {
                destroy: true,
                breakpoints: {
                    767: {
                        destroy: false,
                        perPage: 1,
                        padding: { left: 0, right: "30%" },
                        focus: 0,
                        arrows: false,
                        updateOnMove: true,
                        label: 'Prices Carousel',
                        gap: 20,
                    },
                    479: {
                        padding: { left: 0, right: "20%" },
                    }
                },
                classes: {
                    // Add classes for pagination.
                    pagination: 'splide__pagination prices__pagination', // container
                    page: 'splide__pagination__page prices__pagination__page', // each button
                }
            });

            priceCarousel.mount();
        }
    }

    // Faq accordion
    const faqItems = document.querySelectorAll('.faq__item');
    if (faqItems) {
        for (let i = 0; i < faqItems.length; i++) {
            faqItems[i].addEventListener('click', (e) => {
                if (e.target.classList.contains('faq__dropdown--toggle')) {
                    for (let index = 0; index < faqItems.length; index++) {
                        if (index !== i) {
                            faqItems[index].classList.remove('open')
                        }
                    }
                    let isOpen = e.currentTarget.classList.contains('open');
                    isOpen ? e.currentTarget.classList.remove('open') : e.currentTarget.classList.add('open');
                }
            });
        }
    }
});