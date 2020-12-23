// Open Close

// Wrong
class Santander {
    public valor;
    constructor(valor: any) {
        this.valor = valor;
    }

    calculaTaxa() {
        return this.valor *= 0.1;
    }
}

class Itau implements ITaxa {
    public valor;
    constructor(valor: any) {
        this.valor = valor;
    }

    calculaTaxa() {
        return this.valor *= 0.15;
    }
}

class Taxa {
    constructor() {}

    getTaxas()
    {
        var taxaSantander = new Santander(100);
        var taxaItau = new Itau(100);

        console.log(taxaSantander.calculaTaxa());
        console.log(taxaItau.calculaTaxa());
    }
}

// Right
interface ITaxa {
    valor: any;
    calculaTaxa(): any;
}

class TaxaOpenClose {
    constructor() {}
    getTaxas(taxa: ITaxa)
    {
        console.log(taxa.calculaTaxa());
    }
}

module.exports = { Taxa, Itau, Santander, TaxaOpenClose };