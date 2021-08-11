function attributeDecorator(
    target: unknown,
    propertyKey: string
) {
    const newPropertyKey = `_${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
        get() {
            return this[newPropertyKey].toUpperCase();
        },
        set(newValue) {
            this[newPropertyKey] = newValue.split('').reverse().join('');
        }
    });
}

class Animal {
    @attributeDecorator
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const dog = new Animal('Cachorro');

console.log(dog.name);
