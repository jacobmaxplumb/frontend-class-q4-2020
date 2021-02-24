const greeter = (person: string): string => `Hello ${person}`;
console.log('hello');
const user: any = "Ivan";
console.log(greeter(user));

class Person {
    age: number;
    name: string;
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
}

let newPerson: Person;