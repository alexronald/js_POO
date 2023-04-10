import {Cuentas} from './Cuentas.js'
export class CuentaNomina extends Cuentas {

    constructor(cliente,numeroCuenta,agencia,saldo){
        super(cliente,numeroCuenta,agencia,saldo)
    }

    retiroEnCuenta(valor){
        super._retiroEnCuenta(valor,1);
    }
}