import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado{

    // Constructor propio de la clase Gerente
    constructor(nombre, dni){
        // Llamado al constructor de la clase PADRE
        super(nombre,dni);
    }
}