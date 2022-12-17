const aboutPopup = document.querySelector(".popup"),
  buttonEdit = document.querySelector(".profile__edit-button"),
  popupClose = document.querySelector(".popup__close");
// открытие
buttonEdit.addEventListener("click", (evt) => {
  aboutPopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
// закрытие
popupClose.addEventListener("click", (evt) => {
  aboutPopup.classList.remove("popup_opened");
});
// 
let formElement = document.querySelector(".popup__form"),
  nameInput = formElement.querySelector("#popup-name"),
  jobInput = formElement.querySelector("#popup-job"),
  profileName = document.querySelector(".profile__name"),
  profileJob = document.querySelector(".profile__about-me");
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  aboutPopup.classList.remove("popup_opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 