import { PersonajeFactory } from "./PersonajeFactory.js";
import { Orco } from "../personajes/horda/Orco.js";
import { NoMuerto } from "../personajes/horda/NoMuerto.js";

/**
 * Concrete Factory - Fábrica de personajes de la Horda
 * Crea Orcos (guerreros) y No Muertos (magos)
 */
export class HordaFactory extends PersonajeFactory {
  constructor() {
    super();
  }

  /**
   * Crea un Orco guerrero de la Horda
   * @param {string} nombre - Nombre del personaje
   * @returns {Orco} Personaje Orco
   */
  crearGuerrero(nombre) {
    const orco = new Orco(nombre);
    // Potenciamos los atributos de guerrero
    orco.fuerza += 25;
    orco.habilidades.push("Sed de sangre");
    return orco;
  }

  /**
   * Crea un No Muerto mago de la Horda
   * @param {string} nombre - Nombre del personaje
   * @returns {NoMuerto} Personaje No Muerto
   */
  crearMago(nombre) {
    const noMuerto = new NoMuerto(nombre);
    // Potenciamos los atributos de mago
    noMuerto.poderMagico += 20;
    noMuerto.habilidades.push("Nigromancia avanzada");
    return noMuerto;
  }

  /**
   * Crea un Orco base (sin especialización)
   * @param {string} nombre - Nombre del personaje
   * @returns {Orco} Personaje Orco base
   */
  crearOrco(nombre) {
    return new Orco(nombre);
  }

  /**
   * Crea un No Muerto base (sin especialización)
   * @param {string} nombre - Nombre del personaje
   * @returns {NoMuerto} Personaje No Muerto base
   */
  crearNoMuerto(nombre) {
    return new NoMuerto(nombre);
  }

  getFaccion() {
    return "Horda";
  }
}

