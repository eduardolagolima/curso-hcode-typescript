let admin: boolean;

admin = false;

console.log(admin);

// ! Erro 1: Não aceita number
// admin = 1;
// ! Erro 2: Mesmo retornando um boolean, não é o tipo declarado
// admin = new Boolean(1);

// * Dica 1: chamando como uma função funciona
admin = Boolean(1);

// * Dica 2: outra maneira de fazer o cast
admin = !!1;

console.log(admin);

let password: string;
let minPasswordLength: number;
let securePassword: boolean;

password = '1234';
minPasswordLength = 8;
securePassword = password.length >= minPasswordLength;

console.log(password, minPasswordLength, securePassword);
