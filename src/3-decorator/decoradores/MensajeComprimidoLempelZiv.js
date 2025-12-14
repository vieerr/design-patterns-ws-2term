import { MensajeComprimido } from "./MensajeComprimido.js";

/**
 * Concrete Decorator - Compresión Lempel-Ziv (LZ77)
 * Implementa el algoritmo de compresión LZ77 (simulado)
 */
export class MensajeComprimidoLempelZiv extends MensajeComprimido {
  constructor(mensaje) {
    super(mensaje);
    this.algoritmoCompresion = "Lempel-Ziv";
  }

  /**
   * Simula la compresión LZ77
   * En producción, se implementaría el algoritmo real
   * @param {string} texto - Texto a comprimir
   * @returns {string} Texto comprimido
   */
  comprimir(texto) {
    // Simulación de compresión LZ77
    // Busca patrones repetitivos y los reemplaza con referencias
    const tamanoOriginal = texto.length;
    const tamanoComprimido = Math.floor(tamanoOriginal * 0.5); // Simulación ~50% compresión

    // Generar representación "comprimida" (simulada)
    // LZ77 usa tuplas (offset, length, next_char)
    const patrones = this.encontrarPatrones(texto);
    const representacionLZ = patrones.map((p, i) => `(${i},${p.length},${p[0] || ''})`).join('');
    
    return `[LZ77:${tamanoOriginal}→${tamanoComprimido}bytes] ${representacionLZ.substring(0, 50)}...`;
  }

  /**
   * Encuentra patrones repetitivos en el texto (simplificado)
   * @param {string} texto
   * @returns {string[]}
   */
  encontrarPatrones(texto) {
    const patrones = [];
    const tamanoVentana = 10;
    
    for (let i = 0; i < texto.length; i += tamanoVentana) {
      patrones.push(texto.substring(i, i + tamanoVentana));
    }
    
    return patrones;
  }

  getNombreAlgoritmo() {
    return "Lempel-Ziv (LZ77)";
  }
}

