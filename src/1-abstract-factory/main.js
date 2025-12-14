/**
 * PATRON ABSTRACT FACTORY - Sistema de Creacion de Personajes
 * 
 * Implementa el patron Abstract Factory para crear personajes
 * de dos facciones: Alianza y Horda.
 * 
 * Estructura:
 * - PersonajeFactory (Abstract Factory)
 * - AlianzaFactory, HordaFactory (Concrete Factories)
 * - Personaje (Abstract Product)
 * - Humano, Elfo, Orco, NoMuerto (Concrete Products)
 */

import { AlianzaFactory } from "./factories/AlianzaFactory.js";
import { HordaFactory } from "./factories/HordaFactory.js";
import { ColeccionPersonajes } from "./ColeccionPersonajes.js";

function crearEquipo(factory, nombreGuerrero, nombreMago) {
  console.log(`\nCreando equipo de la ${factory.getFaccion()}...`);
  
  const guerrero = factory.crearGuerrero(nombreGuerrero);
  const mago = factory.crearMago(nombreMago);
  
  return { guerrero, mago };
}

// ============================================================================
// DEMOSTRACION
// ============================================================================

console.log("===============================================================");
console.log("  PATRON ABSTRACT FACTORY - CREADOR DE PERSONAJES");
console.log("===============================================================");

const alianzaFactory = new AlianzaFactory();
const hordaFactory = new HordaFactory();
const coleccion = new ColeccionPersonajes();

// 1. Crear personajes predefinidos
console.log("\n[PASO 1] Creando personajes predefinidos");
console.log("---------------------------------------------------------------");

const equipoAlianza = crearEquipo(alianzaFactory, "Arthas", "Jaina");
coleccion.agregarPersonaje(equipoAlianza.guerrero);
coleccion.agregarPersonaje(equipoAlianza.mago);

const equipoHorda = crearEquipo(hordaFactory, "Thrall", "Sylvanas");
coleccion.agregarPersonaje(equipoHorda.guerrero);
coleccion.agregarPersonaje(equipoHorda.mago);

const humanoBase = alianzaFactory.crearHumano("Anduin");
const elfoBase = alianzaFactory.crearElfo("Tyrande");
const orcoBase = hordaFactory.crearOrco("Garrosh");
const noMuertoBase = hordaFactory.crearNoMuerto("Kel'Thuzad");

coleccion.agregarPersonaje(humanoBase);
coleccion.agregarPersonaje(elfoBase);
coleccion.agregarPersonaje(orcoBase);
coleccion.agregarPersonaje(noMuertoBase);

// 2. Listar personajes
console.log("\n[PASO 2] Listando coleccion");
coleccion.listarPersonajes();

// 3. Seleccionar personaje
console.log("[PASO 3] Seleccionando personaje para jugar");
console.log("---------------------------------------------------------------");

coleccion.seleccionarPersonaje("alianza_humano_arthas");
const personajeActivo = coleccion.getPersonajeSeleccionado();

if (personajeActivo) {
  personajeActivo.mostrarInfo();
}

// 4. Clonar personaje existente
console.log("[PASO 4] Creando personaje desde uno existente (clonacion)");
console.log("---------------------------------------------------------------");

const nuevoId = coleccion.crearDesdeExistente("horda_orco_thrall", "Grom Hellscream");

if (nuevoId) {
  const nuevoPersonaje = coleccion.seleccionarPersonaje(nuevoId);
  if (nuevoPersonaje) {
    nuevoPersonaje.fuerza += 10;
    nuevoPersonaje.habilidades.push("Grito de guerra");
    nuevoPersonaje.mostrarInfo();
  }
}

// 5. Buscar por faccion
console.log("[PASO 5] Busqueda de personajes por faccion");
console.log("---------------------------------------------------------------");

const personajesHorda = coleccion.buscarPorFaccion("Horda");
console.log(`\nPersonajes de la Horda: ${personajesHorda.length}`);
personajesHorda.forEach(p => console.log(`   - ${p.nombre} (${p.raza})`));

const personajesAlianza = coleccion.buscarPorFaccion("Alianza");
console.log(`\nPersonajes de la Alianza: ${personajesAlianza.length}`);
personajesAlianza.forEach(p => console.log(`   - ${p.nombre} (${p.raza})`));

// 6. Coleccion final
console.log("\n[PASO 6] Coleccion final");
coleccion.listarPersonajes();

console.log("Demostracion del patron Abstract Factory completada.");
console.log("===============================================================\n");
