
import {Clientes} from '../cliente.js'
import {Cuentas} from './Cuentas.js'
export class cuentaCorriente extends Cuentas{
    static cantidadDeCuenta = 0

    constructor(cliente,numeroCuenta,agencia){
        super(cliente,numeroCuenta,agencia,0)
        cuentaCorriente.cantidadDeCuenta++;
    }

    retiroEnCuenta(valor){
        super._retiroEnCuenta(valor,5);
    }

    prueva(){
        super.prueva()
        console.log("clase hijo")
    }
}