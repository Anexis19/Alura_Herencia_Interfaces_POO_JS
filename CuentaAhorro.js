export class cuentaAhorro{
    // Atributos relacionados al cliente
    #cliente;
    // Atributos relacionados a la cuenta
    #saldo;
    /*
    Dado que hay atributos repetidos entre la clase cuentaAhorro y cuentaCorriente,
    algunos se pueden mantener como ocultos pero declararlos en el constructor
    */
    constructor(cliente, numero, agenda, saldo){
        this.numero = numero;
        this.agencia = agenda;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;

    }
    retirarDeCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo -=valor;
        }
        return this.#saldo;
    }
    verSaldo(){
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}