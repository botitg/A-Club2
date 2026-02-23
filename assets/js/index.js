const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
    },
});
const swiper1 = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        dynamicBullets: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: '.btns__next',
        prevEl: '.btns__prev',
    },
});
const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        dynamicBullets: true,
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: '.btns__next2',
        prevEl: '.btns__prev2',
    },
});
