class Register {
    name: string;
    birthDate: Date;

    constructor(name: string, birthDate: Date) {
        this.name = name;
        this.birthDate = birthDate;
    }
}

class ClientRegister extends Register {
    email: string;
    company: string;

    constructor(
        name: string,
        birthDate: Date,
        email: string,
        company: string
    ) {
        // ? Chama o construtor da classe pai
        super(name, birthDate);
        this.email = email;
        this.company = company;
    }
}

const clientRegister1 = new ClientRegister(
    'Cadastro de Clientes 1',
    new Date(),
    'teste@teste.teste',
    'Empresa 1',
);

console.log(clientRegister1);
