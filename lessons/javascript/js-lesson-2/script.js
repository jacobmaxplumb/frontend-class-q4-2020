//const jacob = "jacob";
//console.log(jacob.length);

// const sentence = "hello " + jacob;
// const sentence2 = `hello ${jacob}`;
// console.log(sentence2);

// const one = 'one';
// one = one + 'two';
// one += 'two';

// const myNumber = 1;
// const isEnabled = true;

// const jacob = {
//     age: 30,
//     height: 73,
//     name: 'jacob',
//     car: {
//         make: 'someting'
//     }
// }

// console.log(jacob.car.make);

// const one = '1';
// const two = 2;

// const typeOfOne = typeof two;
// console.log(typeOfOne);
// console.log(one + two);

// const typeOfTwo = Object.prototype.toString.call(two);
// console.log(typeOfTwo);

// const numberr = 1;
// console.log(!!numberr);

// const isSunny = false;

// if(!isSunny) {
//     // run whatevers in here
// }

// const userInput = 'some input';
// let n = 3;

// if (n === 2) {
//     console.log('yay')
// } else {
//     console.log('nooo')
// }
// const myArray = ['js', 'c', 'golang'];

// // const doesInclude = myArray.includes('j');
// const valuee = myArray.find(v => v.toUpperCase() === "JS");
// console.log(valuee);
// if (doesInclude) {
//     // do this
// } else {
//     // do something different
// }
// console.log(doesInclude);

// const choice = prompt('what programming language is your best');
// console.log(choice);
// switch (choice) {
//     case 'javascript':
//         console.log('js');
//         break;
//     case 'c#':
//         console.log('c#');
//         break;
//     default:
//         console.log('default');
//         break;
// }


// if (number === 1 || number === 3) {
//     console.log('first')
// } else if(number + 1 === 2) {
//     console.log('second')
// } else {
//     console.log('third')
// }

// const age = 39;
// // const canVote = age >= 18 ? 'yay I can vote' : 'no you cant'
// const yearBorn = 1990;
// const generation =
//     yearBorn >= 2000 ?
//     'you are gen z' : yearBorn < 2000 && yearBorn > 1989 ?
//     'millenial' : 'another gen';

// let canVote;
// if (age >= 18) {
//     canVote = 'yay'
// } else {
//     canVote = 'no'
// }
// console.log(canVote);

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }
// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// let response;
// do {
//     response = prompt('type something');
// } while (response)

// let cars = ['car1', 'car2', 'car3'];
// for (let car of cars) {
//     console.log(car);
// }

// let myObj = { one: 'one1', two: 'two2', three: 'three4' };
// console.log(myObj['three']);
// console.log(myObj.three);
// for (let o in myObj) {
//     console.log(myObj[o]);
// }

// function sayHello() {
//     console.log('hello');
// }

// const hello = sayHello();
// console.log(hello);

// function getMeNine() {
//     return 9;
//     console.log('hello')
// }
// const nine = getMeNine();
// console.log(nine);
// console.log(getMeNine())

// function addTwoNumbers(one, two) {
//     return one + two;
// }

// console.log(addTwoNumbers(3, 3));

// const addThreeNumbers = function(one, two, three) {
//     return one + two + three;
// }

// console.log(addThreeNumbers(1, 2, 3));

// const addFourNumbers = (o, t, th, f) => {
//     console.log(o);
//     return o + t + th + f
// }

// const addFourNumbers2 = (o, t, th, f) => o + t + th + f;

// const isEven = (number) => {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(1))
// console.log(isEven(2))
// console.log(isEven(16))

// const addNumbers = (one, two = 3, three = 0) => one + two + three;

// console.log(addNumbers(1, 2, 2));
// console.log(addNumbers(1, 2));
// console.log(addNumbers(1));

// const tl = [0, 5];
// const br = [5, 0];

// function logRectInfo(topLeft, bottomRight) {
//     // tl0 - br0
//     // tl1 - br1
//     const width = Math.abs(topLeft[0] - bottomRight[0]);
//     const length = Math.abs(topLeft[1] - bottomRight[1]);
//     const area = width * length;
//     const perimeter = 2 * (length + width);
//     console.log(`area: ${area} perimeter: ${perimeter}`)
// }

// logRectInfo(tl, br);

// 1. make a function that takes in an array of names and the finds the longest name in a list of names
// 2. prompt user to continuing to enter names until they type stop (dont include stop as one of the names)
// continually get names from user input until user types stop (get a least one name)


// 1
// const myNames = ['jacob', 'james', 'rob', 'marie', 'alyssa']

// function getLongestName(names) {
//     let longestName = '';
//     for (let name of names) {
//         if (name.length > longestName.length) {
//             longestName = name;
//         }
//     }
//     return longestName;
// }

// const longest = getLongestName(myNames);
// console.log(longest);

// const myArray = [];
// console.log(myArray);

// myArray.push('one');
// console.log(myArray);

// myArray.push('two');
// console.log(myArray);

// myArray.push('three');
// console.log(myArray);

function getLongestName(names) {
    let longestName = '';
    for (let name of names) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

const names = [];
let response;
do {
    response = prompt('enter a name, enter stop to exit');
    if (response !== 'stop') {
        names.push(response);
    }
    console.log(names);
} while (response !== 'stop');

const longestName = getLongestName(names);
console.log(longestName);