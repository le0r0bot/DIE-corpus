console.log("This page tests deletion of properties on a string object.");
var str = "abc";
str.length;
delete str.length;
delete str[0];
delete str[1];
delete str[2];
delete str[3];
delete str[-1];
delete str[4294967294];
delete str[4294967295];
delete str[4294967296];
delete str[0.0];
delete str[0.1];
delete str['0.0'];
delete str.foo;
