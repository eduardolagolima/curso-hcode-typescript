interface IProcessing<TypeInterface> {
    value: TypeInterface;

    process(arg: TypeInterface): TypeInterface;
}

const myText: IProcessing<string> = {
    value: 'Eduardo Lago Lima',
    process(arg: string): string {
        return arg.toUpperCase();
    }
}

console.log(myText.value);
console.log(myText.process('Fulano da Silva'));

const myNumber: IProcessing<number> = {
    value: 2,
    process(arg: number): number {
        return arg * arg;
    }
}

console.log(myNumber.value);
console.log(myNumber.process(2));
