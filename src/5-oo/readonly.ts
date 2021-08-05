class User {
    readonly id: number = 1;
    name: string = 'Pedro';
    private password: string = '1234';
}

const userX = new User();

// ! Não é possível alterar
// userX.id = 2;
userX.name = 'João';

// ! Não é possível acessar
// console.log(userX.password);

console.log(userX);
