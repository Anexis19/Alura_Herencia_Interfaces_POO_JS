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
        if (this.constructor == cuenta){
            throw new Error("No se debe instanciar objetos de la clase Cuenta");
        }

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
    // Metodo abstracto
    retirarDeCuenta(valor){
        throw new Error("Se debe impelemntar metodo de retiro empleando comision");
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