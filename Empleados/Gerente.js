import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado{

    // Constructor propio de la clase Gerente
    constructor(nombre, dni,salario){
        // Llamado al constructor de la clase PADRE
        super(nombre,dni,salario);
    }
    // Sobreescritura de metodo Bonificacion
    verBonificacion(){
        const bono = 5;
        return super._verBonificacion(bono);
    }
}