'use strict';

let chai = require('chai');
let should = chai.should();
let bar = require('../foobar').bar;

describe('Function Bar', () => {
  it('should return product', (done) => {
    bar((result) => {
      result.should.be.a('object');
      let keys = Object.keys(result);
      keys.should.have.lengthOf(2);
      result.value1.should.equal(123);
      result.value2.should.equal('abc');
      done();
    });
  });
});