import { Mensaje } from "./Mensaje.js";

/**
 * Concrete Component - Mensaje en texto claro (sin transformaciones)
 * Este es el comportamiento por defecto del sistema
 */
export class MensajeTextoClaro extends Mensaje {
  constructor(contenido, remitente) {
    super();
    this.contenido = contenido;
    this.remitente = remitente;
    this.fechaCreacion = new Date();
  }

  getContenido() {
    return this.contenido;
  }

  getDescripcion() {
    return "Texto claro";
  }

  enviar(destinatario) {
    console.log("\n+--------------------------------------------------------------+");
    console.log("|  ENVIANDO MENSAJE                                            |");
    console.log("+--------------------------------------------------------------+");
    console.log(`|  De: ${this.remitente}`);
    console.log(`|  Para: ${destinatario}`);
    console.log(`|  Fecha: ${this.fechaCreacion.toISOString()}`);
    console.log(`|  Formato: ${this.getDescripcion()}`);
    console.log("+--------------------------------------------------------------+");
    console.log("|  CONTENIDO:");
    console.log("+--------------------------------------------------------------+");
    console.log(this.getContenido());
    console.log("----------------------------------------------------------------");
    console.log("[OK] Mensaje enviado exitosamente\n");
  }
}
