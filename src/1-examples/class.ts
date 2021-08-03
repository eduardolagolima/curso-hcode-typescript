class Product {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}

const product = new Product('Smartphone', 1234.56);
