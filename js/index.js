var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".google-testimoals-slider", {
  slidesPerView: 2,
  // centeredSlides: true,
  lazy: true,
  parallax: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1366: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});

var swiper = new Swiper(".mySwiperNew", {
  lazy: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  // parallax: true,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 10,
    scale: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // loop: true,
});


$('.readmorebut').click(function () {
  $('.sec-read-more').slideToggle('slow');
});

$('.moreless-button').click(function () {
  $(this).parent().find('.moretext').slideToggle('slow');
});

// $('.readmorebutcauses').click(function() {
//   $('.sec-read-more-causes').slideToggle('slow');
// });


var swiper = new Swiper(".about-us-slider", {
  slidesPerView: 1,
  lazy: true,
  parallax: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

// var header = $(".main-hedear");
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 110 && $(this).width() > 769) {
//     header.addClass("navbar-fixed-top");
//   } else {
//     header.removeClass('navbar-fixed-top');
//   }
// });	  

const header = document.querySelector(".main-hedear");
const toggleClass = "navbar-fixed-top";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 300) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


//! sidebar script start
$(document).ready(function () {
  $('.toggle').click(function () {
    $('.sidebar-contact').toggleClass('active');
  })
  $('.closeform').click(function () {
    $('.sidebar-contact').removeClass('active');
  })
});
//! sidebar script end
//! awards script start
const images = [
  {
      src: 'https://www.pilesclinicmumbai.in/images/awards/2-1.jpg',                                                                                                                                                                                                          
  },
  {
      src: 'https://www.pilesclinicmumbai.in/images/awards/4-1.jpg',
  },
  {
      src: 'https://www.pilesclinicmumbai.in/images/awards/6-1.jpg',
  },
  {
      src: 'https://www.pilesclinicmumbai.in/images/awards/3-1.jpg',
  },
  {
      src: 'https://www.pilesclinicmumbai.in/images/awards/5-1.jpg',
  },
  {
      src: 'https://www.pilesclinicmumbai.in/images/awards/1-2.jpg',
  },
  // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById('modal-img').src = images[index].src;
  // document.getElementById('modal-text').innerText = images[index].text;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// function prevImage() {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//     updateModal();
// }

// function nextImage() {
//     currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//     updateModal();
// }

function updateModal() {
  document.getElementById('modal-img').src = images[currentIndex].src;
  // document.getElementById('modal-text').innerText = images[currentIndex].text;
}
//! awards script end