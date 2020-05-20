//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// The tests in this file are GENERATED. Don't add tests to this file manually; instead, modify
// ArrayCheckHoist_Generate.js and regenerate this file, or use a different file for the new test.
var bailout = true;

function test0() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test0_run(o, a, a2));

  function test0_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[-1].p;
    }

    return sum;
  }
}

print("test0: " + test0());

function test1() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test1_run(o, a, a2));

  function test1_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1].p;
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test1: " + test1());

function test2() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test2_run(o, a, a2));

  function test2_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0].p;
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test2: " + test2());

function test3() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test3_run(o, a, a2));

  function test3_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test3_access(o, a, i3);
          }
        }
      }

      sum += test3_access(o, a, i0);
    }

    function test3_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test3: " + test3());

function test4() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test4_run(o, a, a2));

  function test4_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[0].p;
        }

        sum += a[0].p;
      }
    }

    return sum;
  }
}

print("test4: " + test4());

function test5() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test5_run(o, a, a2));

  function test5_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3].p;
          }
        }
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test5: " + test5());

function test6() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test6_run(o, a, a2));

  function test6_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test6_access(o, a, i0);
    }

    function test6_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test6: " + test6());

function test7() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test7_run(o, a, a2));

  function test7_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test7_access(o, a, i1);
      }

      a = a2;
      sum += test7_access(o, a, i0);
    }

    function test7_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test7: " + test7());

function test8() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test8_run(o, a, a2));

  function test8_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[i1].p;
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test8: " + test8());

function test9() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test9_run(o, a, a2));

  function test9_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1].p;
      }

      a = a2;
      sum += a[i0].p;
    }

    return sum;
  }
}

print("test9: " + test9());

function test10() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test10_run(o, a, a2));

  function test10_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[-1].p;
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test10: " + test10());

function test11() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test11_run(o, a, a2));

  function test11_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1].p;
          }
        }
      }

      a = a2;
      sum += a[-1].p;
    }

    return sum;
  }
}

print("test11: " + test11());

function test12() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test12_run(o, a, a2));

  function test12_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test12_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test12_access(o, a, i0);
    }

    function test12_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test12: " + test12());

function test13() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test13_run(o, a, a2));

  function test13_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test13_access(o, a, i3);
          }
        }
      }

      sum += test13_access(o, a, i0);
    }

    function test13_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test13: " + test13());

function test14() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test14_run(o, a, a2));

  function test14_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test14_access(o, a, i2);
        }

        sum += test14_access(o, a, i1);
      }

      a = a2;
    }

    function test14_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test14: " + test14());

function test15() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test15_run(o, a, a2));

  function test15_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test15_access(o, a, i2);
        }

        a = a2;
        sum += test15_access(o, a, i1);
      }
    }

    function test15_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test15: " + test15());

function test16() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test16_run(o, a, a2));

  function test16_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[-1].p;
        }

        sum += a[-1].p;
      }
    }

    return sum;
  }
}

print("test16: " + test16());

function test17() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test17_run(o, a, a2));

  function test17_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1].p;
          }
        }
      }

      a = a2;
      sum += a[-1].p;
    }

    return sum;
  }
}

print("test17: " + test17());

function test18() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test18_run(o, a, a2));

  function test18_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0].p;
          }
        }

        a = a2;
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test18: " + test18());

function test19() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test19_run(o, a, a2));

  function test19_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[0].p;
          }
        }
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test19: " + test19());

function test20() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test20_run(o, a, a2));

  function test20_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test20_access(o, a, i0);
    }

    function test20_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test20: " + test20());

function test21() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test21_run(o, a, a2));

  function test21_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test21_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test21_access(o, a, i0);
    }

    function test21_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test21: " + test21());

function test22() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test22_run(o, a, a2));

  function test22_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test22_access(o, a, i1);
      }

      sum += test22_access(o, a, i0);
    }

    function test22_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test22: " + test22());

function test23() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test23_run(o, a, a2));

  function test23_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test23_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test23_access(o, a, i0);
    }

    function test23_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test23: " + test23());

function test24() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test24_run(o, a, a2));

  function test24_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += a[0].p;
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test24: " + test24());

function test25() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test25_run(o, a, a2));

  function test25_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0].p;
          }
        }
      }

      changeToEs5Array_object(a);
      sum += a[0].p;
    }

    return sum;
  }
}

print("test25: " + test25());

function test26() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test26_run(o, a, a2));

  function test26_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test26: " + test26());

function test27() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test27_run(o, a, a2));

  function test27_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += a[i3].p;
          }
        }
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test27: " + test27());

function test28() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test28_run(o, a, a2));

  function test28_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test28_access(o, a, i2);
        }

        sum += test28_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test28_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test28: " + test28());

function test29() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test29_run(o, a, a2));

  function test29_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test29_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test29_access(o, a, i1);
      }
    }

    function test29_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test29: " + test29());

function test30() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test30_run(o, a, a2));

  function test30_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test30_access(o, a, i2);
        }

        sum += test30_access(o, a, i1);
      }
    }

    function test30_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test30: " + test30());

function test31() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test31_run(o, a, a2));

  function test31_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test31_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test31_access(o, a, i0);
    }

    function test31_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test31: " + test31());

function test32() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test32_run(o, a, a2));

  function test32_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test32: " + test32());

function test33() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test33_run(o, a, a2));

  function test33_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += a[i3].p;
          }
        }
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test33: " + test33());

function test34() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test34_run(o, a, a2));

  function test34_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test34: " + test34());

function test35() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test35_run(o, a, a2));

  function test35_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1].p;
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test35: " + test35());

function test36() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test36_run(o, a, a2));

  function test36_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test36_access(o, a, i1);
      }

      sum += test36_access(o, a, i0);
    }

    function test36_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test36: " + test36());

function test37() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test37_run(o, a, a2));

  function test37_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test37_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test37_access(o, a, i0);
    }

    function test37_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test37: " + test37());

function test38() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test38_run(o, a, a2));

  function test38_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test38_access(o, a, i1);
      }

      sum += test38_access(o, a, i0);
    }

    function test38_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test38: " + test38());

function test39() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test39_run(o, a, a2));

  function test39_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test39_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test39_access(o, a, i0);
    }

    function test39_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test39: " + test39());

function test40() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test40_run(o, a, a2));

  function test40_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1].p;
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test40: " + test40());

function test41() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test41_run(o, a, a2));

  function test41_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += a[-1].p;
          }
        }
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test41: " + test41());

function test42() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test42_run(o, a, a2));

  function test42_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[0].p;
        }

        sum += a[0].p;
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test42: " + test42());

function test43() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test43_run(o, a, a2));

  function test43_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[0].p;
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += a[0].p;
      }
    }

    return sum;
  }
}

print("test43: " + test43());

function test44() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test44_run(o, a, a2));

  function test44_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test44_access(o, a, i2);
        }

        sum += test44_access(o, a, i1);
      }
    }

    function test44_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test44: " + test44());

function test45() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test45_run(o, a, a2));

  function test45_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test45_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test45_access(o, a, i0);
    }

    function test45_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test45: " + test45());

function test46() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test46_run(o, a, a2));

  function test46_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test46_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test46_access(o, a, i0);
    }

    function test46_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test46: " + test46());

function test47() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test47_run(o, a, a2));

  function test47_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test47_access(o, a, i3);
          }
        }
      }

      sum += test47_access(o, a, i0);
    }

    function test47_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test47: " + test47());

function test48() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test48_run(o, a, a2));

  function test48_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test48: " + test48());

function test49() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test49_run(o, a, a2));

  function test49_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test49: " + test49());

function test50() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test50_run(o, a, a2));

  function test50_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test50: " + test50());

function test51() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test51_run(o, a, a2));

  function test51_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test51_access(o, a, i3);
          }
        }
      }

      sum += test51_access(o, a, i0);
    }

    function test51_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test51: " + test51());

function test52() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test52_run(o, a, a2));

  function test52_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[i2].p = -a[i2].p - 1, a[i2].p);
        }

        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }
    }

    return sum;
  }
}

print("test52: " + test52());

function test53() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test53_run(o, a, a2));

  function test53_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test53: " + test53());

function test54() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test54_run(o, a, a2));

  function test54_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test54_access(o, a, i0);
    }

    function test54_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test54: " + test54());

function test55() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test55_run(o, a, a2));

  function test55_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test55_access(o, a, i1);
      }

      a = a2;
      sum += test55_access(o, a, i0);
    }

    function test55_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test55: " + test55());

function test56() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test56_run(o, a, a2));

  function test56_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test56: " + test56());

function test57() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test57_run(o, a, a2));

  function test57_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
      }

      a = a2;
      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test57: " + test57());

function test58() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test58_run(o, a, a2));

  function test58_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test58: " + test58());

function test59() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test59_run(o, a, a2));

  function test59_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0].p = -a[0].p - 1, a[0].p);
          }
        }
      }

      a = a2;
      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test59: " + test59());

function test60() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test60_run(o, a, a2));

  function test60_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test60_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test60_access(o, a, i0);
    }

    function test60_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test60: " + test60());

function test61() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test61_run(o, a, a2));

  function test61_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test61_access(o, a, i3);
          }
        }
      }

      sum += test61_access(o, a, i0);
    }

    function test61_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test61: " + test61());

function test62() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test62_run(o, a, a2));

  function test62_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test62_access(o, a, i2);
        }

        sum += test62_access(o, a, i1);
      }

      a = a2;
    }

    function test62_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test62: " + test62());

function test63() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test63_run(o, a, a2));

  function test63_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test63_access(o, a, i2);
        }

        a = a2;
        sum += test63_access(o, a, i1);
      }
    }

    function test63_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test63: " + test63());

function test64() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test64_run(o, a, a2));

  function test64_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[0].p = -a[0].p - 1, a[0].p);
        }

        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }
    }

    return sum;
  }
}

print("test64: " + test64());

function test65() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test65_run(o, a, a2));

  function test65_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0].p = -a[0].p - 1, a[0].p);
          }
        }
      }

      a = a2;
      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test65: " + test65());

function test66() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test66_run(o, a, a2));

  function test66_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3].p = -a[i3].p - 1, a[i3].p);
          }
        }

        a = a2;
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test66: " + test66());

function test67() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test67_run(o, a, a2));

  function test67_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[i3].p = -a[i3].p - 1, a[i3].p);
          }
        }
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test67: " + test67());

function test68() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test68_run(o, a, a2));

  function test68_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test68_access(o, a, i0);
    }

    function test68_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test68: " + test68());

function test69() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test69_run(o, a, a2));

  function test69_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test69_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test69_access(o, a, i0);
    }

    function test69_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test69: " + test69());

function test70() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test70_run(o, a, a2));

  function test70_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test70_access(o, a, i1);
      }

      sum += test70_access(o, a, i0);
    }

    function test70_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test70: " + test70());

function test71() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test71_run(o, a, a2));

  function test71_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test71_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test71_access(o, a, i0);
    }

    function test71_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test71: " + test71());

function test72() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test72_run(o, a, a2));

  function test72_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test72: " + test72());

function test73() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test73_run(o, a, a2));

  function test73_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3].p = -a[i3].p - 1, a[i3].p);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test73: " + test73());

function test74() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test74_run(o, a, a2));

  function test74_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test74: " + test74());

function test75() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test75_run(o, a, a2));

  function test75_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test75: " + test75());

function test76() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test76_run(o, a, a2));

  function test76_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test76_access(o, a, i2);
        }

        sum += test76_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test76_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test76: " + test76());

function test77() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test77_run(o, a, a2));

  function test77_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test77_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test77_access(o, a, i1);
      }
    }

    function test77_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test77: " + test77());

function test78() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test78_run(o, a, a2));

  function test78_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test78_access(o, a, i2);
        }

        sum += test78_access(o, a, i1);
      }
    }

    function test78_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test78: " + test78());

function test79() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test79_run(o, a, a2));

  function test79_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test79_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test79_access(o, a, i0);
    }

    function test79_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test79: " + test79());

function test80() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test80_run(o, a, a2));

  function test80_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test80: " + test80());

function test81() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test81_run(o, a, a2));

  function test81_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test81: " + test81());

function test82() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test82_run(o, a, a2));

  function test82_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test82: " + test82());

function test83() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test83_run(o, a, a2));

  function test83_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test83: " + test83());

function test84() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test84_run(o, a, a2));

  function test84_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test84_access(o, a, i1);
      }

      sum += test84_access(o, a, i0);
    }

    function test84_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test84: " + test84());

function test85() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test85_run(o, a, a2));

  function test85_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test85_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test85_access(o, a, i0);
    }

    function test85_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test85: " + test85());

function test86() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test86_run(o, a, a2));

  function test86_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test86_access(o, a, i1);
      }

      sum += test86_access(o, a, i0);
    }

    function test86_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test86: " + test86());

function test87() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test87_run(o, a, a2));

  function test87_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test87_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test87_access(o, a, i0);
    }

    function test87_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test87: " + test87());

function test88() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test88_run(o, a, a2));

  function test88_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0].p = -a[0].p - 1, a[0].p);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test88: " + test88());

function test89() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test89_run(o, a, a2));

  function test89_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += (a[0].p = -a[0].p - 1, a[0].p);
          }
        }
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test89: " + test89());

function test90() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test90_run(o, a, a2));

  function test90_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[i2].p = -a[i2].p - 1, a[i2].p);
        }

        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test90: " + test90());

function test91() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test91_run(o, a, a2));

  function test91_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[i2].p = -a[i2].p - 1, a[i2].p);
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }
    }

    return sum;
  }
}

print("test91: " + test91());

function test92() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test92_run(o, a, a2));

  function test92_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test92_access(o, a, i2);
        }

        sum += test92_access(o, a, i1);
      }
    }

    function test92_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test92: " + test92());

function test93() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test93_run(o, a, a2));

  function test93_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test93_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test93_access(o, a, i0);
    }

    function test93_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test93: " + test93());

function test94() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test94_run(o, a, a2));

  function test94_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test94_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test94_access(o, a, i0);
    }

    function test94_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test94: " + test94());

function test95() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test95_run(o, a, a2));

  function test95_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test95_access(o, a, i3);
          }
        }
      }

      sum += test95_access(o, a, i0);
    }

    function test95_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test95: " + test95());

function test96() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test96_run(o, a, a2));

  function test96_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test96: " + test96());

function test97() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test97_run(o, a, a2));

  function test97_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1].p;
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test97: " + test97());

function test98() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test98_run(o, a, a2));

  function test98_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1].p;
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test98: " + test98());

function test99() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test99_run(o, a, a2));

  function test99_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test99_access(o, a, i3);
          }
        }
      }

      sum += test99_access(o, a, i0);
    }

    function test99_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test99: " + test99());

function test100() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test100_run(o, a, a2));

  function test100_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[-1].p;
        }

        sum += o.a[-1].p;
      }
    }

    return sum;
  }
}

print("test100: " + test100());

function test101() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test101_run(o, a, a2));

  function test101_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0].p;
          }
        }
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test101: " + test101());

function test102() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test102_run(o, a, a2));

  function test102_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test102_access(o, a, i0);
    }

    function test102_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test102: " + test102());

function test103() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test103_run(o, a, a2));

  function test103_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test103_access(o, a, i1);
      }

      a = a2;
      sum += test103_access(o, a, i0);
    }

    function test103_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test103: " + test103());

function test104() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test104_run(o, a, a2));

  function test104_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[0].p;
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test104: " + test104());

function test105() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test105_run(o, a, a2));

  function test105_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0].p;
      }

      a = a2;
      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test105: " + test105());

function test106() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test106_run(o, a, a2));

  function test106_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[i1].p;
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test106: " + test106());

function test107() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test107_run(o, a, a2));

  function test107_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3].p;
          }
        }
      }

      a = a2;
      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test107: " + test107());

function test108() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test108_run(o, a, a2));

  function test108_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test108_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test108_access(o, a, i0);
    }

    function test108_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test108: " + test108());

function test109() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test109_run(o, a, a2));

  function test109_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test109_access(o, a, i3);
          }
        }
      }

      sum += test109_access(o, a, i0);
    }

    function test109_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test109: " + test109());

function test110() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test110_run(o, a, a2));

  function test110_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test110_access(o, a, i2);
        }

        sum += test110_access(o, a, i1);
      }

      a = a2;
    }

    function test110_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test110: " + test110());

function test111() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test111_run(o, a, a2));

  function test111_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test111_access(o, a, i2);
        }

        a = a2;
        sum += test111_access(o, a, i1);
      }
    }

    function test111_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test111: " + test111());

function test112() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test112_run(o, a, a2));

  function test112_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[i2].p;
        }

        sum += o.a[i1].p;
      }
    }

    return sum;
  }
}

print("test112: " + test112());

function test113() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test113_run(o, a, a2));

  function test113_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3].p;
          }
        }
      }

      a = a2;
      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test113: " + test113());

function test114() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test114_run(o, a, a2));

  function test114_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1].p;
          }
        }

        a = a2;
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test114: " + test114());

function test115() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test115_run(o, a, a2));

  function test115_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[-1].p;
          }
        }
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test115: " + test115());

function test116() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test116_run(o, a, a2));

  function test116_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test116_access(o, a, i0);
    }

    function test116_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test116: " + test116());

function test117() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test117_run(o, a, a2));

  function test117_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test117_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test117_access(o, a, i0);
    }

    function test117_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test117: " + test117());

function test118() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test118_run(o, a, a2));

  function test118_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test118_access(o, a, i1);
      }

      sum += test118_access(o, a, i0);
    }

    function test118_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test118: " + test118());

function test119() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test119_run(o, a, a2));

  function test119_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test119_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test119_access(o, a, i0);
    }

    function test119_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test119: " + test119());

function test120() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test120_run(o, a, a2));

  function test120_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += o.a[-1].p;
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test120: " + test120());

function test121() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test121_run(o, a, a2));

  function test121_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1].p;
          }
        }
      }

      changeToEs5Array_object(a);
      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test121: " + test121());

function test122() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test122_run(o, a, a2));

  function test122_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test122: " + test122());

function test123() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test123_run(o, a, a2));

  function test123_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += o.a[0].p;
          }
        }
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test123: " + test123());

function test124() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test124_run(o, a, a2));

  function test124_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test124_access(o, a, i2);
        }

        sum += test124_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test124_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test124: " + test124());

function test125() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test125_run(o, a, a2));

  function test125_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test125_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test125_access(o, a, i1);
      }
    }

    function test125_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test125: " + test125());

function test126() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test126_run(o, a, a2));

  function test126_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test126_access(o, a, i2);
        }

        sum += test126_access(o, a, i1);
      }
    }

    function test126_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test126: " + test126());

function test127() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test127_run(o, a, a2));

  function test127_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test127_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test127_access(o, a, i0);
    }

    function test127_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test127: " + test127());

function test128() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test128_run(o, a, a2));

  function test128_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test128: " + test128());

function test129() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test129_run(o, a, a2));

  function test129_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += o.a[0].p;
          }
        }
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test129: " + test129());

function test130() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test130_run(o, a, a2));

  function test130_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test130: " + test130());

function test131() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test131_run(o, a, a2));

  function test131_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1].p;
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test131: " + test131());

function test132() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test132_run(o, a, a2));

  function test132_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test132_access(o, a, i1);
      }

      sum += test132_access(o, a, i0);
    }

    function test132_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test132: " + test132());

function test133() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test133_run(o, a, a2));

  function test133_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test133_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test133_access(o, a, i0);
    }

    function test133_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test133: " + test133());

function test134() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test134_run(o, a, a2));

  function test134_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test134_access(o, a, i1);
      }

      sum += test134_access(o, a, i0);
    }

    function test134_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test134: " + test134());

function test135() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test135_run(o, a, a2));

  function test135_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test135_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test135_access(o, a, i0);
    }

    function test135_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test135: " + test135());

function test136() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test136_run(o, a, a2));

  function test136_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3].p;
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test136: " + test136());

function test137() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test137_run(o, a, a2));

  function test137_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += o.a[i3].p;
          }
        }
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test137: " + test137());

function test138() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test138_run(o, a, a2));

  function test138_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[-1].p;
        }

        sum += o.a[-1].p;
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test138: " + test138());

function test139() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test139_run(o, a, a2));

  function test139_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[-1].p;
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += o.a[-1].p;
      }
    }

    return sum;
  }
}

print("test139: " + test139());

function test140() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test140_run(o, a, a2));

  function test140_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test140_access(o, a, i2);
        }

        sum += test140_access(o, a, i1);
      }
    }

    function test140_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test140: " + test140());

function test141() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test141_run(o, a, a2));

  function test141_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test141_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test141_access(o, a, i0);
    }

    function test141_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test141: " + test141());

