// hello world

console.log('hello, world!')

// variables
let firstName = "Prince";
let lastName = "Boamah";
const DATEOFBIRTH = '21 September, 1996';

console.log(firstName);
console.log(firstName + ' ' + lastName);
console.log(DATEOFBIRTH);

// primitive data types

let name = 'Dre' // String
let age = 3; // Numbers
let male = true; // Boolean
let career = undefined; // undefined
let wife = null; // null

console.log(name);
console.log(age);
console.log(male);
console.log(career);
console.log(wife);


//objects
let person = {
    name: 'Andre',
    age: 3,
    gender: 'male',
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.gender);

//arrays

let selectedColors = ['Red', 'Green', 'Blue',]
selectedColors[3] = 256;
console.log(selectedColors);
console.log(selectedColors.length);

//functions

function greet() {
    console.log("Hello and Welcome!");
}
greet();

// function with parameters and a fucntion call with arguments
// Perfoming task

function greeting(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

greeting("Andre", "Boamah");

//Calculating a value

function square(number) {
    return number * number;
}

console.log(square(20));
console.log("The area of a square is " + square(20));