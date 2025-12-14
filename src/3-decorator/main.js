/**
 * PATRON DECORATOR - Sistema de Mensajes MAPWER
 * 
 * Implementa el patron Decorator para un sistema de envio de
 * mensajes con diferentes transformaciones.
 * 
 * Estructura:
 * - Mensaje (Component)
 * - MensajeTextoClaro (Concrete Component)
 * - MensajeDecorador (Base Decorator)
 * - MensajeCifrado, MensajeFirmado (Concrete Decorators)
 * - MensajeComprimidoHuffman, MensajeComprimidoLempelZiv (Compression)
 * 
 * Requisitos:
 * 1. Por defecto: mensaje en texto claro
 * 2. Opcional: compresion (Huffman o Lempel-Ziv)
 * 3. Opcional: cifrado
 * 4. Opcional: firma digital
 * 5. Extensible para nuevos algoritmos
 */

import { MensajeTextoClaro } from "./mensajes/MensajeTextoClaro.js";
import { MensajeCifrado } from "./decoradores/MensajeCifrado.js";
import { MensajeFirmado } from "./decoradores/MensajeFirmado.js";
import { MensajeComprimidoHuffman } from "./decoradores/MensajeComprimidoHuffman.js";
import { MensajeComprimidoLempelZiv } from "./decoradores/MensajeComprimidoLempelZiv.js";

// ============================================================================
// DEMOSTRACION
// ============================================================================

console.log("===============================================================");
console.log("  PATRON DECORATOR - SISTEMA DE MENSAJES MAPWER");
console.log("===============================================================");

const contenidoMensaje = `
Estimado cliente,

El analisis del mercado bursatil indica las siguientes tendencias:
- Sector tecnologico: Crecimiento del 5.2%
- Sector financiero: Estable con tendencia alcista
- Commodities: Volatilidad alta, precaucion recomendada

Recomendacion: Diversificar cartera hacia renta fija.

Atentamente,
Analista de Mercados - MAPWER
`;

// 1. Mensaje en texto claro (comportamiento por defecto)
console.log("\n[CASO 1] Mensaje en texto claro (por defecto)");
console.log("===============================================================");

let mensaje1 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
console.log(`Descripcion: ${mensaje1.getDescripcion()}`);
mensaje1.enviar("cliente.vip@empresa.com");

// 2. Mensaje comprimido con Huffman
console.log("\n[CASO 2] Mensaje comprimido (Huffman)");
console.log("===============================================================");

let mensaje2 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
mensaje2 = new MensajeComprimidoHuffman(mensaje2);

console.log(`Descripcion: ${mensaje2.getDescripcion()}`);
console.log(`Contenido comprimido:\n${mensaje2.getContenido()}`);

// 3. Mensaje comprimido con Lempel-Ziv
console.log("\n[CASO 3] Mensaje comprimido (Lempel-Ziv)");
console.log("===============================================================");

let mensaje3 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
mensaje3 = new MensajeComprimidoLempelZiv(mensaje3);

console.log(`Descripcion: ${mensaje3.getDescripcion()}`);
console.log(`Contenido comprimido:\n${mensaje3.getContenido()}`);

// 4. Mensaje cifrado
console.log("\n[CASO 4] Mensaje cifrado");
console.log("===============================================================");

let mensaje4 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
mensaje4 = new MensajeCifrado(mensaje4, "AES-256");

console.log(`Descripcion: ${mensaje4.getDescripcion()}`);
console.log(`Contenido cifrado:\n${mensaje4.getContenido().substring(0, 200)}...`);

// 5. Mensaje firmado digitalmente
console.log("\n[CASO 5] Mensaje firmado digitalmente");
console.log("===============================================================");

let mensaje5 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
mensaje5 = new MensajeFirmado(mensaje5);

console.log(`Descripcion: ${mensaje5.getDescripcion()}`);
console.log(`Contenido con firma:\n${mensaje5.getContenido()}`);

// 6. Mensaje con multiples decoradores combinados
console.log("\n[CASO 6] Mensaje comprimido + cifrado + firmado");
console.log("===============================================================");

let mensaje6 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
mensaje6 = new MensajeComprimidoHuffman(mensaje6);
mensaje6 = new MensajeCifrado(mensaje6);
mensaje6 = new MensajeFirmado(mensaje6);

console.log(`Descripcion: ${mensaje6.getDescripcion()}`);
console.log(`Contenido procesado:\n${mensaje6.getContenido().substring(0, 300)}...`);

// 7. Otro orden de decoradores
console.log("\n[CASO 7] Mensaje firmado + comprimido (LZ77) + cifrado");
console.log("===============================================================");

let mensaje7 = new MensajeTextoClaro(contenidoMensaje, "analista@mapwer.com");
mensaje7 = new MensajeFirmado(mensaje7);
mensaje7 = new MensajeComprimidoLempelZiv(mensaje7);
mensaje7 = new MensajeCifrado(mensaje7);

console.log(`Descripcion: ${mensaje7.getDescripcion()}`);
console.log(`Contenido procesado:\n${mensaje7.getContenido().substring(0, 300)}...`);

// 8. Demostracion de flexibilidad
console.log("\n[CASO 8] Creacion dinamica con configuracion");
console.log("===============================================================");

function crearMensajePersonalizado(contenido, remitente, opciones = {}) {
  let mensaje = new MensajeTextoClaro(contenido, remitente);
  
  if (opciones.comprimir) {
    mensaje = opciones.algoritmoCompresion === 'lz77' 
      ? new MensajeComprimidoLempelZiv(mensaje)
      : new MensajeComprimidoHuffman(mensaje);
  }
  
  if (opciones.cifrar) {
    mensaje = new MensajeCifrado(mensaje, opciones.algoritmoCifrado || "AES-256");
  }
  
  if (opciones.firmar) {
    mensaje = new MensajeFirmado(mensaje);
  }
  
  return mensaje;
}

const mensajePersonalizado = crearMensajePersonalizado(
  "Mensaje confidencial de trading",
  "trader@mapwer.com",
  {
    comprimir: true,
    algoritmoCompresion: 'huffman',
    cifrar: true,
    algoritmoCifrado: 'AES-256',
    firmar: true
  }
);

console.log(`Mensaje personalizado creado dinamicamente`);
console.log(`Descripcion: ${mensajePersonalizado.getDescripcion()}`);
mensajePersonalizado.enviar("trader.premium@cliente.com");

// Resumen
console.log("\n===============================================================");
console.log("RESUMEN DE DECORADORES DISPONIBLES:");
console.log("===============================================================");
console.log(`
  MensajeTextoClaro    - Mensaje base sin transformaciones
  ComprimidoHuffman    - Compresion con algoritmo Huffman
  ComprimidoLempelZiv  - Compresion con algoritmo LZ77
  MensajeCifrado       - Cifrado con AES-256 (configurable)
  MensajeFirmado       - Firma digital SHA-256
  
  Los decoradores se pueden combinar en cualquier orden.
  Nuevos algoritmos se agregan extendiendo MensajeComprimido.
`);

console.log("Demostracion del patron Decorator completada.");
console.log("===============================================================\n");
