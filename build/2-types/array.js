"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var categories = [
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
];
categories.push('Categoria 4');
var years = [
    2019,
    2020,
    2021,
];
years.push(2022);
var categoriesAndYears = __spreadArray(__spreadArray([], categories), years);
var yearsAndCategories = __spreadArray(__spreadArray([], years), categories);
console.log({
    categories: categories,
    years: years,
    categoriesAndYears: categoriesAndYears,
    yearsAndCategories: yearsAndCategories,
});
//# sourceMappingURL=array.js.map