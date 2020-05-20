// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --no-stress-opt --opt --no-always-opt
// --nostress-opt is specified because the test corrupts the "pristine"
// array prototype chain by storing an element, and this is tracked
// per-isolate. A subsequent stress run would send the load generic,
// and no more deoptimizations of foo would occur.
function foo(a, i) {
  return a[i];
}

var a = ['one',, 'three'];
foo(a, 0);
foo(a, 0);
foo(a, 0);
undefined;
foo(a, 1);
foo();
// Whereas if we disrupt the prototype chain...
Array.prototype[1] = 'cow';
'cow';
foo(a, 1);
foo();
