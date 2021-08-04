// * Dica 1: Maneira de declarar um array de strings
const categories: string[] = [
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
];

categories.push('Categoria 4');
// ! Erro 1: Não aceita number pois é um array de strings
// categories.push(5);

// * Dica 2: Outra maneira de declarar um array de numbers
const years: Array<number> = [
    2019,
    2020,
    2021,
];

years.push(2022);
// ! Erro 2: Não aceita string pois é um array de numbers
// years.push('2023');

// * Dica 3: Maneira de declarar um array de strings e numbers
const categoriesAndYears: Array<string | number> = [
    ...categories,
    ...years,
];

// * Dica 4: Maneira de declarar um array de numbers e strings
const yearsAndCategories: (number | string)[] = [
    ...years,
    ...categories,
];

console.log({
    categories,
    years,
    categoriesAndYears,
    yearsAndCategories,
});
