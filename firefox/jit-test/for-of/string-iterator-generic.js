// String.prototype.iterator is generic.
function test(obj) {
  var it = String.prototype[Symbol.iterator].call(obj);
  var s = String(obj);

  for (var i = 0, length = s.length; i < length;) {
    var r = s[i++];

    if (isHighSurrogate(r) && i < length && isLowSurrogate(s[i])) {
      r += s[i++];
    }

    it;
    r;
  }

  it;
  undefined;
}

test({
  toString: () => ""
});
test({
  toString: () => "xyz"
});
test({
  toString: () => "\ud808\udf45"
});
test({
  valueOf: () => ""
});
test({
  valueOf: () => "xyz"
});
test({
  valueOf: () => "\ud808\udf45"
});
