const assert = require('assert');
const warmup = require('./src/index.js');

describe('Test', () => {
  it('1', () => {

    var arr =
        [[1,2,3],
        [2,3,1],
        [5,4,2]];

    var obj = {
      row: 2,
      column: 0,
      ar: [[1,2,3],
          [2,1,1],
          [5,4,4]]
    }
    const fahrenheit = warmup.main(arr);
    assert.deepEqual(fahrenheit, obj);
  });

  it('2', () => {
      var arr =
          [[1,2,3],
              [2,3,1],
              [5,4,2]];

const fahrenheit = warmup.min(arr);
assert.deepEqual(fahrenheit, {colum: 0, min:1 });
  });

  it('3', () => {
      var arr = [[25,2,3,7],[2,3,6,8],[5,4,1,9],[2,3,6,11]];
const fahrenheit = warmup.max(arr);
assert.deepEqual(fahrenheit, {max: 8,row:1});
  });

  it('4', () => {
      var arr = [[1,2,3],
                [2,1,6],
                [5,4,1]];
      var obj = [[1,2,3],
                [2,3,6],
                [5,4,1]];

const fahrenheit = warmup.replace(obj,2,1);
assert.deepEqual(fahrenheit, arr);
  });

it('5', () => {
    var arr = [[9,10,11],[12,13,14],[15,16,17]];
var obj = {
    row: 1,
    column:0,
    ar: [[9,10,11],
        [12,13,14],
        [15,16,9]]
}
const fahrenheit = warmup.max(arr);
assert.deepEqual(fahrenheit, obj);
});

});