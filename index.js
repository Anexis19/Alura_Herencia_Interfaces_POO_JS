
// Importacion de clases
import { cliente } from './Cliente.js';
import { cuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { cuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { cuentaNomina } from './Cuentas/CuentaNomina.js';

// Creacion de Objeto CLIENTE
const cliente1 = new cliente("Andres", "12312","12345");
const cliente2 = new cliente("Maria","12313","12346");
const cliente3 = new cliente("Jose","12314","12347");
// Creacion de Objeto CUENTA
const cuenta1 = new cuentaCorriente(cliente1,"9901","BBVA");

// Tanto las cuentas de AHORRO como NOMINA, pueden tener un deposito diferente a cero
const cuenta2 = new cuentaAhorro(cliente2, "9906","Bancolombia",0);
const cuenta3 = new cuentaNomina(cliente3,"9915","Colpatria",100);


console.log(cuenta1);
console.log(cuenta2);
console.log(cuenta3);
console.log("======OPERACIONES ENTRE CUENTAS=======")
cuenta1.depositoEnCuenta(1000);
cuenta2.depositoEnCuenta(2000);
cuenta3.depositoEnCuenta(150);
console.log("El saldo de la cuenta1 es: ",cuenta1.verSaldo())
console.log("El saldo de la cuenta2 es: ",cuenta2.verSaldo())
console.log("El saldo de la cuenta3 es: ",cuenta3.verSaldo())
console.log("======== SE REALIZA UNA TRANSFERENCIA ========")
cuenta1.transferirParaCuenta(500,cuenta2);
console.log("El saldo actual de la cuenta1 es: ",cuenta1.verSaldo());
console.log("El saldo actual de la cuenta2 es: ",cuenta2.verSaldo());
console.log("======== SE REALIZA UN RETIRO DE CADA CUENTA ========")
cuenta1.retirarDeCuenta(100);
cuenta2.retirarDeCuenta(100);
cuenta3.retirarDeCuenta(50);
console.log("El saldo actual de la cuenta1 es: ",cuenta1.verSaldo());
console.log("El saldo actual de la cuenta2 es: ",cuenta2.verSaldo());
console.log("El saldo actual de la cuenta3 es: ",cuenta3.verSaldo());


