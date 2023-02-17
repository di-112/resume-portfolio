import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

new Swiper('.swiper', {
    spaceBetween: 24,
    slidesPerView: 3,
    autoplay: false,
    navigation: {
        nextEl: '.works__button-next',
        prevEl: '.works__button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
