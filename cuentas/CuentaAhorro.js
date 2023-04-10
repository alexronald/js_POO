import {Cuentas} from './Cuentas.js'
export class CuentaAhorro extends Cuentas {

    constructor(cliente,numeroCuenta,agencia,saldo){
        super(cliente,numeroCuenta,agencia,saldo)
    }

    retiroEnCuenta(valor){
        super._retiroEnCuenta(valor,2);
    }
}