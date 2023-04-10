import {Cuentas} from './cuentas/Cuentas.js'
import {Clientes} from './cliente.js'
import { CuentaAhorro } from './cuentas/CuentaAhorro.js';
import {cuentaCorriente} from './cuentas/cuentaCorriente.js'
import { CuentaNomina } from './cuentas/CuentaNomina.js';
import { Empleado } from './Empleado/Empleado.js';
import { Gerente } from './Empleado/Gerente.js';
import { Director } from './Empleado/Director.js';
import { SistemeDeAutentificacion } from './SistemeDeAutentificacion.js';


const empleado = new Empleado('fernado','44359454',1000)
empleado.asinarClave("12345")
console.log(SistemeDeAutentificacion.login(empleado,"12345"))

const gerente = new Gerente('fernado','44359454',12000)
gerente.asinarClave("12345")
console.log(SistemeDeAutentificacion.login(gerente,"12345"))

//const direcctor = new Director('fernado','44359454',15000)

const cliente = new Clientes('alan','44359454',"15000")
gerente.asinarClave("1111")
console.log(SistemeDeAutentificacion.login(cliente,"12345"))









