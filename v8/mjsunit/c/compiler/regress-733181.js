// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function l(s) {
  return ("xxxxxxxxxxxxxxxxxxxxxxx" + s).toLowerCase();
}

l("abcd");
l("abcd");
l("abcd");

function u(s) {
  return ("xxxxxxxxxxxxxxxxxxxxxxx" + s).toUpperCase();
}

u("abcd");
u("abcd");
u("abcd");
