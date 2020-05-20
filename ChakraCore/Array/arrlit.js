//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 255, 256, 65535, 65536, -1];
}

;

function test2() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 255, 256, 65535, 65536, -1, 1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}

;

function test3() {
  return [0, 1.1, 2, 3, 4, 5, 6, 7, 8, 9, 255, 256, 65535, 65536, -1, 1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}

;

for (var i = 0; i < 2; i++) {
  print(test().join(","));
}

for (var i = 0; i < 2; i++) {
  print(test2().join(","));
}

for (var i = 0; i < 2; i++) {
  print(test3().join(","));
}
