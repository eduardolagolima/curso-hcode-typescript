interface ICourse {
    title: string,
    readonly price: number,
    description?: string,
    rating: number,
};

const course1: ICourse = {
    title: 'Curso 1',
    price: 5000,
    rating: 5,
};

course1.title = 'Outro título do Curso 1';
// ! Erro 1: Não é possível alterar pois a property price é readonly
// course1.price = 7500;

console.log({
    course1,
});