function test142() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test142_run(o, a, a2));

  function test142_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test142_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test142_access(o, a, i0);
    }

    function test142_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test142: " + test142());

function test143() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test143_run(o, a, a2));

  function test143_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test143_access(o, a, i3);
          }
        }
      }

      sum += test143_access(o, a, i0);
    }

    function test143_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test143: " + test143());

function test144() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test144_run(o, a, a2));

  function test144_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test144: " + test144());

function test145() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test145_run(o, a, a2));

  function test145_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test145: " + test145());

function test146() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test146_run(o, a, a2));

  function test146_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test146: " + test146());

function test147() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test147_run(o, a, a2));

  function test147_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test147_access(o, a, i3);
          }
        }
      }

      sum += test147_access(o, a, i0);
    }

    function test147_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test147: " + test147());

function test148() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test148_run(o, a, a2));

  function test148_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
        }

        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }
    }

    return sum;
  }
}

print("test148: " + test148());

function test149() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test149_run(o, a, a2));

  function test149_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test149: " + test149());

function test150() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test150_run(o, a, a2));

  function test150_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test150_access(o, a, i0);
    }

    function test150_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test150: " + test150());

function test151() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test151_run(o, a, a2));

  function test151_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test151_access(o, a, i1);
      }

      a = a2;
      sum += test151_access(o, a, i0);
    }

    function test151_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test151: " + test151());

function test152() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test152_run(o, a, a2));

  function test152_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[i1].p = -o.a[i1].p - 1, o.a[i1].p);
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test152: " + test152());

function test153() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test153_run(o, a, a2));

  function test153_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1].p = -o.a[i1].p - 1, o.a[i1].p);
      }

      a = a2;
      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test153: " + test153());

function test154() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test154_run(o, a, a2));

  function test154_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test154: " + test154());

function test155() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test155_run(o, a, a2));

  function test155_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
          }
        }
      }

      a = a2;
      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test155: " + test155());

function test156() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test156_run(o, a, a2));

  function test156_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test156_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test156_access(o, a, i0);
    }

    function test156_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test156: " + test156());

function test157() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test157_run(o, a, a2));

  function test157_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test157_access(o, a, i3);
          }
        }
      }

      sum += test157_access(o, a, i0);
    }

    function test157_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test157: " + test157());

function test158() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test158_run(o, a, a2));

  function test158_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test158_access(o, a, i2);
        }

        sum += test158_access(o, a, i1);
      }

      a = a2;
    }

    function test158_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test158: " + test158());

function test159() {
  "use strict";

  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test159_run(o, a, a2));

  function test159_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test159_access(o, a, i2);
        }

        a = a2;
        sum += test159_access(o, a, i1);
      }
    }

    function test159_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test159: " + test159());

function test160() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test160_run(o, a, a2));

  function test160_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
        }

        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }
    }

    return sum;
  }
}

print("test160: " + test160());

function test161() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test161_run(o, a, a2));

  function test161_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
          }
        }
      }

      a = a2;
      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test161: " + test161());

function test162() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test162_run(o, a, a2));

  function test162_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
          }
        }

        a = a2;
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test162: " + test162());

function test163() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test163_run(o, a, a2));

  function test163_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
          }
        }
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test163: " + test163());

function test164() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test164_run(o, a, a2));

  function test164_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test164_access(o, a, i0);
    }

    function test164_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test164: " + test164());

function test165() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test165_run(o, a, a2));

  function test165_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test165_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test165_access(o, a, i0);
    }

    function test165_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test165: " + test165());

function test166() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test166_run(o, a, a2));

  function test166_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test166_access(o, a, i1);
      }

      sum += test166_access(o, a, i0);
    }

    function test166_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test166: " + test166());

function test167() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test167_run(o, a, a2));

  function test167_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test167_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test167_access(o, a, i0);
    }

    function test167_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test167: " + test167());

function test168() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test168_run(o, a, a2));

  function test168_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test168: " + test168());

function test169() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test169_run(o, a, a2));

  function test169_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test169: " + test169());

function test170() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test170_run(o, a, a2));

  function test170_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test170: " + test170());

function test171() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test171_run(o, a, a2));

  function test171_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test171: " + test171());

function test172() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test172_run(o, a, a2));

  function test172_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test172_access(o, a, i2);
        }

        sum += test172_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test172_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test172: " + test172());

function test173() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test173_run(o, a, a2));

  function test173_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test173_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test173_access(o, a, i1);
      }
    }

    function test173_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test173: " + test173());

function test174() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test174_run(o, a, a2));

  function test174_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test174_access(o, a, i2);
        }

        sum += test174_access(o, a, i1);
      }
    }

    function test174_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test174: " + test174());

function test175() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test175_run(o, a, a2));

  function test175_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test175_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test175_access(o, a, i0);
    }

    function test175_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test175: " + test175());

function test176() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test176_run(o, a, a2));

  function test176_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test176: " + test176());

function test177() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test177_run(o, a, a2));

  function test177_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test177: " + test177());

function test178() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test178_run(o, a, a2));

  function test178_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test178: " + test178());

function test179() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test179_run(o, a, a2));

  function test179_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test179: " + test179());

function test180() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test180_run(o, a, a2));

  function test180_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test180_access(o, a, i1);
      }

      sum += test180_access(o, a, i0);
    }

    function test180_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test180: " + test180());

function test181() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test181_run(o, a, a2));

  function test181_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test181_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test181_access(o, a, i0);
    }

    function test181_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test181: " + test181());

function test182() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test182_run(o, a, a2));

  function test182_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test182_access(o, a, i1);
      }

      sum += test182_access(o, a, i0);
    }

    function test182_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test182: " + test182());

function test183() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test183_run(o, a, a2));

  function test183_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test183_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test183_access(o, a, i0);
    }

    function test183_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test183: " + test183());

function test184() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test184_run(o, a, a2));

  function test184_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test184: " + test184());

function test185() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test185_run(o, a, a2));

  function test185_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
          }
        }
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test185: " + test185());

function test186() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test186_run(o, a, a2));

  function test186_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
        }

        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test186: " + test186());

function test187() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test187_run(o, a, a2));

  function test187_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }
    }

    return sum;
  }
}

print("test187: " + test187());

function test188() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test188_run(o, a, a2));

  function test188_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test188_access(o, a, i2);
        }

        sum += test188_access(o, a, i1);
      }
    }

    function test188_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test188: " + test188());

function test189() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test189_run(o, a, a2));

  function test189_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test189_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test189_access(o, a, i0);
    }

    function test189_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test189: " + test189());

function test190() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test190_run(o, a, a2));

  function test190_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test190_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test190_access(o, a, i0);
    }

    function test190_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test190: " + test190());

function test191() {
  var o = {
    a: {
      "0": {
        p: 1
      },
      "1": {
        p: 2
      },
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: {
            p: -this.a[0].p - 1
          }
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test191_run(o, a, a2));

  function test191_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test191_access(o, a, i3);
          }
        }
      }

      sum += test191_access(o, a, i0);
    }

    function test191_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test191: " + test191());

function test192() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test192_run(o, a, a2));

  function test192_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[0];
    }

    return sum;
  }
}

print("test192: " + test192());

function test193() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test193_run(o, a, a2));

  function test193_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test193: " + test193());

function test194() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test194_run(o, a, a2));

  function test194_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test194: " + test194());

function test195() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test195_run(o, a, a2));

  function test195_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test195_access(o, a, i3);
          }
        }
      }

      sum += test195_access(o, a, i0);
    }

    function test195_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test195: " + test195());

function test196() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test196_run(o, a, a2));

  function test196_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[i2];
        }

        sum += a[i1];
      }
    }

    return sum;
  }
}

print("test196: " + test196());

function test197() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test197_run(o, a, a2));

  function test197_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test197: " + test197());

function test198() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test198_run(o, a, a2));

  function test198_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test198_access(o, a, i0);
    }

    function test198_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test198: " + test198());

function test199() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test199_run(o, a, a2));

  function test199_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test199_access(o, a, i1);
      }

      a = a2;
      sum += test199_access(o, a, i0);
    }

    function test199_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test199: " + test199());

function test200() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test200_run(o, a, a2));

  function test200_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test200: " + test200());

function test201() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test201_run(o, a, a2));

  function test201_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1];
      }

      a = a2;
      sum += a[-1];
    }

    return sum;
  }
}

print("test201: " + test201());

function test202() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test202_run(o, a, a2));

  function test202_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test202: " + test202());

function test203() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test203_run(o, a, a2));

  function test203_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      a = a2;
      sum += a[0];
    }

    return sum;
  }
}

print("test203: " + test203());

function test204() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test204_run(o, a, a2));

  function test204_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test204_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test204_access(o, a, i0);
    }

    function test204_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test204: " + test204());

function test205() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test205_run(o, a, a2));

  function test205_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test205_access(o, a, i3);
          }
        }
      }

      sum += test205_access(o, a, i0);
    }

    function test205_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test205: " + test205());

function test206() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test206_run(o, a, a2));

  function test206_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test206_access(o, a, i2);
        }

        sum += test206_access(o, a, i1);
      }

      a = a2;
    }

    function test206_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test206: " + test206());

function test207() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test207_run(o, a, a2));

  function test207_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test207_access(o, a, i2);
        }

        a = a2;
        sum += test207_access(o, a, i1);
      }
    }

    function test207_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test207: " + test207());

function test208() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test208_run(o, a, a2));

  function test208_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[0];
        }

        sum += a[0];
      }
    }

    return sum;
  }
}

print("test208: " + test208());

function test209() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test209_run(o, a, a2));

  function test209_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      a = a2;
      sum += a[0];
    }

    return sum;
  }
}

print("test209: " + test209());

function test210() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test210_run(o, a, a2));

  function test210_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }

        a = a2;
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test210: " + test210());

function test211() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test211_run(o, a, a2));

  function test211_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[i3];
          }
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test211: " + test211());

function test212() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test212_run(o, a, a2));

  function test212_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test212_access(o, a, i0);
    }

    function test212_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test212: " + test212());

function test213() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test213_run(o, a, a2));

  function test213_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test213_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test213_access(o, a, i0);
    }

    function test213_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test213: " + test213());

function test214() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test214_run(o, a, a2));

  function test214_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test214_access(o, a, i1);
      }

      sum += test214_access(o, a, i0);
    }

    function test214_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test214: " + test214());

function test215() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test215_run(o, a, a2));

  function test215_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test215_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test215_access(o, a, i0);
    }

    function test215_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test215: " + test215());

function test216() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test216_run(o, a, a2));

  function test216_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test216: " + test216());

function test217() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test217_run(o, a, a2));

  function test217_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += a[i0];
    }

    return sum;
  }
}

print("test217: " + test217());

function test218() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test218_run(o, a, a2));

  function test218_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test218: " + test218());

function test219() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test219_run(o, a, a2));

  function test219_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test219: " + test219());

function test220() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test220_run(o, a, a2));

  function test220_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test220_access(o, a, i2);
        }

        sum += test220_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test220_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test220: " + test220());

function test221() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test221_run(o, a, a2));

  function test221_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test221_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test221_access(o, a, i1);
      }
    }

    function test221_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test221: " + test221());

function test222() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test222_run(o, a, a2));

  function test222_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test222_access(o, a, i2);
        }

        sum += test222_access(o, a, i1);
      }
    }

    function test222_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test222: " + test222());

function test223() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test223_run(o, a, a2));

  function test223_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test223_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test223_access(o, a, i0);
    }

    function test223_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test223: " + test223());

function test224() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test224_run(o, a, a2));

  function test224_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test224: " + test224());

function test225() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test225_run(o, a, a2));

  function test225_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test225: " + test225());

function test226() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test226_run(o, a, a2));

  function test226_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test226: " + test226());

function test227() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test227_run(o, a, a2));

  function test227_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test227: " + test227());

function test228() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test228_run(o, a, a2));

  function test228_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test228_access(o, a, i1);
      }

      sum += test228_access(o, a, i0);
    }

    function test228_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test228: " + test228());

function test229() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test229_run(o, a, a2));

  function test229_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test229_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test229_access(o, a, i0);
    }

    function test229_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test229: " + test229());

function test230() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test230_run(o, a, a2));

  function test230_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test230_access(o, a, i1);
      }

      sum += test230_access(o, a, i0);
    }

    function test230_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test230: " + test230());

function test231() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test231_run(o, a, a2));

  function test231_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test231_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test231_access(o, a, i0);
    }

    function test231_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test231: " + test231());

function test232() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test232_run(o, a, a2));

  function test232_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test232: " + test232());

function test233() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test233_run(o, a, a2));

  function test233_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test233: " + test233());

function test234() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test234_run(o, a, a2));

  function test234_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[i2];
        }

        sum += a[i1];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test234: " + test234());

function test235() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test235_run(o, a, a2));

  function test235_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[i2];
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += a[i1];
      }
    }

    return sum;
  }
}

print("test235: " + test235());

function test236() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test236_run(o, a, a2));

  function test236_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test236_access(o, a, i2);
        }

        sum += test236_access(o, a, i1);
      }
    }

    function test236_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test236: " + test236());

function test237() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test237_run(o, a, a2));

  function test237_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test237_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test237_access(o, a, i0);
    }

    function test237_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test237: " + test237());

function test238() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test238_run(o, a, a2));

  function test238_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test238_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test238_access(o, a, i0);
    }

    function test238_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test238: " + test238());

function test239() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test239_run(o, a, a2));

  function test239_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test239_access(o, a, i3);
          }
        }
      }

      sum += test239_access(o, a, i0);
    }

    function test239_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test239: " + test239());

function test240() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test240_run(o, a, a2));

  function test240_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test240: " + test240());

function test241() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test241_run(o, a, a2));

  function test241_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test241: " + test241());

function test242() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test242_run(o, a, a2));

  function test242_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test242: " + test242());

function test243() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test243_run(o, a, a2));

  function test243_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test243_access(o, a, i3);
          }
        }
      }

      sum += test243_access(o, a, i0);
    }

    function test243_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test243: " + test243());

function test244() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test244_run(o, a, a2));

  function test244_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[-1] = -a[-1] - 1, a[-1]);
        }

        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }
    }

    return sum;
  }
}

print("test244: " + test244());

function test245() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test245_run(o, a, a2));

  function test245_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test245: " + test245());

function test246() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test246_run(o, a, a2));

  function test246_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test246_access(o, a, i0);
    }

    function test246_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test246: " + test246());

function test247() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test247_run(o, a, a2));

  function test247_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test247_access(o, a, i1);
      }

      a = a2;
      sum += test247_access(o, a, i0);
    }

    function test247_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test247: " + test247());

function test248() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test248_run(o, a, a2));

  function test248_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test248: " + test248());

function test249() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test249_run(o, a, a2));

  function test249_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      a = a2;
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test249: " + test249());

function test250() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test250_run(o, a, a2));

  function test250_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test250: " + test250());

function test251() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test251_run(o, a, a2));

  function test251_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      a = a2;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test251: " + test251());

function test252() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test252_run(o, a, a2));

  function test252_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test252_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test252_access(o, a, i0);
    }

    function test252_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test252: " + test252());

function test253() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test253_run(o, a, a2));

  function test253_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test253_access(o, a, i3);
          }
        }
      }

      sum += test253_access(o, a, i0);
    }

    function test253_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test253: " + test253());

function test254() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test254_run(o, a, a2));

  function test254_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test254_access(o, a, i2);
        }

        sum += test254_access(o, a, i1);
      }

      a = a2;
    }

    function test254_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test254: " + test254());

function test255() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test255_run(o, a, a2));

  function test255_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test255_access(o, a, i2);
        }

        a = a2;
        sum += test255_access(o, a, i1);
      }
    }

    function test255_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test255: " + test255());

function test256() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test256_run(o, a, a2));

  function test256_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[i2] = -a[i2] - 1, a[i2]);
        }

        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }
    }

    return sum;
  }
}

print("test256: " + test256());

function test257() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test257_run(o, a, a2));

  function test257_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      a = a2;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test257: " + test257());

function test258() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test258_run(o, a, a2));

  function test258_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }

        a = a2;
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test258: " + test258());

function test259() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test259_run(o, a, a2));

  function test259_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test259: " + test259());

function test260() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test260_run(o, a, a2));

  function test260_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test260_access(o, a, i0);
    }

    function test260_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test260: " + test260());

function test261() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test261_run(o, a, a2));

  function test261_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test261_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test261_access(o, a, i0);
    }

    function test261_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test261: " + test261());

function test262() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test262_run(o, a, a2));

  function test262_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test262_access(o, a, i1);
      }

      sum += test262_access(o, a, i0);
    }

    function test262_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test262: " + test262());

function test263() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test263_run(o, a, a2));

  function test263_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test263_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test263_access(o, a, i0);
    }

    function test263_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test263: " + test263());

function test264() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test264_run(o, a, a2));

  function test264_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test264: " + test264());

function test265() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test265_run(o, a, a2));

  function test265_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test265: " + test265());

function test266() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test266_run(o, a, a2));

  function test266_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test266: " + test266());

function test267() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test267_run(o, a, a2));

  function test267_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test267: " + test267());

function test268() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test268_run(o, a, a2));

  function test268_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test268_access(o, a, i2);
        }

        sum += test268_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test268_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test268: " + test268());

function test269() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test269_run(o, a, a2));

  function test269_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test269_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test269_access(o, a, i1);
      }
    }

    function test269_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test269: " + test269());

function test270() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test270_run(o, a, a2));

  function test270_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test270_access(o, a, i2);
        }

        sum += test270_access(o, a, i1);
      }
    }

    function test270_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test270: " + test270());

function test271() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test271_run(o, a, a2));

  function test271_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test271_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test271_access(o, a, i0);
    }

    function test271_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test271: " + test271());

function test272() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test272_run(o, a, a2));

  function test272_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test272: " + test272());

function test273() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test273_run(o, a, a2));

  function test273_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test273: " + test273());

function test274() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test274_run(o, a, a2));

  function test274_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test274: " + test274());

function test275() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test275_run(o, a, a2));

  function test275_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test275: " + test275());

function test276() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test276_run(o, a, a2));

  function test276_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test276_access(o, a, i1);
      }

      sum += test276_access(o, a, i0);
    }

    function test276_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test276: " + test276());

function test277() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test277_run(o, a, a2));

  function test277_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test277_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test277_access(o, a, i0);
    }

    function test277_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test277: " + test277());

function test278() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test278_run(o, a, a2));

  function test278_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test278_access(o, a, i1);
      }

      sum += test278_access(o, a, i0);
    }

    function test278_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test278: " + test278());

function test279() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test279_run(o, a, a2));

  function test279_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test279_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test279_access(o, a, i0);
    }

    function test279_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test279: " + test279());

function test280() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test280_run(o, a, a2));

  function test280_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test280: " + test280());

function test281() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test281_run(o, a, a2));

  function test281_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test281: " + test281());

function test282() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test282_run(o, a, a2));

  function test282_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[-1] = -a[-1] - 1, a[-1]);
        }

        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test282: " + test282());

function test283() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test283_run(o, a, a2));

  function test283_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[-1] = -a[-1] - 1, a[-1]);
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }
    }

    return sum;
  }
}

print("test283: " + test283());

function test284() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test284_run(o, a, a2));

  function test284_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test284_access(o, a, i2);
        }

        sum += test284_access(o, a, i1);
      }
    }

    function test284_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test284: " + test284());

function test285() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test285_run(o, a, a2));

  function test285_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test285_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test285_access(o, a, i0);
    }

    function test285_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test285: " + test285());

function test286() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test286_run(o, a, a2));

  function test286_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test286_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test286_access(o, a, i0);
    }

    function test286_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test286: " + test286());

function test287() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test287_run(o, a, a2));

  function test287_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test287_access(o, a, i3);
          }
        }
      }

      sum += test287_access(o, a, i0);
    }

    function test287_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test287: " + test287());

function test288() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test288_run(o, a, a2));

  function test288_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test288: " + test288());

function test289() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test289_run(o, a, a2));

  function test289_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test289: " + test289());

function test290() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test290_run(o, a, a2));

  function test290_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test290: " + test290());

function test291() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test291_run(o, a, a2));

  function test291_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test291_access(o, a, i3);
          }
        }
      }

      sum += test291_access(o, a, i0);
    }

    function test291_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test291: " + test291());

function test292() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test292_run(o, a, a2));

  function test292_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[0];
        }

        sum += o.a[0];
      }
    }

    return sum;
  }
}

print("test292: " + test292());

function test293() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test293_run(o, a, a2));

  function test293_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test293: " + test293());

