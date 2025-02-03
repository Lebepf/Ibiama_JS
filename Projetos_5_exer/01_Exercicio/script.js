class conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valot;
    }

}
let conta = new conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(500)

console.log(conta.saldo);

