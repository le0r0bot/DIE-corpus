var o0 = [];
var o1 = new String("foobarbaz");
var o2 = {};
var o3 = new String("foobarbaz");
var o4 = {};
var o5 = Math;
var o6 = {};
var o7 = new String("foobarbaz");
var o8 = new String("foobarbaz");
var o9 = Math;
var o10 = Math;

var o11 = function () {
  ;
};

var o12 = {};
var o13 = new String("foobarbaz");
var o14 = {};

function f1(o) {
  return o.length;
}

;

function f2(o) {
  o.g2 = function () {
    ;
  };
}

;

function f3(o) {
  return o.g10;
}

;

function f4(o) {
  o.g4 = function () {
    ;
  };
}

;

function f5(o) {
  return o == o14;
}

;

function f6(o) {
  o[3] = o;
}

;

function f7(o) {
  o[3] = undefined;
}

;

function f8(o) {
  o[3] = undefined;
}

;

function f9(o) {
  return o.length;
}

;

function f10(o) {
  return o.__proto__;
}

;

for (var i = 0; i < 20; i++) {
  f9(o11);
  f6(o0);
  f2(o1);
  f2(o6);
  f7(o6);
  f8(o11);
  f2(o5);
  f7(o9);
  f7(o12);
  f6(o4);
  f5(o1);
  f4(o1);
  f8(o8);
  f6(o5);
  f2(o0);
  f10(o7);
  f3(o3);
  f4(o1);
  f9(o3);
  f4(o11);
  f4(o0);
  f2(o4);
  f4(o10);
}
