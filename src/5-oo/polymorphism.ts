class Company {
    provideService() {
        return 'A empresa está prestando um serviço';
    }
}

class Bakery extends Company {
    provideService() {
        return 'A padaria está vendendo pão';
    }
}

class Market extends Company {
    provideService() {
        return 'O mercado está vendendo alimentos e bebidas';
    }
}

console.log(new Company().provideService());
console.log(new Bakery().provideService());
console.log(new Market().provideService());
