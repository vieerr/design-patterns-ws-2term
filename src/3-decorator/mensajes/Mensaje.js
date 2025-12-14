/**
 * Component (Componente) - Interfaz base del patrón Decorator
 * Define las operaciones que pueden ser decoradas
 */
export class Mensaje {
  constructor() {
    if (new.target === Mensaje) {
      throw new Error("No se puede instanciar la clase abstracta Mensaje");
    }
  }

  /**
   * Obtiene el contenido del mensaje (posiblemente transformado)
   * @returns {string}
   */
  getContenido() {
    throw new Error("Método getContenido() debe ser implementado");
  }

  /**
   * Obtiene una descripción del mensaje y sus transformaciones
   * @returns {string}
   */
  getDescripcion() {
    throw new Error("Método getDescripcion() debe ser implementado");
  }

  /**
   * Envía el mensaje a un destinatario
   * @param {string} destinatario - Email o identificador del destinatario
   */
  enviar(destinatario) {
    throw new Error("Método enviar() debe ser implementado");
  }
}

