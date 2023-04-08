
// Importacion de clases
import { cliente } from './Cliente.js';
import { cuenta } from './cuenta.js';
import { cuentaAhorro } from './CuentaAhorro.js';
import { cuentaCorriente } from './CuentaCorriente.js';

// Creacion de Objeto CLIENTE
const cliente1 = new cliente("Andres", "12312","12345");
const cliente2 = new cliente("Maria","12313","12346");
// Creacion de Objeto CUENTA
const cuenta1 = new cuentaCorriente(cliente1,"9901","BBVA");
const cuenta2 = new cuentaAhorro(cliente2, "9906","Bancolombia",0);
console.log(cuenta1);
console.log(cuenta2);
console.log("======OPERACIONES ENTRE CUENTAS=======")
cuenta1.depositoEnCuenta(1000);
cuenta2.depositoEnCuenta(2000);
console.log("El saldo de la cuenta1 es: ",cuenta1.verSaldo())
console.log("El saldo de la cuenta2 es: ",cuenta2.verSaldo())
console.log("======== SE REALIZA UNA TRANSFERENCIA ========")
cuenta1.transferirParaCuenta(500,cuenta2);
console.log("El saldo actual de la cuenta1 es: ",cuenta1.verSaldo());
console.log("El saldo actual de la cuenta2 es: ",cuenta2.verSaldo());
console.log("======== SE REALIZA UN RETIRO DE CADA CUENTA ========")
cuenta1.retirarDeCuenta(100);
cuenta2.retirarDeCuenta(100);
console.log("El saldo actual de la cuenta1 es: ",cuenta1.verSaldo());
console.log("El saldo actual de la cuenta2 es: ",cuenta2.verSaldo());


