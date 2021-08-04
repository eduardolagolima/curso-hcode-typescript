function sum(first: number, second: number): number {
    return first + second;
}

console.log(sum(2, 4));

function showValue(value: string | number | boolean): void {
    console.log(value);
}

showValue('Teste 1');
showValue(123);
showValue(true);

const showAnotherValue = (value: string): void => {
    console.log(value);
}

showAnotherValue('Teste 2');
