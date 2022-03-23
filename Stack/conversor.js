const Stack = require('./stack');

const stack = new Stack();

function convertToBinary(decNumber, base) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let num = decNumber;
  let digOfBin;
  let newBaseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (num > 0) {
    digOfBin = Math.floor(num % base);
    stack.addItem(digOfBin);
    num = Math.floor(num / base);
  }

  while (!stack.isEmpty()) {
    newBaseString += digits[stack.getItem()];
  }

  return newBaseString;
}

console.log(convertToBinary(100345, 2));
console.log(convertToBinary(100345, 8));
console.log(convertToBinary(100345, 16));
console.log(convertToBinary(100345, 35));
