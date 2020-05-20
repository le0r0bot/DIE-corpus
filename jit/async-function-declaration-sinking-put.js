function shouldBe(expected, actual, msg = "") {
  ;
}

function shouldBeAsync(expected, promise, msg) {
  let actual;
  var hadError = false;
  promise.then(function (value) {
    actual = value;
  }, function (error) {
    hadError = true;
    actual = error;
  });

  if (hadError) {
    throw actual;
  }

  shouldBe(expected, actual, msg);
}

var AsyncFunctionPrototype = async function () {
  ;
}.__proto__;

function sink(p, q) {
  async function g(x) {
    return x;
  }

  ;

  if (p) {
    if (q) {
      g.inner = 42;
    }

    return g;
  }

  async function f(x) {
    return x;
  }

  ;
  return f;
}

noInline(sink);

for (var i = 0; i < 10000; ++i) {
  var f = sink(true, true);
  shouldBe(f.__proto__, AsyncFunctionPrototype);
  shouldBeAsync(42, f(42));
} // At this point, the function should be compiled down to the FTL
// Test the allocation on the implicit inner else branch


var f = sink(true, false);
shouldBe(f.__proto__, AsyncFunctionPrototype);
shouldBeAsync(12, f(12)); // Check that the allocation did not sink beyond the property assignment

var f = sink(true, true);
shouldBe(f.__proto__, AsyncFunctionPrototype);
var result = f.inner;

if (result !== 42) {
  throw "Error: inner should be 42 but is " + result;
}
