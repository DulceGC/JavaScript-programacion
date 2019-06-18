function persona(nombre, apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
const esAlto = altura => altura > 1.8

persona.prototype.saludar = function(){
  if (esAlto(this.altura)){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto porque mido ${this.altura} `);
} else {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy de baja estatura porque mido ${this.altura} `);
  }
}

  var dulce = new persona('Duce','González', 1.45)
  var erika = new persona('Erika','Luna', 1.82)
  var arturo = new persona('Arturo','Martínez', 1.90)
//dulce.saludar()
