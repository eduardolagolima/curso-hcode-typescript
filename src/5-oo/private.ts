class Bank {
    private safeBox: number = 10000;

    private withdrawFromSafeBox(value: number): string {
        if (this.safeBox >= value) {
            this.safeBox -= value;

            return 'Dinheiro retirado com sucesso';
        }

        return 'O cofre não possui o valor requisitado';
    }

    protected withdrawFromBox(value: number) {
        return this.withdrawFromSafeBox(value);
    }

    public withdrawFromElectronicBox(value: number) {
        return this.withdrawFromSafeBox(value);
    }
}

const bank1 = new Bank();
bank1.withdrawFromElectronicBox(2500);

console.log(bank1);
