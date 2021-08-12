export default class DateTime {
    private _date: HTMLDivElement | null = document.querySelector('#datetime > div:nth-child(2)');
    private _time: HTMLTimeElement | null = document.querySelector('#datetime time');

    constructor() {
        this.render();
        setInterval(() => this.render(), 1000);
    }

    set date(value: string) {
        if (this._date) {
            this._date.innerHTML = value;
        }
    }

    set time(value: string) {
        if (this._time) {
            this._time.innerHTML = value;
        }
    }

    render() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleDateString('pt-BR', { month: 'long' });
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const twoPoints = date.getSeconds() % 2 === 0 ? ':' : ' ';

        this.date = `${day} de ${month} de ${year}`;
        this.time = `${hours}${twoPoints}${minutes}`;
    }
}
