"use strict";
var greeter = function (person) { return "Hello " + person; };
console.log('hello');
var user = "Ivan";
console.log(greeter(user));
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    return Person;
}());
var newPerson;
