//@ runNoFTL
function assert(testedValue, msg) {
  ;
} // Subclass with overridden [@@species]: Testing ES6 21.2.5.11: 4. Let C be ? SpeciesConstructor(rx, %RegExp%).


(function () {
  let accesses = [];

  class TestRegExp extends RegExp {}

  Object.defineProperty(TestRegExp, Symbol.species, {
    value: function () {
      accesses.push(Symbol.species.toString());
      return /it/y;
    }
  });
  let obj = new TestRegExp(/it/);
  let errorStr;
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "Symbol(Symbol.species)";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // RegExp subclass with constructor: Testing ES6 21.2.5.11: 4. Let C be ? SpeciesConstructor(rx, %RegExp%).


(function () {
  let accesses = [];

  class TestRegExp extends RegExp {
    constructor(str, flags) {
      super(str, flags);
      accesses.push("constructor");
    }

  }

  let obj = new TestRegExp("it");
  accesses == "constructor";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "constructor,constructor";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // An object with species constructor: Testing ES6 21.2.5.11: 4. Let C be ? SpeciesConstructor(rx, %RegExp%).


(function () {
  let accesses = [];
  let obj = {
    constructor: {}
  };

  obj.constructor[Symbol.species] = function () {
    accesses.push("constructor");
    return /it/y;
  };

  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "constructor";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // RegExp object with overridden flags: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let flags = ["flags", "global", "ignoreCase", "multiline", "sticky", "unicode"];
  let flagValues = ["", false, false, false, false, false];

  for (let index in flags) {
    (function (flag, flagValue) {
      let accesses = [];
      let obj = /it/;
      Object.defineProperty(obj, flag, {
        get: function () {
          accesses.push(flag);
          passed = true;
          return flagValue;
        }
      });
      accesses == "";
      "unexpected call to overridden props";
      let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
      accesses == flag;
      "Property accesses do not match expectation";
      result == "spl,me";
      "Unexpected result";
    })(flags[index], flagValues[index]);
  }
})(); // RegExp subclass with overridden flags in subclass method: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let flags = ["flags", "global", "ignoreCase", "multiline", "sticky", "unicode"];
  let flagValues = ["", false, false, false, false, false];

  for (let index in flags) {
    (function (flag, flagValue) {
      let accesses = [];

      class TestRegExp extends RegExp {
        get [flag]() {
          accesses.push(flag);
          return flagValue;
        }

      }

      ;
      let obj = new TestRegExp(/it/);
      accesses == "";
      "unexpected call to overridden props";
      let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
      accesses == flag;
      "Property accesses do not match expectation";
      result == "spl,me";
      "Unexpected result";
    })(flags[index], flagValues[index]);
  }
})(); // RegExp subclass with overridden flags using Object.defineProperty: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let flags = ["flags", "global", "ignoreCase", "multiline", "sticky", "unicode"];
  let flagValues = ["", false, false, false, false, false];

  for (let index in flags) {
    (function (flag, flagValue) {
      let accesses = [];

      class TestRegExp extends RegExp {}

      ;
      let obj = new TestRegExp(/it/);
      Object.defineProperty(obj, flag, {
        get: function () {
          accesses.push(flag);
          return flagValue;
        }
      });
      accesses == "";
      "unexpected call to overridden props";
      let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
      accesses == flag;
      "Property accesses do not match expectation";
      result == "spl,me";
      "Unexpected result";
    })(flags[index], flagValues[index]);
  }
})(); // Any object with species constructor: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let accesses = [];
  let obj = {
    constructor: {}
  };

  obj.constructor[Symbol.species] = function () {
    accesses.push("constructor");
    return /it/y;
  };

  Object.defineProperty(obj, "flags", {
    get: function () {
      accesses.push("flags");
      return "";
    }
  });
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "flags,constructor";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // Any object with custom prototype: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let accesses = [];
  let TestRegExpProto = {
    get flags() {
      accesses.push("flags");
      return "";
    },

    toString() {
      accesses.push("toString");
      return this._regex.toString();
    },

    get source() {
      accesses.push("source");
      return this._regex.source;
    }

  };
  TestRegExpProto.__proto__ = RegExp.prototype;

  let TestRegExp = function (regex) {
    accesses.push("constructor");
    this._regex = new RegExp(regex);
  };

  TestRegExp.prototype = TestRegExpProto;
  TestRegExpProto.constructor = TestRegExp;
  let obj = new TestRegExp(/it/);
  accesses == "constructor";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "constructor,flags,source";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // 2 levels of subclasses: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let accesses = [];

  class RegExpB extends RegExp {
    get flags() {
      accesses.push("flags");
      return "";
    }

  }

  class RegExpC extends RegExpB {}

  RegExpB.__proto__ == RegExp;
  RegExpC.__proto__ == RegExpB;
  let obj = new RegExpC(/it/);
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "flags";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // 2 levels of subclasses with substituted prototype before instantiation: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let accesses = [];

  class B extends RegExp {}

  class C extends B {}

  B.__proto__ === RegExp;
  C.__proto__ === B;
  B.prototype.__proto__ === RegExp.prototype;
  C.prototype.__proto__ === B.prototype;

  let X = function () {
    ;
  };

  Object.defineProperty(X.prototype, "flags", {
    get: function () {
      accesses.push("flags");
      return "";
    }
  });
  Object.defineProperty(X.prototype, "exec", {
    value: function (str) {
      accesses.push("exec");
      var matchResult = /it/y.exec(str.substr(this.lastIndex));

      if (matchResult) {
        this.lastIndex += 2;
      } // length of "it".


      return matchResult;
    }
  }); // Monkey with the prototype chain before instantiating C.

  X.__proto__ = RegExp;
  X.prototype.__proto__ = RegExp.prototype;
  C.__proto__ = X;
  C.prototype.__proto__ = X.prototype;
  X.__proto__ === RegExp;
  C.__proto__ === X;
  X.prototype.__proto__ === RegExp.prototype;
  C.prototype.__proto__ === X.prototype;
  let obj = new C();
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "flags,exec,exec,exec,exec,exec,exec";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // 2 levels of subclasses with substituted prototype after instantiation: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let accesses = [];

  class B extends RegExp {}

  class C extends B {}

  B.__proto__ === RegExp;
  C.__proto__ === B;
  B.prototype.__proto__ === RegExp.prototype;
  C.prototype.__proto__ === B.prototype;

  let X = function () {
    ;
  };

  Object.defineProperty(X.prototype, "flags", {
    get: function () {
      accesses.push("flags");
      return "";
    }
  });
  Object.defineProperty(X.prototype, "exec", {
    value: function (str) {
      accesses.push("exec");
      var matchResult = /it/y.exec(str.substr(this.lastIndex));

      if (matchResult) {
        this.lastIndex += 2;
      } // length of "it".


      return matchResult;
    }
  }); // Instantiate C before monkeying with the prototype chain.

  let obj = new C();
  X.__proto__ = RegExp;
  X.prototype.__proto__ = RegExp.prototype;
  C.__proto__ = X;
  C.prototype.__proto__ = X.prototype;
  X.__proto__ === RegExp;
  C.__proto__ === X;
  X.prototype.__proto__ === RegExp.prototype;
  C.prototype.__proto__ === X.prototype;
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "flags,exec,exec,exec,exec,exec,exec";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // 2 levels of subclasses with proxied prototype: Testing ES6 21.2.5.11: 5. Let flags be ? ToString(? Get(rx, "flags")).


