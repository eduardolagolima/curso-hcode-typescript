import applyMixins from './applyMixins';

class MyProduct {
    buy(quantity: number) {
        return `Foram comprados ${quantity} produtos`;
    }

    sell(quantity: number) {
        return `Foram vendidos ${quantity} produtos`;
    }
}

class MyMobile {
    sit() {
        return 'Você sentou no móvel';
    }

    push(meters: number) {
        return `O móvel foi empurrado ${meters} metros`;
    }
}

class MyCouch {
    constructor(public name: string) {}
}

interface MyCouch extends MyProduct, MyMobile {}

applyMixins(MyCouch, [MyProduct, MyMobile]);

const myCouch = new MyCouch('Sofá 3 Lugares');

console.log({
    'myCouch.name': myCouch.name,
    'myCouch.buy()': myCouch.buy(5),
    'myCouch.sell()': myCouch.sell(10),
    'myCouch.sit()': myCouch.sit(),
    'myCouch.push()': myCouch.push(15),
});
