/**
 * const, var, and let
 * use const unless your code tells you to do otherwise
 * var = redeclare and reassign
 * let = reassign not redeclare
 * const = does not let you reassign or redeclare
 */

function sayHello() {
    let myv = hello1;
    console.log(myv);
}

var something; // declaring
var hello = 'hello o'; // declaring and assigning
hello = 'hello one'; // reassign
var hello = 'hello two'; // redeclaring and reassigning
hello = 'hello two';
hello = 'hello three';

let hello1;
console.log(hello1);
hello1 = 'hello1 one';
hello1 = 'hello1 two';
hello1 = 'hello1 three';

sayHello()

const hello2 = 'hello something';

function myFunction() {
    let myVariable = 'something'; // only avalible in function

    function myFunction2() {
        console.log(myVariable);
    }
} // declaring function

// console.log(myVariable) // cant use myVariable here


// comment line

/**
 * block line comment
 */
const camelCaseExample = 'camel case';
const PascelCase = 'pascel case';