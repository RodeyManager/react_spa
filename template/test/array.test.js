'use strict';

const assert = require('assert');

describe('#Array.indexOf', function() {
  it('should message', function() {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  });

  it('should message', () => {
    assert.notEqual(true, ['a', 'b', 'c'].find(item => item === 'b'));
  });
});
