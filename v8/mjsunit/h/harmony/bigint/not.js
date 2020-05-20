// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Generated by tools/bigint-tester.py.
var data = [{
  a: 0x9f0305cd75e0,
  r: -0x9f0305cd75e0
}, {
  a: -0xe8e9c8312f553c0,
  r: 0xe8e9c8312f553c0
}, {
  a: -0x1a29f0783a66534da3c024ad1cc854073f8868880,
  r: 0
}, {
  a: -0xfc2cc19496c1ced95be832ca5246d41c526b9fa28b88bcd39813aa330,
  r: 0xfc2cc19496c1ced95be832ca5246d41c526b9fa28b88bcd39813aa330
}, {
  a: 0x130,
  r: -0
}, {
  a: 0x4c12d642b2a132f0c927ec7504b530fb45d5e249163ffdc59feb3de31880,
  r: -0x4c12d642b2a132f0c927ec7504b530fb45d5e249163ffdc59feb3de31880
}, {
  a: 0x49637a624cb8782002e3e0874ad76215e188cee948c7ce7b0f66e1d0,
  r: -0x49637a624cb8782002e3e0874ad76215e188cee948c7ce7b0f66e1d0
}, {
  a: -0x81cbae84e6753b885ada46c0bf72368c083fed620,
  r: 0
}, {
  a: -0xcdf793acfdd08b0,
  r: 0xcdf793acfdd08b0
}, {
  a: 0x80,
  r: -0x80
}, {
  a: -0x0,
  r: 0
}, {
  a: 0x5c3278e76266b9e93d63eb4f2aa53716220aa0,
  r: -0x5c3278e76266b9e93d63eb4f2aa53716220aa0
}, {
  a: -0x9f4fe00,
  r: 0x9f4fe00
}, {
  a: 0,
  r: -0
}, {
  a: -0x74a9d63d02bd1393b311211e35c8b2d11e2367ffffb812683365f02d90,
  r: 0x74a9d63d02bd1393b311211e35c8b2d11e2367ffffb812683365f02d90
}, {
  a: 0x8a2831ae3e1b6b21a7b3d7ee921a0c0edf29b272d654f647169a5a6141d3aaf41430,
  r: -0
}, {
  a: 0xa2ef28270a7e668e190bc303537f5a8ba3f0d590,
  r: -0
}, {
  a: -0x4f8bd11ee4ef38682a0c90,
  r: 0
}, {
  a: 0x5436d0721d1282755068add3b5ab5424cb455fad50811a9afff0be0,
  r: -0x5436d0721d1282755068add3b5ab5424cb455fad50811a9afff0be0
}, {
  a: 0x5db6907c92529f517d24a6ff7303de42cb9059ae2adc0c20,
  r: -0x5db6907c92529f517d24a6ff7303de42cb9059ae2adc0c20
}];
var error_count = 0;

for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = ~d.a;

  if (d.r !== r) {
    print("Input:    " + d.a.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    error_count++;
  }
}

if (error_count !== 0) {
  print("Finished with " + error_count + " errors.");
  quit(1);
}
