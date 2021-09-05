class Producto{
    constructor(id, nombre, categoria, fotos, descripcion, cantidad, cliente, pago ){
        this.id = id
        this.nombre = nombre
        this.categoria = categoria
        this.fotos = fotos
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.cliente = cliente
        this.pago = pago
    }
}

module.exports = Producto;