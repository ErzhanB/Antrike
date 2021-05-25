const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const contact = document.querySelector('.header__contact');
const navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', openBurger);
navLinks.forEach(link => {
	link.addEventListener('click', closeBurger);
})

function openBurger() {
	if (!burger.classList.contains('burger--active')) {
		body.classList.add('lock');
		burger.classList.add('burger--active');
		nav.classList.add('header__nav--active');
		contact.classList.add('header__contact--active');
	} else {
		closeBurger();
	}
}

function closeBurger() {
	if (burger.classList.contains('burger--active')) {
		body.classList.remove('lock');
		burger.classList.remove('burger--active');
		nav.classList.remove('header__nav--active');
		contact.classList.remove('header__contact--active');
	}
}