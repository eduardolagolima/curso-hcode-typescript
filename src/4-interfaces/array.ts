interface ICategory {
    id: number,
    name: string,
    parentCategory?: ICategory,
}

const frontend: ICategory = {
    id: 1,
    name: 'Frontend',
};

const backend: ICategory = {
    id: 2,
    name: 'Backend',
};

interface IMenu {
    categories: ICategory[],
}

const menu: IMenu = {
    categories: [
        frontend,
        backend,
    ],
};

console.log(menu);

interface ITodo {
    [index: number]: string;
}

const todo: ITodo = [
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3',
];

console.log(todo);
