"use strict";
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person('Eduardo', 25);
person1.name = 'Fulano';
console.log(person1);
//# sourceMappingURL=example.js.map