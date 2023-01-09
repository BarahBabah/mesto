"use strict";
const aboutPopup = document.querySelector(".popup"),
  buttonEdit = document.querySelector(".profile__edit-button"),
  popupClose = [].slice.call(document.querySelectorAll(".popup__close")).forEach((evt) => {
    evt.addEventListener('click', closer);
  });
const cardView = document.querySelector(".popup_view-card");
// открытие
buttonEdit.addEventListener("click", (evt) => {
  aboutPopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
// закрытие

function closer(evt) {
  // evt.target.parentElement.parentElement.classList.remove("popup_opened");
  aboutPopup.classList.remove("popup_opened");
  addCardPopup.classList.remove("popup_opened");
  cardView.classList.remove("popup_opened");
}
//
const formElement = aboutPopup.querySelector(".popup__form"),
  nameInput = aboutPopup.querySelector("#popup-name"),
  jobInput = aboutPopup.querySelector("#popup-job"),
  profileName = document.querySelector(".profile__name"),
  profileJob = document.querySelector(".profile__about-me");

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closer();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

// открытие второго popup
const addButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_addcard");

const addCardInputName = addCardPopup.querySelector("#popup-addcard-name");
const addCardInputLink = addCardPopup.querySelector("#popup-addcard-link");

addButton.addEventListener('click', (evt) => {
  addCardPopup.classList.add("popup_opened");
  addCardInputName.placeholder = 'Название';
  addCardInputLink.placeholder = 'Ссылка на картинку';
});
addCardPopup.addEventListener('submit', addCardPopupSubmit);

function addCardPopupSubmit(evt) {
  evt.preventDefault();
  const name = addCardInputName.value;
  const link = addCardInputLink.value;
  createCards(name, link);
}


// массив из задания
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
    name: 'Земля',
    link: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif'
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
// Галерея
const cardContainer = document.querySelector('.gallary__list');
// Возвращает переделанную карточку
function createCards(name, link) {
  const cardTemplate = document.querySelector("#template-gallary").content;
  const createCard = cardTemplate.cloneNode(true);
  createCard.querySelector(".gallary__figcaption-title").textContent = name;
  createCard.querySelector(".gallary__image").setAttribute('src', link);
  createCard.querySelector(".gallary__image").setAttribute('alt', name);

  addCards(createCard);
  // eventGallaryCard();
}
// добавляет карточку в верстку
function addCards(createCard) {
  createCard.querySelector(".gallary__trash").addEventListener("click", handleGallaryDelete);
  createCard.querySelector(".gallary__like").addEventListener('click', handleGallarylike);
  createCard.querySelector(".gallary__image").addEventListener("click", handleGallaryimage);
  cardContainer.prepend(createCard);
  closer();
}
// карточки из массива в галерею
initialCards.forEach(item => {
  createCards(item.name, item.link);
});


// ПРИ ПОПЫТКАХ ЭТОЙ РЕАЛИЗАЦИИ У МЕНЯ TOGGLE ВЕШАЛСЯ ЧЕРЕЗ РАЗ ПРИ БЫСТРОМ СОЗДАНИИ КАРТОЧЕК, НЕ ПОНЯЛ И НЕ СМОГ РЕШИТЬ ЭТУ ПРОБЛЕМУ
// function eventGallaryCard(){
// Реализация удаления карточек со страницы
const gallaryDelete = [].slice.call(document.querySelectorAll(".gallary__trash")).forEach((evt) => {
  evt.addEventListener('click', handleGallaryDelete);
});
// удалить
function handleGallaryDelete(evt) {
  evt.target.parentElement.parentElement.remove();
}
// массив лайков картинок
const like = [].slice.call(document.querySelectorAll(".gallary__like")).forEach((evt) => {
  evt.addEventListener('click', handleGallarylike);
});
// toggle лайк
function handleGallarylike(evt) {
  evt.target.classList.toggle("gallary__like_active");
}
// }
// eventGallaryCard();

const cardImage = [].slice.call(document.querySelectorAll(".gallary__image")).forEach((evt) => {
  evt.addEventListener('click', handleGallaryimage);
});
// toggle лайк
function handleGallaryimage(evt) {
  const link = evt.target.getAttribute("src");
  const name = evt.target.getAttribute("alt");
  cardView.querySelector(".popup__container").setAttribute("style", "border: 0; background-color: transparent; box-shadow:none; min-width: 0");
  // cardView.querySelector(".gallary__image").setAttribute(link);
  cardView.querySelector(".popup__view-card-image").setAttribute('src', link);
  cardView.querySelector(".popup__view-card-image").setAttribute("alt", name);
  cardView.querySelector(".popup__view-card-image").setAttribute("style", "max-width:75vw; max-height: 75vh");

  cardView.querySelector(".popup__view-card-title").textContent = name;
  cardView.querySelector(".popup__view-card-title").setAttribute("style", `
    margin:0;
    margin-top:10px;
    padding:0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
  `);
  cardView.classList.add("popup_opened");
}