// javascript for swiper slider

var swiper = new Swiper(".review-slider", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    loop:true,
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });