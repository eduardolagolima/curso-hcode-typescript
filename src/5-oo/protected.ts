class Residence {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    public touchIntercom(): string {
        return 'Interfone tocado';
    }

    protected answerIntercom(message: string): string {
        return message;
    }
}

class House extends Residence {
    public enter(): string {
        return this.answerIntercom('Olá, quem é?');
    }
}

const house1 = new House('Amarela');

console.log(house1);
console.log(house1.touchIntercom());
console.log(house1.enter());
