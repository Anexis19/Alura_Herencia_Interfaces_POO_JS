import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    // Constructor propio de la clase DIRECTOR
    constructor(nombre, dni){
        // Llamado al constructor de la clase PADRE
        super(nombre,dni);
    }
}