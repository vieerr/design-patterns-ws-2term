/**
 * Clase base abstracta para todos los personajes
 * Define la estructura comun que deben tener todos los personajes
 */
export class Personaje {
  constructor(nombre, foto = "default.png") {
    if (new.target === Personaje) {
      throw new Error("No se puede instanciar la clase abstracta Personaje directamente");
    }
    this.nombre = nombre;
    this.foto = foto;
    this.inteligencia = 0;
    this.fuerza = 0;
    this.poderMagico = 0;
    this.altura = 0;
    this.habilidades = [];
    this.raza = "";
    this.faccion = "";
  }

  mostrarInfo() {
    console.log("\n+----------------------------------------------+");
    console.log("|  FICHA DE PERSONAJE                          |");
    console.log("+----------------------------------------------+");
    console.log(`|  Nombre: ${this.nombre}`);
    console.log(`|  Raza: ${this.raza}`);
    console.log(`|  Faccion: ${this.faccion}`);
    console.log("+----------------------------------------------+");
    console.log("|  ATRIBUTOS                                   |");
    console.log(`|  - Inteligencia: ${this.inteligencia}`);
    console.log(`|  - Fuerza: ${this.fuerza}`);
    console.log(`|  - Poder Magico: ${this.poderMagico}`);
    console.log(`|  - Altura: ${this.altura}m`);
    console.log("+----------------------------------------------+");
    console.log("|  HABILIDADES                                 |");
    this.habilidades.forEach(h => console.log(`|  * ${h}`));
    console.log("+----------------------------------------------+\n");
  }

  clonar() {
    throw new Error("Metodo clonar() debe ser implementado");
  }
}
