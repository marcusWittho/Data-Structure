const Deque = require('./deque');

const deque = new Deque();

console.log("Size:", deque.size());
console.log(deque.items);
console.log("--------\n");

console.log("Is empty", deque.isEmpty());
console.log(deque.items);
console.log("--------\n");

console.log("Add back:")
deque.addBack("b");
console.log(deque.items);
console.log("--------\n");

console.log("Add back:")
deque.addBack("c");
console.log(deque.items);
console.log("--------\n");

console.log("Add front:");
deque.addFront("a");
console.log(deque.items);
console.log("--------\n");

console.log("Take the front item:", deque.takeTheFrontItem());
console.log(deque.items);
console.log("--------\n");

console.log("Take the back item:", deque.takeTheBackItem());
console.log(deque.items);
console.log("--------\n");

console.log("Add back:")
deque.addBack("c");
console.log(deque.items);
console.log("--------\n");
