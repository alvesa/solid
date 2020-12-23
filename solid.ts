const singleResponsability = require('./s.ts');
const openClose = require('./o.ts');
const liskovSubstitution = require('./l');

const taxas = new openClose.Taxa();
const testeOpenClose = new openClose.TaxaOpenClose();

const santander = new openClose.Santander(100);
const itau = new openClose.Itau(100);


taxas.getTaxas();
testeOpenClose.getTaxas(santander);
testeOpenClose.getTaxas(itau);

const a = new liskovSubstitution.A();
const b = new liskovSubstitution.B();
console.log(liskovSubstitution.imprime(a));
console.log(liskovSubstitution.imprime(b));