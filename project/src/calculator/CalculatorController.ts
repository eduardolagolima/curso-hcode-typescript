import DateTime from './DateTime.js';
import Screen from './Screen.js';

export default class CalculatorController {
    constructor(
        private screen = new Screen()
    ) {
        new DateTime();
    }
}
