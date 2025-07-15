  document.addEventListener("DOMContentLoaded", function () {
    const message = "Здравствуйте Людмила! Подскажите, пожалуйста, на какое время можно к Вам записаться?";
	const number = "79085871055";
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
      button.setAttribute("href", `tel:+${number}`);
      button.setAttribute("target", "_blank");
    });
});


const imageFolder = 'assets/example-img/';

const imgExample = [
    'example-1.jpg',
    'example-2.jpg',
    'example-3.jpg',
    'example-4.jpg',
    'example-5.jpg',
    'example-6.jpg',
    'example-7.jpg',
    'example-8.jpg',
    'example-9.jpg',
    'example-10.jpg',
  ];

const container = document.querySelector('.example__img-container');

  const swiperDiv = document.createElement('div');
  swiperDiv.classList.add('swiper', 'example-slider');

  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('swiper-wrapper');

  imgExample.forEach(imgName => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('swiper-slide', 'example-slide');
    slideDiv.style.background = `url('/${imageFolder + imgName}') no-repeat center center`;
    slideDiv.style.backgroundSize = 'cover';

    wrapperDiv.appendChild(slideDiv);
  });

  swiperDiv.appendChild(wrapperDiv);
  container.appendChild(swiperDiv);

const imgPath = 'assets/certificate-img/';

  const imgCertificate = [
    'certificate-1.jpg',
    'certificate-2.jpg',
    'certificate-3.jpg',
    'certificate-4.jpg',
    'certificate-5.jpg',
    'certificate-6.jpg',
    'certificate-7.jpg',
    'certificate-8.jpg',
    'certificate-9.jpg',
    'certificate-10.jpg',
    'certificate-11.jpg',
    'certificate-12.jpg',
    'certificate-13.jpg',
    'certificate-14.jpg',
    'certificate-15.jpg',
    'certificate-16.jpg',
    'certificate-17.jpg',
    'certificate-18.jpg',
    'certificate-19.jpg',
    'certificate-20.jpg',
    'certificate-21.jpg',
    'certificate-22.jpg',
    'certificate-23.jpg',
    'certificate-24.jpg',
    'certificate-25.jpg',
    'certificate-26.jpg',
    'certificate-27.jpg',
    'certificate-28.jpg',

  ];

  const targetContainer = document.querySelector('.about__left-advantages');

  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'swiper advantages-slider';

  const slidesContainer = document.createElement('div');
  slidesContainer.className = 'swiper-wrapper advantages-wrapper';

  imgCertificate.forEach(fileName => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide advantages-slide';
    slide.style.background = `url('/${imgPath + fileName}') no-repeat center center`;
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
},
pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
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

AOS.init({
    duration: 1000,
});


