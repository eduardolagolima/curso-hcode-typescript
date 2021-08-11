function getterSetterDecorator(show: boolean) {
    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = show;
    }
}

class Login {
    constructor(
        private _user: string,
        private _password: string,
    ) {}

    @getterSetterDecorator(true)
    get user() {
        return this._user;
    }

    @getterSetterDecorator(false)
    get password() {
        return this._password;
    }
}

const myLogin = new Login(
    'eduardolagolima',
    '123456'
);

for (let key in myLogin) {
    console.log('chave', key);
}

