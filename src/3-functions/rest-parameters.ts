function sumValues1(value1: number, value2: number, value3: number): number {
    return value1 + value2 + value3;
}

function sumValues2(values: number[]): number {
    return values.reduce((acc, value) => acc + value, 0);
}

// * Rest Parameters
function sumValues3(...values: number[]): number {
    return values.reduce((acc, value) => acc + value, 0);
}

console.log({ sumValues1: sumValues1(1, 1, 1) });
console.log({ sumValues2: sumValues2([2, 2, 2]) });
console.log({ sumValues3: sumValues3(3, 3, 3) });
