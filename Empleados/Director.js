import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    // Constructor propio de la clase DIRECTOR
    constructor(nombre, dni,salario){
        // Llamado al constructor de la clase PADRE
        super(nombre,dni,salario);
    }

    // Sobreescritura de metodo Bonificacion
    verBonificacion(){
        const bono = 10  ;
        return super._verBonificacion(bono);
    }
}