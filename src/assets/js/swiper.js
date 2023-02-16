import Swiper, { Navigation } from 'swiper/swiper-bundle.js';

Swiper.use([Navigation]);

new Swiper('.swiper', {
    freeMode: true,
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
