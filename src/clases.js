export class Dato{

    constructor(tipo,concepto,cantidad){
        
        this.tipo = tipo;
        this.concepto=concepto;
        this.cantidad=cantidad;

    }
    
}

export class Ingreso extends Dato{
    constructor(id,tipo,concepto,cantidad){
        super(tipo,concepto,cantidad);
        this.id = id;

    }
}

export class Gasto extends Dato{
    constructor(id,tipo,concepto,cantidad){
        super(tipo,concepto,cantidad);
        this.id = id;

    }
}

// export default {Dato, Gasto, Ingreso};