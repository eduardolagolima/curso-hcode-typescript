import { debug, log } from './utils';

@debug
class FirstClass {
    constructor() {}
}

@log
class SecondClass {
    constructor() {}
}

console.log(new SecondClass());
