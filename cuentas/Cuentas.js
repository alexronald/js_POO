export class Cuentas{
    #cliente
    #saldo



    constructor(cliente,numeroCuenta,agencia,saldo){
        if(this.constructor == Cuentas){
            throw new Error("no se debe instaciar objetos de la clase cuenta");
        }

        this.#cliente=cliente;
        this.#saldo=saldo;
        this.numeroCuenta=numeroCuenta;
        this.agencia = agencia;
    }
    
    set setCliente(valor){
        if (valor instanceof Clientes){
            this.#cliente = valor

        }
    }

    get getCliente(){
        return this.#cliente;
    }
    
    depositoEnCuenta(valor){
        
        if(valor>0){
            this.#saldo = this.#saldo + valor;
        }
        return this.#saldo;
    }

    retiroEnCuenta(valor){
        throw new Error("debe implementar el metodo en su clase");
    }

    _retiroEnCuenta(valor, comision){
        valor = valor * (1+comision/100)
        if(valor<=this.#saldo && valor>0){
            this.#saldo = this.#saldo - valor;
        }
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirSaldo(valor, cuentaDestino){
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

    prueva(){
        console.log("clase padre")
    }
}