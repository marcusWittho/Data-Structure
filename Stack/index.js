const Stack = require('./stack');

const stack = new Stack();

stack.addItem('a');
stack.addItem('b');
stack.addItem('c');
stack.addItem('d');
console.log("Add item:");
console.log(stack.items);
console.log("--------\n");

console.log("Get item:", stack.getItem());
console.log(stack.items);
console.log("--------\n");

console.log("Last item:", stack.lastItem());
console.log(stack.items);
console.log("--------\n");

console.log("Is empty:", stack.isEmpty());
console.log(stack.items);
console.log("--------\n");

console.log("Size:", stack.size());
console.log(stack.items);
console.log("--------\n");

console.log("To string:", stack.toString());
console.log(stack.items);
console.log("--------\n");

console.log("Clear:");
stack.clear();
console.log("--------\n");

console.log("Is empty:", stack.isEmpty());
console.log(stack.items);
console.log("--------\n");
