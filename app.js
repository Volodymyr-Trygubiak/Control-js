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

    if (window.pageYOffset > 80) {
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
      1310: {
        slidesPerView: 3,
      },
    }
  });

};

// google maps

function initMap() {

  const pos = {
    lat: 40.676291,
    lng: -73.895471
  };
  const opt = {
    center: pos,
    zoom: 16,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }
  ]
  };

  const map = new google.maps.Map(document.getElementById("map"), opt);

  const marker = new google.maps.Marker({
    position: {
      lat: 40.679291,
      lng: -73.898471
    },
    map: map,
    // icon: '../img/map-marker.png',
  });
}


// class App {
//   constructor() {
//   }
//   initMap() {
//     const opt = {
//       center: {
//         lat: 40.679291,
//         lng: -73.898471
//       },
//       zoom: 8,
//     };

//     const map = new google.maps.Map(document.getElementById("map"), opt);
//   }
// }

// function initMap() {

//   const uluru = {
//     lat: 49.84,
//     lng: 24.02
//   };

//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: uluru,
//   });

//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
//   const infowindow = new google.maps.InfoWindow({
//     content: 'Uniquely visualize distinctive web-readiness via cross-unit networks.',
//   });

//   marker.addListener("click", () => {
//     infowindow.open(map, marker);
//   });
// }

// const obj = new App();