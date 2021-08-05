class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1: Person = new Person('Eduardo', 25);

person1.name = 'Fulano';

console.log(person1);
