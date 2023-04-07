
// Importacion de clases
import {cuentaCorriente} from './CuentaCorriente.js';
import {cliente} from './Cliente.js';

// Creacion de Objeto CLIENTE
const cliente1 = new cliente("Andres", "12312","12345");
const cliente2 = new cliente("Maria","12313","12346");

// Instanciacion de atributos de clase CLIENTE
/*  INSTANCIACION DE CLIENTES SIN HACER USO DE CONSTRUCTOR PROPIO DE LA CLASE CLIENTE

    cliente1.nombreCliente = "Andres";
    cliente1.dniCliente = "12312";
    cliente1.rutCliente="12345";
    cliente2.nombreCliente = "Maria";
    cliente2.dniCliente = "12313";
    cliente2.rutCliente="12346";
*/
// Creacion de Objeto CUENTA CORRIENTE
const cuentaCorriente1 = new cuentaCorriente(cliente1,"1001","BBVA");
const cuentaCorriente2 = new cuentaCorriente(cliente2,"1002","Bancolombia");

// Asignacion de datos desde la clase CLIENTE a la clase CUENTACORRIENTE
cuentaCorriente1.setCliente = cliente1;
cuentaCorriente2.setCliente = cliente2;

// Definicion de variables
let saldo = cuentaCorriente1.verSaldo();
let saldo2 = cuentaCorriente2.verSaldo();

saldo = cuentaCorriente1.depositoEnCuenta(6000);

// Instanciacion de atributos PUBLICOS de la clase CUENTACORRIENTE
/*
    INSTANCIACION DE CUENTAS CORRIENTES SIN HACER USO DE CONSTRUCTOR PROPIO DE LA CLASE CUENTA CORRIENTE

    cuentaCorriente1.agencia="BBVA";
    cuentaCorriente1.numero="1001";
    cuentaCorriente2.agencia="Bancolombia";
    cuentaCorriente2.numero="1002";
*/
/*
    OPERACIONES DE DEPOSITOS Y RETIROS DE UNA SOLA CUENTA

    console.log('El saldo actual es: '+saldo);
    saldo = cuentaCorriente1.depositoEnCuenta(500);
    console.log('El saldo actual es: '+saldo);
    saldo = cuentaCorriente1.depositoEnCuenta(700);
    console.log('El saldo actual es: '+saldo);
    saldo = cuentaCorriente1.retirarDeCuenta(100);
    console.log('El saldo actual es: '+saldo);
*/

// Uso de metodo de la clase CUENTA CORRIENTE e IMPRESION DE DATOS
/*  OPERACION DE TRANSACCION ENTRE DOS CUENTAS

    console.log("========IMPRESION DE DATOS========");
    console.log("El saldo actual es: "+saldo);
    console.log(cuentaCorriente1);
    console.log("Se realiza el proceso TRANSACCION");
    // Realiza la operacion de transaccion
    cuentaCorriente1.transferirParaCuenta(1000,cuentaCorriente2);
    // Actualiza el valor almacenado luego de la transaccion
    saldo = cuentaCorriente1.verSaldo();
    console.log("El saldo final es: "+saldo);

    console.log("========IMPRESION DE DATOS========");
    console.log(cuentaCorriente2);
    // Actualiza el valor almacenado luego de la transaccion
    saldo2 = cuentaCorriente2.verSaldo();
    console.log("El saldo actual es: "+saldo2);
*/
console.log("Impresion de datos de un cliente1 mediante metodo GET ",cuentaCorriente1.getCliente );
console.log("Impresion de datos de un cliente2 mediante metodo GET ",cuentaCorriente2.getCliente );
console.log("La cantidad de cuentas creadas es: ",cuentaCorriente.cantidadCuentas);