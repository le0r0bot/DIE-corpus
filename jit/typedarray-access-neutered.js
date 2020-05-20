typedArrays = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

function check(thunk, count) {
  let array = new constructor(10);
  transferArrayBuffer(array.buffer);
  let failed = true;

  try {
    thunk(array);
  } catch (e) {
    ;
  }
}

function test(thunk, count) {
  for (constructor of typedArrays) {
    check(thunk, count);
  }
}

for (let i = 0; i < 10000; i++) {
  test(array => array[0], i);
  test(array => delete array[0], i);
  test(array => Object.getOwnPropertyDescriptor(array, 0), i);
  test(array => Object.defineProperty(array, 0, {
    value: 1,
    writable: true,
    configurable: false,
    enumerable: true
  }), i);
  test(array => array[0] = 1, i);
}
