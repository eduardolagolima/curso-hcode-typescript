interface IPersonCrud {
    name: string;
    email: string;
}

interface IUserCrud {
    name: string;
    email: string;
    password: string;
}

class Crud<TypeData> {
    create(data: TypeData) {
        return data;
    }

    read(id: number) {
        return id;
    }

    update(id: number, data: TypeData) {
        return { id, data };
    }

    delete(id: number) {
        return `Registro ${id} excluído`;
    }
}

class PersonCrud extends Crud<IPersonCrud> {}
class UserCrud extends Crud<IUserCrud> {}

const myPerson = new PersonCrud();
// ? Sem precisar criar a classe PersonCrud
// const myPerson = new Crud<IPersonCrud>();
const myUser = new UserCrud();
// ? Sem precisar criar a classe UserCrud
// const myUser = new Crud<IUserCrud>();

const myPersonCreate = myPerson.create({
    name: 'Person - Create',
    email: 'person-create@teste.teste',
});

const myPersonUpdate = myPerson.update(1, {
    name: 'Person - Update',
    email: 'person-update@teste.teste',
});

const myUserCreate = myUser.create({
    name: 'User - Create',
    email: 'user-create@teste.teste',
    password: '1234',
});

const myUserUpdate = myUser.update(2, {
    name: 'User - Update',
    email: 'user-update@teste.teste',
    password: '1234',
});

console.log({
    myPersonCreate,
    myPersonUpdate,
    myUserCreate,
    myUserUpdate,
});
