import { Personaje } from "../Personaje.js";

/**
 * Clase Elfo - Personaje de la Alianza
 * Alta inteligencia y poder mágico
 */
export class Elfo extends Personaje {
  constructor(nombre, foto = "elfo.png") {
    super(nombre, foto);
    this.raza = "Elfo";
    this.faccion = "Alianza";
    // Atributos base del Elfo
    this.inteligencia = 85;
    this.fuerza = 35;
    this.poderMagico = 90;
    this.altura = 1.90;
    this.habilidades = [
      "Visión nocturna",
      "Afinidad arcana",
      "Longevidad",
      "Paso silencioso"
    ];
  }

  clonar() {
    const clon = new Elfo(this.nombre, this.foto);
    clon.inteligencia = this.inteligencia;
    clon.fuerza = this.fuerza;
    clon.poderMagico = this.poderMagico;
    clon.altura = this.altura;
    clon.habilidades = [...this.habilidades];
    return clon;
  }
}

