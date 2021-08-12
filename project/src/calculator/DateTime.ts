export default class DateTime {
    private dateElement: HTMLDivElement | null;
    private timeElement: HTMLTimeElement | null;

    constructor() {
        this.dateElement = document.querySelector('#datetime > div:nth-child(2)');
        this.timeElement = document.querySelector('#datetime time');

        this.render();
        setInterval(() => this.render(), 1000);
    }

    set date(value: string) {
        if (this.dateElement) {
            this.dateElement.innerHTML = value;
        }
    }

    set time(value: string) {
        if (this.timeElement) {
            this.timeElement.innerHTML = value;
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

        this.date = `${day} ${month} ${year}`;
        this.time = `${hours}${twoPoints}${minutes}`;
    }
}
