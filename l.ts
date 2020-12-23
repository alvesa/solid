// Liskov Substitucion

class A {
    getText(): any {
        return 'text from A';
    }
}

class B extends A {
    getText(): any {
        return 'text from B';
    }
}

const imprime = (obj: A) => {
    return obj.getText();
}

module.exports = { imprime, A, B };

