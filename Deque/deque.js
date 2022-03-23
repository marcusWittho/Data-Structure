class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  addBack(element) {
    this.items[this.count] = element
    this.count += 1;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i -= 1) {
        this.items[i] = this.items[i - 1];
      }

      this.count += 1;
      this.items[0] = element;
    }
  }

  takeTheFrontItem() {
    if (this.isEmpty()) return undefined;

    const item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;

    return item;
  }

  takeTheBackItem() {
    if (this.isEmpty()) return undefined;

    this.count -= 1;
    const item = this.items[this.count];
    delete this.items[this.count];

    return item;
  }
}

module.exports = Deque;
