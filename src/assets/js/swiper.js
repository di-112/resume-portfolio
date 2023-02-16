import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    spaceBetween: 24,
    slidesPerView: 3,
    autoplay: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});
