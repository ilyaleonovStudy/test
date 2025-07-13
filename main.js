  document.addEventListener("DOMContentLoaded", function () {
    const message = "Здравствуйте Людмила! Подскажите, пожалуйста, на какое время можно к Вам записаться?";
	const number = "79500462820";
	const vkProfile = "https://vk.com/liudmilasv_nails";

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;

    document.querySelectorAll('[data-main-btn="mainBtn"]').forEach(button => {
      button.setAttribute("href", whatsappLink);
      button.setAttribute("target", "_blank");
    });

    document.querySelectorAll('[data-second-btn="secondBtn"]').forEach(button => {
      button.setAttribute("href", vkProfile);
      button.setAttribute("target", "_blank");
    });

    document.querySelectorAll('[data-third-btn="thirdBtn"]').forEach(button => {
      button.setAttribute("href", `tel:${number}`);
      button.setAttribute("target", "_blank");
    });
});


const imageFolder = 'assets/example-img/';

const imageNames = [
    'adv1.jpg',
    'adv2.jpg',
    'adv3.jpg',
	'adv4.jpg',
	'adv2.jpg',
  ];

const container = document.querySelector('.example__img-container');

  const swiperDiv = document.createElement('div');
  swiperDiv.classList.add('swiper', 'example-slider');

  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('swiper-wrapper');

  imageNames.forEach(imgName => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('swiper-slide', 'example-slide');
    slideDiv.style.background = `url('/${imageFolder + imgName}') no-repeat center center`;
    slideDiv.style.backgroundSize = 'cover';

    wrapperDiv.appendChild(slideDiv);
  });

  swiperDiv.appendChild(wrapperDiv);
  container.appendChild(swiperDiv);

const imgPath = 'assets/certificate-img/';

  const imgFiles = [
    'adv1.jpg',
    'adv2.jpg',
    'adv3.jpg',
    'adv4.jpg',
    'adv1.jpg'
  ];

  const targetContainer = document.querySelector('.about__left-advantages');

  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'swiper advantages-slider';

  const slidesContainer = document.createElement('div');
  slidesContainer.className = 'swiper-wrapper advantages-wrapper';

  imgFiles.forEach(fileName => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide advantages-slide';
    slide.style.background = `url('${imgPath + fileName}') no-repeat center center`;
    slide.style.backgroundSize = 'cover';
    slide.style.height = '200px';

    slidesContainer.appendChild(slide);
  });

  sliderWrapper.appendChild(slidesContainer);
  targetContainer.appendChild(sliderWrapper);







  let swiperAdvantages = new Swiper(".advantages-slider", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
	delay: 2500,
	disableOnInteraction: false,
	},
	breakpoints: {
	0: {
	slidesPerView: 4,
	spaceBetween: 10,
	},
	815: {
	slidesPerView: 5,
	},
	1165: {
	slidesPerView: 3,
	},
	1330: {
	slidesPerView: 4 
	}
}
});

let swiperExample = new Swiper(".example-slider", {
	slidesPerView: 3,
	spaceBetween: 60,
	loop: true,
	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	0: {
	slidesPerView: 2,
	spaceBetween: 20,
	},
	815: {
	slidesPerView: 3,
	spaceBetween: 60,
	}
}
});
