interface IProduct {
    name: string,
    price: number,
    description?: string,
};

const product1: IProduct = {
    name: 'Produto 1',
    price: 123.45
};

const product2: IProduct = {
    name: 'Produto 2',
    price: 123.45,
    description: 'Descrição do Produto 2',
};

console.log({
    product1,
    product2,
});
