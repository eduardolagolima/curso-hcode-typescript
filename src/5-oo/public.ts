class Vehicle {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    public open(): boolean {
        return false;
    }
}

const vehicle1 = new Vehicle('Preto');

console.log(vehicle1.color);
console.log(vehicle1.open());
