// const place = 'new york';

// function getPlace(place) {
//     let myVar = 'one';
//     console.log(place);
// }

// // getPlace('hello')

// let nullValue = null;
// let undefinedValue;

// // console.log(nullValue);
// // console.log(undefinedValue);

// const name = Symbol("name");
// const otherName = Symbol("name");
// // console.log(name);
// // console.log(otherName === name);

// let car = 'ford fusion';
// // console.log(typeof car);
// let numbers = ['1', 2, 3, '4', 5];
// let total = 0;
// let count = 0;
// for (let number of numbers) {
//     if (typeof number === 'string') {
//         number = parseInt(number);
//         count++;
//     }
//     total += number;
// }
// // console.log(total);
// // console.log(count);
// let number = 2;
// console.log(!!number)

// if (number === 3 && number === 4) {
//     console.log('if hit 2')
// } else if (number === 1) {
//     console.log('if hit 1')
// } else if (number === 3) {
//     console.log('if hit 3')
// } else {
//     console.log('else hit')
// }

// switch (number) {
//     case 1:
//         console.log('number was 1');
//         break;
//     case 2:
//         console.log('number was 2');
//         break;
//     case 3:
//         console.log('number was 3');
//         break;
//     default:
//         console.log('default hit');
// }
// class Car {
//     constructor(carName) {
//         this.carName = carName;
//     }
// }

// const age = 17;
// const canVote = age >= 18 ? 'yes' : 'no';
// const carArray = null;
// const carObjectArray = carArray ? carArray.map(car => new Car(car)) : [];
// console.log(carObjectArray);

// for: iterating a specific amount of times
// const loopStart = 2;
// const loopEnd = 9;
// const skip = 2;
// for (let i = loopStart; i <= loopEnd; i++) {
//     console.log(i);
// }

// // initialize
// let i = 2;
// // check condition 2(i) is less than or equal to 9
// // since true
// console.log(i)
//     // final statement
// i += 1;
// // check condition 3(i) is less than or equal to 9
// // since true
// i += 1

// do while: you want something to run once
// const number = 1;
// do {
//     console.log(number);
// } while (number != 1);

// while (number != 1) {
//     console.log(number);
// }
// let answer;
// do {
//     answer = prompt('what is your response');
//     console.log(answer);
// } while (answer !== 'quit')

// for of: looping through an array
// const cars = ['ford', 'jeep', 'dogde'];
// for (let c of cars) {
//     console.log(c);
// }

// for in loop: loop through an object
//console.log(carObject['make'])
// for (let carProperty in { make: 'ford', model: 'fusion', year: 2018 }) {
//     console.log(carProperty);
//     console.log(carObject[carProperty]);
// }

// function
function doSomething(one, two) {
    console.log(one);
    console.log(two);
    // return undefined;
}

doSomething(1, 'word');

const doSomethingResult = doSomething('first param', 'word'); //undefined
console.log(doSomethingResult);