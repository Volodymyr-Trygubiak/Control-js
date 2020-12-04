window.onload = () => {
  
  // hamburger menu

  const toggle = document.querySelector('.toggle'),
        navClassList = document.querySelector('.nav').classList;

  toggle.addEventListener('click', () => {
    navClassList.toggle('open');
  });

  window.addEventListener('resize', (event) => {
    if (event.target.outerWidth > 576 && navClassList.contains('open')) {
      navClassList.remove('open');
    }
  });


  // Swiper 
  new Swiper('.news__slider', {

    navigation: {
      nextEl: '.news__button-next',
      prevEl: '.news__button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 3,

    spaceBetween: 30,

    slidesPerGroup: 1,

    loop: true,

    breakpoints: {
      220: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      1170: {
        slidesPerView: 3,
      },
    }
  });

}