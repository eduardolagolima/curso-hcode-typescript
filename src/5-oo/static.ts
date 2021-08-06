interface IDatabase {
    ip: string,
    user: string,
    database: string,
    password: string,
}

class Database {
    static LOCAl = '127.0.0.1';

    constructor(
        private ip: string,
        private user: string,
        private database: string,
        private password: string,
    ) {} 

    static factory(params: IDatabase) {
        const { ip, user, database, password } = params;
        return new Database(ip, user, database, password);
    }
}

const connection = Database.factory({
    ip: Database.LOCAl,
    user: 'teste',
    database: 'teste',
    password: '1234',
});

console.log(connection);
