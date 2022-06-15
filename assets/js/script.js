new Swiper('.slider', {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
});