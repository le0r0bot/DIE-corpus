// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Generated by tools/bigint-tester.py.
var data = [{
  a: 0x77a80,
  b: 0xde08e7433fb9584911b8cb4bc7eed802299b4489fc635974d063847da4e8b461df0,
  r: 0
}, {
  a: -0x1d3ff6f353f2d035ed7b4b8e5e4ae1c8d160,
  b: -0xcf829b11c2f996f388b22cd03aeb75ec434f3be8fde6460,
  r: -0x192f308302c00024a55a4004520a81c84060
}, {
  a: 0x6dbbc93af9a9c222180,
  b: -0xfaa906348dc49859c34bc7c0,
  r: -0xfaa9020404c400500149c780
}, {
  a: 0xf0,
  b: 0x4388530,
  r: 0
}, {
  a: -0x3ee35e1823b91414618f05995e11594920539921e9440,
  b: -0x58c5811ee19db01b7d9824c49682af55956119cfbc9868287ef138da08ee0,
  r: -0x3c80040002800414010101891c1048082051180008420
}, {
  a: -0xa2a70c5da9a7e98f242e82d510,
  b: 0,
  r: -0xa2a70c5da9a7e98f242e82d510
}, {
  a: 0x7868475f450ff2b15a03eccb4d26ce8711383f610,
  b: 0x1c62774e1db239cb461c4190b54de4d872f9484cf82ed1258cc14580cf29f600,
  r: 0
}, {
  a: 0x865d033028551a71f6f9f8d7b36cf9810,
  b: -0x68e30391d9831a4ea3e65b2e433f55ba390,
  r: -0x68610290c9830a4482000206000c1102380
}, {
  a: -0x817a0dacbafbaf40ef819fc62a8efc4b4960,
  b: -0x5af313e32a5386e29cb5d2b34d54f04da389f33d52444f177671e40,
  r: -0x12a04840a008a008f019504008074430840
}, {
  a: -0xef8c9475210c0a31aa12c34db6e7737609c75b78a50,
  b: -0xba91b4ec3a5390db84febaeaddb8209155413e2e02fb0,
  r: -0xa9080441210808300a02820d9282011400034260250
}, {
  a: -0xf4e707078d14001959f0,
  b: 0,
  r: -0xf4e707078d14001959f0
}, {
  a: 0x601f0,
  b: 0x246f0,
  r: 0
}, {
  a: -0x9ccd3d1b6d4bcde8643ad641d395980,
  b: -0x379e57728185fd098383a23c7f50,
  r: -0x13901650808484018100003859000
}, {
  a: 0xcc4b3ba719bd1b37f254f36a72ee375ad220,
  b: -0xb0c220750f2dad9de91ffb8a7bbf8ffe0,
  r: -0x4000640e0c8098a0095880188a02dc50
}, {
  a: 0xa230c33b718cd563f9c1577f4f8da160851902341ba1a6e6bdcbec413d98a10,
  b: 0xc2f4e2db2df59ccc34690479ebe64df960,
  r: 0
}, {
  a: -0x5fbac9a8f40,
  b: 0xf1bfe6f97e8f516685372b06ea89659c3df4ab3f6779e5c0b41e1b570,
  r: -0x54ba0808840
}, {
  a: -0x7fd2d4a4c60ba795e20,
  b: 0x33dcea557cc5156dacb9ad7b252598172f92d8cf7d38e69f0a0,
  r: -0
}, {
  a: -0x3833089d7cf4e0181247572037a90cc2506342a2191137345e3a0e10,
  b: 0xededf5c7e54cd86afc6d838205c8a78cac7a0e410792a21cf3e4e38dd8ca2dd80,
  r: -0x283208103824c01802450720300908c2004142200111072052180210
}, {
  a: -0x188818a47abbfe64357ccd1a33fb5cb875f80,
  b: -0x14faf1811ee737d048c025f7a1fe156f7e90d23a699d040609e631836500df2e300,
  r: -0x108808202299d040201c411832500cb061080
}, {
  a: 0xf60c0260022920bdbd1c837778657936956c15b4cb0,
  b: 0xa10df3b397c20,
  r: 0xf60c0260022920bdbd1c8377786579b79dffb7b7cb0
}];
var error_count = 0;

for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = d.a | d.b;

  if (d.r !== r) {
    print("Input A:  " + d.a.toString(16));
    print("Input B:  " + d.b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: |");
    error_count++;
  }
}

if (error_count !== 0) {
  print("Finished with " + error_count + " errors.");
  quit(1);
}
