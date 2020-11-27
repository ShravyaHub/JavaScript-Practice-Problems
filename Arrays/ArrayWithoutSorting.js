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

let smallest, secondSmallest, largest, secondLargest;

if(numbers[0] <= numbers[1]) {
    smallest = numbers[0];
    secondSmallest = numbers[1];
    largest = numbers[1];
    secondLargest = numbers[0];
} else {
    smallest = numbers[1];
    secondSmallest = numbers[0];
    largest = numbers[0];
    secondLargest = numbers[1];
}

for(let i = 2; i <= 10; i++) {
    if(numbers[i] > smallest &&  numbers[i] < secondSmallest) {
        secondSmallest = numbers[i];
    } else if(numbers[i] < smallest) {
        secondSmallest = smallest
        smallest = numbers[i];
    }
    if(numbers[i] < largest && numbers[i] > secondLargest) {
        secondLargest = numbers[i];
    } else if(numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    }    
}

console.log("Second smallest = " + secondSmallest + ", second largest = " + secondLargest);