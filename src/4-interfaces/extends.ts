interface IModel {
    id: number,
}

interface IPerson extends IModel {
    name: string,
    age: number,
}

interface IUser extends IPerson {
    email: string,
    password: string,
}
