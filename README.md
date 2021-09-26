## Fase 3️⃣ | Desarrollo Web Full Stack JavaScript | Proyecto_DW_Team1️⃣6️⃣
En este repositorio encontrarán los postworks y proyecto final realizados en la Fase 3 del curso de Desarrollo Web Full Stack JavaScript💻.

## Integrantes
- Carlos Iván Vargas Jiménez 🧑
- Vicente Barbosa Leon 🧑
- Ruth Aguirre Doria 👩
- Adolfo Yakov Castañeda Navarrete 🧑
- Jim Antonio Loza Orozco 🧑

## Contenido 📋
Proyecto creacion de una API para venta de productos de embalaje

## Descripcion del proyecto 📑

### ¿Qué espero que haga el proyecto? 🧮
Api para venta de productos de embalaje que permita consultar inventario, facturar y punto de venta de productos.

### ¿Qué tipos de usuario tendrá nuestro sistema? 👥
Está dirigida a transportistas, almacenistas y vendedores

### ¿Qué acciones puede realizar cada usuario? 👨🏻‍💻
Transportistas: Consulta de inventario, compra de productos, solicitud de factura, transporte de mercancías.

Almacenista: Consulta de inventario, compra de productos, solicitud de factura, entrega de productos al transportista.

Vendedor: CRUD de inventario, venta de productos, emisión de factura, entrega de productos de embalaje al almacenista.

## Estructura del Proyecto (descripción de las entidades que interactúan en el mismo) 📚

## Historias de Usuarios 📝

VENDEDOR:

Como vendedor, quiero registrar los productos y cantidades que me solicita un cliente para crear un pedido de venta además de una opción de filtrado, Además poder registrar los datos del cliente este registro le muestra los datos (nombre, apellido, dirección, teléfono), para poder procesar la venta.

PRODUCTO:

Hace referencia a los diferentes tipos de productos que están siendo transportados y empacados por el almacén y los transportistas para que lleguen a su destino con el cliente final

Tareas:

1.- Consulta inventario: a través de un lector de código barras o una búsqueda por texto

2.- Registra salida/entrada de producto: Dependiendo su disponibilidad en almacén para que el cliente pueda adquirirlo y pasado a su transportación.

3.- Modifica inventario: le permite modificar la cantidad de cada producto o eliminarlo

4.- Registra ingreso o salida del producto: calcula el total de los productos y registra el id_producto y el detalle del mismo.


![image](https://user-images.githubusercontent.com/83822127/132143249-04f2046d-8085-4a50-99f1-500f52e2cdab.png)


VENTA:

La venta registra los datos de una transacción realizada por entre el vendedor y el cliente, contiene datos de fecha, monto total, y cantidad de productos vendidos, tambien puede modificar una venta, consultarla o eliminarla.

Tareas:

1.-Consulta inventario: a través de un lector de código barras o una búsqueda por texto

2.-Registra venta: selecciona un producto y lo agrega al carrito

3.-Modifica carrito: le permite modificar la cantidad de cada producto o eliminarlo

4.-Registra venta: calcula el total y registra el id_cliente y el detalle de la venta

![image](https://user-images.githubusercontent.com/83822127/132157284-57a9a804-1742-4173-a328-35a8669d82b2.png)

CLIENTE: 

Quiero registrar los datos de cada cliente para así poder facilitar la información para cuando se haga una factura, los datos que me gustaría guardar de cada cliente son: 

1.- Nombre de la empresa o Nombre de la persona

2.-RFC

3.-Uso de CFDI

4.-Metodo de pago

5.-Credito

6.- Correo

![image](https://user-images.githubusercontent.com/71301471/132258059-faee8382-838e-48a5-8fcf-2d037e860e74.png)




FACTURA:

Esta se creará cuando el usuario termine el proceso de compra del producto y contendrá la siguiente estructura

![image](https://github.com/devkov36/Proyecto_DW_Team16/blob/macantivbl/Fac/modeloFactura.jpg)


## Diagramas de Caso de uso 📊

VENDEDOR:

![Diagrama de caso de uso](https://user-images.githubusercontent.com/85856431/132145677-e696a7fb-95e1-4a26-9c37-0baca7ec7e66.png)

PRODUCTO:

![image](https://user-images.githubusercontent.com/83822127/132143206-a89c143e-9d68-47ec-a2d6-937988297f28.png)

VENTA:

![imagen](https://user-images.githubusercontent.com/46424945/132154675-1b00f403-f6c2-4a6b-858b-bf660bb48a23.png)

CLIENTE:

![image](https://user-images.githubusercontent.com/71301471/132260504-10ec9692-f146-4a75-a86c-21fcfdb312bb.png)


FACTURA:

![image](https://raw.githubusercontent.com/devkov36/Proyecto_DW_Team16/macantivbl/Fac/factura.jpg)


## Breve descripción técnica del proyecto en donde se mencionen las tecnologías que se están utilizando y la forma de correrlo. 🎞

**Descripción técnica**:

Desarrollo de API (Application Programming Interface) que recibirá peticiones para realizar operaciones de tipo CRUD (Create, read, update, delete)  relacionadas a la venta de piezas de embalaje.

**Patrón de diseño**:

El api está implementado bajo un patrón de diseño de modelo-vista-controlador(MVC).

**Modelo**: Contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de persistencia.

**Vista**: Compone y presenta la información que se envía al cliente y los mecanismos de interacción con éste por medio de una interfaz de usuario.

**Controlador**: Actúa como un intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos y las transformaciones para adaptar los datos a las necesidades de cada uno

**Lenguaje de programación**:

El api está desarrollado utilizando el lenguaje de programación javascript. 

**Framework**:

Utiliza el framework express js para desarrollo de backend	

**Paquetes**:

Para corre el api se utiliza el npm, el cual es un administrador de paquetes de javascript	y además es el administrador de paquetes predeterminado para Node.js

Los paquetes instalados con el npm son:

El paquete express para recibir peticiones en JSON

*npm install express body*

El paquete express para recibir parsear paquetes de petición para ser utilizados por los controladores , y utiliza el CORS para permitir peticiones de origines restringidos

*npm install express body-parser cors*

Nodemon es una utilidad de interfaz de línea de comandos (CLI). Monitorea el sistema de archivos para detectar cualquier cambio de archivo en el directorio en el que ejecutó Nodemon y reiniciará automáticamente el proceso de su aplicación.

*npm install -g nodemon*

Para ejecutar el api se corre el siguiente comando

*npm run dev --fix*

