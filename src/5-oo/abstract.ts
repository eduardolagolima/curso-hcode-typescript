interface IMyUser {
    name: string,
    email: string,
    phone: string,
}

abstract class MyNotification {
    abstract send(myUser: IMyUser): string;
}

class MyEmail extends MyNotification {
    send({ email }: IMyUser): string {
        return `Email enviado para ${email}`;
    }
}

class MySMS extends MyNotification {
    send({ phone }: IMyUser): string {
        return `SMS enviado para ${phone}`;
    }
}

// ! Não é possível instanciar uma classe abstrata
// new MyNotification();

console.log(new MyEmail().send({
    name: 'Eduardo',
    email: 'eduardo@teste.com',
    phone: '54999998888'
}));

console.log(new MySMS().send({
    name: 'Pedro',
    email: 'pedro@teste.com',
    phone: '54988887777'
}));
