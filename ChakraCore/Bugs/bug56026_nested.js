//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Tests that bug 56025 is fixed in the nested funcexprscope case.
// http://bugcheck/bugs/WindowsBlueBugs/56026
try {
  (function TestFunc() {
    var a;

    (function outer() {
      (function inner() {
        a;
      })();

      with ({}) {
        (function innerOuter() {
          (function innerInner() {
            a;
          })();

          with ({}) {
            outer();
          }
        })();
      }
    })();
  })();
} catch (ex) {
  if (ex.message == "Out of stack space") {
    print("PASSED");
  }
}
