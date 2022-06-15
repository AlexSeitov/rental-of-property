import smoothscroll from 'smoothscroll-polyfill';
import scroll from './modules/smoothScroll.js';
// import tabbis from './vendor/tabs.js';
// import accordion from './modules/accordion.js';
import burger from './modules/burger.js';
import moveLinkMarker from './modules/moveLinkMarker.js';
import phoneInput from './vendor/phoneInput.js';
import A11yDialog from 'a11y-dialog';
import Swiper, {
  Autoplay, Navigation, Pagination, Thumbs
} from 'swiper';
import 'swiper/css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

// Popup
/* eslint-disable no-unused-vars */
const container = document.querySelector('#popup-call');
const dialog = new A11yDialog(container);

container.addEventListener('hide', function (event) {
  const closePopupBtn = document.querySelector('[data-a11y-dialog-show]');
  closePopupBtn.blur();
});
/* eslint-enable no-unused-vars */

// Burger ======================================================================
burger('.burger', '.nav', '.nav__link', 'body');

// moveLinkMarker ==============================================================
moveLinkMarker('.nav__list', '.nav__item', '.link-marker');

// SmoothScroll ================================================================
smoothscroll.polyfill();
scroll('.anchor-link');

// Tabs ========================================================================
// https://github.com/jenstornell/tabbis.js
// tabbis();

// Accordeon ===================================================================
// accordion('.accordion__head');

// Phone input mask ============================================================
phoneInput('input[data-tel-input]');

// Swiper ======================================================================
/* eslint-disable no-unused-vars */

const testimonialsSlider = new Swiper('.testimonials-slider', {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    568: {
      slidesPerView: 2
    }
  }
});

const appartmentSlider = new Swiper('.appartment-thumbs-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
const appartmentThumbsSlider = new Swiper('.appartment-slider', {
  modules: [Navigation, Thumbs],
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: appartmentSlider
  }
});

// gLightbox ======================================================================

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true
});

/* eslint-enable no-unused-vars */
