import ValidationError from './ValidationError';

const swapASCII = (beginCode, currentCode) => {
  return ((currentCode + 13 - beginCode) % 26) + beginCode;
};

const isInBetween = (begin, number, end) => {
  return number >= begin && number <= end;
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
  const BEGIN_UPPERCASE = 65;
  const BEGIN_LOWERCASE = 97;
  const END_UPPERCASE = 90;
  const END_LOWERCASE = 122;

  for (let i = 0; i < characters.length; i++) {
    const currentASCII = characters[i].charCodeAt(0);

    if (isInBetween(BEGIN_UPPERCASE, currentASCII, END_UPPERCASE)) {
      cipherROT13.push(String.fromCharCode(swapASCII(BEGIN_UPPERCASE, currentASCII)));
    } else if (isInBetween(BEGIN_LOWERCASE, currentASCII, END_LOWERCASE)) {
      cipherROT13.push(String.fromCharCode(swapASCII(BEGIN_LOWERCASE, currentASCII)));
    } else {
      cipherROT13.push(String.fromCharCode(currentASCII));
    }
  }

  return cipherROT13.join('');
};

export default caesar13;
