class Person {
    birthday;

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.heightInInches = height;
    }

    printThisPersonObject() {
        console.log(this);
    }

    grow(inches) {
        this.heightInInches += inches;
    }

    sayName() {
        console.log(this.name);
    }
}
const newPerson = new Person('jacob', 30, 73);
const personTwo = new Person('james', 30, 73);
console.log(`name: ${newPerson.name}, age: ${newPerson.heightInInches}`);
console.log(`name: ${personTwo.name}, age: ${personTwo.heightInInches}`);
personTwo.grow(4);
console.log(`name: ${newPerson.name}, age: ${newPerson.heightInInches}`);
console.log(`name: ${personTwo.name}, age: ${personTwo.heightInInches}`);

// const personOne = {
//     name: "jacob",
//     age: 30,
//     heightInInches: 73,
//     sayName: function() {
//         console.log(this.name);
//     },
//     printMe: function() {
//         console.log(this);
//     },
//     grow: function(inches) {
//         this.heightInInches = this.heightInInches + inches;
//     },
//     printHeight: function() {
//         console.log(this.heightInInches);
//     },
// };

// class MyMath {
//     add(one, two) {
//         return one + two
//     }
//     subtract(one, two) {
//         return one - two;
//     }
// }

// const maths = new MyMath();
// console.log(maths.add(4, 5));

// const personOne = new Person()
// console.log(personOne.getName());
// console.log(new Date());




// personOne.printMe();
// delete personOne.age;
// personOne.printMe();
// personOne.newProperty = ['this', 'is', 'my', 'new', 'property'];
// personOne.printMe();
// const k = personOne.getAgeTimesTwo();
// console.log(k);

// personOne.printHeight();
// personOne.grow(5);
// personOne.printHeight();

// const name = 'james';
// const age = 30;
// const height = 80;

// function printOutName(person) {
//     console.log(person.name);
// }

// printOutName(personOne);