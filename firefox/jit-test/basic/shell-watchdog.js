// |jit-test| exitstatus: 6;

/* This test will loop infinitely if the shell watchdog
   fails to kick in. */
var start = new Date();

while (true) {
  var end = new Date();
  var duration = (end.getTime() - start.getTime()) / 1000;

  if (duration > 1) {
    print("tick");
    start = new Date();
  }
}
