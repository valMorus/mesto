//console.log('Всё получится!')

const popupElement = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const profileCloseButton = popupProfile.querySelector('.popup__close');
const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__field_type_name');
const jobInput = formElement.querySelector('.popup__field_type_job');
const popupNewElement = document.querySelector('.popup_type_new-item');
const popupNewOpenButtonElement = document.querySelector('.profile__add-button');
const containerEl = document.querySelector('.elements');
const templateEl = document.querySelector('.template');
const popupImage = document.querySelector('.popup_type_image');
const inputElName = document.querySelector('.popup__field_type_place-name');
const inputElSource = document.querySelector('.popup__field_type_source');
const newElCloseButton = popupNewElement.querySelector('.popup__close');
const imageCloseButton = popupImage.querySelector('.popup__close');
const buttonPfofileOpen = document.querySelector('.profile__edit-button');


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

//работа с массивом

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

function render() {
  const card = initialCards.map((item, idx, arr) => {
    return getItem(item);
  });
  containerEl.append(...card);
};

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
  closePopup(popupNewElement);
  inputElName.value = '';
  inputElSource.value = '';
}

//открыть попап

const openPopup = function (popupElement) {
  popupElement.classList.add('popup_is-opened')
}

//открыть поап нового места

function openPopupNew() {
  openPopup(popupNewElement);
}

//удаление

function handleDelete(event) {
  const targetEl = event.target;
  const listItem = targetEl.closest('.element');
  listItem.remove();
}

//лайк

function toLike(evt) {
  evt.target.classList.toggle("element__like_active");
}

//редактировать профиль

function openPopupProfile() {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  openPopup(popupProfile);
}

// сабмит профиля

function handleformSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup(popupProfile);
}

//попап с картинкой

function handlePopupImage(evt) {
  const targetImg = evt.target;
  const elementImg = targetImg.closest(".element");
  const openImg = document.querySelector(".popup__img")
  const openImgName = document.querySelector(".popup__image-name");
  openImgName.textContent = elementImg.textContent;
  openImg.src = elementImg.querySelector(".element__picture").src;
  openImg.alt = elementImg.textContent;
  openPopup(popupImage);
}

//закрыть попап

const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_is-opened')
}

profileCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

newElCloseButton.addEventListener('click', () => {
  closePopup(popupNewElement);
});

imageCloseButton.addEventListener('click', () => {
  closePopup(popupImage);
});

formElement.addEventListener('submit', handleformSubmit);

popupNewElement.addEventListener('submit', handleNew);

popupNewOpenButtonElement.addEventListener('click', openPopupNew);

buttonPfofileOpen.addEventListener('click', openPopupProfile);


render();