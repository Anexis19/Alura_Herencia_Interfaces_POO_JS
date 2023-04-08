import {cliente} from "./Cliente.js";
import { cuenta } from "./cuenta.js";
// Definicion de clase y exportacion de la misma
export class cuentaCorriente extends cuenta{

    static cantidadCuentas = 0;


    constructor(cliente,numero,agencia){
        // Referencia a constructor de la clase padre
        super(cliente,numero,agencia,0);
        cuentaCorriente.cantidadCuentas++;
    }
    // Se sobreescribe el metodo padre retirarDeCuenta
    retirarDeCuenta(valor){
        // Se sobreescribe el metodo padre PRIVADO retirarDeCuenta
        super._retirarDeCuenta(valor,5);
    }

}
