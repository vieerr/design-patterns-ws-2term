import { Personaje } from "../Personaje.js";

/**
 * Clase Orco - Personaje de la Horda
 * Alta fuerza, baja inteligencia
 */
export class Orco extends Personaje {
  constructor(nombre, foto = "orco.png") {
    super(nombre, foto);
    this.raza = "Orco";
    this.faccion = "Horda";
    // Atributos base del Orco
    this.inteligencia = 30;
    this.fuerza = 95;
    this.poderMagico = 20;
    this.altura = 2.10;
    this.habilidades = [
      "Furia berserker",
      "Resistencia al dolor",
      "Intimidación",
      "Golpe devastador"
    ];
  }

  clonar() {
    const clon = new Orco(this.nombre, this.foto);
    clon.inteligencia = this.inteligencia;
    clon.fuerza = this.fuerza;
    clon.poderMagico = this.poderMagico;
    clon.altura = this.altura;
    clon.habilidades = [...this.habilidades];
    return clon;
  }
}