function test294() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test294_run(o, a, a2));

  function test294_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test294_access(o, a, i0);
    }

    function test294_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test294: " + test294());

function test295() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test295_run(o, a, a2));

  function test295_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test295_access(o, a, i1);
      }

      a = a2;
      sum += test295_access(o, a, i0);
    }

    function test295_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test295: " + test295());

function test296() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test296_run(o, a, a2));

  function test296_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test296: " + test296());

function test297() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test297_run(o, a, a2));

  function test297_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1];
      }

      a = a2;
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test297: " + test297());

function test298() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test298_run(o, a, a2));

  function test298_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test298: " + test298());

function test299() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test299_run(o, a, a2));

  function test299_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      a = a2;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test299: " + test299());

function test300() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test300_run(o, a, a2));

  function test300_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test300_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test300_access(o, a, i0);
    }

    function test300_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test300: " + test300());

function test301() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test301_run(o, a, a2));

  function test301_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test301_access(o, a, i3);
          }
        }
      }

      sum += test301_access(o, a, i0);
    }

    function test301_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test301: " + test301());

function test302() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test302_run(o, a, a2));

  function test302_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test302_access(o, a, i2);
        }

        sum += test302_access(o, a, i1);
      }

      a = a2;
    }

    function test302_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test302: " + test302());

function test303() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test303_run(o, a, a2));

  function test303_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test303_access(o, a, i2);
        }

        a = a2;
        sum += test303_access(o, a, i1);
      }
    }

    function test303_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test303: " + test303());

function test304() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test304_run(o, a, a2));

  function test304_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[-1];
        }

        sum += o.a[-1];
      }
    }

    return sum;
  }
}

print("test304: " + test304());

function test305() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test305_run(o, a, a2));

  function test305_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      a = a2;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test305: " + test305());

function test306() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test306_run(o, a, a2));

  function test306_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }

        a = a2;
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test306: " + test306());

function test307() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test307_run(o, a, a2));

  function test307_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[0];
          }
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test307: " + test307());

function test308() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test308_run(o, a, a2));

  function test308_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test308_access(o, a, i0);
    }

    function test308_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test308: " + test308());

function test309() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test309_run(o, a, a2));

  function test309_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test309_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test309_access(o, a, i0);
    }

    function test309_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test309: " + test309());

function test310() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test310_run(o, a, a2));

  function test310_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test310_access(o, a, i1);
      }

      sum += test310_access(o, a, i0);
    }

    function test310_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test310: " + test310());

function test311() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test311_run(o, a, a2));

  function test311_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test311_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test311_access(o, a, i0);
    }

    function test311_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test311: " + test311());

function test312() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test312_run(o, a, a2));

  function test312_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test312: " + test312());

function test313() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test313_run(o, a, a2));

  function test313_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += o.a[0];
    }

    return sum;
  }
}

print("test313: " + test313());

function test314() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test314_run(o, a, a2));

  function test314_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test314: " + test314());

function test315() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test315_run(o, a, a2));

  function test315_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test315: " + test315());

function test316() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test316_run(o, a, a2));

  function test316_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test316_access(o, a, i2);
        }

        sum += test316_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test316_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test316: " + test316());

function test317() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test317_run(o, a, a2));

  function test317_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test317_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test317_access(o, a, i1);
      }
    }

    function test317_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test317: " + test317());

function test318() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test318_run(o, a, a2));

  function test318_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test318_access(o, a, i2);
        }

        sum += test318_access(o, a, i1);
      }
    }

    function test318_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test318: " + test318());

function test319() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test319_run(o, a, a2));

  function test319_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test319_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test319_access(o, a, i0);
    }

    function test319_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test319: " + test319());

function test320() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test320_run(o, a, a2));

  function test320_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test320: " + test320());

function test321() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test321_run(o, a, a2));

  function test321_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test321: " + test321());

function test322() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test322_run(o, a, a2));

  function test322_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test322: " + test322());

function test323() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test323_run(o, a, a2));

  function test323_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test323: " + test323());

function test324() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test324_run(o, a, a2));

  function test324_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test324_access(o, a, i1);
      }

      sum += test324_access(o, a, i0);
    }

    function test324_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test324: " + test324());

function test325() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test325_run(o, a, a2));

  function test325_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test325_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test325_access(o, a, i0);
    }

    function test325_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test325: " + test325());

function test326() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test326_run(o, a, a2));

  function test326_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test326_access(o, a, i1);
      }

      sum += test326_access(o, a, i0);
    }

    function test326_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test326: " + test326());

function test327() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test327_run(o, a, a2));

  function test327_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test327_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test327_access(o, a, i0);
    }

    function test327_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test327: " + test327());

function test328() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test328_run(o, a, a2));

  function test328_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test328: " + test328());

function test329() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test329_run(o, a, a2));

  function test329_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test329: " + test329());

function test330() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test330_run(o, a, a2));

  function test330_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[0];
        }

        sum += o.a[0];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test330: " + test330());

function test331() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test331_run(o, a, a2));

  function test331_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[0];
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += o.a[0];
      }
    }

    return sum;
  }
}

print("test331: " + test331());

function test332() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test332_run(o, a, a2));

  function test332_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test332_access(o, a, i2);
        }

        sum += test332_access(o, a, i1);
      }
    }

    function test332_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test332: " + test332());

function test333() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test333_run(o, a, a2));

  function test333_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test333_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test333_access(o, a, i0);
    }

    function test333_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test333: " + test333());

function test334() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test334_run(o, a, a2));

  function test334_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test334_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test334_access(o, a, i0);
    }

    function test334_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test334: " + test334());

function test335() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test335_run(o, a, a2));

  function test335_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test335_access(o, a, i3);
          }
        }
      }

      sum += test335_access(o, a, i0);
    }

    function test335_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test335: " + test335());

function test336() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test336_run(o, a, a2));

  function test336_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test336: " + test336());

function test337() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test337_run(o, a, a2));

  function test337_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test337: " + test337());

function test338() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test338_run(o, a, a2));

  function test338_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test338: " + test338());

function test339() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test339_run(o, a, a2));

  function test339_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test339_access(o, a, i3);
          }
        }
      }

      sum += test339_access(o, a, i0);
    }

    function test339_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test339: " + test339());

function test340() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test340_run(o, a, a2));

  function test340_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[i2] = -o.a[i2] - 1, o.a[i2]);
        }

        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }
    }

    return sum;
  }
}

print("test340: " + test340());

function test341() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test341_run(o, a, a2));

  function test341_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test341: " + test341());

function test342() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test342_run(o, a, a2));

  function test342_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test342_access(o, a, i0);
    }

    function test342_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test342: " + test342());

function test343() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test343_run(o, a, a2));

  function test343_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test343_access(o, a, i1);
      }

      a = a2;
      sum += test343_access(o, a, i0);
    }

    function test343_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test343: " + test343());

function test344() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test344_run(o, a, a2));

  function test344_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test344: " + test344());

function test345() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test345_run(o, a, a2));

  function test345_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      a = a2;
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test345: " + test345());

function test346() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test346_run(o, a, a2));

  function test346_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test346: " + test346());

function test347() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test347_run(o, a, a2));

  function test347_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      a = a2;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test347: " + test347());

function test348() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test348_run(o, a, a2));

  function test348_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test348_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test348_access(o, a, i0);
    }

    function test348_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test348: " + test348());

function test349() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test349_run(o, a, a2));

  function test349_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test349_access(o, a, i3);
          }
        }
      }

      sum += test349_access(o, a, i0);
    }

    function test349_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test349: " + test349());

function test350() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test350_run(o, a, a2));

  function test350_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test350_access(o, a, i2);
        }

        sum += test350_access(o, a, i1);
      }

      a = a2;
    }

    function test350_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test350: " + test350());

function test351() {
  "use strict";

  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test351_run(o, a, a2));

  function test351_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test351_access(o, a, i2);
        }

        a = a2;
        sum += test351_access(o, a, i1);
      }
    }

    function test351_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test351: " + test351());

function test352() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test352_run(o, a, a2));

  function test352_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
        }

        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }
    }

    return sum;
  }
}

print("test352: " + test352());

function test353() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test353_run(o, a, a2));

  function test353_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      a = a2;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test353: " + test353());

function test354() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test354_run(o, a, a2));

  function test354_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }

        a = a2;
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test354: " + test354());

function test355() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test355_run(o, a, a2));

  function test355_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test355: " + test355());

function test356() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test356_run(o, a, a2));

  function test356_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test356_access(o, a, i0);
    }

    function test356_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test356: " + test356());

function test357() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test357_run(o, a, a2));

  function test357_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test357_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test357_access(o, a, i0);
    }

    function test357_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test357: " + test357());

function test358() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test358_run(o, a, a2));

  function test358_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test358_access(o, a, i1);
      }

      sum += test358_access(o, a, i0);
    }

    function test358_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test358: " + test358());

function test359() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test359_run(o, a, a2));

  function test359_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test359_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test359_access(o, a, i0);
    }

    function test359_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test359: " + test359());

function test360() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test360_run(o, a, a2));

  function test360_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test360: " + test360());

function test361() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test361_run(o, a, a2));

  function test361_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test361: " + test361());

function test362() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test362_run(o, a, a2));

  function test362_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test362: " + test362());

function test363() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test363_run(o, a, a2));

  function test363_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test363: " + test363());

function test364() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test364_run(o, a, a2));

  function test364_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test364_access(o, a, i2);
        }

        sum += test364_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test364_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test364: " + test364());

function test365() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test365_run(o, a, a2));

  function test365_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test365_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test365_access(o, a, i1);
      }
    }

    function test365_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test365: " + test365());

function test366() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test366_run(o, a, a2));

  function test366_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test366_access(o, a, i2);
        }

        sum += test366_access(o, a, i1);
      }
    }

    function test366_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test366: " + test366());

function test367() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test367_run(o, a, a2));

  function test367_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test367_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test367_access(o, a, i0);
    }

    function test367_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test367: " + test367());

function test368() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test368_run(o, a, a2));

  function test368_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test368: " + test368());

function test369() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test369_run(o, a, a2));

  function test369_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test369: " + test369());

function test370() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test370_run(o, a, a2));

  function test370_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test370: " + test370());

function test371() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test371_run(o, a, a2));

  function test371_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test371: " + test371());

function test372() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test372_run(o, a, a2));

  function test372_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test372_access(o, a, i1);
      }

      sum += test372_access(o, a, i0);
    }

    function test372_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test372: " + test372());

function test373() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test373_run(o, a, a2));

  function test373_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test373_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test373_access(o, a, i0);
    }

    function test373_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test373: " + test373());

function test374() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test374_run(o, a, a2));

  function test374_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test374_access(o, a, i1);
      }

      sum += test374_access(o, a, i0);
    }

    function test374_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test374: " + test374());

function test375() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test375_run(o, a, a2));

  function test375_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test375_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test375_access(o, a, i0);
    }

    function test375_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test375: " + test375());

function test376() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test376_run(o, a, a2));

  function test376_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test376: " + test376());

function test377() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test377_run(o, a, a2));

  function test377_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test377: " + test377());

function test378() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test378_run(o, a, a2));

  function test378_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[i2] = -o.a[i2] - 1, o.a[i2]);
        }

        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test378: " + test378());

function test379() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test379_run(o, a, a2));

  function test379_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[i2] = -o.a[i2] - 1, o.a[i2]);
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }
    }

    return sum;
  }
}

print("test379: " + test379());

function test380() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test380_run(o, a, a2));

  function test380_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test380_access(o, a, i2);
        }

        sum += test380_access(o, a, i1);
      }
    }

    function test380_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test380: " + test380());

function test381() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test381_run(o, a, a2));

  function test381_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test381_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test381_access(o, a, i0);
    }

    function test381_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test381: " + test381());

function test382() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test382_run(o, a, a2));

  function test382_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test382_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test382_access(o, a, i0);
    }

    function test382_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test382: " + test382());

function test383() {
  var o = {
    a: {
      "0": 1,
      "1": 2,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test383_run(o, a, a2));

  function test383_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test383_access(o, a, i3);
          }
        }
      }

      sum += test383_access(o, a, i0);
    }

    function test383_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test383: " + test383());

function test384() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test384_run(o, a, a2));

  function test384_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[i0];
    }

    return sum;
  }
}

print("test384: " + test384());

function test385() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test385_run(o, a, a2));

  function test385_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test385: " + test385());

function test386() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test386_run(o, a, a2));

  function test386_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test386: " + test386());

function test387() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test387_run(o, a, a2));

  function test387_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test387_access(o, a, i3);
          }
        }
      }

      sum += test387_access(o, a, i0);
    }

    function test387_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test387: " + test387());

function test388() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test388_run(o, a, a2));

  function test388_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[-1];
        }

        sum += a[-1];
      }
    }

    return sum;
  }
}

print("test388: " + test388());

function test389() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test389_run(o, a, a2));

  function test389_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test389: " + test389());

function test390() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test390_run(o, a, a2));

  function test390_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test390_access(o, a, i0);
    }

    function test390_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test390: " + test390());

function test391() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test391_run(o, a, a2));

  function test391_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test391_access(o, a, i1);
      }

      a = a2;
      sum += test391_access(o, a, i0);
    }

    function test391_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test391: " + test391());

function test392() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test392_run(o, a, a2));

  function test392_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test392: " + test392());

function test393() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test393_run(o, a, a2));

  function test393_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0];
      }

      a = a2;
      sum += a[0];
    }

    return sum;
  }
}

print("test393: " + test393());

function test394() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test394_run(o, a, a2));

  function test394_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test394: " + test394());

function test395() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test395_run(o, a, a2));

  function test395_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      a = a2;
      sum += a[i0];
    }

    return sum;
  }
}

print("test395: " + test395());

function test396() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test396_run(o, a, a2));

  function test396_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test396_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test396_access(o, a, i0);
    }

    function test396_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test396: " + test396());

function test397() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test397_run(o, a, a2));

  function test397_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test397_access(o, a, i3);
          }
        }
      }

      sum += test397_access(o, a, i0);
    }

    function test397_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test397: " + test397());

function test398() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test398_run(o, a, a2));

  function test398_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test398_access(o, a, i2);
        }

        sum += test398_access(o, a, i1);
      }

      a = a2;
    }

    function test398_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test398: " + test398());

function test399() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test399_run(o, a, a2));

  function test399_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test399_access(o, a, i2);
        }

        a = a2;
        sum += test399_access(o, a, i1);
      }
    }

    function test399_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test399: " + test399());

function test400() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test400_run(o, a, a2));

  function test400_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[i2];
        }

        sum += a[i1];
      }
    }

    return sum;
  }
}

print("test400: " + test400());

function test401() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test401_run(o, a, a2));

  function test401_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      a = a2;
      sum += a[i0];
    }

    return sum;
  }
}

print("test401: " + test401());

function test402() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test402_run(o, a, a2));

  function test402_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }

        a = a2;
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test402: " + test402());

function test403() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test403_run(o, a, a2));

  function test403_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test403: " + test403());

function test404() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test404_run(o, a, a2));

  function test404_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test404_access(o, a, i0);
    }

    function test404_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test404: " + test404());

function test405() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test405_run(o, a, a2));

  function test405_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test405_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test405_access(o, a, i0);
    }

    function test405_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test405: " + test405());

function test406() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test406_run(o, a, a2));

  function test406_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test406_access(o, a, i1);
      }

      sum += test406_access(o, a, i0);
    }

    function test406_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test406: " + test406());

function test407() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test407_run(o, a, a2));

  function test407_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test407_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test407_access(o, a, i0);
    }

    function test407_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test407: " + test407());

function test408() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test408_run(o, a, a2));

  function test408_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test408: " + test408());

function test409() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test409_run(o, a, a2));

  function test409_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += a[-1];
    }

    return sum;
  }
}

print("test409: " + test409());

function test410() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test410_run(o, a, a2));

  function test410_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test410: " + test410());

function test411() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test411_run(o, a, a2));

  function test411_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test411: " + test411());

function test412() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test412_run(o, a, a2));

  function test412_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test412_access(o, a, i2);
        }

        sum += test412_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test412_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test412: " + test412());

function test413() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test413_run(o, a, a2));

  function test413_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test413_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test413_access(o, a, i1);
      }
    }

    function test413_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test413: " + test413());

function test414() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test414_run(o, a, a2));

  function test414_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test414_access(o, a, i2);
        }

        sum += test414_access(o, a, i1);
      }
    }

    function test414_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test414: " + test414());

function test415() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test415_run(o, a, a2));

  function test415_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test415_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test415_access(o, a, i0);
    }

    function test415_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test415: " + test415());

function test416() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test416_run(o, a, a2));

  function test416_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test416: " + test416());

function test417() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test417_run(o, a, a2));

  function test417_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test417: " + test417());

function test418() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test418_run(o, a, a2));

  function test418_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test418: " + test418());

function test419() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test419_run(o, a, a2));

  function test419_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test419: " + test419());

function test420() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test420_run(o, a, a2));

  function test420_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test420_access(o, a, i1);
      }

      sum += test420_access(o, a, i0);
    }

    function test420_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test420: " + test420());

function test421() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test421_run(o, a, a2));

  function test421_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test421_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test421_access(o, a, i0);
    }

    function test421_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test421: " + test421());

function test422() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test422_run(o, a, a2));

  function test422_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test422_access(o, a, i1);
      }

      sum += test422_access(o, a, i0);
    }

    function test422_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test422: " + test422());

function test423() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test423_run(o, a, a2));

  function test423_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test423_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test423_access(o, a, i0);
    }

    function test423_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test423: " + test423());

function test424() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test424_run(o, a, a2));

  function test424_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test424: " + test424());

function test425() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test425_run(o, a, a2));

  function test425_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += a[i3];
          }
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test425: " + test425());

function test426() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test426_run(o, a, a2));

  function test426_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[-1];
        }

        sum += a[-1];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test426: " + test426());

function test427() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test427_run(o, a, a2));

  function test427_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[-1];
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += a[-1];
      }
    }

    return sum;
  }
}

print("test427: " + test427());

function test428() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test428_run(o, a, a2));

  function test428_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test428_access(o, a, i2);
        }

        sum += test428_access(o, a, i1);
      }
    }

    function test428_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test428: " + test428());

function test429() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test429_run(o, a, a2));

  function test429_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test429_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test429_access(o, a, i0);
    }

    function test429_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test429: " + test429());

function test430() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test430_run(o, a, a2));

  function test430_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test430_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test430_access(o, a, i0);
    }

    function test430_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test430: " + test430());

function test431() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test431_run(o, a, a2));

  function test431_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test431_access(o, a, i3);
          }
        }
      }

      sum += test431_access(o, a, i0);
    }

    function test431_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test431: " + test431());

function test432() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test432_run(o, a, a2));

  function test432_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test432: " + test432());

function test433() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test433_run(o, a, a2));

  function test433_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test433: " + test433());

function test434() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test434_run(o, a, a2));

  function test434_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test434: " + test434());

function test435() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test435_run(o, a, a2));

  function test435_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test435_access(o, a, i3);
          }
        }
      }

      sum += test435_access(o, a, i0);
    }

    function test435_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test435: " + test435());

function test436() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test436_run(o, a, a2));

  function test436_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[0] = -a[0] - 1, a[0]);
        }

        sum += (a[0] = -a[0] - 1, a[0]);
      }
    }

    return sum;
  }
}

print("test436: " + test436());

function test437() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test437_run(o, a, a2));

  function test437_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test437: " + test437());

function test438() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test438_run(o, a, a2));

  function test438_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test438_access(o, a, i0);
    }

    function test438_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test438: " + test438());

function test439() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test439_run(o, a, a2));

  function test439_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test439_access(o, a, i1);
      }

      a = a2;
      sum += test439_access(o, a, i0);
    }

    function test439_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test439: " + test439());

function test440() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test440_run(o, a, a2));

  function test440_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test440: " + test440());

function test441() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test441_run(o, a, a2));

  function test441_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      a = a2;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test441: " + test441());

function test442() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test442_run(o, a, a2));

  function test442_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test442: " + test442());

function test443() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test443_run(o, a, a2));

  function test443_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      a = a2;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test443: " + test443());

function test444() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test444_run(o, a, a2));

  function test444_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test444_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test444_access(o, a, i0);
    }

    function test444_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test444: " + test444());

function test445() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test445_run(o, a, a2));

  function test445_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test445_access(o, a, i3);
          }
        }
      }

      sum += test445_access(o, a, i0);
    }

    function test445_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test445: " + test445());

function test446() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test446_run(o, a, a2));

  function test446_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test446_access(o, a, i2);
        }

        sum += test446_access(o, a, i1);
      }

      a = a2;
    }

    function test446_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test446: " + test446());

