var check = [];

function t(token) {
  check.push(token);
  return token;
}

[3, ...[t(1)],, ...[t(2), t(3)], 34, 42, ...[t(4)]];
check;
[1, 2, 3, 4];
var arr = [1, 2, 3];
[...arr, arr.pop()];
[1, 2, 3, 3];
