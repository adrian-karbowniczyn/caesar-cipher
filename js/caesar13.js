import ValidationError from './ValidationError';

const swapASCII = (beginCode, currentCode) => {
  return ((currentCode + 13 - beginCode) % 26) + beginCode;
};

const caesar13 = text => {
  if (typeof text !== 'string') {
    throw new ValidationError('Input is not a string!');
  }
  if (text.length === 0 || !text.trim()) {
    throw new ValidationError('Input is empty!');
  }
  const characters = [...text];
  const cipherROT13 = [];

  for (let i = 0; i < characters.length; i++) {
    const currentASCII = characters[i].charCodeAt(0);

    if (currentASCII >= 65 && currentASCII <= 90) {
      cipherROT13.push(String.fromCharCode(((currentASCII + 13 - 65) % 26) + 65));
    } else if (currentASCII >= 97 && currentASCII <= 122) {
      cipherROT13.push(String.fromCharCode(((currentASCII + 13 - 97) % 26) + 97));
    } else {
      cipherROT13.push(String.fromCharCode(currentASCII));
    }
  }
  return cipherROT13.join('');
};

export default caesar13;