function test447() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test447_run(o, a, a2));

  function test447_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test447_access(o, a, i2);
        }

        a = a2;
        sum += test447_access(o, a, i1);
      }
    }

    function test447_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test447: " + test447());

function test448() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test448_run(o, a, a2));

  function test448_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[-1] = -a[-1] - 1, a[-1]);
        }

        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }
    }

    return sum;
  }
}

print("test448: " + test448());

function test449() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test449_run(o, a, a2));

  function test449_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      a = a2;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test449: " + test449());

function test450() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test450_run(o, a, a2));

  function test450_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }

        a = a2;
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test450: " + test450());

function test451() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test451_run(o, a, a2));

  function test451_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test451: " + test451());

function test452() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test452_run(o, a, a2));

  function test452_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test452_access(o, a, i0);
    }

    function test452_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test452: " + test452());

function test453() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test453_run(o, a, a2));

  function test453_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test453_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test453_access(o, a, i0);
    }

    function test453_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test453: " + test453());

function test454() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test454_run(o, a, a2));

  function test454_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test454_access(o, a, i1);
      }

      sum += test454_access(o, a, i0);
    }

    function test454_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test454: " + test454());

function test455() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test455_run(o, a, a2));

  function test455_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test455_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test455_access(o, a, i0);
    }

    function test455_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test455: " + test455());

function test456() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test456_run(o, a, a2));

  function test456_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test456: " + test456());

function test457() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test457_run(o, a, a2));

  function test457_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test457: " + test457());

function test458() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test458_run(o, a, a2));

  function test458_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test458: " + test458());

function test459() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test459_run(o, a, a2));

  function test459_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test459: " + test459());

function test460() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test460_run(o, a, a2));

  function test460_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test460_access(o, a, i2);
        }

        sum += test460_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test460_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test460: " + test460());

function test461() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test461_run(o, a, a2));

  function test461_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test461_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test461_access(o, a, i1);
      }
    }

    function test461_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test461: " + test461());

function test462() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test462_run(o, a, a2));

  function test462_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test462_access(o, a, i2);
        }

        sum += test462_access(o, a, i1);
      }
    }

    function test462_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test462: " + test462());

function test463() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test463_run(o, a, a2));

  function test463_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test463_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test463_access(o, a, i0);
    }

    function test463_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test463: " + test463());

function test464() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test464_run(o, a, a2));

  function test464_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test464: " + test464());

function test465() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test465_run(o, a, a2));

  function test465_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test465: " + test465());

function test466() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test466_run(o, a, a2));

  function test466_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test466: " + test466());

function test467() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test467_run(o, a, a2));

  function test467_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test467: " + test467());

function test468() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test468_run(o, a, a2));

  function test468_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test468_access(o, a, i1);
      }

      sum += test468_access(o, a, i0);
    }

    function test468_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test468: " + test468());

function test469() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test469_run(o, a, a2));

  function test469_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test469_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test469_access(o, a, i0);
    }

    function test469_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test469: " + test469());

function test470() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test470_run(o, a, a2));

  function test470_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test470_access(o, a, i1);
      }

      sum += test470_access(o, a, i0);
    }

    function test470_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test470: " + test470());

function test471() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test471_run(o, a, a2));

  function test471_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test471_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test471_access(o, a, i0);
    }

    function test471_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test471: " + test471());

function test472() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test472_run(o, a, a2));

  function test472_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test472: " + test472());

function test473() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test473_run(o, a, a2));

  function test473_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test473: " + test473());

function test474() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test474_run(o, a, a2));

  function test474_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[0] = -a[0] - 1, a[0]);
        }

        sum += (a[0] = -a[0] - 1, a[0]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test474: " + test474());

function test475() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test475_run(o, a, a2));

  function test475_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[0] = -a[0] - 1, a[0]);
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += (a[0] = -a[0] - 1, a[0]);
      }
    }

    return sum;
  }
}

print("test475: " + test475());

function test476() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test476_run(o, a, a2));

  function test476_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test476_access(o, a, i2);
        }

        sum += test476_access(o, a, i1);
      }
    }

    function test476_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test476: " + test476());

function test477() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test477_run(o, a, a2));

  function test477_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test477_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test477_access(o, a, i0);
    }

    function test477_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test477: " + test477());

function test478() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test478_run(o, a, a2));

  function test478_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test478_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test478_access(o, a, i0);
    }

    function test478_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test478: " + test478());

function test479() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test479_run(o, a, a2));

  function test479_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test479_access(o, a, i3);
          }
        }
      }

      sum += test479_access(o, a, i0);
    }

    function test479_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test479: " + test479());

function test480() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test480_run(o, a, a2));

  function test480_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test480: " + test480());

function test481() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test481_run(o, a, a2));

  function test481_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test481: " + test481());

function test482() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test482_run(o, a, a2));

  function test482_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test482: " + test482());

function test483() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test483_run(o, a, a2));

  function test483_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test483_access(o, a, i3);
          }
        }
      }

      sum += test483_access(o, a, i0);
    }

    function test483_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test483: " + test483());

function test484() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test484_run(o, a, a2));

  function test484_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[i2];
        }

        sum += o.a[i1];
      }
    }

    return sum;
  }
}

print("test484: " + test484());

function test485() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test485_run(o, a, a2));

  function test485_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test485: " + test485());

function test486() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test486_run(o, a, a2));

  function test486_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test486_access(o, a, i0);
    }

    function test486_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test486: " + test486());

function test487() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test487_run(o, a, a2));

  function test487_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test487_access(o, a, i1);
      }

      a = a2;
      sum += test487_access(o, a, i0);
    }

    function test487_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test487: " + test487());

function test488() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test488_run(o, a, a2));

  function test488_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test488: " + test488());

function test489() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test489_run(o, a, a2));

  function test489_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1];
      }

      a = a2;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test489: " + test489());

function test490() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test490_run(o, a, a2));

  function test490_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test490: " + test490());

function test491() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test491_run(o, a, a2));

  function test491_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      a = a2;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test491: " + test491());

function test492() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test492_run(o, a, a2));

  function test492_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test492_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test492_access(o, a, i0);
    }

    function test492_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test492: " + test492());

function test493() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test493_run(o, a, a2));

  function test493_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test493_access(o, a, i3);
          }
        }
      }

      sum += test493_access(o, a, i0);
    }

    function test493_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test493: " + test493());

function test494() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test494_run(o, a, a2));

  function test494_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test494_access(o, a, i2);
        }

        sum += test494_access(o, a, i1);
      }

      a = a2;
    }

    function test494_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test494: " + test494());

function test495() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test495_run(o, a, a2));

  function test495_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test495_access(o, a, i2);
        }

        a = a2;
        sum += test495_access(o, a, i1);
      }
    }

    function test495_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test495: " + test495());

function test496() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test496_run(o, a, a2));

  function test496_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[0];
        }

        sum += o.a[0];
      }
    }

    return sum;
  }
}

print("test496: " + test496());

function test497() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test497_run(o, a, a2));

  function test497_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      a = a2;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test497: " + test497());

function test498() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test498_run(o, a, a2));

  function test498_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }

        a = a2;
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test498: " + test498());

function test499() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test499_run(o, a, a2));

  function test499_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test499: " + test499());

function test500() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test500_run(o, a, a2));

  function test500_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test500_access(o, a, i0);
    }

    function test500_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test500: " + test500());

function test501() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test501_run(o, a, a2));

  function test501_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test501_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test501_access(o, a, i0);
    }

    function test501_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test501: " + test501());

function test502() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test502_run(o, a, a2));

  function test502_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test502_access(o, a, i1);
      }

      sum += test502_access(o, a, i0);
    }

    function test502_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test502: " + test502());

function test503() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test503_run(o, a, a2));

  function test503_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test503_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test503_access(o, a, i0);
    }

    function test503_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test503: " + test503());

function test504() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test504_run(o, a, a2));

  function test504_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test504: " + test504());

function test505() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test505_run(o, a, a2));

  function test505_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test505: " + test505());

function test506() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test506_run(o, a, a2));

  function test506_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test506: " + test506());

function test507() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test507_run(o, a, a2));

  function test507_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test507: " + test507());

function test508() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test508_run(o, a, a2));

  function test508_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test508_access(o, a, i2);
        }

        sum += test508_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test508_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test508: " + test508());

function test509() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test509_run(o, a, a2));

  function test509_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test509_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test509_access(o, a, i1);
      }
    }

    function test509_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test509: " + test509());

function test510() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test510_run(o, a, a2));

  function test510_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test510_access(o, a, i2);
        }

        sum += test510_access(o, a, i1);
      }
    }

    function test510_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test510: " + test510());

function test511() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test511_run(o, a, a2));

  function test511_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test511_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test511_access(o, a, i0);
    }

    function test511_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test511: " + test511());

function test512() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test512_run(o, a, a2));

  function test512_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test512: " + test512());

function test513() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test513_run(o, a, a2));

  function test513_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test513: " + test513());

function test514() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test514_run(o, a, a2));

  function test514_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test514: " + test514());

function test515() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test515_run(o, a, a2));

  function test515_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test515: " + test515());

function test516() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test516_run(o, a, a2));

  function test516_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test516_access(o, a, i1);
      }

      sum += test516_access(o, a, i0);
    }

    function test516_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test516: " + test516());

function test517() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test517_run(o, a, a2));

  function test517_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test517_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test517_access(o, a, i0);
    }

    function test517_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test517: " + test517());

function test518() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test518_run(o, a, a2));

  function test518_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test518_access(o, a, i1);
      }

      sum += test518_access(o, a, i0);
    }

    function test518_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test518: " + test518());

function test519() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test519_run(o, a, a2));

  function test519_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test519_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test519_access(o, a, i0);
    }

    function test519_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test519: " + test519());

function test520() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test520_run(o, a, a2));

  function test520_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test520: " + test520());

function test521() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test521_run(o, a, a2));

  function test521_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += o.a[0];
          }
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test521: " + test521());

function test522() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test522_run(o, a, a2));

  function test522_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[i2];
        }

        sum += o.a[i1];
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test522: " + test522());

function test523() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test523_run(o, a, a2));

  function test523_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[i2];
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += o.a[i1];
      }
    }

    return sum;
  }
}

print("test523: " + test523());

function test524() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test524_run(o, a, a2));

  function test524_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test524_access(o, a, i2);
        }

        sum += test524_access(o, a, i1);
      }
    }

    function test524_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test524: " + test524());

function test525() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test525_run(o, a, a2));

  function test525_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test525_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test525_access(o, a, i0);
    }

    function test525_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test525: " + test525());

function test526() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test526_run(o, a, a2));

  function test526_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test526_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test526_access(o, a, i0);
    }

    function test526_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test526: " + test526());

function test527() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test527_run(o, a, a2));

  function test527_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test527_access(o, a, i3);
          }
        }
      }

      sum += test527_access(o, a, i0);
    }

    function test527_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test527: " + test527());

function test528() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test528_run(o, a, a2));

  function test528_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test528: " + test528());

function test529() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test529_run(o, a, a2));

  function test529_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test529: " + test529());

function test530() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test530_run(o, a, a2));

  function test530_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test530: " + test530());

function test531() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test531_run(o, a, a2));

  function test531_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test531_access(o, a, i3);
          }
        }
      }

      sum += test531_access(o, a, i0);
    }

    function test531_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test531: " + test531());

function test532() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test532_run(o, a, a2));

  function test532_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
        }

        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }
    }

    return sum;
  }
}

print("test532: " + test532());

function test533() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test533_run(o, a, a2));

  function test533_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test533: " + test533());

function test534() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test534_run(o, a, a2));

  function test534_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test534_access(o, a, i0);
    }

    function test534_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test534: " + test534());

function test535() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test535_run(o, a, a2));

  function test535_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test535_access(o, a, i1);
      }

      a = a2;
      sum += test535_access(o, a, i0);
    }

    function test535_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test535: " + test535());

function test536() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test536_run(o, a, a2));

  function test536_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test536: " + test536());

function test537() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test537_run(o, a, a2));

  function test537_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      a = a2;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test537: " + test537());

function test538() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test538_run(o, a, a2));

  function test538_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test538: " + test538());

function test539() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test539_run(o, a, a2));

  function test539_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      a = a2;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test539: " + test539());

function test540() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test540_run(o, a, a2));

  function test540_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test540_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test540_access(o, a, i0);
    }

    function test540_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test540: " + test540());

function test541() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test541_run(o, a, a2));

  function test541_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test541_access(o, a, i3);
          }
        }
      }

      sum += test541_access(o, a, i0);
    }

    function test541_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test541: " + test541());

function test542() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test542_run(o, a, a2));

  function test542_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test542_access(o, a, i2);
        }

        sum += test542_access(o, a, i1);
      }

      a = a2;
    }

    function test542_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test542: " + test542());

function test543() {
  "use strict";

  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test543_run(o, a, a2));

  function test543_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test543_access(o, a, i2);
        }

        a = a2;
        sum += test543_access(o, a, i1);
      }
    }

    function test543_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test543: " + test543());

function test544() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test544_run(o, a, a2));

  function test544_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[i2] = -o.a[i2] - 1, o.a[i2]);
        }

        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }
    }

    return sum;
  }
}

print("test544: " + test544());

function test545() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test545_run(o, a, a2));

  function test545_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      a = a2;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test545: " + test545());

function test546() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test546_run(o, a, a2));

  function test546_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }

        a = a2;
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test546: " + test546());

function test547() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test547_run(o, a, a2));

  function test547_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test547: " + test547());

function test548() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test548_run(o, a, a2));

  function test548_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test548_access(o, a, i0);
    }

    function test548_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test548: " + test548());

function test549() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test549_run(o, a, a2));

  function test549_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test549_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test549_access(o, a, i0);
    }

    function test549_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test549: " + test549());

function test550() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test550_run(o, a, a2));

  function test550_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test550_access(o, a, i1);
      }

      sum += test550_access(o, a, i0);
    }

    function test550_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test550: " + test550());

function test551() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test551_run(o, a, a2));

  function test551_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test551_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test551_access(o, a, i0);
    }

    function test551_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test551: " + test551());

function test552() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test552_run(o, a, a2));

  function test552_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test552: " + test552());

function test553() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test553_run(o, a, a2));

  function test553_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test553: " + test553());

function test554() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test554_run(o, a, a2));

  function test554_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test554: " + test554());

function test555() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test555_run(o, a, a2));

  function test555_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test555: " + test555());

function test556() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test556_run(o, a, a2));

  function test556_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test556_access(o, a, i2);
        }

        sum += test556_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test556_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test556: " + test556());

function test557() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test557_run(o, a, a2));

  function test557_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test557_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test557_access(o, a, i1);
      }
    }

    function test557_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test557: " + test557());

function test558() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test558_run(o, a, a2));

  function test558_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test558_access(o, a, i2);
        }

        sum += test558_access(o, a, i1);
      }
    }

    function test558_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test558: " + test558());

function test559() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test559_run(o, a, a2));

  function test559_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test559_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test559_access(o, a, i0);
    }

    function test559_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test559: " + test559());

function test560() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test560_run(o, a, a2));

  function test560_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test560: " + test560());

function test561() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    }
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test561_run(o, a, a2));

  function test561_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test561: " + test561());

function test562() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test562_run(o, a, a2));

  function test562_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test562: " + test562());

function test563() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test563_run(o, a, a2));

  function test563_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test563: " + test563());

function test564() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test564_run(o, a, a2));

  function test564_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test564_access(o, a, i1);
      }

      sum += test564_access(o, a, i0);
    }

    function test564_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test564: " + test564());

function test565() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test565_run(o, a, a2));

  function test565_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test565_access(o, a, i1);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test565_access(o, a, i0);
    }

    function test565_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test565: " + test565());

function test566() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test566_run(o, a, a2));

  function test566_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += test566_access(o, a, i1);
      }

      sum += test566_access(o, a, i0);
    }

    function test566_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test566: " + test566());

function test567() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test567_run(o, a, a2));

  function test567_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test567_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test567_access(o, a, i0);
    }

    function test567_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test567: " + test567());

function test568() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test568_run(o, a, a2));

  function test568_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test568: " + test568());

function test569() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test569_run(o, a, a2));

  function test569_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test569: " + test569());

function test570() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test570_run(o, a, a2));

  function test570_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
        }

        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }
    }

    return sum;
  }
}

print("test570: " + test570());

function test571() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test571_run(o, a, a2));

  function test571_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }

        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }
    }

    return sum;
  }
}

print("test571: " + test571());

function test572() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test572_run(o, a, a2));

  function test572_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }
          }

          sum += test572_access(o, a, i2);
        }

        sum += test572_access(o, a, i1);
      }
    }

    function test572_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test572: " + test572());

function test573() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test573_run(o, a, a2));

  function test573_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test573_access(o, a, i3);
          }
        }
      }

      if (bailout && i0 === 2 >> 1) {
        o.changeToEs5Array = 0;
      }

      sum += test573_access(o, a, i0);
    }

    function test573_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test573: " + test573());

function test574() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test574_run(o, a, a2));

  function test574_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test574_access(o, a, i3);
          }
        }

        if (bailout && i1 === 2 >> 1) {
          o.changeToEs5Array = 0;
        }
      }

      sum += test574_access(o, a, i0);
    }

    function test574_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test574: " + test574());

function test575() {
  var o = {
    a: {
      "0": 1.1,
      "1": 2.1,
      length: 2
    },

    set changeToEs5Array(v) {
      try {
        Object.defineProperty(this.a, 0, {
          configurable: true,
          writable: false,
          enumerable: true,
          value: -this.a[0] - 1
        });
      } catch (ex) {
        print("Unexpected exception - " + ex.name + ": " + ex.message);
      }
    }

  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = [];

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test575_run(o, a, a2));

  function test575_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;

            if (bailout && i3 === 2 >> 1) {
              o.changeToEs5Array = 0;
            }

            sum += test575_access(o, a, i3);
          }
        }
      }

      sum += test575_access(o, a, i0);
    }

    function test575_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test575: " + test575());

function test576() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test576_run(o, a, a2));

  function test576_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[-1].p;
    }

    return sum;
  }
}

print("test576: " + test576());

function test577() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test577_run(o, a, a2));

  function test577_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1].p;
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test577: " + test577());

function test578() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test578_run(o, a, a2));

  function test578_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0].p;
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test578: " + test578());

function test579() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test579_run(o, a, a2));

  function test579_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test579_access(o, a, i3);
          }
        }
      }

      sum += test579_access(o, a, i0);
    }

    function test579_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test579: " + test579());

function test580() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test580_run(o, a, a2));

  function test580_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[0].p;
        }

        sum += a[0].p;
      }
    }

    return sum;
  }
}

print("test580: " + test580());

function test581() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test581_run(o, a, a2));

  function test581_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3].p;
          }
        }
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test581: " + test581());

function test582() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test582_run(o, a, a2));

  function test582_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test582_access(o, a, i0);
    }

    function test582_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test582: " + test582());

function test583() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test583_run(o, a, a2));

  function test583_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test583_access(o, a, i1);
      }

      a = a2;
      sum += test583_access(o, a, i0);
    }

    function test583_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test583: " + test583());

function test584() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test584_run(o, a, a2));

  function test584_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[i1].p;
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test584: " + test584());

function test585() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test585_run(o, a, a2));

  function test585_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1].p;
      }

      a = a2;
      sum += a[i0].p;
    }

    return sum;
  }
}

print("test585: " + test585());

function test586() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test586_run(o, a, a2));

  function test586_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[-1].p;
      }

      sum += a[-1].p;
    }

    return sum;
  }
}

print("test586: " + test586());

function test587() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test587_run(o, a, a2));

  function test587_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1].p;
          }
        }
      }

      a = a2;
      sum += a[-1].p;
    }

    return sum;
  }
}

print("test587: " + test587());

function test588() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test588_run(o, a, a2));

  function test588_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test588_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test588_access(o, a, i0);
    }

    function test588_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test588: " + test588());

function test589() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test589_run(o, a, a2));

  function test589_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test589_access(o, a, i3);
          }
        }
      }

      sum += test589_access(o, a, i0);
    }

    function test589_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test589: " + test589());

function test590() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test590_run(o, a, a2));

  function test590_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test590_access(o, a, i2);
        }

        sum += test590_access(o, a, i1);
      }

      a = a2;
    }

    function test590_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test590: " + test590());

function test591() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test591_run(o, a, a2));

  function test591_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test591_access(o, a, i2);
        }

        a = a2;
        sum += test591_access(o, a, i1);
      }
    }

    function test591_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test591: " + test591());

function test592() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test592_run(o, a, a2));

  function test592_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[-1].p;
        }

        sum += a[-1].p;
      }
    }

    return sum;
  }
}

