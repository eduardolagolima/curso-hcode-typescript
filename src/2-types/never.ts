function showError(error: string): never {
    throw new Error(error);
}

// showError('Algo deu errado!');

let count = 0;

function infinityLoop(): never {
    while (true) {
        console.log(count++);
    }
}

infinityLoop();
