/** */
// let actualTemp = prompt("actual temp?:");
// let desiredTemp = prompt("desired temp?:");

// if (actualTemp > desiredTemp) {
//     console.log("Run Heat");
//     alert('Run Heat')
// } else if (desiredTemp > actualTemp) {
//     console.log("Run A/C");
// } else console.log("standby");

// let firstNumber = prompt('first number');
// let secondNumber = prompt('second Number');

// if (firstNumber > secondNumber) {
//     alert(`${firstNumber} is bigger than ${secondNumber}`);
// } else {
//     alert(`${secondNumber} is bigger than ${firstNumber}`);
// }

// let first = prompt('first number');
// let second = prompt('second number');
// let third = prompt('third number');

// let total = first + second + third;
// if (total < 0) {
//     alert('the sign is -');
// } else {
//     alert('the sign is +')
// }

// let amountOfNumber = prompt('how many numbers to add');

// let total = 0;
// for (let i = 0; i < amountOfNumber; i++) {
//     total += parseInt(prompt('enter a number'))
// }
// if (total < 0) {
//     alert('the sign is -');
// } else {
//     alert('the sign is +')
// }

// for (let i = 0; i <= 5; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }

/**
 * name logic
 */
// let name1 = 'jacob';
// let name2 = 'othername';
// let name3 = 'hle';

// let f = name1.length;
// let t = name2.length;
// let th = name3.length;

// if (f > t && f > th) {
//     console.log(`${name1} is the longest`);
// } else if (f === t && f > th ) {
//     console.log(`${name1} and ${name2} have the longest names`)  
// } else if (f === t && f === th) {
//     console.log(`${name1} and ${name2} ${name3} have the longest names`)  
// } else if (t > f && t > th) {
//     console.log(`${name2} is the longest`);
// } else if (f < t && t === th) {
//     console.log(`${name2} and ${name3} have the longest names`)
// } else {
//     console.log(`${name3} has the longest name`);
// }

/**
 * l n n
 * l l n
 * l l l
 * 
 * n l n
 * n l l
 * 
 * n n l
 */


// let number = parseInt(prompt('enter a number'));

function reverseNumber(number) {
    const numberToString = number.toString();
    let revNumber = '';
    for (let i = numberToString.length - 1; i >= 0; i--) {
        revNumber += numberToString[i]
    }
    // console.log(revNumber); doesnt have to return
    return parseInt(revNumber);
}

//let n = reverseNumber(number);
// console.log(n);

// const reverseNumber2 = () => {
//     let num = parseInt(prompt('enter a number'));
//     const numberToString = num.toString();
//     let revNumber = '';
//     for (let i = numberToString.length - 1; i >= 0; i--) {
//         revNumber += numberToString[i]
//     }
//     // console.log(revNumber); doesnt have to return
//     return parseInt(revNumber);
// }

// function addTwoNumber1(one, two) {
//     return one + two;
// }

// const addTwoNumber2 = (one, two) => {
//     return one + two;
// }

// const addTwoNumbers3 = function(one, two) {
//     return one + two;
// }

// addTwoNumber1(1, 2);
// addTwoNumber2(1, 2);
// addTwoNumber3(1, 2);

// 'hello my name is jacob' => ['hello', 'my', 'name', 'is', 'jacob']
const ss = 'hello there';

function printWord(sen) {
    let returns = '';
    let s = sen.split(' ');
    for (let i = 0; i < s.length; i++) {
        let w = '';
        for (let j = 0; j < s[i].length; j++) {
            j === 0 ? w += s[i][j].toUpperCase() : w += s[i][j];
        }
        returns += w + ' ';
    }
    return returns;
}

console.log(printWord(ss))