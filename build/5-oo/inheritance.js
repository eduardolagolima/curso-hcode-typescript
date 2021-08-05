"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Register = (function () {
    function Register(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    return Register;
}());
var ClientRegister = (function (_super) {
    __extends(ClientRegister, _super);
    function ClientRegister(name, birthDate, email, company) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.email = email;
        _this.company = company;
        return _this;
    }
    return ClientRegister;
}(Register));
var clientRegister1 = new ClientRegister('Cadastro de Clientes 1', new Date(), 'teste@teste.teste', 'Empresa 1');
console.log(clientRegister1);
//# sourceMappingURL=inheritance.js.map