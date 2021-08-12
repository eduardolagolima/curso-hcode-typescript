export default class Operation {
    private operation: string[] = [];

    constructor() {}
    
    add(value: string): number {
        return this.operation.push(value);
    }

    get length(): number {
        return this.operation.length;
    }
}
