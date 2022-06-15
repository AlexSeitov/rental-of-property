import Swiper, { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

/* eslint-disable no-unused-vars */

const apartmentSlider = new Swiper('.apartment-thumbs-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
const apartmentThumbsSlider = new Swiper('.apartment-slider', {
  modules: [Navigation, Thumbs],
  loop: false,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: apartmentSlider
  }
});

// gLightbox ==========================================================

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true
});
