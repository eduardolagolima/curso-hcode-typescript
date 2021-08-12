interface IOperationOptions {
    whenCalculate(result: string): void;
}

export default class Operation {
    private operation: string[] = [];
    private operationOptions: IOperationOptions;
    private whenCalculate: any;

    constructor(operationOptions: IOperationOptions) {
        this.operationOptions = operationOptions;
        this.whenCalculate = this.operationOptions.whenCalculate;
    }
    
    add(value: string): number {
        if (this.operation.length === 3) {
            this.calculate();
        }

        return this.operation.push(value);
    }

    get length(): number {
        return this.operation.length;
    }

    get lastPosition(): string {
        const lastIndex = this.operation.length ? this.operation.length - 1 : 0;
        return this.operation[lastIndex];
    }

    set lastPosition(value: string) {
        const lastIndex = this.operation.length ? this.operation.length - 1 : 0;
        this.operation[lastIndex] = value;
    }

    getResult(): string {
        let result: string = '0';

        try {
            result = (eval(this.operation.join(''))).toString();
        } catch (error) {
            result = 'Erro';
        }

        return result;
    }

    calculate(): void {
        let result = this.getResult();

        if (result.length > 12) {
            result = result.substr(0, 12);
        }

        this.operation = [result];

        this.whenCalculate(result);
    }
}
