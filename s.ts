// Single Responsability

// Wrong Way
class GodClass {
    public id;
    public nome;
    public conn;
    constructor(id: any, nome: any, conn: any) {
        this.id = id;
        this.nome = nome;
        this.conn = conn;
    }

    getId()
    {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getConnection()
    {
        return this.conn;
    }
}

// Right way

class User {
    public id;
    public nome;
    constructor(id: any, nome: any) {
        this.id = id;
        this.nome = nome;
    }
}

class Connection {
    public conn;
    constructor(conn: any) {
        this.conn = conn;
    }

    getConnection()
    {
        return this.conn;
    }
}

module.exports = { User, Connection, GodClass };