import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta{

    // Constructor propio de la clase
    constructor(cliente,numero,agencia,saldo){
        // Referencia a constructor de la clase padre
        super(cliente,numero,agencia,saldo);
    }
    // Se sobreescribe el metodo padre retirarDeCuenta
    retirarDeCuenta(valor){
        // Se sobreescribe el metodo padre PRIVADO retirarDeCuenta
        super._retirarDeCuenta(valor,2);
    }
}