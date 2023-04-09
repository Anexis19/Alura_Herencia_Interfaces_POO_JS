export class sistemaAutenticacion{

    // Definicion de funcion estatica
    static login(usuario,clave){
        console.log("La Verificacion del usuario "+usuario.getNombre+" es: ");
        return usuario.getClave == clave;
    }
}