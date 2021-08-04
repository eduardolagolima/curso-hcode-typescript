"use strict";
function sumValues1(value1, value2, value3) {
    return value1 + value2 + value3;
}
function sumValues2(values) {
    return values.reduce(function (acc, value) { return acc + value; }, 0);
}
function sumValues3() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(function (acc, value) { return acc + value; }, 0);
}
console.log({ sumValues1: sumValues1(1, 1, 1) });
console.log({ sumValues2: sumValues2([2, 2, 2]) });
console.log({ sumValues3: sumValues3(3, 3, 3) });
//# sourceMappingURL=rest-parameters.js.map