// Vendedor.js
/** Clase que representa a un Vendedor de la plataforma*/
class Vendedor {
  constructor(id, username, nombre, apellido, email, password, tipo) {
    this.id = id;
    this.username = username;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.tipo = tipo;
  }
}

module.exports = Vendedor;
