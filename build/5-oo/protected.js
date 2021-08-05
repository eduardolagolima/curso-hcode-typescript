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
var Residence = (function () {
    function Residence(color) {
        this.color = color;
    }
    Residence.prototype.touchIntercom = function () {
        return 'Interfone tocado';
    };
    Residence.prototype.answerIntercom = function (message) {
        return message;
    };
    return Residence;
}());
var House = (function (_super) {
    __extends(House, _super);
    function House() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    House.prototype.enter = function () {
        return this.answerIntercom('Olá, quem é?');
    };
    return House;
}(Residence));
var house1 = new House('Amarela');
console.log(house1);
console.log(house1.touchIntercom());
console.log(house1.enter());
//# sourceMappingURL=protected.js.map