class MyDocument {
    // * TypeScript
    private title: string = 'Título MyDocument';

    // * ECMAScript
    #subtitle: string = 'Subtítulo MyDocument';

    showPrivateAttribute() {
        return this.#subtitle;
    }
}

class AnotherDocument extends MyDocument {
    // ! Não funciona no TypeScript
    // private title: string = 'Título AnotherDocument';

    // * Funciona no ECMAScript
    #subtitle: string = 'Subtítulo AnotherDocument';

    showPrivateAttribute() {
        return this.#subtitle;
    }
}

const myDocument = new MyDocument();
const anotherDocument = new AnotherDocument();

console.log({
    myDocument: myDocument.showPrivateAttribute(),
    anotherDocument: anotherDocument.showPrivateAttribute()
});

// ! Da erro em tempo de compilação - TypeScript
// console.log(myDocument.title);
// ! Da erro em tempo de execução - ECMAScript
// console.log(myDocument.#subtitle);
