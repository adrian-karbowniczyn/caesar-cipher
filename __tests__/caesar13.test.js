import caesar13 from '../js/caesar13';

test('Shoud throw not a string error', () => {
  const randomNumber = 123;
  expect(() => {
    caesar13(randomNumber);
  }).toThrow('Input is not a string!');
});

test('Should throw an empty error', () => {
  const emptyString = ' ';

  expect(() => {
    caesar13(emptyString);
  }).toThrow('Input is empty!');
});

test('Should give Caesar cypher from uppercase letters', () => {
  const word = 'PRZEPROGRAMOWANI';

  const result = caesar13(word);

  expect(result).toBe('CEMRCEBTENZBJNAV');
});

test('Should give Caesar cypher from lowercase letters', () => {
  const word = 'ilovejavascript';

  const result = caesar13(word);

  expect(result).toBe('vybirwninfpevcg');
});

test('Numbers should not to change', () => {
  const word = 'P4ZEP40GRAM0WAN1';

  const result = caesar13(word);

  expect(result).toBe('C4MRC40TENZ0JNA1');
});

test('Special characters should not to change', () => {
  const word = 'P4ZEP40GR@M0W@N1';

  const result = caesar13(word);

  expect(result).toBe('C4MRC40TE@Z0J@A1');
});

test('It should encrypt back what was decrypted', () => {
  const word = 'CEMRCEBTENZBJNAV';

  const result = caesar13(word);
  expect(result).toBe('PRZEPROGRAMOWANI');
});