print("test592: " + test592());

function test593() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test593_run(o, a, a2));

  function test593_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1].p;
          }
        }
      }

      a = a2;
      sum += a[-1].p;
    }

    return sum;
  }
}

print("test593: " + test593());

function test594() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test594_run(o, a, a2));

  function test594_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0].p;
          }
        }

        a = a2;
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test594: " + test594());

function test595() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test595_run(o, a, a2));

  function test595_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[0].p;
          }
        }
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test595: " + test595());

function test596() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test596_run(o, a, a2));

  function test596_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test596_access(o, a, i0);
    }

    function test596_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test596: " + test596());

function test597() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test597_run(o, a, a2));

  function test597_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test597_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test597_access(o, a, i0);
    }

    function test597_access(o, a, i) {
      return a[i].p;
    }

    return sum;
  }
}

print("test597: " + test597());

function test598() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test598_run(o, a, a2));

  function test598_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test598_access(o, a, i1);
      }

      sum += test598_access(o, a, i0);
    }

    function test598_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test598: " + test598());

function test599() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test599_run(o, a, a2));

  function test599_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test599_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test599_access(o, a, i0);
    }

    function test599_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test599: " + test599());

function test600() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test600_run(o, a, a2));

  function test600_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += a[0].p;
      }

      sum += a[0].p;
    }

    return sum;
  }
}

print("test600: " + test600());

function test601() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test601_run(o, a, a2));

  function test601_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0].p;
          }
        }
      }

      changeToEs5Array_object(a);
      sum += a[0].p;
    }

    return sum;
  }
}

print("test601: " + test601());

function test602() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test602_run(o, a, a2));

  function test602_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test602: " + test602());

function test603() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test603_run(o, a, a2));

  function test603_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += a[i3].p;
          }
        }
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test603: " + test603());

function test604() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test604_run(o, a, a2));

  function test604_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test604_access(o, a, i2);
        }

        sum += test604_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test604_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test604: " + test604());

function test605() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test605_run(o, a, a2));

  function test605_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test605_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test605_access(o, a, i1);
      }
    }

    function test605_access(o, a, i) {
      return a[-1].p;
    }

    return sum;
  }
}

print("test605: " + test605());

function test606() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test606_run(o, a, a2));

  function test606_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test606_access(o, a, i2);
        }

        sum += test606_access(o, a, i1);
      }
    }

    function test606_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test606: " + test606());

function test607() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test607_run(o, a, a2));

  function test607_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test607_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test607_access(o, a, i0);
    }

    function test607_access(o, a, i) {
      return a[0].p;
    }

    return sum;
  }
}

print("test607: " + test607());

function test608() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test608_run(o, a, a2));

  function test608_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test608: " + test608());

function test609() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test609_run(o, a, a2));

  function test609_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += a[i3].p;
          }
        }
      }

      sum += a[i0].p;
    }

    return sum;
  }
}

print("test609: " + test609());

function test610() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test610_run(o, a, a2));

  function test610_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test610: " + test610());

function test611() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test611_run(o, a, a2));

  function test611_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test611: " + test611());

function test612() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test612_run(o, a, a2));

  function test612_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test612: " + test612());

function test613() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test613_run(o, a, a2));

  function test613_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test613_access(o, a, i3);
          }
        }
      }

      sum += test613_access(o, a, i0);
    }

    function test613_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test613: " + test613());

function test614() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test614_run(o, a, a2));

  function test614_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[i2].p = -a[i2].p - 1, a[i2].p);
        }

        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }
    }

    return sum;
  }
}

print("test614: " + test614());

function test615() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test615_run(o, a, a2));

  function test615_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test615: " + test615());

function test616() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test616_run(o, a, a2));

  function test616_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test616_access(o, a, i0);
    }

    function test616_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test616: " + test616());

function test617() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test617_run(o, a, a2));

  function test617_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test617_access(o, a, i1);
      }

      a = a2;
      sum += test617_access(o, a, i0);
    }

    function test617_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test617: " + test617());

function test618() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test618_run(o, a, a2));

  function test618_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test618: " + test618());

function test619() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test619_run(o, a, a2));

  function test619_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
      }

      a = a2;
      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test619: " + test619());

function test620() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test620_run(o, a, a2));

  function test620_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }

      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test620: " + test620());

function test621() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test621_run(o, a, a2));

  function test621_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0].p = -a[0].p - 1, a[0].p);
          }
        }
      }

      a = a2;
      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test621: " + test621());

function test622() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test622_run(o, a, a2));

  function test622_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test622_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test622_access(o, a, i0);
    }

    function test622_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test622: " + test622());

function test623() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test623_run(o, a, a2));

  function test623_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test623_access(o, a, i3);
          }
        }
      }

      sum += test623_access(o, a, i0);
    }

    function test623_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test623: " + test623());

function test624() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test624_run(o, a, a2));

  function test624_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test624_access(o, a, i2);
        }

        sum += test624_access(o, a, i1);
      }

      a = a2;
    }

    function test624_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test624: " + test624());

function test625() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test625_run(o, a, a2));

  function test625_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test625_access(o, a, i2);
        }

        a = a2;
        sum += test625_access(o, a, i1);
      }
    }

    function test625_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test625: " + test625());

function test626() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test626_run(o, a, a2));

  function test626_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[0].p = -a[0].p - 1, a[0].p);
        }

        sum += (a[0].p = -a[0].p - 1, a[0].p);
      }
    }

    return sum;
  }
}

print("test626: " + test626());

function test627() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test627_run(o, a, a2));

  function test627_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0].p = -a[0].p - 1, a[0].p);
          }
        }
      }

      a = a2;
      sum += (a[0].p = -a[0].p - 1, a[0].p);
    }

    return sum;
  }
}

print("test627: " + test627());

function test628() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test628_run(o, a, a2));

  function test628_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3].p = -a[i3].p - 1, a[i3].p);
          }
        }

        a = a2;
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test628: " + test628());

function test629() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test629_run(o, a, a2));

  function test629_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[i3].p = -a[i3].p - 1, a[i3].p);
          }
        }
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test629: " + test629());

function test630() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test630_run(o, a, a2));

  function test630_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test630_access(o, a, i0);
    }

    function test630_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test630: " + test630());

function test631() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test631_run(o, a, a2));

  function test631_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test631_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test631_access(o, a, i0);
    }

    function test631_access(o, a, i) {
      return a[-1].p = -a[-1].p - 1, a[-1].p;
    }

    return sum;
  }
}

print("test631: " + test631());

function test632() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test632_run(o, a, a2));

  function test632_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test632_access(o, a, i1);
      }

      sum += test632_access(o, a, i0);
    }

    function test632_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test632: " + test632());

function test633() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test633_run(o, a, a2));

  function test633_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test633_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test633_access(o, a, i0);
    }

    function test633_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test633: " + test633());

function test634() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test634_run(o, a, a2));

  function test634_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += (a[i1].p = -a[i1].p - 1, a[i1].p);
      }

      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test634: " + test634());

function test635() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test635_run(o, a, a2));

  function test635_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3].p = -a[i3].p - 1, a[i3].p);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += (a[i0].p = -a[i0].p - 1, a[i0].p);
    }

    return sum;
  }
}

print("test635: " + test635());

function test636() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test636_run(o, a, a2));

  function test636_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test636: " + test636());

function test637() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test637_run(o, a, a2));

  function test637_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test637: " + test637());

function test638() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test638_run(o, a, a2));

  function test638_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test638_access(o, a, i2);
        }

        sum += test638_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test638_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test638: " + test638());

function test639() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test639_run(o, a, a2));

  function test639_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test639_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test639_access(o, a, i1);
      }
    }

    function test639_access(o, a, i) {
      return a[0].p = -a[0].p - 1, a[0].p;
    }

    return sum;
  }
}

print("test639: " + test639());

function test640() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test640_run(o, a, a2));

  function test640_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test640_access(o, a, i2);
        }

        sum += test640_access(o, a, i1);
      }
    }

    function test640_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test640: " + test640());

function test641() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test641_run(o, a, a2));

  function test641_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test641_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test641_access(o, a, i0);
    }

    function test641_access(o, a, i) {
      return a[i].p = -a[i].p - 1, a[i].p;
    }

    return sum;
  }
}

print("test641: " + test641());

function test642() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test642_run(o, a, a2));

  function test642_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test642: " + test642());

function test643() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test643_run(o, a, a2));

  function test643_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
          }
        }
      }

      sum += (a[-1].p = -a[-1].p - 1, a[-1].p);
    }

    return sum;
  }
}

print("test643: " + test643());

function test644() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test644_run(o, a, a2));

  function test644_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test644: " + test644());

function test645() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test645_run(o, a, a2));

  function test645_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1].p;
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test645: " + test645());

function test646() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test646_run(o, a, a2));

  function test646_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1].p;
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test646: " + test646());

function test647() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test647_run(o, a, a2));

  function test647_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test647_access(o, a, i3);
          }
        }
      }

      sum += test647_access(o, a, i0);
    }

    function test647_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test647: " + test647());

function test648() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test648_run(o, a, a2));

  function test648_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[-1].p;
        }

        sum += o.a[-1].p;
      }
    }

    return sum;
  }
}

print("test648: " + test648());

function test649() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test649_run(o, a, a2));

  function test649_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0].p;
          }
        }
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test649: " + test649());

function test650() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test650_run(o, a, a2));

  function test650_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test650_access(o, a, i0);
    }

    function test650_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test650: " + test650());

function test651() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test651_run(o, a, a2));

  function test651_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test651_access(o, a, i1);
      }

      a = a2;
      sum += test651_access(o, a, i0);
    }

    function test651_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test651: " + test651());

function test652() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test652_run(o, a, a2));

  function test652_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[0].p;
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test652: " + test652());

function test653() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test653_run(o, a, a2));

  function test653_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0].p;
      }

      a = a2;
      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test653: " + test653());

function test654() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test654_run(o, a, a2));

  function test654_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[i1].p;
      }

      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test654: " + test654());

function test655() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test655_run(o, a, a2));

  function test655_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3].p;
          }
        }
      }

      a = a2;
      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test655: " + test655());

function test656() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test656_run(o, a, a2));

  function test656_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test656_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test656_access(o, a, i0);
    }

    function test656_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test656: " + test656());

function test657() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test657_run(o, a, a2));

  function test657_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test657_access(o, a, i3);
          }
        }
      }

      sum += test657_access(o, a, i0);
    }

    function test657_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test657: " + test657());

function test658() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test658_run(o, a, a2));

  function test658_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test658_access(o, a, i2);
        }

        sum += test658_access(o, a, i1);
      }

      a = a2;
    }

    function test658_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test658: " + test658());

function test659() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test659_run(o, a, a2));

  function test659_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test659_access(o, a, i2);
        }

        a = a2;
        sum += test659_access(o, a, i1);
      }
    }

    function test659_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test659: " + test659());

function test660() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test660_run(o, a, a2));

  function test660_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[i2].p;
        }

        sum += o.a[i1].p;
      }
    }

    return sum;
  }
}

print("test660: " + test660());

function test661() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test661_run(o, a, a2));

  function test661_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3].p;
          }
        }
      }

      a = a2;
      sum += o.a[i0].p;
    }

    return sum;
  }
}

print("test661: " + test661());

function test662() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test662_run(o, a, a2));

  function test662_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1].p;
          }
        }

        a = a2;
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test662: " + test662());

function test663() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test663_run(o, a, a2));

  function test663_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[-1].p;
          }
        }
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test663: " + test663());

function test664() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test664_run(o, a, a2));

  function test664_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test664_access(o, a, i0);
    }

    function test664_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test664: " + test664());

function test665() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test665_run(o, a, a2));

  function test665_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test665_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test665_access(o, a, i0);
    }

    function test665_access(o, a, i) {
      return o.a[0].p;
    }

    return sum;
  }
}

print("test665: " + test665());

function test666() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test666_run(o, a, a2));

  function test666_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test666_access(o, a, i1);
      }

      sum += test666_access(o, a, i0);
    }

    function test666_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test666: " + test666());

function test667() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test667_run(o, a, a2));

  function test667_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test667_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test667_access(o, a, i0);
    }

    function test667_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test667: " + test667());

function test668() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test668_run(o, a, a2));

  function test668_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += o.a[-1].p;
      }

      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test668: " + test668());

function test669() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test669_run(o, a, a2));

  function test669_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1].p;
          }
        }
      }

      changeToEs5Array_object(a);
      sum += o.a[-1].p;
    }

    return sum;
  }
}

print("test669: " + test669());

function test670() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test670_run(o, a, a2));

  function test670_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test670: " + test670());

function test671() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test671_run(o, a, a2));

  function test671_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += o.a[0].p;
          }
        }
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test671: " + test671());

function test672() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test672_run(o, a, a2));

  function test672_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test672_access(o, a, i2);
        }

        sum += test672_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test672_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test672: " + test672());

function test673() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test673_run(o, a, a2));

  function test673_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test673_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test673_access(o, a, i1);
      }
    }

    function test673_access(o, a, i) {
      return o.a[i].p;
    }

    return sum;
  }
}

print("test673: " + test673());

function test674() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test674_run(o, a, a2));

  function test674_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test674_access(o, a, i2);
        }

        sum += test674_access(o, a, i1);
      }
    }

    function test674_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test674: " + test674());

function test675() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test675_run(o, a, a2));

  function test675_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test675_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test675_access(o, a, i0);
    }

    function test675_access(o, a, i) {
      return o.a[-1].p;
    }

    return sum;
  }
}

print("test675: " + test675());

function test676() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test676_run(o, a, a2));

  function test676_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0].p;
          }
        }

        changeToEs5Array_object(a);
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test676: " + test676());

function test677() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test677_run(o, a, a2));

  function test677_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += o.a[0].p;
          }
        }
      }

      sum += o.a[0].p;
    }

    return sum;
  }
}

print("test677: " + test677());

function test678() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test678_run(o, a, a2));

  function test678_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test678: " + test678());

function test679() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test679_run(o, a, a2));

  function test679_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test679: " + test679());

function test680() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test680_run(o, a, a2));

  function test680_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test680: " + test680());

function test681() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test681_run(o, a, a2));

  function test681_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test681_access(o, a, i3);
          }
        }
      }

      sum += test681_access(o, a, i0);
    }

    function test681_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test681: " + test681());

function test682() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test682_run(o, a, a2));

  function test682_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
        }

        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }
    }

    return sum;
  }
}

print("test682: " + test682());

function test683() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test683_run(o, a, a2));

  function test683_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test683: " + test683());

function test684() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test684_run(o, a, a2));

  function test684_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test684_access(o, a, i0);
    }

    function test684_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test684: " + test684());

function test685() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test685_run(o, a, a2));

  function test685_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test685_access(o, a, i1);
      }

      a = a2;
      sum += test685_access(o, a, i0);
    }

    function test685_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test685: " + test685());

function test686() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test686_run(o, a, a2));

  function test686_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[i1].p = -o.a[i1].p - 1, o.a[i1].p);
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test686: " + test686());

function test687() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test687_run(o, a, a2));

  function test687_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1].p = -o.a[i1].p - 1, o.a[i1].p);
      }

      a = a2;
      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test687: " + test687());

function test688() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test688_run(o, a, a2));

  function test688_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }

      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test688: " + test688());

function test689() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test689_run(o, a, a2));

  function test689_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
          }
        }
      }

      a = a2;
      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test689: " + test689());

function test690() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test690_run(o, a, a2));

  function test690_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test690_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test690_access(o, a, i0);
    }

    function test690_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test690: " + test690());

function test691() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test691_run(o, a, a2));

  function test691_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test691_access(o, a, i3);
          }
        }
      }

      sum += test691_access(o, a, i0);
    }

    function test691_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test691: " + test691());

function test692() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test692_run(o, a, a2));

  function test692_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test692_access(o, a, i2);
        }

        sum += test692_access(o, a, i1);
      }

      a = a2;
    }

    function test692_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test692: " + test692());

function test693() {
  "use strict";

  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test693_run(o, a, a2));

  function test693_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test693_access(o, a, i2);
        }

        a = a2;
        sum += test693_access(o, a, i1);
      }
    }

    function test693_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test693: " + test693());

function test694() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test694_run(o, a, a2));

  function test694_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
        }

        sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
      }
    }

    return sum;
  }
}

print("test694: " + test694());

function test695() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test695_run(o, a, a2));

  function test695_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
          }
        }
      }

      a = a2;
      sum += (o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p);
    }

    return sum;
  }
}

print("test695: " + test695());

function test696() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test696_run(o, a, a2));

  function test696_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
          }
        }

        a = a2;
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test696: " + test696());

function test697() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test697_run(o, a, a2));

  function test697_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
          }
        }
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test697: " + test697());

function test698() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test698_run(o, a, a2));

  function test698_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_object(a);
      sum += test698_access(o, a, i0);
    }

    function test698_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test698: " + test698());

function test699() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test699_run(o, a, a2));

  function test699_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test699_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test699_access(o, a, i0);
    }

    function test699_access(o, a, i) {
      return o.a[i].p = -o.a[i].p - 1, o.a[i].p;
    }

    return sum;
  }
}

print("test699: " + test699());

function test700() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test700_run(o, a, a2));

  function test700_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += test700_access(o, a, i1);
      }

      sum += test700_access(o, a, i0);
    }

    function test700_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test700: " + test700());

function test701() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test701_run(o, a, a2));

  function test701_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test701_access(o, a, i1);
      }

      changeToEs5Array_object(a);
      sum += test701_access(o, a, i0);
    }

    function test701_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test701: " + test701());

function test702() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test702_run(o, a, a2));

  function test702_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_object(a);
        sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
      }

      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test702: " + test702());

function test703() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test703_run(o, a, a2));

  function test703_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += (o.a[0].p = -o.a[0].p - 1, o.a[0].p);
    }

    return sum;
  }
}

print("test703: " + test703());

function test704() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test704_run(o, a, a2));

  function test704_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test704: " + test704());

function test705() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test705_run(o, a, a2));

  function test705_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test705: " + test705());

function test706() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test706_run(o, a, a2));

  function test706_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test706_access(o, a, i2);
        }

        sum += test706_access(o, a, i1);
      }

      changeToEs5Array_object(a);
    }

    function test706_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test706: " + test706());

function test707() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test707_run(o, a, a2));

  function test707_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test707_access(o, a, i2);
        }

        changeToEs5Array_object(a);
        sum += test707_access(o, a, i1);
      }
    }

    function test707_access(o, a, i) {
      return o.a[-1].p = -o.a[-1].p - 1, o.a[-1].p;
    }

    return sum;
  }
}

print("test707: " + test707());

function test708() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test708_run(o, a, a2));

  function test708_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
          }

          sum += test708_access(o, a, i2);
        }

        sum += test708_access(o, a, i1);
      }
    }

    function test708_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test708: " + test708());

function test709() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test709_run(o, a, a2));

  function test709_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test709_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_object(a);
      sum += test709_access(o, a, i0);
    }

    function test709_access(o, a, i) {
      return o.a[0].p = -o.a[0].p - 1, o.a[0].p;
    }

    return sum;
  }
}

print("test709: " + test709());

function test710() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test710_run(o, a, a2));

  function test710_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }

        changeToEs5Array_object(a);
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test710: " + test710());

function test711() {
  var o = {
    a: [{
      p: 1
    }, {
      p: 2
    }]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = {
      p: -a[i].p
    };
  }

  return toSafeInt(test711_run(o, a, a2));

  function test711_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_object(a);
            sum += (o.a[i3].p = -o.a[i3].p - 1, o.a[i3].p);
          }
        }
      }

      sum += (o.a[i0].p = -o.a[i0].p - 1, o.a[i0].p);
    }

    return sum;
  }
}

print("test711: " + test711());

function test712() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test712_run(o, a, a2));

  function test712_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[0];
    }

    return sum;
  }
}

print("test712: " + test712());

function test713() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test713_run(o, a, a2));

  function test713_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test713: " + test713());

function test714() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test714_run(o, a, a2));

  function test714_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test714: " + test714());

function test715() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test715_run(o, a, a2));

  function test715_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test715_access(o, a, i3);
          }
        }
      }

      sum += test715_access(o, a, i0);
    }

    function test715_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test715: " + test715());

function test716() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test716_run(o, a, a2));

  function test716_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[i2];
        }

        sum += a[i1];
      }
    }

    return sum;
  }
}

print("test716: " + test716());

function test717() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test717_run(o, a, a2));

  function test717_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test717: " + test717());

function test718() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test718_run(o, a, a2));

  function test718_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test718_access(o, a, i0);
    }

    function test718_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test718: " + test718());

