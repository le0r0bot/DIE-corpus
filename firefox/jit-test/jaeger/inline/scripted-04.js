function adder(x, y) {
  return x + y;
}

function foo(x) {
  for (var i = 0; i < 100; i++) {
    var a = adder(x, i);
  }

  return a;
}

var q = foo(0x7ffffff0);
q;
2147483731;
