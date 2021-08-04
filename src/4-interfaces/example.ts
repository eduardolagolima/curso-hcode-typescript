interface IAddress {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
}

const address: IAddress = {
    street: 'Rua X',
    number: 123,
    neighborhood: 'Bairro X',
    city: 'Cidade X',
    state: 'Estado X',
};

console.log(address);