function test719() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test719_run(o, a, a2));

  function test719_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test719_access(o, a, i1);
      }

      a = a2;
      sum += test719_access(o, a, i0);
    }

    function test719_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test719: " + test719());

function test720() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test720_run(o, a, a2));

  function test720_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test720: " + test720());

function test721() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test721_run(o, a, a2));

  function test721_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1];
      }

      a = a2;
      sum += a[-1];
    }

    return sum;
  }
}

print("test721: " + test721());

function test722() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test722_run(o, a, a2));

  function test722_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test722: " + test722());

function test723() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test723_run(o, a, a2));

  function test723_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      a = a2;
      sum += a[0];
    }

    return sum;
  }
}

print("test723: " + test723());

function test724() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test724_run(o, a, a2));

  function test724_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test724_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test724_access(o, a, i0);
    }

    function test724_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test724: " + test724());

function test725() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test725_run(o, a, a2));

  function test725_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test725_access(o, a, i3);
          }
        }
      }

      sum += test725_access(o, a, i0);
    }

    function test725_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test725: " + test725());

function test726() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test726_run(o, a, a2));

  function test726_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test726_access(o, a, i2);
        }

        sum += test726_access(o, a, i1);
      }

      a = a2;
    }

    function test726_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test726: " + test726());

function test727() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test727_run(o, a, a2));

  function test727_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test727_access(o, a, i2);
        }

        a = a2;
        sum += test727_access(o, a, i1);
      }
    }

    function test727_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test727: " + test727());

function test728() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test728_run(o, a, a2));

  function test728_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[0];
        }

        sum += a[0];
      }
    }

    return sum;
  }
}

print("test728: " + test728());

function test729() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test729_run(o, a, a2));

  function test729_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      a = a2;
      sum += a[0];
    }

    return sum;
  }
}

print("test729: " + test729());

function test730() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test730_run(o, a, a2));

  function test730_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }

        a = a2;
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test730: " + test730());

function test731() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test731_run(o, a, a2));

  function test731_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[i3];
          }
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test731: " + test731());

function test732() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test732_run(o, a, a2));

  function test732_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test732_access(o, a, i0);
    }

    function test732_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test732: " + test732());

function test733() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test733_run(o, a, a2));

  function test733_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test733_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test733_access(o, a, i0);
    }

    function test733_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test733: " + test733());

function test734() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test734_run(o, a, a2));

  function test734_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test734_access(o, a, i1);
      }

      sum += test734_access(o, a, i0);
    }

    function test734_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test734: " + test734());

function test735() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test735_run(o, a, a2));

  function test735_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test735_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test735_access(o, a, i0);
    }

    function test735_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test735: " + test735());

function test736() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test736_run(o, a, a2));

  function test736_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test736: " + test736());

function test737() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test737_run(o, a, a2));

  function test737_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += a[i0];
    }

    return sum;
  }
}

print("test737: " + test737());

function test738() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test738_run(o, a, a2));

  function test738_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test738: " + test738());

function test739() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test739_run(o, a, a2));

  function test739_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test739: " + test739());

function test740() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test740_run(o, a, a2));

  function test740_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test740_access(o, a, i2);
        }

        sum += test740_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test740_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test740: " + test740());

function test741() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test741_run(o, a, a2));

  function test741_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test741_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test741_access(o, a, i1);
      }
    }

    function test741_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test741: " + test741());

function test742() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test742_run(o, a, a2));

  function test742_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test742_access(o, a, i2);
        }

        sum += test742_access(o, a, i1);
      }
    }

    function test742_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test742: " + test742());

function test743() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test743_run(o, a, a2));

  function test743_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test743_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test743_access(o, a, i0);
    }

    function test743_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test743: " + test743());

function test744() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test744_run(o, a, a2));

  function test744_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test744: " + test744());

function test745() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test745_run(o, a, a2));

  function test745_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test745: " + test745());

function test746() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test746_run(o, a, a2));

  function test746_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test746: " + test746());

function test747() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test747_run(o, a, a2));

  function test747_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test747: " + test747());

function test748() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test748_run(o, a, a2));

  function test748_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test748: " + test748());

function test749() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test749_run(o, a, a2));

  function test749_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test749_access(o, a, i3);
          }
        }
      }

      sum += test749_access(o, a, i0);
    }

    function test749_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test749: " + test749());

function test750() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test750_run(o, a, a2));

  function test750_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[-1] = -a[-1] - 1, a[-1]);
        }

        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }
    }

    return sum;
  }
}

print("test750: " + test750());

function test751() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test751_run(o, a, a2));

  function test751_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test751: " + test751());

function test752() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test752_run(o, a, a2));

  function test752_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test752_access(o, a, i0);
    }

    function test752_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test752: " + test752());

function test753() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test753_run(o, a, a2));

  function test753_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test753_access(o, a, i1);
      }

      a = a2;
      sum += test753_access(o, a, i0);
    }

    function test753_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test753: " + test753());

function test754() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test754_run(o, a, a2));

  function test754_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test754: " + test754());

function test755() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test755_run(o, a, a2));

  function test755_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      a = a2;
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test755: " + test755());

function test756() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test756_run(o, a, a2));

  function test756_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test756: " + test756());

function test757() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test757_run(o, a, a2));

  function test757_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      a = a2;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test757: " + test757());

function test758() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test758_run(o, a, a2));

  function test758_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test758_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test758_access(o, a, i0);
    }

    function test758_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test758: " + test758());

function test759() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test759_run(o, a, a2));

  function test759_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test759_access(o, a, i3);
          }
        }
      }

      sum += test759_access(o, a, i0);
    }

    function test759_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test759: " + test759());

function test760() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test760_run(o, a, a2));

  function test760_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test760_access(o, a, i2);
        }

        sum += test760_access(o, a, i1);
      }

      a = a2;
    }

    function test760_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test760: " + test760());

function test761() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test761_run(o, a, a2));

  function test761_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test761_access(o, a, i2);
        }

        a = a2;
        sum += test761_access(o, a, i1);
      }
    }

    function test761_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test761: " + test761());

function test762() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test762_run(o, a, a2));

  function test762_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[i2] = -a[i2] - 1, a[i2]);
        }

        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }
    }

    return sum;
  }
}

print("test762: " + test762());

function test763() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test763_run(o, a, a2));

  function test763_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      a = a2;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test763: " + test763());

function test764() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test764_run(o, a, a2));

  function test764_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }

        a = a2;
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test764: " + test764());

function test765() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test765_run(o, a, a2));

  function test765_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test765: " + test765());

function test766() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test766_run(o, a, a2));

  function test766_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test766_access(o, a, i0);
    }

    function test766_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test766: " + test766());

function test767() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test767_run(o, a, a2));

  function test767_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test767_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test767_access(o, a, i0);
    }

    function test767_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test767: " + test767());

function test768() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test768_run(o, a, a2));

  function test768_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test768_access(o, a, i1);
      }

      sum += test768_access(o, a, i0);
    }

    function test768_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test768: " + test768());

function test769() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test769_run(o, a, a2));

  function test769_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test769_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test769_access(o, a, i0);
    }

    function test769_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test769: " + test769());

function test770() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test770_run(o, a, a2));

  function test770_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test770: " + test770());

function test771() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test771_run(o, a, a2));

  function test771_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test771: " + test771());

function test772() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test772_run(o, a, a2));

  function test772_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test772: " + test772());

function test773() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test773_run(o, a, a2));

  function test773_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test773: " + test773());

function test774() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test774_run(o, a, a2));

  function test774_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test774_access(o, a, i2);
        }

        sum += test774_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test774_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test774: " + test774());

function test775() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test775_run(o, a, a2));

  function test775_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test775_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test775_access(o, a, i1);
      }
    }

    function test775_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test775: " + test775());

function test776() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test776_run(o, a, a2));

  function test776_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test776_access(o, a, i2);
        }

        sum += test776_access(o, a, i1);
      }
    }

    function test776_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test776: " + test776());

function test777() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test777_run(o, a, a2));

  function test777_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test777_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test777_access(o, a, i0);
    }

    function test777_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test777: " + test777());

function test778() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test778_run(o, a, a2));

  function test778_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test778: " + test778());

function test779() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test779_run(o, a, a2));

  function test779_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test779: " + test779());

function test780() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test780_run(o, a, a2));

  function test780_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test780: " + test780());

function test781() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test781_run(o, a, a2));

  function test781_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test781: " + test781());

function test782() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test782_run(o, a, a2));

  function test782_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test782: " + test782());

function test783() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test783_run(o, a, a2));

  function test783_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test783_access(o, a, i3);
          }
        }
      }

      sum += test783_access(o, a, i0);
    }

    function test783_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test783: " + test783());

function test784() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test784_run(o, a, a2));

  function test784_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[0];
        }

        sum += o.a[0];
      }
    }

    return sum;
  }
}

print("test784: " + test784());

function test785() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test785_run(o, a, a2));

  function test785_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test785: " + test785());

function test786() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test786_run(o, a, a2));

  function test786_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test786_access(o, a, i0);
    }

    function test786_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test786: " + test786());

function test787() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test787_run(o, a, a2));

  function test787_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test787_access(o, a, i1);
      }

      a = a2;
      sum += test787_access(o, a, i0);
    }

    function test787_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test787: " + test787());

function test788() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test788_run(o, a, a2));

  function test788_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test788: " + test788());

function test789() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test789_run(o, a, a2));

  function test789_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1];
      }

      a = a2;
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test789: " + test789());

function test790() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test790_run(o, a, a2));

  function test790_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test790: " + test790());

function test791() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test791_run(o, a, a2));

  function test791_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      a = a2;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test791: " + test791());

function test792() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test792_run(o, a, a2));

  function test792_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test792_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test792_access(o, a, i0);
    }

    function test792_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test792: " + test792());

function test793() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test793_run(o, a, a2));

  function test793_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test793_access(o, a, i3);
          }
        }
      }

      sum += test793_access(o, a, i0);
    }

    function test793_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test793: " + test793());

function test794() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test794_run(o, a, a2));

  function test794_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test794_access(o, a, i2);
        }

        sum += test794_access(o, a, i1);
      }

      a = a2;
    }

    function test794_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test794: " + test794());

function test795() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test795_run(o, a, a2));

  function test795_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test795_access(o, a, i2);
        }

        a = a2;
        sum += test795_access(o, a, i1);
      }
    }

    function test795_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test795: " + test795());

function test796() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test796_run(o, a, a2));

  function test796_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[-1];
        }

        sum += o.a[-1];
      }
    }

    return sum;
  }
}

print("test796: " + test796());

function test797() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test797_run(o, a, a2));

  function test797_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      a = a2;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test797: " + test797());

function test798() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test798_run(o, a, a2));

  function test798_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }

        a = a2;
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test798: " + test798());

function test799() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test799_run(o, a, a2));

  function test799_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[0];
          }
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test799: " + test799());

function test800() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test800_run(o, a, a2));

  function test800_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test800_access(o, a, i0);
    }

    function test800_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test800: " + test800());

function test801() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test801_run(o, a, a2));

  function test801_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test801_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test801_access(o, a, i0);
    }

    function test801_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test801: " + test801());

function test802() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test802_run(o, a, a2));

  function test802_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test802_access(o, a, i1);
      }

      sum += test802_access(o, a, i0);
    }

    function test802_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test802: " + test802());

function test803() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test803_run(o, a, a2));

  function test803_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test803_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test803_access(o, a, i0);
    }

    function test803_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test803: " + test803());

function test804() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test804_run(o, a, a2));

  function test804_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test804: " + test804());

function test805() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test805_run(o, a, a2));

  function test805_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += o.a[0];
    }

    return sum;
  }
}

print("test805: " + test805());

function test806() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test806_run(o, a, a2));

  function test806_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test806: " + test806());

function test807() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test807_run(o, a, a2));

  function test807_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test807: " + test807());

function test808() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test808_run(o, a, a2));

  function test808_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test808_access(o, a, i2);
        }

        sum += test808_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test808_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test808: " + test808());

function test809() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test809_run(o, a, a2));

  function test809_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test809_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test809_access(o, a, i1);
      }
    }

    function test809_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test809: " + test809());

function test810() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test810_run(o, a, a2));

  function test810_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test810_access(o, a, i2);
        }

        sum += test810_access(o, a, i1);
      }
    }

    function test810_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test810: " + test810());

function test811() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test811_run(o, a, a2));

  function test811_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test811_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test811_access(o, a, i0);
    }

    function test811_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test811: " + test811());

function test812() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test812_run(o, a, a2));

  function test812_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test812: " + test812());

function test813() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test813_run(o, a, a2));

  function test813_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test813: " + test813());

function test814() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test814_run(o, a, a2));

  function test814_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test814: " + test814());

function test815() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test815_run(o, a, a2));

  function test815_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test815: " + test815());

function test816() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test816_run(o, a, a2));

  function test816_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test816: " + test816());

function test817() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test817_run(o, a, a2));

  function test817_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test817_access(o, a, i3);
          }
        }
      }

      sum += test817_access(o, a, i0);
    }

    function test817_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test817: " + test817());

function test818() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test818_run(o, a, a2));

  function test818_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[i2] = -o.a[i2] - 1, o.a[i2]);
        }

        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }
    }

    return sum;
  }
}

print("test818: " + test818());

function test819() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test819_run(o, a, a2));

  function test819_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test819: " + test819());

function test820() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test820_run(o, a, a2));

  function test820_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test820_access(o, a, i0);
    }

    function test820_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test820: " + test820());

function test821() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test821_run(o, a, a2));

  function test821_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test821_access(o, a, i1);
      }

      a = a2;
      sum += test821_access(o, a, i0);
    }

    function test821_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test821: " + test821());

function test822() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test822_run(o, a, a2));

  function test822_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test822: " + test822());

function test823() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test823_run(o, a, a2));

  function test823_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      a = a2;
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test823: " + test823());

function test824() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test824_run(o, a, a2));

  function test824_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test824: " + test824());

function test825() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test825_run(o, a, a2));

  function test825_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      a = a2;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test825: " + test825());

function test826() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test826_run(o, a, a2));

  function test826_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test826_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test826_access(o, a, i0);
    }

    function test826_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test826: " + test826());

function test827() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test827_run(o, a, a2));

  function test827_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test827_access(o, a, i3);
          }
        }
      }

      sum += test827_access(o, a, i0);
    }

    function test827_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test827: " + test827());

function test828() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test828_run(o, a, a2));

  function test828_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test828_access(o, a, i2);
        }

        sum += test828_access(o, a, i1);
      }

      a = a2;
    }

    function test828_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test828: " + test828());

function test829() {
  "use strict";

  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test829_run(o, a, a2));

  function test829_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test829_access(o, a, i2);
        }

        a = a2;
        sum += test829_access(o, a, i1);
      }
    }

    function test829_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test829: " + test829());

function test830() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test830_run(o, a, a2));

  function test830_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
        }

        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }
    }

    return sum;
  }
}

print("test830: " + test830());

function test831() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test831_run(o, a, a2));

  function test831_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      a = a2;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test831: " + test831());

function test832() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test832_run(o, a, a2));

  function test832_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }

        a = a2;
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test832: " + test832());

function test833() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test833_run(o, a, a2));

  function test833_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test833: " + test833());

function test834() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test834_run(o, a, a2));

  function test834_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test834_access(o, a, i0);
    }

    function test834_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test834: " + test834());

function test835() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test835_run(o, a, a2));

  function test835_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test835_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test835_access(o, a, i0);
    }

    function test835_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test835: " + test835());

function test836() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test836_run(o, a, a2));

  function test836_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test836_access(o, a, i1);
      }

      sum += test836_access(o, a, i0);
    }

    function test836_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test836: " + test836());

function test837() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test837_run(o, a, a2));

  function test837_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test837_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test837_access(o, a, i0);
    }

    function test837_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test837: " + test837());

function test838() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test838_run(o, a, a2));

  function test838_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test838: " + test838());

function test839() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test839_run(o, a, a2));

  function test839_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test839: " + test839());

function test840() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test840_run(o, a, a2));

  function test840_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test840: " + test840());

function test841() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test841_run(o, a, a2));

  function test841_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test841: " + test841());

function test842() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test842_run(o, a, a2));

  function test842_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test842_access(o, a, i2);
        }

        sum += test842_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test842_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test842: " + test842());

function test843() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test843_run(o, a, a2));

  function test843_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test843_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test843_access(o, a, i1);
      }
    }

    function test843_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test843: " + test843());

function test844() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test844_run(o, a, a2));

  function test844_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test844_access(o, a, i2);
        }

        sum += test844_access(o, a, i1);
      }
    }

    function test844_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test844: " + test844());

function test845() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test845_run(o, a, a2));

  function test845_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test845_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test845_access(o, a, i0);
    }

    function test845_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test845: " + test845());

function test846() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test846_run(o, a, a2));

  function test846_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test846: " + test846());

function test847() {
  var o = {
    a: [1, 2]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test847_run(o, a, a2));

  function test847_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test847: " + test847());

function test848() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test848_run(o, a, a2));

  function test848_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[i0];
    }

    return sum;
  }
}

print("test848: " + test848());

function test849() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test849_run(o, a, a2));

  function test849_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test849: " + test849());

function test850() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test850_run(o, a, a2));

  function test850_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test850: " + test850());

function test851() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test851_run(o, a, a2));

  function test851_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test851_access(o, a, i3);
          }
        }
      }

      sum += test851_access(o, a, i0);
    }

    function test851_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test851: " + test851());

function test852() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test852_run(o, a, a2));

  function test852_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[-1];
        }

        sum += a[-1];
      }
    }

    return sum;
  }
}

print("test852: " + test852());

function test853() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test853_run(o, a, a2));

  function test853_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test853: " + test853());

function test854() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test854_run(o, a, a2));

  function test854_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test854_access(o, a, i0);
    }

    function test854_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test854: " + test854());

function test855() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test855_run(o, a, a2));

  function test855_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test855_access(o, a, i1);
      }

      a = a2;
      sum += test855_access(o, a, i0);
    }

    function test855_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test855: " + test855());

function test856() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test856_run(o, a, a2));

  function test856_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test856: " + test856());

function test857() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test857_run(o, a, a2));

  function test857_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0];
      }

      a = a2;
      sum += a[0];
    }

    return sum;
  }
}

print("test857: " + test857());

function test858() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test858_run(o, a, a2));

  function test858_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test858: " + test858());

function test859() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test859_run(o, a, a2));

  function test859_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      a = a2;
      sum += a[i0];
    }

    return sum;
  }
}

print("test859: " + test859());

function test860() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test860_run(o, a, a2));

  function test860_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test860_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test860_access(o, a, i0);
    }

    function test860_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test860: " + test860());

function test861() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test861_run(o, a, a2));

  function test861_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test861_access(o, a, i3);
          }
        }
      }

      sum += test861_access(o, a, i0);
    }

    function test861_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test861: " + test861());

function test862() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test862_run(o, a, a2));

  function test862_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test862_access(o, a, i2);
        }

        sum += test862_access(o, a, i1);
      }

      a = a2;
    }

    function test862_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test862: " + test862());

function test863() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test863_run(o, a, a2));

  function test863_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test863_access(o, a, i2);
        }

        a = a2;
        sum += test863_access(o, a, i1);
      }
    }

    function test863_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test863: " + test863());

function test864() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test864_run(o, a, a2));

  function test864_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[i2];
        }

        sum += a[i1];
      }
    }

    return sum;
  }
}

print("test864: " + test864());

function test865() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test865_run(o, a, a2));

  function test865_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      a = a2;
      sum += a[i0];
    }

    return sum;
  }
}

print("test865: " + test865());

function test866() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test866_run(o, a, a2));

  function test866_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }

        a = a2;
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test866: " + test866());

function test867() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test867_run(o, a, a2));

  function test867_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[-1];
          }
        }
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test867: " + test867());

function test868() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test868_run(o, a, a2));

  function test868_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test868_access(o, a, i0);
    }

    function test868_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test868: " + test868());

function test869() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test869_run(o, a, a2));

  function test869_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test869_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test869_access(o, a, i0);
    }

    function test869_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test869: " + test869());

function test870() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test870_run(o, a, a2));

  function test870_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test870_access(o, a, i1);
      }

      sum += test870_access(o, a, i0);
    }

    function test870_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test870: " + test870());

function test871() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test871_run(o, a, a2));

  function test871_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test871_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test871_access(o, a, i0);
    }

    function test871_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test871: " + test871());

function test872() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test872_run(o, a, a2));

  function test872_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test872: " + test872());

function test873() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test873_run(o, a, a2));

  function test873_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += a[-1];
    }

    return sum;
  }
}

