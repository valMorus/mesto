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

function handleformSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);

popupCloseButtonElement.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleformSubmit);

// кнопка добавить

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

const initialCards = [{
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

const containerEl = document.querySelector('.elements');
const templateEl = document.querySelector('.template');

function render() {
  const card = initialCards.map((item, idx, arr) => {
    return getItem(item);
  });
  containerEl.append(...card);
};

render();

const inputElName = document.querySelector('.popup-new-item__field_type_name');
const inputElSource = document.querySelector('.popup-new-item__field_type_source');
const createButtonEl = popupNewElement.querySelector('.popup-new-item__submit');

function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const headerEl = newItem.querySelector('.element__name');
  const imgEl = newItem.querySelector('.element__picture');

  headerEl.textContent = item.name;
  imgEl.setAttribute('src', item.link);

  const removeBtn = newItem.querySelector('.element__trash');
  removeBtn.addEventListener('click', handleDelete);

  const likeEl = newItem.querySelector('.element__like');
  likeEl.addEventListener('click', toLike);

  imgEl.addEventListener('click', handlePopupImage);


  return newItem;
}

// добавляем карточки по кнопке

function handleNew(evt) {
  evt.preventDefault();
  const inputTextName = inputElName.value;
  const inputTextSource = inputElSource.value;

  const newCard = getItem({
    name: inputTextName,
    link: inputTextSource
  });
  containerEl.prepend(newCard);
  closePopupNew();
  inputElName.value = '';
  inputElSource.value = '';
}

popupNewElement.addEventListener('submit', handleNew);

//удаление карточки

function handleDelete(event) {
  const targetEl = event.target;
  const listItem = targetEl.closest('.element');
  listItem.remove();
}

// лайк

function toLike(evt) {
  evt.target.classList.toggle("element__like_active");
}

//еще раз попап имг с нуля

const popupImage = document.querySelector('.popup-image')


function handlePopupImage(evt) {
  const targetImg = evt.target;
  const elementImg = targetImg.closest(".element");
  const openImg = document.querySelector(".popup-image__img")
  const openImgName = document.querySelector(".popup-image__name");
  openImgName.textContent = elementImg.textContent;
  openImg.src = elementImg.querySelector(".element__picture").src;
  openImg.alt = elementImg.textContent;
  openPopupImage();
}

const openPopupImage = function () {
  popupImage.classList.add('popup-image_is-opened')
};

const closePopupImage = function () {
  popupImage.classList.remove('popup-image_is-opened')
};

const popupImageCloseBtn = popupImage.querySelector('.popup-image__close');
popupImageCloseBtn.addEventListener('click', closePopupImage);