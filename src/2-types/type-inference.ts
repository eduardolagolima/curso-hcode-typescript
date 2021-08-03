let language = 'JavaScript';

// ! Erro 1: Atribuindo um número em uma variável declarada como string
// language = 4;

// ! Erro 2: Acessando um método que não existe para o tipo string
// console.log(language.toFixed());

console.log(language);
console.log(language.toLocaleUpperCase());

const userInfo = [1.23, 'Eduardo', new Date()];

userInfo.push(2.34);
userInfo.push('João');
userInfo.push(new Date(2021, 0, 1));
// ! Erro 3: Adicionando um tipo de dado que não foi previsto na declaração da variável
// userInfo.push(true);

console.log(userInfo);
