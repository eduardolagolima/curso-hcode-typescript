import DateTime from './DateTime.js';
import Screen from './Screen.js';

export default class CalculatorController {
    constructor(
        private screen = new Screen()
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
                } else if (target.id === 'adicao') {

                } else if (target.id === 'subtracao') {

                } else if (target.id === 'divisao') {

                } else if (target.id === 'multiplicacao') {

                } else if (target.id === 'ponto') {

                } else if (target.id === 'limpar') {

                } else if (target.id === 'desfazer') {

                } else if (target.id === 'porcentagem') {

                } else if (target.id === 'igual') {

                }
            });
        });
    }

    addNumber(number: number): void {
        this.screen.value = number.toString();
    }
}
