function getFirstPosition<T>(array: Array<T>): T {
    // ! Vai dar erro pois não é do tipo T
    // return 'Um';
    return array[0];
}

console.log(getFirstPosition(['Um', 'Dois']));
