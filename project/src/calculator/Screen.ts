export default class Screen {
    private _value: HTMLDivElement | null = document.querySelector('#values');
    
    constructor() {
        this.value = '0';
    }

    set value(value: string) {
        if (this._value) {
            value = value.toString().replace('.', ',');
            this._value.innerHTML = value.length > 12 ? 'Erro' : value;
        }
    }

    get value(): string {
        return this._value ? this._value.innerHTML : '0';
    }
}
