let number1 = BigInt(Math.floor(Math.random() * 899) + 100);
let number2 = BigInt(Math.floor(Math.random() * 899)  + 100);
let maximum, minimum;
if(number1 > number2) {
    mimimum = number2;
    maximum = number1;
} else {
    mimimum = number1;
    maximum = number2;
}
let number3 = Math.floor(Math.random() * 899) + 100;
if(minimum > number3) {
    mimimum = number3;
} else if(maximum < number3) {
    maximum = number3;
}
let number4 = Math.floor(Math.random() * 899) + 100;
if(minimum > number4) {
    mimimum = number4;
} else if(maximum < number4) {
    maximum = number4;
}
let number5 = Math.floor(Math.random() * 899) + 100;
if(minimum > number5) {
    mimimum = number5;
} else if(maximum < number5) {
    maximum = number5;
}
console.log("Numbers: " + number1 + ", " + number2 + ", " + number3 + ", " + number4 + ", " + number5);
console.log("Minimum = " + mimimum + ", maximum = " + maximum);