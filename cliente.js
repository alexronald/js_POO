export class Clientes{
    nombreCliente
    dniCliente
    rucCliente
    #clave

    constructor(nombreCliente,dniCliente,rucCliente){
        this.nombreCliente=nombreCliente;
        this.dniCliente=dniCliente;
        this.rucCliente=rucCliente;
    }

    asinarClave(clave){
        this.#clave=clave;
    }

    get clave(){
        return this.#clave;
    }
    autenticable(clave){
        return true
    }
 }