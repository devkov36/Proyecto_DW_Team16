class Mascota{

	constructor(id,nombre,categoria,fotos,descripcion,anunciante,ubicacion){
		this.id = id
		this.nombre = nombre
		this.categoria = categoria; // perro | gato | otro
	    this.fotos = fotos; // links a las fotografías
	    this.descripcion = descripcion; // descripción del anuncio
	    this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
	    this.ubicacion = ubicacion; // muy importante
  	}

}

module.exports = Mascota;
