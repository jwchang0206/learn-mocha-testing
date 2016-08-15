'use strict';

exports.foo = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }

  return a * b;
};

exports.bar = (callback) => {
  setTimeout(() => {
    callback({
      value1: 123,
      value2: 'abc'
    });
  }, 1000);
};