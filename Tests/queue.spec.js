const { expect } = require('chai');
const Queue = require('../Queue/queue');

describe("Testing the queue structure", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();

    queue.addItems("a");
    queue.addItems("b");
    queue.addItems("c");
  });

  describe("When size function is used", () => {
    it("The structure should have size 3", () => {
      expect(queue.size()).to.be.equal(3);
    });
  });

  describe("When isEmpty function is used", () => {
    it("Should be return false", () => {
      expect(queue.isEmpty()).to.be.equal(false);
    });
  });

  describe("When addItems function is used", () => {
    it("The last item in the structure must be the added item", () => {
      const newItem = "d";
      queue.addItems(newItem);
      const lastItem = Object.values(queue.items)[3];

      expect(lastItem).to.be.equal(newItem);
      expect(queue.isEmpty()).to.be.equal(false);
    });
  });

  describe("When getItem function is used", () => {
    it("The returned item must be removed from the structure", () => {
      expect(queue.getItem()).to.be.equal("a");
      expect(queue.size()).to.be.equal(2);
      expect(queue.firstItem()).to.be.equal("b");
    });
  });

  describe("When toString function is used", () => {
    it("Must return a string", () => {
      expect(queue.toString()).to.be.equal("a, b, c");
    });
  });

  describe("When clear function is used", () => {
    it("The structure must be return to the initial stage", () => {
      queue.clear();

      expect(queue.isEmpty()).to.be.equal(true);
      expect(queue.size()).to.be.equal(0);
    });
  });
});
