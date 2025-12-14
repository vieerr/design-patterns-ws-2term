import { MensajeDecorador } from "./MensajeDecorador.js";

/**
 * Abstract Decorator - Base para algoritmos de compresión
 * Permite extensibilidad para nuevos algoritmos de compresión
 */
export class MensajeComprimido extends MensajeDecorador {
  constructor(mensaje) {
    super(mensaje);
    if (new.target === MensajeComprimido) {
      throw new Error("No se puede instanciar la clase abstracta MensajeComprimido");
    }
    this.algoritmoCompresion = "Desconocido";
  }

  /**
   * Comprime el texto (método abstracto)
   * @param {string} texto - Texto a comprimir
   * @returns {string} Texto comprimido
   */
  comprimir(texto) {
    throw new Error("Método comprimir() debe ser implementado");
  }

  /**
   * Obtiene el nombre del algoritmo de compresión
   * @returns {string}
   */
  getNombreAlgoritmo() {
    throw new Error("Método getNombreAlgoritmo() debe ser implementado");
  }

  getContenido() {
    const contenidoOriginal = this.mensajeEnvuelto.getContenido();
    return this.comprimir(contenidoOriginal);
  }

  getDescripcion() {
    return `${this.mensajeEnvuelto.getDescripcion()} + Comprimido(${this.getNombreAlgoritmo()})`;
  }
}

