let year: number;
let value: number;

year = 2021;
value = 1234.56;

console.log(year, value);

// ! Erro 1: Não aceita string
// year = '2021';
// value = '1234.56';
// ! Erro 2: Mesmo retornando um number, não é o tipo declarado
// year = new Number('2021');
// value = new Number('1234.56');

// * Dica 1: chamando como uma função funciona
year = Number('2022');
value = Number('1234.56');

console.log(year, value);

// * Dica 2: outras maneiras de fazer o cast
year = +'2023';
value = +'1234.56';

console.log(year, value);

// * Dica 3: outra maneira de fazer o cast
year = parseInt('2024');
value = parseFloat('1234.56');

console.log(year, value);
