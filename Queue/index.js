const Queue = require('./queue');

const queue = new Queue();

queue.addItems("a");
queue.addItems("b");
queue.addItems("c");
console.log("Add item.");
console.log(queue.items);
console.log("--------\n");

console.log("Get item:", queue.getItem());
console.log(queue.items);
console.log("--------\n");

console.log("First item:", queue.firstItem());
console.log(queue.items);
console.log("--------\n");

console.log("Size:", queue.size());
console.log(queue.items);
console.log("--------\n");

console.log("Is empty:", queue.isEmpty());
console.log(queue.items);
console.log("--------\n");

console.log("Object string:", queue.toString());
console.log(queue.items);
console.log("--------\n");

console.log("Clear:");
queue.clear();
console.log("--------\n");

console.log("Is empty:", queue.isEmpty());
console.log(queue.items);
console.log("--------\n");
