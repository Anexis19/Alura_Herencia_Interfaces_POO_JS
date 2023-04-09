// Importacion de clases
import { cliente } from './Cliente.js';
import { cuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { cuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { cuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { sistemaAutenticacion } from './SistemaAutenticacion.js';

// Creacion de Objeto CLIENTE
const cliente1 = new cliente("Andres", "12312","12345");
const cliente2 = new cliente("Maria","12313","12346");
const cliente3 = new cliente("Jose","12314","12347");
// Creacion de Objeto CUENTA
const cuenta1 = new cuentaCorriente(cliente1,"9901","BBVA");

// Tanto las cuentas de AHORRO como NOMINA, pueden tener un deposito diferente a cero
const cuenta2 = new cuentaAhorro(cliente2, "9906","Bancolombia",0);
const cuenta3 = new cuentaNomina(cliente3,"9915","Colpatria",100);


// Creacion de Objeto EMPLEADO
const empleado1 = new Empleado("Diego","2405",1000);
const empleado2 = new Gerente("Elena","2406",2000);
const empleado3 = new Director("Ximena","2407",3000);

console.log(empleado1);
console.log(empleado2);
console.log(empleado3);

/*
    OPERACIONES QUE PERMITEN DETERMINAR LAS BONIFICACIONES DE LOS DIFERENTES EMPLEADOS
    console.log(empleado1.verBonificacion());
    console.log(empleado2.verBonificacion());
    console.log(empleado3.verBonificacion());
*/
// Asignacion de clave
empleado1.setClave("12345");
cliente1.setClave("222");

// Impresion de Autenticacion de Clave
console.log("=============== VERIFICACION DE CLAVE ===============");
console.log(sistemaAutenticacion.login(empleado1,"12345"));
console.log(sistemaAutenticacion.login(cliente1,"123"));


