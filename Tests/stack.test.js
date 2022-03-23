const { expect } = require('chai');
const Stack = require('../Stack/stack');


describe("Testing the stack structure:", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();

    stack.addItem("a");
    stack.addItem("b");
    stack.addItem("c");
  });

  describe("When size function is used", () => {
    it("The structure must have size 3", () => {
      expect(stack.size()).to.be.equal(3);
    });
  });

  describe("When isEmpty function is used", () => {
    it("Should be returned false", () => {
      expect(stack.isEmpty()).to.be.equal(false);
    });
  });

  describe("When addItem function is used", () => {
    it("The last item in the structure must be the added item", () => {
      const newItem = "d";
      stack.addItem(newItem);

      expect(stack.lastItem()).to.be.equal(newItem);
      expect(stack.isEmpty()).to.be.equal(false);
    });
  });

  describe("When getItem function is used", () => {
    it("The returned item must be removed from the structure", () => {
      expect(stack.getItem()).to.be.equal("c");
      expect(stack.size()).to.be.equal(2);
      expect(stack.lastItem()).to.be.equal("b");
    });
  });

  describe("When toString function is used", () => {
    it("Must return a string", () => {
      expect(stack.toString()).to.be.equal("a, b, c");
    });
  });

  describe("When clear function is used", () => {
    it("The structure must be return to the initial stage", () => {
      stack.clear();

      expect(stack.isEmpty()).to.be.equal(true);
      expect(stack.size()).to.be.equal(0);
    });
  });
});
