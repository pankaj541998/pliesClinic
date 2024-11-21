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
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    990: {
      slidesPerView: 1,
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
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      coverflowEffect: {
        depth: 100,
        modifier: 0,
        scale: 0,
      },
    },
    480: {
      slidesPerView: 1,
      coverflowEffect: {
        depth: 100,
        modifier: 0,
        scale: 0,
      },
    },
    990: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 480px

  }
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
      src: './assets/images/awards/2-1.jpg',                                                                                                                                                                                                          
  },
  {
      src: './assets/images/awards/4-1.jpg',
  },
  {
      src: './assets/images/awards/6-1.jpg',
  },
  {
      src: './assets/images/awards/3-1.jpg',
  },
  {
      src: './assets/images/awards/5-1.jpg',
  },
  {
      src: './assets/images/awards/1-2.jpg',
  },
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
function updateModal() {
  document.getElementById('modal-img').src = images[currentIndex].src;
}
//! awards script end

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".right-logo-area").toggleClass('active');
  });

  $("li.menu-item a").click(function() {
        $(".mega-box").not($(this).siblings('.mega-box')).removeClass("active-mega-menu");
    $(this).siblings('.mega-box').toggleClass("active-mega-menu");
});
});

