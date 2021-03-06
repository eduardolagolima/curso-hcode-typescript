import DateTime from './DateTime.js';
import Screen from './Screen.js';
import Operation from './Operation.js';

export default class CalculatorController {
    constructor(
        private screen = new Screen(),
        private operation = new Operation({
            whenCalculate: (result: string) => this.screen.value = result
        }),
    ) {
        new DateTime();
        this.buttonEvents();
    }

    buttonEvents(): void {
        document.querySelectorAll('#teclado button').forEach((element) => {
            element.addEventListener('click', (event: Event) => {
                const target = event.target as HTMLButtonElement;

                if (target.className === 'numero') {
                    this.addNumber(Number(target.dataset.valor));
                } else if (target.className === 'operacao') {
                    this.addOperator(String(target.dataset.valor));
                } else if (target.id === 'ponto') {

                } else if (target.id === 'limpar') {

                } else if (target.id === 'desfazer') {

                } else if (target.id === 'porcentagem') {

                } else if (target.id === 'igual') {
                    this.calculate();
                }
            });
        });
    }

    addOperation(operation: string): void {
        this.operation.add(operation);
    }

    addNumber(number: number): void {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.addOperation(number.toString())
        } else {
            number = Number(this.operation.lastPosition.toString() + number.toString());
            this.operation.lastPosition = number.toString();
        }

        this.screen.value = number.toString();
    }

    addOperator(operator: string) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.operation.lastPosition = operator;
        } else {
            if (this.operation.length === 0) {
                this.addOperation('0');    
            }

            this.addOperation(operator);
        }
    }

    calculate(): void {
        this.operation.calculate();
    }
}
