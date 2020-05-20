// Copyright 2008 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
var x; // Converts a number to string respecting -0.

function stringify(n) {
  if (1 / n === -Infinity) {
    return "-0";
  }

  return String(n);
}

function f(expected, y) {
  function testEval(string, x, y) {
    var mulFunction = Function("x, y", "return " + string);
    return mulFunction(x, y);
  }

  function mulTest(expected, x, y) {
    expected;
    x * y;
    expected;
    testEval(stringify(x) + " * y", x, y);
    expected;
    testEval("x * " + stringify(y), x, y);
    expected;
    testEval(stringify(x) + " * " + stringify(y), x, y);
  }

  mulTest(expected, x, y);
  mulTest(-expected, -x, y);
  mulTest(-expected, x, -y);
  mulTest(expected, -x, -y);

  if (x === y) {
    return;
  } // Symmetric cases not necessary.


  mulTest(expected, y, x);
  mulTest(-expected, -y, x);
  mulTest(-expected, y, -x);
  mulTest(expected, -y, -x);
}

x = 4294967296;
f(0, 0);
f(4294967296, 1);
f(8589934592, 2);
f(12884901888, 3);
f(17179869184, 4);
f(21474836480, 5);
f(30064771072, 7);
f(34359738368, 8);
f(38654705664, 9);
f(64424509440, 15);
f(68719476736, 16);
f(73014444032, 17);
f(133143986176, 31);
f(137438953472, 32);
f(141733920768, 33);
f(270582939648, 63);
f(274877906944, 64);
f(279172874240, 65);
f(545460846592, 127);
f(549755813888, 128);
f(554050781184, 129);
f(1095216660480, 255);
f(1099511627776, 256);
f(1103806595072, 257);
f(2194728288256, 511);
f(2199023255552, 512);
f(2203318222848, 513);
f(4393751543808, 1023);
f(4398046511104, 1024);
f(4402341478400, 1025);
f(8791798054912, 2047);
f(8796093022208, 2048);
f(8800387989504, 2049);
f(17587891077120, 4095);
f(17592186044416, 4096);
f(17596481011712, 4097);
f(35180077121536, 8191);
f(35184372088832, 8192);
f(35188667056128, 8193);
f(70364449210368, 16383);
f(70368744177664, 16384);
f(70373039144960, 16385);
f(140733193388032, 32767);
f(140737488355328, 32768);
f(140741783322624, 32769);
f(281470681743360, 65535);
f(281474976710656, 65536);
f(281479271677952, 65537);
f(562945658454016, 131071);
f(562949953421312, 131072);
f(562954248388608, 131073);
f(1125895611875328, 262143);
f(1125899906842624, 262144);
f(1125904201809920, 262145);
x = 4294967297;
f(0, 0);
f(4294967297, 1);
f(8589934594, 2);
f(12884901891, 3);
f(17179869188, 4);
f(21474836485, 5);
f(30064771079, 7);
f(34359738376, 8);
f(38654705673, 9);
f(64424509455, 15);
f(68719476752, 16);
f(73014444049, 17);
f(133143986207, 31);
f(137438953504, 32);
f(141733920801, 33);
f(270582939711, 63);
f(274877907008, 64);
f(279172874305, 65);
f(545460846719, 127);
f(549755814016, 128);
f(554050781313, 129);
f(1095216660735, 255);
f(1099511628032, 256);
f(1103806595329, 257);
f(2194728288767, 511);
f(2199023256064, 512);
f(2203318223361, 513);
f(4393751544831, 1023);
f(4398046512128, 1024);
f(4402341479425, 1025);
f(8791798056959, 2047);
f(8796093024256, 2048);
f(8800387991553, 2049);
f(17587891081215, 4095);
f(17592186048512, 4096);
f(17596481015809, 4097);
f(35180077129727, 8191);
f(35184372097024, 8192);
f(35188667064321, 8193);
f(70364449226751, 16383);
f(70368744194048, 16384);
f(70373039161345, 16385);
f(140733193420799, 32767);
f(140737488388096, 32768);
f(140741783355393, 32769);
f(281470681808895, 65535);
f(281474976776192, 65536);
f(281479271743489, 65537);
f(562945658585087, 131071);
f(562949953552384, 131072);
f(562954248519681, 131073);
f(1125895612137471, 262143);
f(1125899907104768, 262144);
f(1125904202072065, 262145);
x = 8589934591;
f(0, 0);
f(8589934591, 1);
f(17179869182, 2);
f(25769803773, 3);
f(34359738364, 4);
f(42949672955, 5);
f(60129542137, 7);
f(68719476728, 8);
f(77309411319, 9);
f(128849018865, 15);
f(137438953456, 16);
f(146028888047, 17);
f(266287972321, 31);
f(274877906912, 32);
f(283467841503, 33);
f(541165879233, 63);
f(549755813824, 64);
f(558345748415, 65);
f(1090921693057, 127);
f(1099511627648, 128);
f(1108101562239, 129);
f(2190433320705, 255);
f(2199023255296, 256);
f(2207613189887, 257);
f(4389456576001, 511);
f(4398046510592, 512);
f(4406636445183, 513);
f(8787503086593, 1023);
f(8796093021184, 1024);
f(8804682955775, 1025);
f(17583596107777, 2047);
f(17592186042368, 2048);
f(17600775976959, 2049);
f(35175782150145, 4095);
f(35184372084736, 4096);
f(35192962019327, 4097);
f(70360154234881, 8191);
f(70368744169472, 8192);
f(70377334104063, 8193);
f(140728898404353, 16383);
f(140737488338944, 16384);
f(140746078273535, 16385);
f(281466386743297, 32767);
f(281474976677888, 32768);
f(281483566612479, 32769);
f(562941363421185, 65535);
f(562949953355776, 65536);
f(562958543290367, 65537);
f(1125891316776961, 131071);
f(1125899906711552, 131072);
f(1125908496646143, 131073);
x = 8589934592;
f(0, 0);
f(8589934592, 1);
f(17179869184, 2);
f(25769803776, 3);
f(34359738368, 4);
f(42949672960, 5);
f(60129542144, 7);
f(68719476736, 8);
f(77309411328, 9);
f(128849018880, 15);
f(137438953472, 16);
f(146028888064, 17);
f(266287972352, 31);
f(274877906944, 32);
f(283467841536, 33);
f(541165879296, 63);
f(549755813888, 64);
f(558345748480, 65);
f(1090921693184, 127);
f(1099511627776, 128);
f(1108101562368, 129);
f(2190433320960, 255);
f(2199023255552, 256);
f(2207613190144, 257);
f(4389456576512, 511);
f(4398046511104, 512);
f(4406636445696, 513);
f(8787503087616, 1023);
f(8796093022208, 1024);
f(8804682956800, 1025);
f(17583596109824, 2047);
f(17592186044416, 2048);
f(17600775979008, 2049);
f(35175782154240, 4095);
f(35184372088832, 4096);
f(35192962023424, 4097);
f(70360154243072, 8191);
f(70368744177664, 8192);
f(70377334112256, 8193);
f(140728898420736, 16383);
f(140737488355328, 16384);
f(140746078289920, 16385);
f(281466386776064, 32767);
f(281474976710656, 32768);
f(281483566645248, 32769);
f(562941363486720, 65535);
f(562949953421312, 65536);
f(562958543355904, 65537);
f(1125891316908032, 131071);
f(1125899906842624, 131072);
f(1125908496777216, 131073);
x = 8589934593;
f(0, 0);
f(8589934593, 1);
f(17179869186, 2);
f(25769803779, 3);
f(34359738372, 4);
f(42949672965, 5);
f(60129542151, 7);
f(68719476744, 8);
f(77309411337, 9);
f(128849018895, 15);
f(137438953488, 16);
f(146028888081, 17);
f(266287972383, 31);
f(274877906976, 32);
f(283467841569, 33);
f(541165879359, 63);
f(549755813952, 64);
f(558345748545, 65);
f(1090921693311, 127);
f(1099511627904, 128);
f(1108101562497, 129);
f(2190433321215, 255);
f(2199023255808, 256);
f(2207613190401, 257);
f(4389456577023, 511);
f(4398046511616, 512);
f(4406636446209, 513);
f(8787503088639, 1023);
f(8796093023232, 1024);
f(8804682957825, 1025);
f(17583596111871, 2047);
f(17592186046464, 2048);
f(17600775981057, 2049);
f(35175782158335, 4095);
f(35184372092928, 4096);
f(35192962027521, 4097);
f(70360154251263, 8191);
f(70368744185856, 8192);
f(70377334120449, 8193);
f(140728898437119, 16383);
f(140737488371712, 16384);
f(140746078306305, 16385);
f(281466386808831, 32767);
f(281474976743424, 32768);
f(281483566678017, 32769);
f(562941363552255, 65535);
f(562949953486848, 65536);
f(562958543421441, 65537);
f(1125891317039103, 131071);
f(1125899906973696, 131072);
f(1125908496908289, 131073);
x = 17179869183;
f(0, 0);
f(17179869183, 1);
f(34359738366, 2);
f(51539607549, 3);
f(68719476732, 4);
f(85899345915, 5);
f(120259084281, 7);
f(137438953464, 8);
f(154618822647, 9);
f(257698037745, 15);
f(274877906928, 16);
f(292057776111, 17);
f(532575944673, 31);
f(549755813856, 32);
f(566935683039, 33);
f(1082331758529, 63);
f(1099511627712, 64);
f(1116691496895, 65);
f(2181843386241, 127);
f(2199023255424, 128);
f(2216203124607, 129);
f(4380866641665, 255);
f(4398046510848, 256);
f(4415226380031, 257);
f(8778913152513, 511);
f(8796093021696, 512);
f(8813272890879, 513);
f(17575006174209, 1023);
f(17592186043392, 1024);
f(17609365912575, 1025);
f(35167192217601, 2047);
f(35184372086784, 2048);
f(35201551955967, 2049);
f(70351564304385, 4095);
f(70368744173568, 4096);
f(70385924042751, 4097);
f(140720308477953, 8191);
f(140737488347136, 8192);
f(140754668216319, 8193);
f(281457796825089, 16383);
f(281474976694272, 16384);
f(281492156563455, 16385);
f(562932773519361, 32767);
f(562949953388544, 32768);
f(562967133257727, 32769);
f(1125882726907905, 65535);
f(1125899906777088, 65536);
f(1125917086646271, 65537);
x = 17179869184;
f(0, 0);
f(17179869184, 1);
f(34359738368, 2);
f(51539607552, 3);
f(68719476736, 4);
f(85899345920, 5);
f(120259084288, 7);
f(137438953472, 8);
f(154618822656, 9);
f(257698037760, 15);
f(274877906944, 16);
f(292057776128, 17);
f(532575944704, 31);
f(549755813888, 32);
f(566935683072, 33);
f(1082331758592, 63);
f(1099511627776, 64);
f(1116691496960, 65);
f(2181843386368, 127);
f(2199023255552, 128);
f(2216203124736, 129);
f(4380866641920, 255);
f(4398046511104, 256);
f(4415226380288, 257);
f(8778913153024, 511);
f(8796093022208, 512);
f(8813272891392, 513);
f(17575006175232, 1023);
f(17592186044416, 1024);
f(17609365913600, 1025);
f(35167192219648, 2047);
f(35184372088832, 2048);
f(35201551958016, 2049);
f(70351564308480, 4095);
f(70368744177664, 4096);
f(70385924046848, 4097);
f(140720308486144, 8191);
f(140737488355328, 8192);
f(140754668224512, 8193);
f(281457796841472, 16383);
f(281474976710656, 16384);
f(281492156579840, 16385);
f(562932773552128, 32767);
f(562949953421312, 32768);
f(562967133290496, 32769);
f(1125882726973440, 65535);
f(1125899906842624, 65536);
f(1125917086711808, 65537);
x = 17179869185;
f(0, 0);
f(17179869185, 1);
f(34359738370, 2);
f(51539607555, 3);
f(68719476740, 4);
f(85899345925, 5);
f(120259084295, 7);
f(137438953480, 8);
f(154618822665, 9);
f(257698037775, 15);
f(274877906960, 16);
f(292057776145, 17);
f(532575944735, 31);
f(549755813920, 32);
f(566935683105, 33);
f(1082331758655, 63);
f(1099511627840, 64);
f(1116691497025, 65);
f(2181843386495, 127);
f(2199023255680, 128);
f(2216203124865, 129);
f(4380866642175, 255);
f(4398046511360, 256);
f(4415226380545, 257);
f(8778913153535, 511);
f(8796093022720, 512);
f(8813272891905, 513);
f(17575006176255, 1023);
f(17592186045440, 1024);
f(17609365914625, 1025);
f(35167192221695, 2047);
f(35184372090880, 2048);
f(35201551960065, 2049);
f(70351564312575, 4095);
f(70368744181760, 4096);
f(70385924050945, 4097);
f(140720308494335, 8191);
f(140737488363520, 8192);
f(140754668232705, 8193);
f(281457796857855, 16383);
f(281474976727040, 16384);
f(281492156596225, 16385);
f(562932773584895, 32767);
f(562949953454080, 32768);
f(562967133323265, 32769);
f(1125882727038975, 65535);
f(1125899906908160, 65536);
f(1125917086777345, 65537);
