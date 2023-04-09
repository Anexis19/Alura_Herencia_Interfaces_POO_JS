export class Empleado{
    #clave;
    #nombre;
    #dni;
    #salario;
    constructor(nombre,dni,salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave ='';
    }

    // Metodo SET que permite asignar una clave
    setClave(clave){
        this.#clave = clave;
    }
    // Metodo GET que permite retornar la clave del objeto
    get getClave(){
        return this.#clave;
    }
    // Metodo GET que permite retornar el nombre del objeto
    get getNombre(){
        return this.#nombre;
    }

    // Metodo Abstracto
    verBonificacion(){
        console.log("La bonificacion del trabajador es: ");
        return this.#salario;
    }

    // Metodo Privado
    _verBonificacion(bono){
        console.log("La bonificacion del trabajador es: ");
        return this.#salario + (this.#salario*bono)/100
    }
}