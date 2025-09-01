var myName = "Jemfel Kurt Bersabe"; 
console.log("1. Name:", myName);

let age = "19";
console.log("2. Age:", age);

const PI = 3.1416;
console.log("3. PI:", PI);

let isStudent = parseInt(age) < 25;
console.log("4. Is Student:", isStudent);


const person = {
    firstName: "Jemfel Kurt",
    lastName: "Bersabe",
    address: {
        street: "Parrot",
        city: "Davao City",
        country: "Philippines"
    },
    hobbies: ["riding", "gaming"]
};
console.log("5. Person Object:", person);


const colors = ["red", "blue", "green", "blue", "yellow"];
console.log("6. Colors Array:", colors);

console.log("\n");


const words = ["apple", "banana", "cherry"];
let transformed = [];
for (let word of words) {
    let reversed = '';
    for (let char of word) {
        reversed = char + reversed;
    }
    transformed.push(reversed.toUpperCase());
}
console.log("Reverse and Transform:");
console.log(transformed);


let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filteredNumbers = [];
for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filteredNumbers.push(num);
    }
}
console.log("\nFiltering and Counting:");
console.log(`Found ${filteredNumbers.length} numbers: [${filteredNumbers}]`);