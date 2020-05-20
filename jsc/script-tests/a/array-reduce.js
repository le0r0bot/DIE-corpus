console.log("This test checks the behavior of the reduce() method on a number of objects.");

function toObject(array) {
  var o = {};

  for (var i in array) {
    o[i] = array[i];
  }

  o.length = array.length;
  o.reduce = Array.prototype.reduce;
  return o;
}

function toUnorderedObject(array) {
  var o = {};
  var props = [];

  for (var i in array) {
    props.push(i);
  }

  for (var i = props.length - 1; i >= 0; i--) {
    o[props[i]] = array[props[i]];
  }

  o.length = array.length;
  o.reduce = Array.prototype.reduce;
  return o;
}

[0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
[1, 2, 3].reduce(function (a, b) {
  return a + b;
});
[0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 4);
[1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 4);
toObject([0, 1, 2, 3]).reduce(function (a, b) {
  return a + b;
});
toObject([1, 2, 3]).reduce(function (a, b) {
  return a + b;
});
toObject([0, 1, 2, 3]).reduce(function (a, b) {
  return a + b;
}, 4);
toObject([1, 2, 3]).reduce(function (a, b) {
  return a + b;
}, 4);
toUnorderedObject([0, 1, 2, 3]).reduce(function (a, b) {
  return a + b;
});
toUnorderedObject([1, 2, 3]).reduce(function (a, b) {
  return a + b;
});
toUnorderedObject([0, 1, 2, 3]).reduce(function (a, b) {
  return a + b;
}, 4);
toUnorderedObject([1, 2, 3]).reduce(function (a, b) {
  return a + b;
}, 4);
sparseArray = [];
sparseArray[10] = 10;
sparseArray.reduce(function (a, b) {
  return a + b;
}, 0);
toObject(sparseArray).reduce(function (a, b) {
  return a + b;
}, 0);
var callCount = 0;
sparseArray.reduce(function (a, b) {
  callCount++;
});
callCount;
callCount = 0;
toObject(sparseArray).reduce(function (a, b) {
  callCount++;
});
callCount;
var callCount = 0;
sparseArray.reduce(function (a, b) {
  callCount++;
}, 0);
callCount;
callCount = 0;
toObject(sparseArray).reduce(function (a, b) {
  callCount++;
}, 0);
callCount;
callCount = 0;
[0, 1, 2, 3, 4].reduce(function (a, b) {
  callCount++;
}, 0);
callCount;
callCount = 0;
[0, 1, 2, 3, 4].reduce(function (a, b) {
  callCount++;
});
callCount;
callCount = 0;
[1, 2, 3, 4].reduce(function (a, b, i, thisObj) {
  thisObj.length--;
  callCount++;
  return a + b;
}, 0);
callCount;
callCount = 0;
[1, 2, 3, 4].reduce(function (a, b, i, thisObj) {
  thisObj.length++;
  callCount++;
  return a + b;
}, 0);
callCount;
callCount = 0;
toObject([1, 2, 3, 4]).reduce(function (a, b, i, thisObj) {
  thisObj.length--;
  callCount++;
  return a + b;
}, 0);
callCount;
callCount = 0;
toObject([1, 2, 3, 4]).reduce(function (a, b, i, thisObj) {
  thisObj.length++;
  callCount++;
  return a + b;
}, 0);
callCount;
[[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
  return a.concat(b);
}, []);
toObject([[0, 1], [2, 3], [4, 5]]).reduce(function (a, b) {
  return a.concat(b);
}, []);
toObject([0, 1, 2, 3, 4, 5]).reduce(function (a, b, i) {
  return a.concat([i, b]);
}, []);
toUnorderedObject([[0, 1], [2, 3], [4, 5]]).reduce(function (a, b) {
  return a.concat(b);
}, []);
toUnorderedObject([0, 1, 2, 3, 4, 5]).reduce(function (a, b, i) {
  return a.concat([i, b]);
}, []);
[0, 1, 2, 3, 4, 5].reduce(function (a, b, i) {
  return a.concat([i, b]);
}, []);
[2, 3].reduce(function () {
  'use strict';

  return this;
});
var negativeLengthObject = {
  length: -1,
  0: 1,
  1: 2
};
Array.prototype.reduce.call(negativeLengthObject, function (a, b) {
  return a + b;
}, 100);
