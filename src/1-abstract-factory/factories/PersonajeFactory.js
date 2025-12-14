/**
 * Abstract Factory - Interfaz base para las fábricas de personajes
 * Define los métodos que deben implementar las fábricas concretas
 */
export class PersonajeFactory {
  constructor() {
    if (new.target === PersonajeFactory) {
      throw new Error("No se puede instanciar la clase abstracta PersonajeFactory");
    }
  }

  /**
   * Crea un guerrero de la facción
   * @param {string} nombre - Nombre del personaje
   * @returns {Personaje} Personaje guerrero
   */
  crearGuerrero(nombre) {
    throw new Error("Método crearGuerrero() debe ser implementado");
  }

  /**
   * Crea un mago de la facción
   * @param {string} nombre - Nombre del personaje
   * @returns {Personaje} Personaje mago
   */
  crearMago(nombre) {
    throw new Error("Método crearMago() debe ser implementado");
  }

  /**
   * Obtiene el nombre de la facción
   * @returns {string} Nombre de la facción
   */
  getFaccion() {
    throw new Error("Método getFaccion() debe ser implementado");
  }
}