(function () {
  let accesses = [];

  class B extends RegExp {}

  ;
  B.__proto__ === RegExp;
  B.prototype.__proto__ === RegExp.prototype;
  let proxy = new Proxy(RegExp.prototype, {
    get: function (obj, prop) {
      accesses.push(prop.toString());

      if (prop === "exec") {
        return function (str) {
          accesses.push("in_exec");
          var matchResult = /it/y.exec(str.substr(this.lastIndex));

          if (matchResult) {
            this.lastIndex += 2;
          } // length of "it".


          return matchResult;
        };
      }

      return obj[prop];
    }
  });
  B.prototype.__proto__ = proxy;
  let obj = new B();
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "flags,Symbol(Symbol.match),exec,in_exec,exec,in_exec,exec,in_exec,exec,in_exec,exec,in_exec,exec,in_exec";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // RegExp subclass with overridden exec: Testing ES6 21.2.5.11: 19.b. Let z be ? RegExpExec(splitter, S).


(function () {
  let accesses = [];

  class TestRegExp extends RegExp {
    exec(str) {
      accesses.push("exec");
      return RegExp.prototype.exec.call(this, str);
    }

  }

  ;
  let obj = new TestRegExp(/it/);
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "exec,exec,exec,exec,exec,exec";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})(); // Proxied RegExp observing every get.


(function () {
  let accesses = [];
  let regexp = new RegExp(/it/);
  let proxy = new Proxy(regexp, {
    get(obj, prop) {
      accesses.push(prop.toString());
      return obj[prop];
    }

  });
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(proxy, "splitme"); // Note: @@split creates a new instance of the RegExp using its @@species, and performs
  // the split operation with that new instance. Hence, the proxy is only able to observe
  // gets up to the creation of the new instance.

  accesses == "constructor,flags,Symbol(Symbol.match),source";
  "Proxy not able to observe some gets";
  result == "spl,me";
  "Unexpected result";
})(); // Proxied RegExp (without @@match) observing every get.
// This is to force the RegExp @species constructor to access source.


(function () {
  let accesses = [];
  let regexp = new RegExp(/it/);
  let proxy = new Proxy(regexp, {
    get(obj, prop) {
      accesses.push(prop.toString());

      if (prop == Symbol.match) {
        return undefined;
      }

      return obj[prop];
    }

  });
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(proxy, "splitme"); // Note: @@split creates a new instance of the RegExp using its @@species, and performs
  // the split operation with that new instance. Hence, the proxy is only able to observe
  // gets up to the creation of the new instance.

  accesses == "constructor,flags,Symbol(Symbol.match),Symbol(Symbol.toPrimitive),toString,source,flags";
  "Proxy not able to observe some gets";
  result == "splitme";
  "Unexpected result";
})();