"use strict";
var Bank = (function () {
    function Bank() {
        this.safeBox = 10000;
    }
    Bank.prototype.withdrawFromSafeBox = function (value) {
        if (this.safeBox >= value) {
            this.safeBox -= value;
            return 'Dinheiro retirado com sucesso';
        }
        return 'O cofre não possui o valor requisitado';
    };
    Bank.prototype.withdrawFromBox = function (value) {
        return this.withdrawFromSafeBox(value);
    };
    Bank.prototype.withdrawFromElectronicBox = function (value) {
        return this.withdrawFromSafeBox(value);
    };
    return Bank;
}());
var bank1 = new Bank();
bank1.withdrawFromElectronicBox(2500);
console.log(bank1);
//# sourceMappingURL=private.js.map