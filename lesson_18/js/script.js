
const icon = document.querySelector('.header-burger');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

const burger = document.querySelector('.otherwise-burger');
burger.addEventListener('click', function () {
	document.documentElement.classList.toggle('burger-open');
});