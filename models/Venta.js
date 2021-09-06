class Venta{
    constructor(id, fecha, monto_total, total_productos, id_cliente, metodo_pago,monto_pagado, cambio ){        
        this.id = id
        this.fecha = fecha
        this.monto_total = monto_total
        this.total_productos = total_productos
        this.id_cliente = id_cliente
        this.metodo_pago = metodo_pago
        this.monto_pagado = monto_pagado
        this.cambio = cambio
        
    }
}

module.exports = Venta;