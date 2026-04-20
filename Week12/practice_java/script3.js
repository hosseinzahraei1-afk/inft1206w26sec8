
//Javascript basics

/*  Naming variables or constants:
Cannot be a reserved keyword
Should be meaningful
Cannot start with a number (1name)
Cannot contain a space or hyphen (-)
Are case-sensitive
*/


let firstName = 'Hussain'; // String Literal
let age = 37; // Number Literal
let isApproved = false; //Boolean Literal
let lastName = undefined;  //  by default values (ex. string) are undefined
let selectedColor = null; // situations where one wants a variable to be cleared. 
console.log(firstName);


// Objects 

let person = {
  firstName: 'Hussain',
  age: 37
};

console.log(person);

//Dot Notation
person.firstName = 'John';

console.log(person.firstName);

// Bracket Notation
person['firstName'] = 'Leyla';

console.log

// Arrays

let selectedColors = ['red','blue'];
console.log(selectedColors); // displays the list under the name selectedColors
selectedColors[2] = 'green'; // (appends the color green to the array at index 2)
console.log(selectedColors[0]); // (just displays color in index 0)
console.log(selectedColors.length); // (displays the number of words in the list)

// Functions

//performing a task
function greet() {
    console.log('Hello World'); // very boring example
}

greet(); 

function greet(name) {
    console.log('Hello '+ name);
} // parameter: in this example the name is the parameter of the greet function.

greet('Ali'); // argument: value given to a parameter.


function greet(name, lname) {
    console.log('Hello '+ name + ' ' + lname);
}

greet('Ali', 'Muhammad'); 

//Calculating a value 

function square(number) {
    return number * number; 
}

square(2);

let number = square(2);
console.log(number);

console.log(square(2)); 

 