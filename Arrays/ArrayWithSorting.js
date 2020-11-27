let number1 = BigInt(Math.floor(Math.random() * 899) + 100);
let number2 = BigInt(Math.floor(Math.random() * 899)  + 100);
let number3 = BigInt(Math.floor(Math.random() * 899) + 100);
let number4 = BigInt(Math.floor(Math.random() * 899)  + 100);
let number5 = BigInt(Math.floor(Math.random() * 899) + 100);
let number6 = BigInt(Math.floor(Math.random() * 899) + 100);
let number7 = BigInt(Math.floor(Math.random() * 899)  + 100);
let number8 = BigInt(Math.floor(Math.random() * 899) + 100);
let number9 = BigInt(Math.floor(Math.random() * 899)  + 100);
let number10 = BigInt(Math.floor(Math.random() * 899) + 100);

let numbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10];

numbers.sort();

console.log("Array is " + numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + ", "  + numbers[5] + ", " + numbers[6] + ", " + numbers[7] + ", " + numbers[8] + ", " + numbers[9]);

console.log("Second smallest = " + numbers[1] + ", second largest = " + numbers[8]);