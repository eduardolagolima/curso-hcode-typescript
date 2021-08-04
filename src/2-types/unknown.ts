let response: unknown;

response = {
    status: 200,
    data: {
        message: 'Tudo certo!',
    },
};

console.log(response);

response = 'Tudo certo!';

console.log(response);

response = true;

console.log(response);

const knownValue: any = 150;
const unknownValue: unknown = 250;

const myFirstValue: number = knownValue;
// ! Erro 1: Quando usamos um tipo desconhecido, 
// ! não é possível atribuir em uma variável com outro tipo
// const mySecondValue: number = unknownValue;
