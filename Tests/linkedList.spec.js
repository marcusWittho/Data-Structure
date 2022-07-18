require('mocha');
const { expect } = require('chai');
const LinkedList = require('../LinkedList/linkedList');
const { defaultEquals } = require('../utils');

describe('Testing the LinkedList structure', () => {
  let list, min, max;

  beforeEach(() => {
    list = new LinkedList(defaultEquals);
    min = 1;
    max = 4;

    for (let i = min; i <= max; i += 1) {
      list.addElement(i);
    }
  });

  describe('When isEmpty function is used', () => {
    it('Should be return false', () => {
      expect(list.isEmpty()).to.be.equal(false);
    });
  });

  describe('When size function is used', () => {
    it('Should be return 4', () => {
      expect(list.size()).to.be.equal(4);
    });
  });

  describe('When addElement function is used', () => {
    it('Should be return 5', () => {
      list.addElement(5);
      expect(list.size()).to.be.equal(5);
    });
  });

  describe('When getHead function is used', () => {
    it('Should be return 1 then 2', () => {
      expect(list.getHead().element).to.be.equal(1);
      expect(list.getHead().next.element).to.be.equal(2);
    });
  });

  describe('When removeAt function is used', () => {
    it('Should be return 3', () => {
      list.removeAt(1);
      expect(list.size()).to.be.equal(3);
    });
  });

  describe('When getElementAt function is used', () => {
    it('Should be return 2', () => {
      expect(list.getElementAt(1).element).to.be.equal(2);
    });
  });

  describe('When insert function is used', () => {
    it('Should be return 5', () => {
      list.insert(5, 1);
      expect(list.getElementAt(1).element).to.be.equal(5);
    });
  });

  describe('When indexOf function is used', () => {
    it('Should be return 1', () => {
      expect(list.indexOf(2)).to.be.equal(1);
    });
  });

  describe('When remove function is used', () => {
    it('Should be return 3', () => {
      list.remove(2);
      expect(list.getElementAt(1).element).to.be.equal(3);
    });
  });

  describe('When toString function is used', () => {
    it("Should be return '1, 2, 3, 4'", () => {
      expect(list.toString()).to.be.equal('1, 2, 3, 4');
    });
  });
});
