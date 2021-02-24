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

// const personArray = [];
// personArray.push(new Person('jacob', 30, 73))

const person1 = new Person('jacob', 30, 73);
const person2 = new Person('james', 30, 73);
const person3 = new Person('jon', 31, 72);
const person4 = new Person('jacob', 30, 74);

const personArray = [person1, person2, person3, person4];

// console.log(personArray);
// for (let person of personArray) {
//     console.log(person);
// }

// console.log(personArray);
const foundPerson = personArray.find(p => p.name === 'james');
const indexOfFoundPerson = personArray.indexOf(foundPerson);
personArray.splice(indexOfFoundPerson, 1);
// console.log(personArray);
//console.log(indexOfFoundPerson);
// const filteredPeople = personArray.filter(p => p.name === 'jacob');
// console.log(foundPerson);

console.log(personArray);
deletePerson(personArray, 'james');
console.log(personArray);
24

function deletePerson(pArray, name) {
    const personWithName = pArray.find(p => p.name === name);
    const personsIndex = pArray.indexOf(personWithName);
    pArray.splice(personsIndex, 1);
}