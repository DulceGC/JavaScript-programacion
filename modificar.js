function persona(nombre, apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `);
}

persona.prototype.soyAlto = function() {
  return this.altura > 1.8
}

this

  var dulce = new persona('Duce','González', 1.45)
  var erika = new persona('Erika','Luna', 1.82)
  var arturo = new persona('Arturo','Martínez', 1.90)
