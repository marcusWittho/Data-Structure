interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

function printAge(person: Person) {
  console.log(person.age);
}

const john = { name: 'John', age: 29 };
const mary = { name: 'Mary', age: 32, phone: '91234-1234' };

printName(john);  // John
printAge(john);  // 29

printName(mary);  // Mary
printAge(mary);  // 32
