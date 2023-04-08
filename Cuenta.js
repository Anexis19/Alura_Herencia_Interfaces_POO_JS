export class cuenta{
    // Atributos relacionados al cliente
    #cliente;
    // Atributos relacionados a la cuenta
    #saldo;
    /*
    Dado que hay atributos repetidos entre la clase cuentaAhorro y cuentaCorriente,
    algunos se pueden mantener como ocultos pero declararlos en el constructor
    */
    constructor(cliente, numero, agencia, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
        console.log("Se ha realizado un deposito de "+valor+" a la cuenta "+this.numero);
        return this.#saldo;

    }
    // Retiro de cuenta sin emplear comision
    retirarDeCuenta(valor){
        _retirarDeCuenta(valor,0);
    }

    _retirarDeCuenta(valor,comision){
        // Amplica una comision dependiendo de la sobreescritura de las clases hijas
        valor = valor *(1+comision/100);
        if(valor <= this.#saldo){
            this.#saldo -=valor;
        }
        console.log("Se ha realizado un retiro de: "+valor+" a la cuenta "+this.numero);
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
    set setCliente(valor){

        if(valor instanceof cliente){
            this.#cliente = valor;
        }


    }
    get getCliente(){
        return this.#cliente;
    }

}