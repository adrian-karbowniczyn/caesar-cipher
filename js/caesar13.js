import ValidationError from './ValidationError';

const caesar13 = text => {
  if (typeof text !== 'string') {
    throw new ValidationError('Input is not a string!');
  }
  if (text.length === 0 || !text.trim()) {
    throw new ValidationError('Input is empty!');
  }
};

export default caesar13;
