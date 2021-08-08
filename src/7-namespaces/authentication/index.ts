namespace Authentication {
    interface ILogin {
        email: string;
        password: string;
    }

    interface IRegister {
        name: string;
        email: string;
        password: string;
    }

    export class Login {
        login(data: ILogin) {
            return data;
        }
    }
    
    export class Register {
         register(data: IRegister) {
            return data;
         }
    }
}
