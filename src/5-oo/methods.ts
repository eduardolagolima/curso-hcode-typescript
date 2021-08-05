class Teacher {
    name: string;
    discipline: string;

    constructor(name: string, discipline: string) {
        this.name = name;
        this.discipline = discipline;
    }

    sayHello(): string {
        return `Olá, meu nome é ${this.name} e eu sou professor de ${this.discipline}!`;
    }

    sayNotes(...notes: number[]): number {
        return notes.reduce((acc, note) => acc + note) / notes.length;
    }
}

const teacher1: Teacher = new Teacher('João', 'História');

console.log(teacher1.sayHello());
console.log(teacher1.sayNotes(8, 10, 5.5, 7.5));
