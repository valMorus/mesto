//console.log('Всё получится!')

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup_is-opened')
};

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened')
};

//togglePopupVisibility();

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);
