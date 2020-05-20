console.log("Verify that changing a date with a delta that is too large for a date produces an invalid date/NaN");
console.log("Testing date creating at the max boundary");
new Date(0).valueOf();
new Date(8.64e15) instanceof Date;
new Date(8.64e15).valueOf();
new Date(8640000000000001) instanceof Date;
new Date(8640000000000001).valueOf();
new Date(Infinity) instanceof Date;
new Date(Infinity).valueOf();
new Date(-Infinity) instanceof Date;
new Date(-Infinity).valueOf();
console.log("Testing setMilliseconds()");
new Date(0).setMilliseconds(Infinity).valueOf();
new Date(0).setMilliseconds(1.79769e+308).valueOf();
new Date(0).setMilliseconds(-1.79769e+308).valueOf();
new Date(8.64e15).setMilliseconds(new Date(8.64e15).getMilliseconds()).valueOf();
new Date(8.64e15).setMilliseconds(new Date(8.64e15).getMilliseconds() + 1).valueOf();
console.log("Testing setSeconds()");
new Date(0).setSeconds(Infinity).valueOf();
new Date(0).setSeconds(1.79769e+308).valueOf();
new Date(0).setSeconds(-1.79769e+308).valueOf();
new Date(8.64e15).setSeconds(new Date(8.64e15).getSeconds()).valueOf();
new Date(8.64e15).setSeconds(new Date(8.64e15).getSeconds() + 1).valueOf();
console.log("Testing setMinutes()");
new Date(0).setMinutes(Infinity).valueOf();
new Date(0).setMinutes(1.79769e+308).valueOf();
new Date(0).setMinutes(-1.79769e+308).valueOf();
new Date(8.64e15).setMinutes(new Date(8.64e15).getMinutes()).valueOf();
new Date(8.64e15).setMinutes(new Date(8.64e15).getMinutes() + 1).valueOf();
console.log("Testing setHours()");
new Date(0).setHours(Infinity).valueOf();
new Date(0).setHours(1.79769e+308).valueOf();
new Date(0).setHours(-1.79769e+308).valueOf();
new Date(8.64e15).setHours(new Date(8.64e15).getHours()).valueOf();
new Date(8.64e15).setHours(new Date(8.64e15).getHours() + 1).valueOf();
console.log("Testing setDate()");
new Date(0).setDate(Infinity).valueOf();
new Date(0).setDate(1.79769e+308).valueOf();
new Date(0).setDate(-1.79769e+308).valueOf();
new Date(0).setDate(9e15 / (24 * 60 * 60 * 1000)).valueOf();
new Date(8.64e15).setDate(new Date(8.64e15).getDate()).valueOf();
new Date(8.64e15).setDate(new Date(8.64e15).getDate() + 1).valueOf();
console.log("Testing setMonth()");
new Date(0).setMonth(Infinity).valueOf();
new Date(0).setMonth(1.79769e+308).valueOf();
new Date(0).setMonth(-1.79769e+308).valueOf();
new Date(8.64e15).setMonth(new Date(8.64e15).getMonth()).valueOf();
new Date(8.64e15).setMonth(new Date(8.64e15).getMonth() + 1).valueOf();
console.log("Testing setYear()");
new Date(0).setYear(Infinity).valueOf();
new Date(0).setYear(1.79769e+308).valueOf();
new Date(0).setYear(-1.79769e+308).valueOf();
new Date(8.64e15).setYear(new Date(8.64e15).getFullYear()).valueOf();
new Date(8.64e15).setYear(new Date(8.64e15).getFullYear() + 1).valueOf();
console.log("Testing setFullYear()");
new Date(0).setFullYear(Infinity).valueOf();
new Date(0).setFullYear(1.79769e+308).valueOf();
new Date(0).setFullYear(-1.79769e+308).valueOf();
new Date(8.64e15).setFullYear(new Date(8.64e15).getFullYear()).valueOf();
new Date(8.64e15).setFullYear(new Date(8.64e15).getFullYear() + 1).valueOf();
console.log("Testing setUTCMilliseconds()");
new Date(0).setUTCMilliseconds(Infinity).valueOf();
new Date(0).setUTCMilliseconds(1.79769e+308).valueOf();
new Date(0).setUTCMilliseconds(-1.79769e+308).valueOf();
new Date(8.64e15).setUTCMilliseconds(new Date(8.64e15).getUTCMilliseconds()).valueOf();
new Date(8.64e15).setUTCMilliseconds(new Date(8.64e15).getUTCMilliseconds() + 1).valueOf();
console.log("Testing setUTCSeconds()");
new Date(0).setUTCSeconds(Infinity).valueOf();
new Date(0).setUTCSeconds(1.79769e+308).valueOf();
new Date(0).setUTCSeconds(-1.79769e+308).valueOf();
new Date(8.64e15).setUTCSeconds(new Date(8.64e15).getUTCSeconds()).valueOf();
new Date(8.64e15).setUTCSeconds(new Date(8.64e15).getUTCSeconds() + 1).valueOf();
console.log("Testing setUTCMinutes()");
new Date(0).setUTCMinutes(Infinity).valueOf();
new Date(0).setUTCMinutes(1.79769e+308).valueOf();
new Date(0).setUTCMinutes(-1.79769e+308).valueOf();
new Date(8.64e15).setUTCMinutes(new Date(8.64e15).getUTCMinutes()).valueOf();
new Date(8.64e15).setUTCMinutes(new Date(8.64e15).getUTCMinutes() + 1).valueOf();
console.log("Testing setUTCHours()");
new Date(0).setUTCHours(Infinity).valueOf();
new Date(0).setUTCHours(1.79769e+308).valueOf();
new Date(0).setUTCHours(-1.79769e+308).valueOf();
new Date(8.64e15).setUTCHours(new Date(8.64e15).getUTCHours()).valueOf();
new Date(8.64e15).setUTCHours(new Date(8.64e15).getUTCHours() + 1).valueOf();
console.log("Testing setUTCDate()");
new Date(0).setUTCDate(Infinity).valueOf();
new Date(0).setUTCDate(1.79769e+308).valueOf();
new Date(0).setUTCDate(-1.79769e+308).valueOf();
new Date(0).setUTCDate(9e15 / (24 * 60 * 60 * 1000)).valueOf();
new Date(8.64e15).setUTCDate(new Date(8.64e15).getUTCDate()).valueOf();
new Date(8.64e15).setUTCDate(new Date(8.64e15).getUTCDate() + 1).valueOf();
console.log("Testing setUTCMonth()");
new Date(0).setUTCMonth(Infinity).valueOf();
new Date(0).setUTCMonth(1.79769e+308).valueOf();
new Date(0).setUTCMonth(-1.79769e+308).valueOf();
new Date(8.64e15).setUTCMonth(new Date(8.64e15).getUTCMonth()).valueOf();
new Date(8.64e15).setUTCMonth(new Date(8.64e15).getUTCMonth() + 1).valueOf();
console.log("Testing setUTCFullYear()");
new Date(0).setUTCFullYear(Infinity).valueOf();
new Date(0).setUTCFullYear(1.79769e+308).valueOf();
new Date(0).setUTCFullYear(-1.79769e+308).valueOf();
new Date(8.64e15).setUTCFullYear(new Date(8.64e15).getUTCFullYear()).valueOf();
new Date(8.64e15).setUTCFullYear(new Date(8.64e15).getUTCFullYear() + 1).valueOf();
