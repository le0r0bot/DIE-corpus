//@ runNoFTL
function assert(testedValue, msg) {
  ;
} // String prototype with overridden @@search: test with string literal.


(function () {
  let accesses = [];
  var obj = "";
  Object.defineProperty(String.prototype, Symbol.search, {
    value: function (str) {
      accesses.push("Symbol(Symbol.search)");
      return /rch/[Symbol.search](str);
    },
    writable: true,
    configurable: true
  });
  accesses == "";
  "unexpected call to overridden props";
  let result = "searchme".search(obj);
  accesses == "Symbol(Symbol.search)";
  "Property accesses do not match expectation";
  result === 3;
  "Unexpected result";
  Object.defineProperty(String.prototype, Symbol.search, {
    value: undefined,
    writable: false,
    configurable: true
  });
})();
