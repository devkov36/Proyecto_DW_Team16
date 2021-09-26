window.onload = function () {
    listar()
}

function listar() {
    fetch("/team16/clientes").then(res => {
        res.json().then(lista => {
            //alert(JSON.stringify(lista))
            listarProductos(lista);
        })
    })
    fetch("/team16/Productos").then(res => {
        res.json().then(lista => {
            //alert(JSON.stringify(lista))
            listarProductosCliente(lista);
        })
    })
    
    fetch("team16/vendedor").then(res => {
        res.json().then(lista => {
            //alert(JSON.stringify(lista))
            listarVendedor(lista);
        })
    })
}

function listarProductos(res){
    var contenido=`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre: ${res[1].nombre_cliente}</li>
            <li class="list-group-item">Metodo pago: ${res[1].metodo_pago}</li>
            
        </ul>
    
    `
    document.getElementById("Cliente").innerHTML = contenido;
}

function listarProductosCliente(res){
    var contenido=`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre: ${res[1].Producto}</li>
            <li class="list-group-item">total: ${res[1].Precio}</li>
            
        </ul>
    
    `
    document.getElementById("Producto").innerHTML = contenido;
}

function listarVendedor(res){
    var contenido=`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Vendedor: ${res[1].Nombre}</li>
            <li class="list-group-item">Sucursal: ${res[1].Sucursal}</li>
            
        </ul>
    
    `
    document.getElementById("Vendedor").innerHTML = contenido;
}