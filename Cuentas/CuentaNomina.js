import { cuenta } from "./Cuenta.js";

export class cuentaNomina extends cuenta{
   // Constructor propio de la clase
   constructor(cliente,numero,agencia,saldo){
    // Referencia a constructor de la clase padre
    super(cliente,numero,agencia,saldo);
    }
    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor,1);
    }
}