`use strict`;
const feedbackForm = document.querySelector(`.feedback-form`);
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const localStorageKey = 'feedback-form-state';
let parsedStorage;
const storageData = localStorage.getItem(localStorageKey);

if (storageData !== null && storageData !== undefined) {
  parsedStorage = JSON.parse(storageData);
} else {
  parsedStorage = {};
}

emailInput.value = parsedStorage.email || ``;
messageInput.value = parsedStorage.message || ``;

feedbackForm.addEventListener(`input`, fooForm);

function fooForm(event) {
  let feedbackFormState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(feedbackFormState));
}

feedbackForm.addEventListener(`submit`, event => {
  event.preventDefault();
  if (emailInput.value.trim() === `` || messageInput.value.trim() === ``) {
    alert('Fill in all fields, please');
  } else {
    const resultString = localStorage.getItem(localStorageKey);
    if (resultString) {
      const resultObject = JSON.parse(resultString);
      console.log(resultObject);
    }
    feedbackForm.reset();
    localStorage.removeItem(localStorageKey);
  }
});
