import { Personaje } from "../Personaje.js";

/**
 * Clase Humano - Personaje de la Alianza
 * Equilibrado en todas las estadísticas
 */
export class Humano extends Personaje {
  constructor(nombre, foto = "humano.png") {
    super(nombre, foto);
    this.raza = "Humano";
    this.faccion = "Alianza";
    // Atributos base del Humano
    this.inteligencia = 60;
    this.fuerza = 55;
    this.poderMagico = 50;
    this.altura = 1.75;
    this.habilidades = [
      "Diplomacia",
      "Espíritu de combate",
      "Percepción humana"
    ];
  }

  clonar() {
    const clon = new Humano(this.nombre, this.foto);
    clon.inteligencia = this.inteligencia;
    clon.fuerza = this.fuerza;
    clon.poderMagico = this.poderMagico;
    clon.altura = this.altura;
    clon.habilidades = [...this.habilidades];
    return clon;
  }
}

