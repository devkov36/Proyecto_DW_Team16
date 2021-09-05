## Fase 3 | Desarrollo Web Full Stack JavaScript | Proyecto_DW_Team16
En este repositorio encontrarán los postworks y proyecto final realizados en la Fase 3 del curso de Desarrollo Web Full Stack JavaScript💻.

## Integrantes
- Carlos Iván Vargas Jiménez 👨
- Vicente Barbosa Leon 👨
- Ruth Aguirre Doria 👩
- Adolfo Yakov Castañeda Navarrete 👨
- Jim Antonio Loza Orozco 👨

## Contenido 📋
Proyecto creacion de una API para venta de productos de embalaje

## Descripcion del proyecto 

### ¿Qué espero que haga el proyecto?
Api para venta de productos de embalaje que permita consultar inventario, facturar y punto de venta de productos.

### ¿Qué tipos de usuario tendrá nuestro sistema?
Está dirigida a transportistas, almacenistas y vendedores

### ¿Qué acciones puede realizar cada usuario?
Transportistas: Consulta de inventario, compra de productos, solicitud de factura, transporte de mercancías.

Almacenista: Consulta de inventario, compra de productos, solicitud de factura, entrega de productos al transportista.

Vendedor: CRUD de inventario, venta de productos, emisión de factura, entrega de productos de embalaje al almacenista.

## Estructura del Proyecto (descripción de las entidades que interactúan en el mismo)

## Historias de Usuarios

PRODUCTO
Hace referencia a los diferentes tipos de productos que están siendo transportados y empacados por el almacén y los transportistas para que lleguen a su destino con el cliente final
Tareas:
Consulta inventario: a través de un lector de código barras o una búsqueda por texto
Registra salida/entrada de producto: Dependiendo su disponibilidad en almacén para que el cliente pueda adquirirlo y pasado a su transportación.
Modifica inventario: le permite modificar la cantidad de cada producto o eliminarlo
Registra ingreso o salida del producto: calcula el total de los productos y registra el id_producto y el detalle del mismo.

![image](https://user-images.githubusercontent.com/83822127/132143249-04f2046d-8085-4a50-99f1-500f52e2cdab.png)


## Diagramas de Caso de uso
Producto

![image](https://user-images.githubusercontent.com/83822127/132143206-a89c143e-9d68-47ec-a2d6-937988297f28.png)


## Breve descripción técnica del proyecto en donde se mencionen las tecnologías que se están utilizando y la forma de correrlo.
