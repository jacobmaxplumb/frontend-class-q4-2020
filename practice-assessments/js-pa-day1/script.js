// const arrayOfNumbers = [1, 4, 6, 7, 5, 8];
// console.log(arrayOfNumbers[2]);

// const arrayOfObjects = [
//     { id: 1, name: 'jacob', age: 30 },
//     { id: 2, name: 'james', age: 30 }
// ]
// console.log(arrayOfObjects[1].name);

// const submissions = [
//     { name: 'Jane', score: 95, date: '2020-01-24', passed: true },
//     { name: 'Joe', score: 77, date: '2018-05-14', passed: true },
//     { name: 'Jack', score: 59, date: '2019-07-05', passed: false },
//     { name: 'Jill', score: 88, date: '2020-04-22', passed: true },
// ];

// const submission = { name: 'Jane', score: 95, date: '2020-01-24', passed: true }
// const scoreDot = submission.score;
// submission['anotherProperty'] = 1;
// const scoreBracket = submission['score'];

// function countElements(array) {
//     var newObject = {};
//     array.forEach(letter => {
//         if (newObject.hasOwnProperty(letter)) {
//             newObject[letter] += 1;
//         } else {
//             newObject[letter] = 1;
//         }
//     })
//     console.log(newObject);
// }

// const letters = ['a', 'b', 'a', 'c', 'a', 'b'];
// countElements(letters);

function countUp(start, end) {
    for (let i = start; i <= end; i += 1) {
        console.log(i);
    }
}

function countDown(start, end) {
    for (let i = start; i >= end; i--) {
        console.log(i);
    }
}

const strings = ['one', 'something', 'jacob', 'car', 'another'];

function getLongestString(array) {
    let longestString = '';
    // for (let word of array) {
    //     if (word.length > longestString.length) {
    //         longestString = word;
    //     }
    // }
    array.forEach(word => {
        if (word.length > longestString.length) {
            longestString = word;
        }
    })
    return longestString;
}

// const longest = getLongestString(strings);
// console.log(longest);

// if the temp is 30 or below - return 'wear a coat'
// if the temp is greater than 30 but less than 55 - return 'wear a jacket'
// if the temp is greater than or equal to 55 - return 'no coat needed'
function whatShouldIWear(temp) {
    if (temp <= 30) {
        return 'wear a coat';
    } else if (temp > 30 && temp < 55) {
        return 'wear a jacket';
    } else if (temp >= 55) {
        return 'no coat needed';
    }
}

const cars = [
    { make: 'Ford', model: 'Fusion', year: 2018, cost: 20000, hasWarranty: true },
    { make: 'Ford', model: 'Focus', year: 1990, cost: 3000, hasWarranty: false },
    { make: 'Jeep', model: 'Cherokee', year: 2019, cost: 45000, hasWarranty: true }
];

function addCar(array, make, model, year, cost, hasWarrenty) {
    const newCar = { make: make, model: model, year: year, cost: cost, hasWarranty: hasWarrenty };
    array.push(newCar);
}
// console.log(cars);
// addCar(cars, 'Ford', 'edge', 2002, 10000, false);
// console.log(cars);

function findFordCar(array) {
    return array.find(car => car.make === 'Ford');
}

const fordCar = findFordCar(cars);
console.log(fordCar);