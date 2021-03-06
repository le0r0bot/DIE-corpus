// Giving an Array an own .iterator property affects for-of.
var a = [];

a[Symbol.iterator] = function* () {
  yield 'o';
  yield 'k';
};

var s = '';

for (var v of a) {
  s += v;
}

s;
'ok';
a[Symbol.iterator] = undefined;

(function () {
  for (var v of a) {
    ;
  }
})();

TypeError;
