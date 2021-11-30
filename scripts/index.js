//console.log('Всё получится!')

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__field_type_name');
const jobInput = formElement.querySelector('.popup__field_type_job');

const openPopup = function () {
    popupElement.classList.add('popup_is-opened')
    if (popupElement.classList.contains('popup_is-opened')) {
        nameInput.value = nameElement.textContent;
        jobInput.value = jobElement.textContent;
    }
};

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened')
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);

//написано 30.11
// добавить карточку

const popupNewElement = document.querySelector('.popup-new-item');
const popupNewCloseButtonElement = popupNewElement.querySelector('.popup-new-item__close');
const popupNewOpenButtonElement = document.querySelector('.profile__add-button');

const openPopupNew = function () {
  popupNewElement.classList.add('popup-new-item_is-opened')
 };

 const closePopupNew = function () {
    popupNewElement.classList.remove('popup-new-item_is-opened')
};

popupNewOpenButtonElement.addEventListener('click', openPopupNew);

popupNewCloseButtonElement.addEventListener('click', closePopupNew);

//темплейт

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
