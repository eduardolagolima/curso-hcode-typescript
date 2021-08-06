class MyPermission {
    constructor(
        // * Convenção utilizar underline em atributos privados

        private _name: string,
        private _level: number,
    ) {}

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

const myPermission = new MyPermission('Admin', 1);

console.log(myPermission.name);

myPermission.name = 'ADM';

console.log(myPermission.name);
