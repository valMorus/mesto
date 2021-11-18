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