print("test873: " + test873());

function test874() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test874_run(o, a, a2));

  function test874_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test874: " + test874());

function test875() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test875_run(o, a, a2));

  function test875_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test875: " + test875());

function test876() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test876_run(o, a, a2));

  function test876_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test876_access(o, a, i2);
        }

        sum += test876_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test876_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test876: " + test876());

function test877() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test877_run(o, a, a2));

  function test877_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test877_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test877_access(o, a, i1);
      }
    }

    function test877_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test877: " + test877());

function test878() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test878_run(o, a, a2));

  function test878_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test878_access(o, a, i2);
        }

        sum += test878_access(o, a, i1);
      }
    }

    function test878_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test878: " + test878());

function test879() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test879_run(o, a, a2));

  function test879_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test879_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test879_access(o, a, i0);
    }

    function test879_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test879: " + test879());

function test880() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test880_run(o, a, a2));

  function test880_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test880: " + test880());

function test881() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test881_run(o, a, a2));

  function test881_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test881: " + test881());

function test882() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test882_run(o, a, a2));

  function test882_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test882: " + test882());

function test883() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test883_run(o, a, a2));

  function test883_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test883: " + test883());

function test884() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test884_run(o, a, a2));

  function test884_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test884: " + test884());

function test885() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test885_run(o, a, a2));

  function test885_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test885_access(o, a, i3);
          }
        }
      }

      sum += test885_access(o, a, i0);
    }

    function test885_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test885: " + test885());

function test886() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test886_run(o, a, a2));

  function test886_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[0] = -a[0] - 1, a[0]);
        }

        sum += (a[0] = -a[0] - 1, a[0]);
      }
    }

    return sum;
  }
}

print("test886: " + test886());

function test887() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test887_run(o, a, a2));

  function test887_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test887: " + test887());

function test888() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test888_run(o, a, a2));

  function test888_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test888_access(o, a, i0);
    }

    function test888_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test888: " + test888());

function test889() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test889_run(o, a, a2));

  function test889_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test889_access(o, a, i1);
      }

      a = a2;
      sum += test889_access(o, a, i0);
    }

    function test889_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test889: " + test889());

function test890() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test890_run(o, a, a2));

  function test890_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test890: " + test890());

function test891() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test891_run(o, a, a2));

  function test891_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      a = a2;
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test891: " + test891());

function test892() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test892_run(o, a, a2));

  function test892_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test892: " + test892());

function test893() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test893_run(o, a, a2));

  function test893_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      a = a2;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test893: " + test893());

function test894() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test894_run(o, a, a2));

  function test894_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test894_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test894_access(o, a, i0);
    }

    function test894_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test894: " + test894());

function test895() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test895_run(o, a, a2));

  function test895_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test895_access(o, a, i3);
          }
        }
      }

      sum += test895_access(o, a, i0);
    }

    function test895_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test895: " + test895());

function test896() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test896_run(o, a, a2));

  function test896_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test896_access(o, a, i2);
        }

        sum += test896_access(o, a, i1);
      }

      a = a2;
    }

    function test896_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test896: " + test896());

function test897() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test897_run(o, a, a2));

  function test897_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test897_access(o, a, i2);
        }

        a = a2;
        sum += test897_access(o, a, i1);
      }
    }

    function test897_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test897: " + test897());

function test898() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test898_run(o, a, a2));

  function test898_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[-1] = -a[-1] - 1, a[-1]);
        }

        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }
    }

    return sum;
  }
}

print("test898: " + test898());

function test899() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test899_run(o, a, a2));

  function test899_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      a = a2;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test899: " + test899());

function test900() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test900_run(o, a, a2));

  function test900_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }

        a = a2;
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test900: " + test900());

function test901() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test901_run(o, a, a2));

  function test901_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test901: " + test901());

function test902() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test902_run(o, a, a2));

  function test902_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test902_access(o, a, i0);
    }

    function test902_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test902: " + test902());

function test903() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test903_run(o, a, a2));

  function test903_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test903_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test903_access(o, a, i0);
    }

    function test903_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test903: " + test903());

function test904() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test904_run(o, a, a2));

  function test904_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test904_access(o, a, i1);
      }

      sum += test904_access(o, a, i0);
    }

    function test904_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test904: " + test904());

function test905() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test905_run(o, a, a2));

  function test905_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test905_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test905_access(o, a, i0);
    }

    function test905_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test905: " + test905());

function test906() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test906_run(o, a, a2));

  function test906_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test906: " + test906());

function test907() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test907_run(o, a, a2));

  function test907_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test907: " + test907());

function test908() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test908_run(o, a, a2));

  function test908_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test908: " + test908());

function test909() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test909_run(o, a, a2));

  function test909_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test909: " + test909());

function test910() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test910_run(o, a, a2));

  function test910_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test910_access(o, a, i2);
        }

        sum += test910_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test910_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test910: " + test910());

function test911() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test911_run(o, a, a2));

  function test911_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test911_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test911_access(o, a, i1);
      }
    }

    function test911_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test911: " + test911());

function test912() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test912_run(o, a, a2));

  function test912_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test912_access(o, a, i2);
        }

        sum += test912_access(o, a, i1);
      }
    }

    function test912_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test912: " + test912());

function test913() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test913_run(o, a, a2));

  function test913_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test913_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test913_access(o, a, i0);
    }

    function test913_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test913: " + test913());

function test914() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test914_run(o, a, a2));

  function test914_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test914: " + test914());

function test915() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test915_run(o, a, a2));

  function test915_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test915: " + test915());

function test916() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test916_run(o, a, a2));

  function test916_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test916: " + test916());

function test917() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test917_run(o, a, a2));

  function test917_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test917: " + test917());

function test918() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test918_run(o, a, a2));

  function test918_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test918: " + test918());

function test919() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test919_run(o, a, a2));

  function test919_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test919_access(o, a, i3);
          }
        }
      }

      sum += test919_access(o, a, i0);
    }

    function test919_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test919: " + test919());

function test920() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test920_run(o, a, a2));

  function test920_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[i2];
        }

        sum += o.a[i1];
      }
    }

    return sum;
  }
}

print("test920: " + test920());

function test921() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test921_run(o, a, a2));

  function test921_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test921: " + test921());

function test922() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test922_run(o, a, a2));

  function test922_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test922_access(o, a, i0);
    }

    function test922_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test922: " + test922());

function test923() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test923_run(o, a, a2));

  function test923_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test923_access(o, a, i1);
      }

      a = a2;
      sum += test923_access(o, a, i0);
    }

    function test923_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test923: " + test923());

function test924() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test924_run(o, a, a2));

  function test924_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test924: " + test924());

function test925() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test925_run(o, a, a2));

  function test925_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1];
      }

      a = a2;
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test925: " + test925());

function test926() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test926_run(o, a, a2));

  function test926_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test926: " + test926());

function test927() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test927_run(o, a, a2));

  function test927_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      a = a2;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test927: " + test927());

function test928() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test928_run(o, a, a2));

  function test928_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test928_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test928_access(o, a, i0);
    }

    function test928_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test928: " + test928());

function test929() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test929_run(o, a, a2));

  function test929_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test929_access(o, a, i3);
          }
        }
      }

      sum += test929_access(o, a, i0);
    }

    function test929_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test929: " + test929());

function test930() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test930_run(o, a, a2));

  function test930_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test930_access(o, a, i2);
        }

        sum += test930_access(o, a, i1);
      }

      a = a2;
    }

    function test930_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test930: " + test930());

function test931() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test931_run(o, a, a2));

  function test931_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test931_access(o, a, i2);
        }

        a = a2;
        sum += test931_access(o, a, i1);
      }
    }

    function test931_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test931: " + test931());

function test932() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test932_run(o, a, a2));

  function test932_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[0];
        }

        sum += o.a[0];
      }
    }

    return sum;
  }
}

print("test932: " + test932());

function test933() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test933_run(o, a, a2));

  function test933_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      a = a2;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test933: " + test933());

function test934() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test934_run(o, a, a2));

  function test934_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }

        a = a2;
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test934: " + test934());

function test935() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test935_run(o, a, a2));

  function test935_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[i3];
          }
        }
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test935: " + test935());

function test936() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test936_run(o, a, a2));

  function test936_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test936_access(o, a, i0);
    }

    function test936_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test936: " + test936());

function test937() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test937_run(o, a, a2));

  function test937_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test937_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test937_access(o, a, i0);
    }

    function test937_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test937: " + test937());

function test938() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test938_run(o, a, a2));

  function test938_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test938_access(o, a, i1);
      }

      sum += test938_access(o, a, i0);
    }

    function test938_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test938: " + test938());

function test939() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test939_run(o, a, a2));

  function test939_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test939_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test939_access(o, a, i0);
    }

    function test939_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test939: " + test939());

function test940() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test940_run(o, a, a2));

  function test940_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test940: " + test940());

function test941() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test941_run(o, a, a2));

  function test941_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test941: " + test941());

function test942() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test942_run(o, a, a2));

  function test942_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test942: " + test942());

function test943() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test943_run(o, a, a2));

  function test943_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test943: " + test943());

function test944() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test944_run(o, a, a2));

  function test944_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test944_access(o, a, i2);
        }

        sum += test944_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test944_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test944: " + test944());

function test945() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test945_run(o, a, a2));

  function test945_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test945_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test945_access(o, a, i1);
      }
    }

    function test945_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test945: " + test945());

function test946() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test946_run(o, a, a2));

  function test946_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test946_access(o, a, i2);
        }

        sum += test946_access(o, a, i1);
      }
    }

    function test946_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test946: " + test946());

function test947() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test947_run(o, a, a2));

  function test947_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test947_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test947_access(o, a, i0);
    }

    function test947_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test947: " + test947());

function test948() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test948_run(o, a, a2));

  function test948_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test948: " + test948());

function test949() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test949_run(o, a, a2));

  function test949_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test949: " + test949());

function test950() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test950_run(o, a, a2));

  function test950_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test950: " + test950());

function test951() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test951_run(o, a, a2));

  function test951_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test951: " + test951());

function test952() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test952_run(o, a, a2));

  function test952_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test952: " + test952());

function test953() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test953_run(o, a, a2));

  function test953_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test953_access(o, a, i3);
          }
        }
      }

      sum += test953_access(o, a, i0);
    }

    function test953_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test953: " + test953());

function test954() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test954_run(o, a, a2));

  function test954_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
        }

        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }
    }

    return sum;
  }
}

print("test954: " + test954());

function test955() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test955_run(o, a, a2));

  function test955_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test955: " + test955());

function test956() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test956_run(o, a, a2));

  function test956_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test956_access(o, a, i0);
    }

    function test956_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test956: " + test956());

function test957() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test957_run(o, a, a2));

  function test957_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test957_access(o, a, i1);
      }

      a = a2;
      sum += test957_access(o, a, i0);
    }

    function test957_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test957: " + test957());

function test958() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test958_run(o, a, a2));

  function test958_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test958: " + test958());

function test959() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test959_run(o, a, a2));

  function test959_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      a = a2;
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test959: " + test959());

function test960() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test960_run(o, a, a2));

  function test960_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test960: " + test960());

function test961() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test961_run(o, a, a2));

  function test961_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      a = a2;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test961: " + test961());

function test962() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test962_run(o, a, a2));

  function test962_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test962_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test962_access(o, a, i0);
    }

    function test962_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test962: " + test962());

function test963() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test963_run(o, a, a2));

  function test963_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test963_access(o, a, i3);
          }
        }
      }

      sum += test963_access(o, a, i0);
    }

    function test963_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test963: " + test963());

function test964() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test964_run(o, a, a2));

  function test964_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test964_access(o, a, i2);
        }

        sum += test964_access(o, a, i1);
      }

      a = a2;
    }

    function test964_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test964: " + test964());

function test965() {
  "use strict";

  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test965_run(o, a, a2));

  function test965_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test965_access(o, a, i2);
        }

        a = a2;
        sum += test965_access(o, a, i1);
      }
    }

    function test965_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test965: " + test965());

function test966() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test966_run(o, a, a2));

  function test966_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[i2] = -o.a[i2] - 1, o.a[i2]);
        }

        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }
    }

    return sum;
  }
}

print("test966: " + test966());

function test967() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test967_run(o, a, a2));

  function test967_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      a = a2;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test967: " + test967());

function test968() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test968_run(o, a, a2));

  function test968_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }

        a = a2;
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test968: " + test968());

function test969() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test969_run(o, a, a2));

  function test969_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test969: " + test969());

function test970() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test970_run(o, a, a2));

  function test970_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      changeToEs5Array_int32(a);
      sum += test970_access(o, a, i0);
    }

    function test970_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test970: " + test970());

function test971() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test971_run(o, a, a2));

  function test971_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test971_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test971_access(o, a, i0);
    }

    function test971_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test971: " + test971());

function test972() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test972_run(o, a, a2));

  function test972_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += test972_access(o, a, i1);
      }

      sum += test972_access(o, a, i0);
    }

    function test972_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test972: " + test972());

function test973() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test973_run(o, a, a2));

  function test973_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test973_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
      sum += test973_access(o, a, i0);
    }

    function test973_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test973: " + test973());

function test974() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test974_run(o, a, a2));

  function test974_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        changeToEs5Array_int32(a);
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test974: " + test974());

function test975() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test975_run(o, a, a2));

  function test975_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test975: " + test975());

function test976() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test976_run(o, a, a2));

  function test976_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test976: " + test976());

function test977() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test977_run(o, a, a2));

  function test977_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test977: " + test977());

function test978() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test978_run(o, a, a2));

  function test978_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test978_access(o, a, i2);
        }

        sum += test978_access(o, a, i1);
      }

      changeToEs5Array_int32(a);
    }

    function test978_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test978: " + test978());

function test979() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test979_run(o, a, a2));

  function test979_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test979_access(o, a, i2);
        }

        changeToEs5Array_int32(a);
        sum += test979_access(o, a, i1);
      }
    }

    function test979_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test979: " + test979());

function test980() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test980_run(o, a, a2));

  function test980_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
          }

          sum += test980_access(o, a, i2);
        }

        sum += test980_access(o, a, i1);
      }
    }

    function test980_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test980: " + test980());

function test981() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test981_run(o, a, a2));

  function test981_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test981_access(o, a, i3);
          }
        }
      }

      changeToEs5Array_int32(a);
      sum += test981_access(o, a, i0);
    }

    function test981_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test981: " + test981());

function test982() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test982_run(o, a, a2));

  function test982_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }

        changeToEs5Array_int32(a);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test982: " + test982());

function test983() {
  var o = {
    a: [1.1, 2.1]
  };
  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test983_run(o, a, a2));

  function test983_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            changeToEs5Array_int32(a);
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test983: " + test983());

function test984() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test984_run(o, a, a2));

  function test984_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += a[-1];
    }

    return sum;
  }
}

print("test984: " + test984());

function test985() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test985_run(o, a, a2));

  function test985_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test985: " + test985());

function test986() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test986_run(o, a, a2));

  function test986_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test986: " + test986());

function test987() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test987_run(o, a, a2));

  function test987_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test987_access(o, a, i3);
          }
        }
      }

      sum += test987_access(o, a, i0);
    }

    function test987_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test987: " + test987());

function test988() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test988_run(o, a, a2));

  function test988_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += a[0];
        }

        sum += a[0];
      }
    }

    return sum;
  }
}

print("test988: " + test988());

function test989() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test989_run(o, a, a2));

  function test989_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test989: " + test989());

function test990() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test990_run(o, a, a2));

  function test990_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test990_access(o, a, i0);
    }

    function test990_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test990: " + test990());

function test991() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test991_run(o, a, a2));

  function test991_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test991_access(o, a, i1);
      }

      a = a2;
      sum += test991_access(o, a, i0);
    }

    function test991_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test991: " + test991());

function test992() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test992_run(o, a, a2));

  function test992_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[i1];
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test992: " + test992());

function test993() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test993_run(o, a, a2));

  function test993_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += a[i1];
      }

      a = a2;
      sum += a[i0];
    }

    return sum;
  }
}

print("test993: " + test993());

function test994() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test994_run(o, a, a2));

  function test994_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += a[-1];
      }

      sum += a[-1];
    }

    return sum;
  }
}

print("test994: " + test994());

function test995() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test995_run(o, a, a2));

  function test995_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }
      }

      a = a2;
      sum += a[-1];
    }

    return sum;
  }
}

print("test995: " + test995());

function test996() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test996_run(o, a, a2));

  function test996_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test996_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test996_access(o, a, i0);
    }

    function test996_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test996: " + test996());

function test997() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test997_run(o, a, a2));

  function test997_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test997_access(o, a, i3);
          }
        }
      }

      sum += test997_access(o, a, i0);
    }

    function test997_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test997: " + test997());

function test998() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test998_run(o, a, a2));

  function test998_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test998_access(o, a, i2);
        }

        sum += test998_access(o, a, i1);
      }

      a = a2;
    }

    function test998_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test998: " + test998());

function test999() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test999_run(o, a, a2));

  function test999_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test999_access(o, a, i2);
        }

        a = a2;
        sum += test999_access(o, a, i1);
      }
    }

    function test999_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test999: " + test999());

function test1000() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1000_run(o, a, a2));

  function test1000_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += a[-1];
        }

        sum += a[-1];
      }
    }

    return sum;
  }
}

print("test1000: " + test1000());

function test1001() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1001_run(o, a, a2));

  function test1001_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[-1];
          }
        }
      }

      a = a2;
      sum += a[-1];
    }

    return sum;
  }
}

print("test1001: " + test1001());

function test1002() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1002_run(o, a, a2));

  function test1002_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }

        a = a2;
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test1002: " + test1002());

function test1003() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1003_run(o, a, a2));

  function test1003_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += a[0];
          }
        }
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test1003: " + test1003());

function test1004() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1004_run(o, a, a2));

  function test1004_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      someCall(a);
      sum += test1004_access(o, a, i0);
    }

    function test1004_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test1004: " + test1004());

function test1005() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1005_run(o, a, a2));

  function test1005_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1005_access(o, a, i1);
      }

      someCall(a);
      sum += test1005_access(o, a, i0);
    }

    function test1005_access(o, a, i) {
      return a[i];
    }

    return sum;
  }
}

print("test1005: " + test1005());

function test1006() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1006_run(o, a, a2));

  function test1006_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += test1006_access(o, a, i1);
      }

      sum += test1006_access(o, a, i0);
    }

    function test1006_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test1006: " + test1006());

function test1007() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1007_run(o, a, a2));

  function test1007_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1007_access(o, a, i1);
      }

      someCall(a);
      sum += test1007_access(o, a, i0);
    }

    function test1007_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test1007: " + test1007());

function test1008() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1008_run(o, a, a2));

  function test1008_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += a[0];
      }

      sum += a[0];
    }

    return sum;
  }
}

print("test1008: " + test1008());

function test1009() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1009_run(o, a, a2));

  function test1009_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[0];
          }
        }
      }

      someCall(a);
      sum += a[0];
    }

    return sum;
  }
}

print("test1009: " + test1009());

function test1010() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1010_run(o, a, a2));

  function test1010_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }

        someCall(a);
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test1010: " + test1010());

function test1011() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1011_run(o, a, a2));

  function test1011_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += a[i3];
          }
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test1011: " + test1011());

function test1012() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1012_run(o, a, a2));

  function test1012_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1012_access(o, a, i2);
        }

        sum += test1012_access(o, a, i1);
      }

      someCall(a);
    }

    function test1012_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test1012: " + test1012());

function test1013() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1013_run(o, a, a2));

  function test1013_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1013_access(o, a, i2);
        }

        someCall(a);
        sum += test1013_access(o, a, i1);
      }
    }

    function test1013_access(o, a, i) {
      return a[-1];
    }

    return sum;
  }
}

print("test1013: " + test1013());

function test1014() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1014_run(o, a, a2));

  function test1014_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
          }

          sum += test1014_access(o, a, i2);
        }

        sum += test1014_access(o, a, i1);
      }
    }

    function test1014_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test1014: " + test1014());

function test1015() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1015_run(o, a, a2));

  function test1015_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1015_access(o, a, i3);
          }
        }
      }

      someCall(a);
      sum += test1015_access(o, a, i0);
    }

    function test1015_access(o, a, i) {
      return a[0];
    }

    return sum;
  }
}

print("test1015: " + test1015());

function test1016() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1016_run(o, a, a2));

  function test1016_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += a[i3];
          }
        }

        someCall(a);
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test1016: " + test1016());

function test1017() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1017_run(o, a, a2));

  function test1017_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += a[i3];
          }
        }
      }

      sum += a[i0];
    }

    return sum;
  }
}

