// const slideShow = document.querySelector('#slideShow');
// 	const slides = slideShow.getElementsByTagName('video');
// 	var index = 0;

// 	function nextSlide(){
// 		slides[index].classlist.remove('active');
// 		index = (index + 1) % slides.lenght;
// 		slides[index].classlist.add('active');
// 	}
// 	function pervSlide(){
// 		slides[index].classlist.remove('active');
// 		index = (index - 1 + slides.lenght) % slides.lenght;
// 		slides[index].classlist.add('active');
// 	}



const slideVedeos = document.querySelector('#slideShow');
let activeVideo = slideVedeos.querySelector('.active');

const bannerSlide = document.querySelector('.bannerText');
let activeBanner = bannerSlide.querySelector('.active');

function nextBanner(){
	let nextElement = !!activeBanner.nextElementSibling ? activeBanner.nextElementSibling : 
						bannerSlide.children[0];
	nextElement.classList.add('active');
	activeBanner.classList.remove('active');
	activeBanner = bannerSlide.querySelector('.active');
}
function prevBanner(){
	let prevElement = activeBanner.previousElementSibling ? activeBanner.previousElementSibling :
					bannerSlide.children[bannerSlide.children.length - 1];
	prevElement.classList.add('active');
	activeBanner.classList.remove('active');
	activeBanner = bannerSlide.querySelector('.active')
}


function nextSlide(){
	nextBanner();
	let nextElement = activeVideo.nextElementSibling ? activeVideo.nextElementSibling :
					slideVedeos.children[0];
	nextElement.classList.add('active');
	activeVideo.classList.remove('active');
	activeVideo = slideVedeos.querySelector('.active')
}
function pervSlide(){
	let prevCard = activeVideo.previousElementSibling ? activeVideo.previousElementSibling :
					slideVedeos.children[slideVedeos.children.length - 1];
	prevCard.classList.add('active');
	activeVideo.classList.remove('active');
	activeVideo = slideVedeos.querySelector('.active');
	prevBanner(); 
}
function toggleMenu(){
	const menuIcon = document.querySelector('.menuIcon');
	const submenu = document.querySelector('.sub__menu');
	submenu.classList.toggle('active')
	menuIcon.classList.toggle('active');
}