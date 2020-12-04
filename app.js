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


  window.onscroll = function fixedNav() {
    const nav = document.querySelector('.nav');

    if(window.pageYOffset > 80) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  };

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

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


  // google maps

  function initMap() {
    
    const opt = {
      center: {lat: 40.679291, lng: -73.898471},
      zoom: 8,
    };
    
    const map = new google.maps.Map(document.getElementById("map"), opt);
  }

}