print("test1017: " + test1017());

function test1018() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1018_run(o, a, a2));

  function test1018_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test1018: " + test1018());

function test1019() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1019_run(o, a, a2));

  function test1019_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test1019: " + test1019());

function test1020() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1020_run(o, a, a2));

  function test1020_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test1020: " + test1020());

function test1021() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1021_run(o, a, a2));

  function test1021_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1021_access(o, a, i3);
          }
        }
      }

      sum += test1021_access(o, a, i0);
    }

    function test1021_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test1021: " + test1021());

function test1022() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1022_run(o, a, a2));

  function test1022_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (a[i2] = -a[i2] - 1, a[i2]);
        }

        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }
    }

    return sum;
  }
}

print("test1022: " + test1022());

function test1023() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1023_run(o, a, a2));

  function test1023_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1023: " + test1023());

function test1024() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1024_run(o, a, a2));

  function test1024_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test1024_access(o, a, i0);
    }

    function test1024_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test1024: " + test1024());

function test1025() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1025_run(o, a, a2));

  function test1025_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1025_access(o, a, i1);
      }

      a = a2;
      sum += test1025_access(o, a, i0);
    }

    function test1025_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test1025: " + test1025());

function test1026() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1026_run(o, a, a2));

  function test1026_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1026: " + test1026());

function test1027() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1027_run(o, a, a2));

  function test1027_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (a[-1] = -a[-1] - 1, a[-1]);
      }

      a = a2;
      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1027: " + test1027());

function test1028() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1028_run(o, a, a2));

  function test1028_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (a[0] = -a[0] - 1, a[0]);
      }

      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test1028: " + test1028());

function test1029() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1029_run(o, a, a2));

  function test1029_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      a = a2;
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test1029: " + test1029());

function test1030() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1030_run(o, a, a2));

  function test1030_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1030_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test1030_access(o, a, i0);
    }

    function test1030_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test1030: " + test1030());

function test1031() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1031_run(o, a, a2));

  function test1031_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test1031_access(o, a, i3);
          }
        }
      }

      sum += test1031_access(o, a, i0);
    }

    function test1031_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test1031: " + test1031());

function test1032() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1032_run(o, a, a2));

  function test1032_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1032_access(o, a, i2);
        }

        sum += test1032_access(o, a, i1);
      }

      a = a2;
    }

    function test1032_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test1032: " + test1032());

function test1033() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1033_run(o, a, a2));

  function test1033_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1033_access(o, a, i2);
        }

        a = a2;
        sum += test1033_access(o, a, i1);
      }
    }

    function test1033_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test1033: " + test1033());

function test1034() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1034_run(o, a, a2));

  function test1034_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (a[0] = -a[0] - 1, a[0]);
        }

        sum += (a[0] = -a[0] - 1, a[0]);
      }
    }

    return sum;
  }
}

print("test1034: " + test1034());

function test1035() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1035_run(o, a, a2));

  function test1035_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[0] = -a[0] - 1, a[0]);
          }
        }
      }

      a = a2;
      sum += (a[0] = -a[0] - 1, a[0]);
    }

    return sum;
  }
}

print("test1035: " + test1035());

function test1036() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1036_run(o, a, a2));

  function test1036_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }

        a = a2;
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test1036: " + test1036());

function test1037() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1037_run(o, a, a2));

  function test1037_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test1037: " + test1037());

function test1038() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1038_run(o, a, a2));

  function test1038_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      someCall(a);
      sum += test1038_access(o, a, i0);
    }

    function test1038_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test1038: " + test1038());

function test1039() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1039_run(o, a, a2));

  function test1039_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1039_access(o, a, i1);
      }

      someCall(a);
      sum += test1039_access(o, a, i0);
    }

    function test1039_access(o, a, i) {
      return a[-1] = -a[-1] - 1, a[-1];
    }

    return sum;
  }
}

print("test1039: " + test1039());

function test1040() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1040_run(o, a, a2));

  function test1040_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += test1040_access(o, a, i1);
      }

      sum += test1040_access(o, a, i0);
    }

    function test1040_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test1040: " + test1040());

function test1041() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1041_run(o, a, a2));

  function test1041_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1041_access(o, a, i1);
      }

      someCall(a);
      sum += test1041_access(o, a, i0);
    }

    function test1041_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test1041: " + test1041());

function test1042() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1042_run(o, a, a2));

  function test1042_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += (a[i1] = -a[i1] - 1, a[i1]);
      }

      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test1042: " + test1042());

function test1043() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1043_run(o, a, a2));

  function test1043_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[i3] = -a[i3] - 1, a[i3]);
          }
        }
      }

      someCall(a);
      sum += (a[i0] = -a[i0] - 1, a[i0]);
    }

    return sum;
  }
}

print("test1043: " + test1043());

function test1044() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1044_run(o, a, a2));

  function test1044_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }

        someCall(a);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1044: " + test1044());

function test1045() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1045_run(o, a, a2));

  function test1045_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1045: " + test1045());

function test1046() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1046_run(o, a, a2));

  function test1046_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1046_access(o, a, i2);
        }

        sum += test1046_access(o, a, i1);
      }

      someCall(a);
    }

    function test1046_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test1046: " + test1046());

function test1047() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1047_run(o, a, a2));

  function test1047_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1047_access(o, a, i2);
        }

        someCall(a);
        sum += test1047_access(o, a, i1);
      }
    }

    function test1047_access(o, a, i) {
      return a[0] = -a[0] - 1, a[0];
    }

    return sum;
  }
}

print("test1047: " + test1047());

function test1048() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1048_run(o, a, a2));

  function test1048_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
          }

          sum += test1048_access(o, a, i2);
        }

        sum += test1048_access(o, a, i1);
      }
    }

    function test1048_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test1048: " + test1048());

function test1049() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1049_run(o, a, a2));

  function test1049_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1049_access(o, a, i3);
          }
        }
      }

      someCall(a);
      sum += test1049_access(o, a, i0);
    }

    function test1049_access(o, a, i) {
      return a[i] = -a[i] - 1, a[i];
    }

    return sum;
  }
}

print("test1049: " + test1049());

function test1050() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1050_run(o, a, a2));

  function test1050_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }

        someCall(a);
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1050: " + test1050());

function test1051() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1051_run(o, a, a2));

  function test1051_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += (a[-1] = -a[-1] - 1, a[-1]);
          }
        }
      }

      sum += (a[-1] = -a[-1] - 1, a[-1]);
    }

    return sum;
  }
}

print("test1051: " + test1051());

function test1052() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1052_run(o, a, a2));

  function test1052_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test1052: " + test1052());

function test1053() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1053_run(o, a, a2));

  function test1053_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test1053: " + test1053());

function test1054() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1054_run(o, a, a2));

  function test1054_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test1054: " + test1054());

function test1055() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1055_run(o, a, a2));

  function test1055_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1055_access(o, a, i3);
          }
        }
      }

      sum += test1055_access(o, a, i0);
    }

    function test1055_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test1055: " + test1055());

function test1056() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1056_run(o, a, a2));

  function test1056_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += o.a[-1];
        }

        sum += o.a[-1];
      }
    }

    return sum;
  }
}

print("test1056: " + test1056());

function test1057() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1057_run(o, a, a2));

  function test1057_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test1057: " + test1057());

function test1058() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1058_run(o, a, a2));

  function test1058_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test1058_access(o, a, i0);
    }

    function test1058_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test1058: " + test1058());

function test1059() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1059_run(o, a, a2));

  function test1059_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1059_access(o, a, i1);
      }

      a = a2;
      sum += test1059_access(o, a, i0);
    }

    function test1059_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test1059: " + test1059());

function test1060() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1060_run(o, a, a2));

  function test1060_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[0];
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test1060: " + test1060());

function test1061() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1061_run(o, a, a2));

  function test1061_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += o.a[0];
      }

      a = a2;
      sum += o.a[0];
    }

    return sum;
  }
}

print("test1061: " + test1061());

function test1062() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1062_run(o, a, a2));

  function test1062_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += o.a[i1];
      }

      sum += o.a[i0];
    }

    return sum;
  }
}

print("test1062: " + test1062());

function test1063() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1063_run(o, a, a2));

  function test1063_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }
      }

      a = a2;
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test1063: " + test1063());

function test1064() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1064_run(o, a, a2));

  function test1064_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1064_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test1064_access(o, a, i0);
    }

    function test1064_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test1064: " + test1064());

function test1065() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1065_run(o, a, a2));

  function test1065_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test1065_access(o, a, i3);
          }
        }
      }

      sum += test1065_access(o, a, i0);
    }

    function test1065_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test1065: " + test1065());

function test1066() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1066_run(o, a, a2));

  function test1066_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1066_access(o, a, i2);
        }

        sum += test1066_access(o, a, i1);
      }

      a = a2;
    }

    function test1066_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test1066: " + test1066());

function test1067() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1067_run(o, a, a2));

  function test1067_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1067_access(o, a, i2);
        }

        a = a2;
        sum += test1067_access(o, a, i1);
      }
    }

    function test1067_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test1067: " + test1067());

function test1068() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1068_run(o, a, a2));

  function test1068_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += o.a[i2];
        }

        sum += o.a[i1];
      }
    }

    return sum;
  }
}

print("test1068: " + test1068());

function test1069() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1069_run(o, a, a2));

  function test1069_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[i3];
          }
        }
      }

      a = a2;
      sum += o.a[i0];
    }

    return sum;
  }
}

print("test1069: " + test1069());

function test1070() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1070_run(o, a, a2));

  function test1070_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }

        a = a2;
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test1070: " + test1070());

function test1071() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1071_run(o, a, a2));

  function test1071_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += o.a[-1];
          }
        }
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test1071: " + test1071());

function test1072() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1072_run(o, a, a2));

  function test1072_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      someCall(a);
      sum += test1072_access(o, a, i0);
    }

    function test1072_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test1072: " + test1072());

function test1073() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1073_run(o, a, a2));

  function test1073_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1073_access(o, a, i1);
      }

      someCall(a);
      sum += test1073_access(o, a, i0);
    }

    function test1073_access(o, a, i) {
      return o.a[0];
    }

    return sum;
  }
}

print("test1073: " + test1073());

function test1074() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1074_run(o, a, a2));

  function test1074_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += test1074_access(o, a, i1);
      }

      sum += test1074_access(o, a, i0);
    }

    function test1074_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test1074: " + test1074());

function test1075() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1075_run(o, a, a2));

  function test1075_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1075_access(o, a, i1);
      }

      someCall(a);
      sum += test1075_access(o, a, i0);
    }

    function test1075_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test1075: " + test1075());

function test1076() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1076_run(o, a, a2));

  function test1076_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += o.a[-1];
      }

      sum += o.a[-1];
    }

    return sum;
  }
}

print("test1076: " + test1076());

function test1077() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1077_run(o, a, a2));

  function test1077_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[-1];
          }
        }
      }

      someCall(a);
      sum += o.a[-1];
    }

    return sum;
  }
}

print("test1077: " + test1077());

function test1078() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1078_run(o, a, a2));

  function test1078_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }

        someCall(a);
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test1078: " + test1078());

function test1079() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1079_run(o, a, a2));

  function test1079_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += o.a[0];
          }
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test1079: " + test1079());

function test1080() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1080_run(o, a, a2));

  function test1080_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1080_access(o, a, i2);
        }

        sum += test1080_access(o, a, i1);
      }

      someCall(a);
    }

    function test1080_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test1080: " + test1080());

function test1081() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1081_run(o, a, a2));

  function test1081_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1081_access(o, a, i2);
        }

        someCall(a);
        sum += test1081_access(o, a, i1);
      }
    }

    function test1081_access(o, a, i) {
      return o.a[i];
    }

    return sum;
  }
}

print("test1081: " + test1081());

function test1082() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1082_run(o, a, a2));

  function test1082_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
          }

          sum += test1082_access(o, a, i2);
        }

        sum += test1082_access(o, a, i1);
      }
    }

    function test1082_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test1082: " + test1082());

function test1083() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1083_run(o, a, a2));

  function test1083_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1083_access(o, a, i3);
          }
        }
      }

      someCall(a);
      sum += test1083_access(o, a, i0);
    }

    function test1083_access(o, a, i) {
      return o.a[-1];
    }

    return sum;
  }
}

print("test1083: " + test1083());

function test1084() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1084_run(o, a, a2));

  function test1084_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += o.a[0];
          }
        }

        someCall(a);
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test1084: " + test1084());

function test1085() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1085_run(o, a, a2));

  function test1085_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += o.a[0];
          }
        }
      }

      sum += o.a[0];
    }

    return sum;
  }
}

print("test1085: " + test1085());

function test1086() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1086_run(o, a, a2));

  function test1086_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test1086: " + test1086());

function test1087() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1087_run(o, a, a2));

  function test1087_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test1087: " + test1087());

function test1088() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1088_run(o, a, a2));

  function test1088_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test1088: " + test1088());

function test1089() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1089_run(o, a, a2));

  function test1089_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1089_access(o, a, i3);
          }
        }
      }

      sum += test1089_access(o, a, i0);
    }

    function test1089_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test1089: " + test1089());

function test1090() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1090_run(o, a, a2));

  function test1090_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
        }

        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }
    }

    return sum;
  }
}

print("test1090: " + test1090());

function test1091() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1091_run(o, a, a2));

  function test1091_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1091: " + test1091());

function test1092() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1092_run(o, a, a2));

  function test1092_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      a = a2;
      sum += test1092_access(o, a, i0);
    }

    function test1092_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test1092: " + test1092());

function test1093() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1093_run(o, a, a2));

  function test1093_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1093_access(o, a, i1);
      }

      a = a2;
      sum += test1093_access(o, a, i0);
    }

    function test1093_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test1093: " + test1093());

function test1094() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1094_run(o, a, a2));

  function test1094_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1094: " + test1094());

function test1095() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1095_run(o, a, a2));

  function test1095_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += (o.a[i1] = -o.a[i1] - 1, o.a[i1]);
      }

      a = a2;
      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1095: " + test1095());

function test1096() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1096_run(o, a, a2));

  function test1096_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        a = a2;
        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }

      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test1096: " + test1096());

function test1097() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1097_run(o, a, a2));

  function test1097_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      a = a2;
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test1097: " + test1097());

function test1098() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1098_run(o, a, a2));

  function test1098_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1098_access(o, a, i3);
          }
        }

        a = a2;
      }

      sum += test1098_access(o, a, i0);
    }

    function test1098_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test1098: " + test1098());

function test1099() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1099_run(o, a, a2));

  function test1099_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += test1099_access(o, a, i3);
          }
        }
      }

      sum += test1099_access(o, a, i0);
    }

    function test1099_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test1099: " + test1099());

function test1100() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1100_run(o, a, a2));

  function test1100_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1100_access(o, a, i2);
        }

        sum += test1100_access(o, a, i1);
      }

      a = a2;
    }

    function test1100_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test1100: " + test1100());

function test1101() {
  "use strict";

  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1101_run(o, a, a2));

  function test1101_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1101_access(o, a, i2);
        }

        a = a2;
        sum += test1101_access(o, a, i1);
      }
    }

    function test1101_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test1101: " + test1101());

function test1102() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1102_run(o, a, a2));

  function test1102_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
          }

          sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
        }

        sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
      }
    }

    return sum;
  }
}

print("test1102: " + test1102());

function test1103() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1103_run(o, a, a2));

  function test1103_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
          }
        }
      }

      a = a2;
      sum += (o.a[-1] = -o.a[-1] - 1, o.a[-1]);
    }

    return sum;
  }
}

print("test1103: " + test1103());

function test1104() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1104_run(o, a, a2));

  function test1104_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }

        a = a2;
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test1104: " + test1104());

function test1105() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1105_run(o, a, a2));

  function test1105_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            a = a2;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test1105: " + test1105());

function test1106() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1106_run(o, a, a2));

  function test1106_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;
      someCall(a);
      sum += test1106_access(o, a, i0);
    }

    function test1106_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test1106: " + test1106());

function test1107() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1107_run(o, a, a2));

  function test1107_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1107_access(o, a, i1);
      }

      someCall(a);
      sum += test1107_access(o, a, i0);
    }

    function test1107_access(o, a, i) {
      return o.a[i] = -o.a[i] - 1, o.a[i];
    }

    return sum;
  }
}

print("test1107: " + test1107());

function test1108() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1108_run(o, a, a2));

  function test1108_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += test1108_access(o, a, i1);
      }

      sum += test1108_access(o, a, i0);
    }

    function test1108_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test1108: " + test1108());

function test1109() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1109_run(o, a, a2));

  function test1109_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;
        sum += test1109_access(o, a, i1);
      }

      someCall(a);
      sum += test1109_access(o, a, i0);
    }

    function test1109_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test1109: " + test1109());

function test1110() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1110_run(o, a, a2));

  function test1110_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;
        someCall(a);
        sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
      }

      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test1110: " + test1110());

function test1111() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1111_run(o, a, a2));

  function test1111_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
          }
        }
      }

      someCall(a);
      sum += (o.a[0] = -o.a[0] - 1, o.a[0]);
    }

    return sum;
  }
}

print("test1111: " + test1111());

function test1112() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1112_run(o, a, a2));

  function test1112_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }

        someCall(a);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1112: " + test1112());

function test1113() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1113_run(o, a, a2));

  function test1113_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1113: " + test1113());

function test1114() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1114_run(o, a, a2));

  function test1114_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1114_access(o, a, i2);
        }

        sum += test1114_access(o, a, i1);
      }

      someCall(a);
    }

    function test1114_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test1114: " + test1114());

function test1115() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1115_run(o, a, a2));

  function test1115_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
          }

          sum += test1115_access(o, a, i2);
        }

        someCall(a);
        sum += test1115_access(o, a, i1);
      }
    }

    function test1115_access(o, a, i) {
      return o.a[-1] = -o.a[-1] - 1, o.a[-1];
    }

    return sum;
  }
}

print("test1115: " + test1115());

function test1116() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1116_run(o, a, a2));

  function test1116_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
          }

          sum += test1116_access(o, a, i2);
        }

        sum += test1116_access(o, a, i1);
      }
    }

    function test1116_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test1116: " + test1116());

function test1117() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1117_run(o, a, a2));

  function test1117_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < 2; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += test1117_access(o, a, i3);
          }
        }
      }

      someCall(a);
      sum += test1117_access(o, a, i0);
    }

    function test1117_access(o, a, i) {
      return o.a[0] = -o.a[0] - 1, o.a[0];
    }

    return sum;
  }
}

print("test1117: " + test1117());

function test1118() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1118_run(o, a, a2));

  function test1118_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < 2; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < a.length; ++i3) {
            sum += i3;
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }

        someCall(a);
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1118: " + test1118());

function test1119() {
  var o = {
    a: new Int32Array(2)
  };

  for (var i = 0; i < 2; ++i) {
    o.a[i] = i + 1;
  }

  var a = o.a;
  a[-1] = a[0];
  var a2 = {
    length: a.length
  };

  for (var i = -1; i < a.length; ++i) {
    a2[i] = -a[i];
  }

  return toSafeInt(test1119_run(o, a, a2));

  function test1119_run(o, a, a2) {
    var sum = 0;

    for (var i0 = 0; i0 < a.length; ++i0) {
      sum += i0;

      for (var i1 = 0; i1 < a.length; ++i1) {
        sum += i1;

        for (var i2 = 0; i2 < a.length; ++i2) {
          sum += i2;

          for (var i3 = 0; i3 < 2; ++i3) {
            sum += i3;
            someCall(a);
            sum += (o.a[i3] = -o.a[i3] - 1, o.a[i3]);
          }
        }
      }

      sum += (o.a[i0] = -o.a[i0] - 1, o.a[i0]);
    }

    return sum;
  }
}

print("test1119: " + test1119()); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeToEs5Array_object(a) {
  try {
    Object.defineProperty(a, 0, {
      configurable: true,
      writable: false,
      enumerable: true,
      value: {
        p: -a[0].p - 1
      }
    });
  } catch (ex) {
    print("Unexpected exception - " + ex.name + ": " + ex.message);
  }
}

function changeToEs5Array_int32(a) {
  try {
    Object.defineProperty(a, 0, {
      configurable: true,
      writable: false,
      enumerable: true,
      value: -a[0] - 1
    });
  } catch (ex) {
    print("Unexpected exception - " + ex.name + ": " + ex.message);
  }
}

function someCall(a) {
  try {
    a.someProperty = 0;
  } catch (ex) {
    print("Unexpected exception - " + ex.name + ": " + ex.message);
  }
}

function toSafeInt(n) {
  return Math.round(Math.round(n * 10) / 10);
}
