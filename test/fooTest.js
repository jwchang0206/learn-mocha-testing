'use strict';

let chai = require('chai');
let should = chai.should();
let foo = require('../foobar').foo;

describe('Function Foo', () => {
  describe('with two number params', () => {
    it('should return product', () => {
      let result = foo(3, 4);
      result.should.be.a('number');
      result.should.equal(12);
    });
  });

  describe('with non-number params', () => {
    it('should return false', () => {
      let result = foo(3, null);
      result.should.be.false;
    });
  });
});