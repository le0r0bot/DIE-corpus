// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var arr = [undefined];

function f() {
  0;
  arr.indexOf(undefined, -1);
}

f();
f();
f();
