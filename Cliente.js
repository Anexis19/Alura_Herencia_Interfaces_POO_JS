
// Definicion de clase y exportacion de la misma
export class cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente,dniCliente,rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.clave = '';
    }
    // Metodo SET que permite asignar una clave
    setClave(clave){
        this.#clave = clave;
    }
    // Metodo GET que permite retornar una clave
    get getClave(){
        return this.#clave;
    }
    get getNombre(){
        return this.nombreCliente;
    }
}