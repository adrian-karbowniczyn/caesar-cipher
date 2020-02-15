import caesar13 from './caesar13';

const submitButton = document.querySelector('.cryptography-form__submit');
const textInput = document.querySelector('.cryptography-form__input');
const outputMessage = document.querySelector('.cryptography-output__encrypted-message');
const errorMessage = document.querySelector('.cryptography-output__error-message');

submitButton.addEventListener('click', event => {
  event.preventDefault();
  outputMessage.textContent = '';
  errorMessage.textContent = '';

  try {
    outputMessage.textContent = caesar13(textInput.value);
    textInput.value = '';
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    if (error.name === 'Validation error') {
      errorMessage.textContent = 'Caesar is dissatisfied with your actions';
    }
  }
});
