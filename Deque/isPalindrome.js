const Deque = require('./deque');

function isPalindroome(string) {
  if (
    string === undefined
    || string === null
    || string.length === 0) return false;

  const deque = new Deque();

  const convertToLower = string.toLowerCase().split(' ').join('');
  let isEqual = true;
  let frontChar = '';
  let backChar = '';

  for (let i = 0; i < convertToLower.length; i += 1) {
    deque.addBack(convertToLower[i]);
  }

  while (deque.size() > 1 && isEqual) {
    frontChar = deque.takeTheFrontItem();
    backChar = deque.takeTheBackItem();

    if (frontChar !== backChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(isPalindroome("Marcus ucram"));
console.log(isPalindroome("kayak"));
console.log(isPalindroome("Abc d cba"));
console.log(isPalindroome("Marcus Lima"));
