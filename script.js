var text = new Typed('.text', {
    strings: ['Designer--', 'Developer--', 'Freelancer--'],
    typeSpeed: 100,
    backSpeed: 100,
    cursorChar: '',
    loop: true,
});
var text = new Typed('.hero_text', {
    strings: ['--Designer--', '--Developer--', '--Freelancer--'],
    typeSpeed: 100,
    backSpeed: 100,
    cursorChar: '',
    loop: true,
});

var swiperJs = new Swiper('.serviceSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

var swiperJs = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

let bar = document.querySelector('.bars');
let sidebar = document.querySelector('.side_bar');

bar.addEventListener('click', () => {
    sidebar.classList.toggle('show_side_bar');
});