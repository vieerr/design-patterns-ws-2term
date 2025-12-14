import { Mensaje } from "../mensajes/Mensaje.js";

/**
 * Base Decorator - Clase base para todos los decoradores
 * Mantiene una referencia al mensaje envuelto y delega las operaciones
 */
export class MensajeDecorador extends Mensaje {
  constructor(mensaje) {
    super();
    if (new.target === MensajeDecorador) {
      throw new Error("No se puede instanciar la clase abstracta MensajeDecorador");
    }
    this.mensajeEnvuelto = mensaje;
  }

  getContenido() {
    return this.mensajeEnvuelto.getContenido();
  }

  getDescripcion() {
    return this.mensajeEnvuelto.getDescripcion();
  }

  enviar(destinatario) {
    this.mensajeEnvuelto.enviar(destinatario);
  }
}

