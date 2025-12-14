import { MensajeDecorador } from "./MensajeDecorador.js";

/**
 * Concrete Decorator - Cifrado del mensaje
 * Aplica cifrado AES-256 al contenido del mensaje
 */
export class MensajeCifrado extends MensajeDecorador {
  constructor(mensaje, algoritmo = "AES-256") {
    super(mensaje);
    this.algoritmo = algoritmo;
  }

  /**
   * Cifra el contenido del mensaje (simulación)
   * @param {string} texto - Texto a cifrar
   * @returns {string} Texto cifrado (simulado)
   */
  cifrar(texto) {
    // Simulación de cifrado - en producción se usaría una librería real
    const cifrado = Buffer.from(texto).toString('base64');
    return `[CIFRADO ${this.algoritmo}] ${cifrado}`;
  }

  getContenido() {
    const contenidoOriginal = this.mensajeEnvuelto.getContenido();
    return this.cifrar(contenidoOriginal);
  }

  getDescripcion() {
    return `${this.mensajeEnvuelto.getDescripcion()} + Cifrado(${this.algoritmo})`;
  }
}

