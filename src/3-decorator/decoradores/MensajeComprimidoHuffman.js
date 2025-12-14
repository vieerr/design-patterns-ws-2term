import { MensajeComprimido } from "./MensajeComprimido.js";

/**
 * Concrete Decorator - Compresión Huffman
 * Implementa el algoritmo de compresión de Huffman (simulado)
 */
export class MensajeComprimidoHuffman extends MensajeComprimido {
  constructor(mensaje) {
    super(mensaje);
    this.algoritmoCompresion = "Huffman";
  }

  /**
   * Simula la compresión Huffman
   * En producción, se implementaría el algoritmo real
   * @param {string} texto - Texto a comprimir
   * @returns {string} Texto comprimido
   */
  comprimir(texto) {
    // Simulación de compresión Huffman
    // Calcula frecuencias y representa como "comprimido"
    const frecuencias = {};
    for (const char of texto) {
      frecuencias[char] = (frecuencias[char] || 0) + 1;
    }

    const tamanoOriginal = texto.length;
    const tamanoComprimido = Math.floor(tamanoOriginal * 0.6); // Simulación ~40% compresión

    // Generar representación "comprimida" (simulada)
    const comprimido = Buffer.from(texto).toString('base64').substring(0, tamanoComprimido);
    
    return `[HUFFMAN:${tamanoOriginal}→${tamanoComprimido}bytes] ${comprimido}...`;
  }

  getNombreAlgoritmo() {
    return "Huffman";
  }
}

