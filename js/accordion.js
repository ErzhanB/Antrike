const btns = document.querySelectorAll('.accordion__btn');
const accordionContents = document.querySelectorAll('.accordion__content');

function changeHeight(answer, btn) {
	if (btn.classList.contains('accordion__btn--active')) {
		answer.style.maxHeight = `${answer.scrollHeight}px`;
	} else {
		answer.style.maxHeight = 0;
	}
}

function toggleClass(i) {
	const currentItem = accordionContents[i];
	const btn = btns[i];
	const currentItemBlock = currentItem.closest('.accordion__item');
	const currentItemAnswer = currentItemBlock.querySelector('.accordion__content');

	btn.classList.toggle('accordion__btn--active');
	currentItemBlock.classList.toggle('accordion__item--active');

	changeHeight(currentItemAnswer, btn);
}

btns.forEach((btn, i) => {
	const currentItemBlock = btn.closest('.accordion__item');
	const currentItemAnswer = currentItemBlock.querySelector('.accordion__content');

	changeHeight(currentItemAnswer, btn);

	btn.addEventListener('click', () => {
		toggleClass(i);
	})
})