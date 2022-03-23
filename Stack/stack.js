class stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  addItem(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  getItem() {
    if (this.isEmpty()) return undefined;

    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  lastItem() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    while (!this.isEmpty()) {
      this.getItem();
    }
  }

  toString() {
    if (this.isEmpty()) return '';

    let item = `${this.items[0]}`;
    for (let i = 1; i < this.count; i += 1) {
      item = `${item}, ${this.items[i]}`;
    }

    return item;
  }
}

module.exports = stack;
