const slider = document.querySelector('.slider');
const leftArr = document.querySelector('.leftArr');
const rightArr = document.querySelector('.rightArr');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
const admiral = document.querySelector('.admiral');
const thieves = document.querySelector('.thieves');
const patriotic = document.querySelector('.patriotic');
let slideIndex = 0;



leftArr.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

rightArr.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

admiral.addEventListener('click', () => {
  slideIndex = 0;
  slide();
});

thieves.addEventListener('click', () => {
  slideIndex = 1;
  slide();
});

patriotic.addEventListener('click', () => {
  slideIndex = 2;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});