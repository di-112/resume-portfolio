import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

new Swiper('.modal .swiper', {
    spaceBetween: 24,
    slidesPerView: 1,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.modal__swiper-pagination',
    }
});
