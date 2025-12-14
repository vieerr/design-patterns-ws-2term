/**
 * Coleccion de personajes - Gestiona personajes predefinidos y creados
 * Permite agregar, seleccionar y listar personajes
 */
export class ColeccionPersonajes {
  constructor() {
    this.personajes = new Map();
    this.personajeSeleccionado = null;
  }

  /**
   * Agrega un personaje a la coleccion
   * @param {Personaje} personaje - Personaje a agregar
   */
  agregarPersonaje(personaje) {
    const id = `${personaje.faccion}_${personaje.raza}_${personaje.nombre}`.toLowerCase().replace(/\s/g, '_');
    this.personajes.set(id, personaje);
    console.log(`[OK] Personaje "${personaje.nombre}" agregado con ID: ${id}`);
    return id;
  }

  /**
   * Selecciona un personaje de la coleccion para jugar
   * @param {string} id - ID del personaje
   * @returns {Personaje|null} Personaje seleccionado
   */
  seleccionarPersonaje(id) {
    const personaje = this.personajes.get(id);
    if (personaje) {
      this.personajeSeleccionado = personaje;
      console.log(`[SELECCIONADO] ${personaje.nombre}`);
      return personaje;
    }
    console.log(`[ERROR] No se encontro personaje con ID: ${id}`);
    return null;
  }

  /**
   * Obtiene el personaje actualmente seleccionado
   * @returns {Personaje|null} Personaje seleccionado
   */
  getPersonajeSeleccionado() {
    return this.personajeSeleccionado;
  }

  /**
   * Lista todos los personajes en la coleccion
   */
  listarPersonajes() {
    console.log("\n--- COLECCION DE PERSONAJES ---");
    
    if (this.personajes.size === 0) {
      console.log("La coleccion esta vacia");
      return;
    }

    for (const [id, personaje] of this.personajes) {
      const marca = this.personajeSeleccionado === personaje ? " <-- ACTIVO" : "";
      console.log(`  [${id}] ${personaje.nombre} (${personaje.raza} - ${personaje.faccion})${marca}`);
    }
    console.log("-------------------------------\n");
  }

  /**
   * Busca personajes por faccion
   * @param {string} faccion - Nombre de la faccion
   * @returns {Personaje[]} Lista de personajes de esa faccion
   */
  buscarPorFaccion(faccion) {
    const resultado = [];
    for (const personaje of this.personajes.values()) {
      if (personaje.faccion.toLowerCase() === faccion.toLowerCase()) {
        resultado.push(personaje);
      }
    }
    return resultado;
  }

  /**
   * Busca personajes por raza
   * @param {string} raza - Nombre de la raza
   * @returns {Personaje[]} Lista de personajes de esa raza
   */
  buscarPorRaza(raza) {
    const resultado = [];
    for (const personaje of this.personajes.values()) {
      if (personaje.raza.toLowerCase() === raza.toLowerCase()) {
        resultado.push(personaje);
      }
    }
    return resultado;
  }

  /**
   * Crea un nuevo personaje basado en uno existente (clon)
   * @param {string} idBase - ID del personaje base
   * @param {string} nuevoNombre - Nombre para el nuevo personaje
   * @returns {string|null} ID del nuevo personaje
   */
  crearDesdeExistente(idBase, nuevoNombre) {
    const personajeBase = this.personajes.get(idBase);
    if (!personajeBase) {
      console.log(`[ERROR] No se encontro el personaje base con ID: ${idBase}`);
      return null;
    }

    const nuevoPersonaje = personajeBase.clonar();
    nuevoPersonaje.nombre = nuevoNombre;
    return this.agregarPersonaje(nuevoPersonaje);
  }
}
