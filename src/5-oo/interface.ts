interface IEmail {
    name: string,
    email: string,
}

interface IEmailAction {
    send(): string;
}

class Email implements IEmail, IEmailAction {
    constructor(
        public name: string,
        public email: string
    ) { }
    
    send(): string {
        return `Email enviado para a pessoa "${this.name}" no email "${this.email}"`;
    }
}

console.log(new Email(
    'Eduardo',
    'eduardo@teste.teste'
).send());
