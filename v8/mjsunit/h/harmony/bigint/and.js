// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Generated by tools/bigint-tester.py.
var data = [{
  a: 0x9252b94f220ded0c18706998886397699c5a25527570,
  b: -0x286817ba2e8fd0,
  r: 0x9252b94f220ded0c1870699888639769185a045015000
}, {
  a: 0x15a28152354fe421bbe4649d4d22d536ac34f9ba960,
  b: 0x0,
  r: 0
}, {
  a: 0xd09791bf7ae6703fae8d654104f54fcd957bbf028540b8e7c0f859fdcc1b7abd610,
  b: 0x24b473d00,
  r: 0x24a052100
}, {
  a: 0x2f73fbd05e9f7f70beba3dc7cd883732149a3d02a422f90f330,
  b: 0x4490583f0,
  r: 0x9008330
}, {
  a: 0xd6ea27844b3d356774e73de10d393ab9cadb81848e3b4a34d1f7440d0,
  b: 0x1639eeee731f3ba09234b5e15ec92f8bfb5cea28a0e89c59ed1c45b5f00,
  r: 0x10ea26000b39200234a5214009290ab948ca008088184824104504000
}, {
  a: -0x131f5e2c196269fd140c8727a9a02170e0dddb6aec109a890,
  b: 0x401ec4eae8b756f2b222f6f565fb6acecce3c524e9b450,
  r: 0x12c488800242f230005655448b0a0204810124613440
}, {
  a: -0x5bcba128bf7b949780a4bd02782a63ae79f646a33b8672f3f692ab90,
  b: -0xa81dd8ff624072fce3a00eb0bd5700e5666c3beb7d59701c42480,
  r: -0x5bcba1fdbfffb497afeebf02fb2bf7fe7ff666e3bfb7f7f7f7d6afa0
}, {
  a: 0xc9975465287865482700610,
  b: 0x75023f046c04f9095f64d3b8c75ab21950,
  r: 0x499014640838044023000100
}, {
  a: 0x5ad0abd6e43ef787248af2607fb29b9c3f7a1e7b106269ff0,
  b: -0xd483c8630392db4b620e0f0,
  r: 0x5ad0abd6e43ef787248af2607fb29380394a06520040491f0
}, {
  a: -0x9ed448bdb4794e4c0485db9ebe6cad0b0,
  b: -0x549a70753c90,
  r: -0x9ed448bdb4794e4c0485df9efe7dbd9b0
}, {
  a: -0x3a3fe42647633612082372714484767efc9673ce964b76f9f53a63d0,
  b: 0x99615e5edd0506cbb5512fb56ee2dd1230,
  r: 0x986116189800068881100b0000608c1000
}, {
  a: -0xac1b8238c08f0,
  b: -0xb9439dfbbc70e12b3a1fc7ccbfebeacd9bb321d83d0,
  r: -0
}, {
  a: 0x120580500,
  b: 0x90e13d34618496af407fabefabdd23892f480,
  r: 0x20100400
}, {
  a: 0xaa50,
  b: 0x2122a9c43b2531d0,
  r: 0x2110
}, {
  a: 0xaf43eb353c1547dc6ad79768e9a0,
  b: 0x55c80f89d8fe82dbf69eca557dd0479b6a449db77e38b2241ec81aa7d4042766dd3e60,
  r: 0x28022014081007d4000706482820
}, {
  a: 0xbd38b2d88212ceea6fbe3890769e46230,
  b: 0xeb22e568873e9bfdb5d2ddbc00,
  r: 0x88202468863a83890540c42000
}, {
  a: 0x24cd8c9634eddf319c57b54dffb49ce4974528f03b2c732d052ad490,
  b: -0x40790,
  r: 0x24cd8c9634eddf319c57b54dffb49ce4974528f03b2c732d052a8410
}, {
  a: -0x61f263476a1212fce55cf7d437f4364b73a1815a640,
  b: -0x19226cb79772cca166043a29d1f0fe1df0,
  r: -0x61f263476b9236fffd7fffde37f477ebffbf8ffbff0
}, {
  a: -0x44309b08a65bc7dc1e53d598d82ccdaa852941d7c851d907a60,
  b: 0xdd93dc17d38658ee30453d5f20,
  r: 0x5d1304178102408230402d05050
}, {
  a: 0x1e3eea4668e7a6c3bfa87d3f7a419bd10,
  b: -0x592d83940f884f0,
  r: 0x1e3eea4668e7a6c3bfa86d274201035100
}];
var error_count = 0;

for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = d.a & d.b;

  if (d.r !== r) {
    print("Input A:  " + d.a.toString(16));
    print("Input B:  " + d.b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: &");
    error_count++;
  }
}

if (error_count !== 0) {
  print("Finished with " + error_count + " errors.");
  quit(1);
}
