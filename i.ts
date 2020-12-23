// Interface Segragation

interface IVeiculo {
    numeroRodas: any;
    tamanhoTanque: any;
}

interface ICarro extends IVeiculo {
    numeroDePortas: any;
}

class Carro implements ICarro {
    numeroRodas: any;
    tamanhoTanque: any;
    numeroDePortas: any;
}

class Moto implements IVeiculo {
    numeroRodas: any;
    tamanhoTanque: any;
}