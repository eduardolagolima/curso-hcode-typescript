"use strict";
var Teacher = (function () {
    function Teacher(name, discipline) {
        this.name = name;
        this.discipline = discipline;
    }
    Teacher.prototype.sayHello = function () {
        return "Ol\u00E1, meu nome \u00E9 " + this.name + " e eu sou professor de " + this.discipline + "!";
    };
    Teacher.prototype.sayNotes = function () {
        var notes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            notes[_i] = arguments[_i];
        }
        return notes.reduce(function (acc, note) { return acc + note; }) / notes.length;
    };
    return Teacher;
}());
var teacher1 = new Teacher('João', 'História');
console.log(teacher1.sayHello());
console.log(teacher1.sayNotes(8, 10, 5.5, 7.5));
//# sourceMappingURL=methods.js.map