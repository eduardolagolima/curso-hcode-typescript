"use strict";
var Vehicle = (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.open = function () {
        return false;
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle('Preto');
console.log(vehicle1.color);
console.log(vehicle1.open());
//# sourceMappingURL=public.js.map