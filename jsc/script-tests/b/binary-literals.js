console.log("Make sure that we correctly handle binary literals");
0b0;
0b1;
0B1;
0b00000000000000000000000000000000; // try { 0B2; } catch(e) {}
// try { 0ba; } catch(e) {}
// try { 0b0.0; } catch(e) {}
// try { x=0b1y=42; } catch(e) {}

0b1010;
0b00000001001000110100010101100111;
0b10001001101010111100110111101111;
0o100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000; // Try 53 bits

0b11111111111111111111111111111111111111111111111111110;
0b11111111111111111111111111111111111111111111111111111; // 54 bits and above should add zeroes

0b111111111111111111111111111111111111111111111111111110;
0b111111111111111111111111111111111111111111111111111111;
!!0b1;
!!0b0;
Number('0b0');
Number('0b1');
Number('0B1');
Number('0b00000000000000000000000000000000');
Number('0B2');
Number('0ba');
Number('0b0.0');
Number('0b1010');
Number('0b00000001001000110100010101100111');
Number('0b10001001101010111100110111101111'); // Try 53 bits

Number('0b11111111111111111111111111111111111111111111111111110');
Number('0b11111111111111111111111111111111111111111111111111111'); // 54 bits and above should add zeroes

Number('0b111111111111111111111111111111111111111111111111111110');
Number('0b111111111111111111111111111111111111111111111111111111');
!!Number('0b1');
!!Number('0b0');
