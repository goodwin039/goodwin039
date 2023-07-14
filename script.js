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
  admiral.classList.remove('active_grey');
  admiral.classList.add('active_yellow');
  thieves.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 0;
  slide();
});

thieves.addEventListener('click', () => {
  thieves.classList.remove('active_grey');  
  thieves.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 1;
  slide();
});

patriotic.addEventListener('click', () => {
  // patriotic.style.color = '#E3B873';
  // patriotic.style.borderBottom = '1px solid #E3B873';
  // admiral.style.color = 'rgba(255, 255, 255, 0.3)';
  // admiral.style.borderBottom = 'none';
  patriotic.classList.remove('active_grey');
  patriotic.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  thieves.classList.add('active_grey');
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