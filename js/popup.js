const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const popupCloseBtn = document.querySelector('.popup__cancel');
const timeout = 800;
let unlock = true;

popupCloseBtn.addEventListener('click', e => {
	popupClose(e.target.closest('.popup'));
})

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const link = popupLinks[i];

		link.addEventListener('click', e => {
			e.preventDefault();

			const popupId = link.getAttribute('href');
			const popup = document.querySelector(popupId);

			popupOpen(popup);
		})
	}
}

function popupOpen(popup) {
	if (popup && unlock) {
		const popupActive = document.querySelector('.popup--open');

		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}

		popup.classList.add('popup--open');

		popup.addEventListener('click', e => {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		})
	}
}

function popupClose(popup, doUnlock = true) {
	if (unlock) {
		popup.classList.remove('popup--open');

		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	unlock = false;

	setTimeout(() => {
		unlock = true;
	}, timeout)
}

function bodyUnlock() {
	setTimeout(() => {
		body.style.paddingRight = 0;
		body.classList.remove('lock');
	}, timeout)

	unlock = false;

	setTimeout(() => {
		unlock = true;
	}, timeout)
}

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();