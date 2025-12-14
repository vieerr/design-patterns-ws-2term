import { Personaje } from "../Personaje.js";

/**
 * Clase NoMuerto - Personaje de la Horda
 * Alto poder mágico oscuro
 */
export class NoMuerto extends Personaje {
  constructor(nombre, foto = "no_muerto.png") {
    super(nombre, foto);
    this.raza = "No Muerto";
    this.faccion = "Horda";
    // Atributos base del No Muerto
    this.inteligencia = 45;
    this.fuerza = 50;
    this.poderMagico = 80;
    this.altura = 1.80;
    this.habilidades = [
      "Voluntad de los condenados",
      "Canibalismo",
      "Resistencia a las sombras",
      "Toque de la muerte"
    ];
  }

  clonar() {
    const clon = new NoMuerto(this.nombre, this.foto);
    clon.inteligencia = this.inteligencia;
    clon.fuerza = this.fuerza;
    clon.poderMagico = this.poderMagico;
    clon.altura = this.altura;
    clon.habilidades = [...this.habilidades];
    return clon;
  }
}

