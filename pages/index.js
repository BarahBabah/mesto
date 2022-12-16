const aboutPopup = document.querySelector(".popup"),
  editButton = document.querySelector(".profile__edit-button"),
  popupClose = document.querySelector(".popup__close");
// открытие
editButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  aboutPopup.classList.add("popup_opened");
});
// закрытие
popupClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  aboutPopup.classList.remove("popup_opened");
});
// 
let formElement = document.querySelector(".popup__form"),
  nameInput = formElement.querySelector(".popup__name"),
  jobInput = formElement.querySelector(".popup__job"),
  profileName = document.querySelector(".profile__name"),
  profileJob = document.querySelector(".profile__about-me");
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  if (nameInput.value !== null && nameInput.value !== "" && jobInput.value !== null && jobInput.value !== "") {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  }
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 