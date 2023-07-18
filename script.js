const slider = document.querySelector('.slider');
const leftArr = document.querySelector('.leftArr');
const rightArr = document.querySelector('.rightArr');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;

let slideIndex = 0;

leftArr.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  if(slideIndex == 0){
    admiral.classList.remove('active_grey');
    admiral.classList.add('active_yellow');
    thieves.classList.add('active_grey');
    patriotic.classList.add('active_grey');
  }else{
    if(slideIndex == 1){
      thieves.classList.remove('active_grey');  
      thieves.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      patriotic.classList.add('active_grey');
    }else{
      patriotic.classList.remove('active_grey');
      patriotic.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      thieves.classList.add('active_grey');
    }
  }
  slide();
});

rightArr.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  if(slideIndex == 0){
    admiral.classList.remove('active_grey');
    admiral.classList.add('active_yellow');
    thieves.classList.add('active_grey');
    patriotic.classList.add('active_grey');
  }else{
    if(slideIndex == 1){
      thieves.classList.remove('active_grey');  
      thieves.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      patriotic.classList.add('active_grey');
    }else{
      patriotic.classList.remove('active_grey');
      patriotic.classList.add('active_yellow');
      admiral.classList.add('active_grey');
      thieves.classList.add('active_grey');
    }
  }
  slide();  
});

const admiral = document.querySelector('.admiral');
const thieves = document.querySelector('.thieves');
const patriotic = document.querySelector('.patriotic');

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

// const secondDot = document.getElementById("secondDot");
// secondDot.addEventListener('click', () => {
//   if(document.getElementById("secondDot").src == "img/roundGrey.svg"){
//     document.getElementById("secondDot").src = "img/roundWhite.svg";
//   }
// });

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
  
}

const sliderDots = document.querySelectorAll('.dot');

sliderDots.forEach((item) => {
	item.addEventListener('click', (event) => {
		setSlider(event.target.getAttribute('data-index'));
    // alert(event.target.getAttribute('data-index'));
	});
});

function setSlider(index){
	sliderDots.forEach((item) => {
		if(Number(item.getAttribute('data-index')) === index){
      item.classList.remove('dot');
			item.classList.add('active');
		}else{
			if(item.classList.contains('active')) item.classList.remove('active');
		}
	});
}


window.addEventListener('load', () => {
  slide();
});


