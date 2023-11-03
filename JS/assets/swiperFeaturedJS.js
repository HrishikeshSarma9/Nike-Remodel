var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints: {
      538: {
        slidesPerView: 2,
        spaceBetween: 1
      },
      
      993: {
        slidesPerView: 4,
        spaceBetween: 1
      },
      1500:{
        slidesPerView: 5,
        spaceBetween: 1
      }
    },
    freeMode: true,
    grabCursor: true,
    loop: true,
    keyboard: {
      enabled: true
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
    }
  });