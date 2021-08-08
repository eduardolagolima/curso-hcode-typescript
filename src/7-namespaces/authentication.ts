/// <reference path="./authentication/index.ts" />

const login = new Authentication.Login();

const dataLogin = login.login({
    email: 'eduardo@teste.teste',
    password: '1234'
});

const register = new Authentication.Register();

const dataRegister = register.register({
    name: 'Eduardo',
    email: 'eduardo@teste.teste',
    password: '1234'
});

console.log(dataLogin, dataRegister);
