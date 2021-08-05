// ? Maneira convencional
// class Order {
//     product: string;
//     amount: number;

//     constructor(product: string, amount: number) {
//         this.product = product;
//         this.amount = amount;
//     }
// }

// ? Maneira simplificada
class Order {
    constructor(
        public product: string,
        public amount: number
    ) {}
}

const order = new Order('Produto 1', 3456.98);

console.log(order);
