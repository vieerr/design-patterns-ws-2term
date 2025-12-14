import { PersonajeFactory } from "./PersonajeFactory.js";
import { Humano } from "../personajes/alianza/Humano.js";
import { Elfo } from "../personajes/alianza/Elfo.js";

/**
 * Concrete Factory - Fábrica de personajes de la Alianza
 * Crea Humanos (guerreros) y Elfos (magos)
 */
export class AlianzaFactory extends PersonajeFactory {
  constructor() {
    super();
  }

  /**
   * Crea un Humano guerrero de la Alianza
   * @param {string} nombre - Nombre del personaje
   * @returns {Humano} Personaje Humano
   */
  crearGuerrero(nombre) {
    const humano = new Humano(nombre);
    // Potenciamos los atributos de guerrero
    humano.fuerza += 20;
    humano.habilidades.push("Maestría con espada");
    return humano;
  }

  /**
   * Crea un Elfo mago de la Alianza
   * @param {string} nombre - Nombre del personaje
   * @returns {Elfo} Personaje Elfo
   */
  crearMago(nombre) {
    const elfo = new Elfo(nombre);
    // Potenciamos los atributos de mago
    elfo.poderMagico += 15;
    elfo.habilidades.push("Dominación arcana");
    return elfo;
  }

  /**
   * Crea un Humano base (sin especialización)
   * @param {string} nombre - Nombre del personaje
   * @returns {Humano} Personaje Humano base
   */
  crearHumano(nombre) {
    return new Humano(nombre);
  }

  /**
   * Crea un Elfo base (sin especialización)
   * @param {string} nombre - Nombre del personaje
   * @returns {Elfo} Personaje Elfo base
   */
  crearElfo(nombre) {
    return new Elfo(nombre);
  }

  getFaccion() {
    return "Alianza";
  }
}

