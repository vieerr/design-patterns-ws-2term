import { MensajeDecorador } from "./MensajeDecorador.js";
import crypto from 'crypto';

/**
 * Concrete Decorator - Firma digital del mensaje
 * Añade una firma digital SHA-256 para verificar integridad
 */
export class MensajeFirmado extends MensajeDecorador {
  constructor(mensaje) {
    super(mensaje);
    this.firmaDigital = null;
  }

  /**
   * Genera una firma digital del contenido (simulación)
   * @param {string} texto - Texto a firmar
   * @returns {string} Firma digital
   */
  generarFirma(texto) {
    const hash = crypto.createHash('sha256');
    hash.update(texto);
    return hash.digest('hex').substring(0, 32);
  }

  /**
   * Verifica si la firma es válida
   * @returns {boolean}
   */
  verificarFirma() {
    const contenido = this.mensajeEnvuelto.getContenido();
    const firmaActual = this.generarFirma(contenido);
    return this.firmaDigital === firmaActual;
  }

  getContenido() {
    const contenidoOriginal = this.mensajeEnvuelto.getContenido();
    this.firmaDigital = this.generarFirma(contenidoOriginal);
    return `${contenidoOriginal}\n\n[FIRMA DIGITAL: ${this.firmaDigital}]`;
  }

  getDescripcion() {
    return `${this.mensajeEnvuelto.getDescripcion()} + Firmado(SHA-256)`;
  }
}

