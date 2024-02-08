`use strict`;
const feedbackForm = document.querySelector(`.feedback-form`);
const emailInpup = document.querySelector('[name="email"]');
const massageInpup = document.querySelector('[name="message"]');
const localStorageKey = 'feedback-form-state';
let parsedStorage;
const storageData = localStorage.getItem(localStorageKey);
if (storageData === null) {
  parsedStorage = {};
} else {
  parsedStorage = JSON.parse(storageData);
}

emailInpup.value = parsedStorage.email || ``;
massageInpup.value = parsedStorage.massage || ``;

feedbackForm.addEventListener(`input`, fooForm);

function fooForm(event) {
  let feedbackFormState = {
    email: emailInpup.value.trim(),
    massage: massageInpup.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(feedbackFormState));
}

feedbackForm.addEventListener(`submit`, event => {
  event.preventDefault();
  if (emailInpup.value === `` || massageInpup.value === ``) {
    alert('Fill in all fields, please');
  } else {
    console.log(localStorage.getItem(localStorageKey));
    alert(`Thanks for the data!`);
    feedbackForm.reset();
  }

  localStorage.removeItem(localStorageKey);
});
