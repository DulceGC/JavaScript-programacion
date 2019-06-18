class persona{
  constructor(nombre, apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
 }

saludar(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `);
}

soyAlto(){
return this.altura > 1.8
 }
}

class desarrollador extends persona {
  constructor (nombre, apellido,altura) {
  super(nombre, apellido, altura)
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
  }
}



// var dulce = new persona('Duce','González', 1.45)
// var erika = new persona('Erika','Luna', 1.82)
// var arturo = new persona('Arturo','Martínez', 1.90)
