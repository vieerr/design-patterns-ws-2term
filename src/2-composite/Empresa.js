import { UnidadNegocioCompuesta } from "./componentes/UnidadNegocioCompuesta.js";

/**
 * Empresa - Clase cliente que utiliza el patron Composite
 * Contiene informacion general de la empresa y la raiz de la jerarquia
 */
export class Empresa {
  constructor(nombre, presidente, ruc, direccionPostal) {
    this.nombre = nombre;
    this.presidente = presidente;
    this.ruc = ruc;
    this.direccionPostal = direccionPostal;
    this.unidadRaiz = null;
  }

  /**
   * Establece la unidad de negocio raiz
   * @param {UnidadNegocioCompuesta} unidad
   */
  setUnidadRaiz(unidad) {
    this.unidadRaiz = unidad;
  }

  /**
   * Obtiene la unidad de negocio raiz
   * @returns {UnidadNegocioCompuesta}
   */
  getUnidadRaiz() {
    return this.unidadRaiz;
  }

  getTotalEmpleados() {
    return this.unidadRaiz ? this.unidadRaiz.getEmpleados() : 0;
  }

  getTotalBeneficios() {
    return this.unidadRaiz ? this.unidadRaiz.getBeneficiosBrutos() : 0;
  }

  getTotalInversion() {
    return this.unidadRaiz ? this.unidadRaiz.getInversionEdificios() : 0;
  }

  getPromedioContratos() {
    return this.unidadRaiz ? this.unidadRaiz.getContratosSemanales() : 0;
  }

  /**
   * Muestra la estructura organizacional completa
   */
  mostrarEstructura() {
    console.log("\n+-------------------------------------------------------------------+");
    console.log("|  ESTRUCTURA ORGANIZACIONAL                                        |");
    console.log("+-------------------------------------------------------------------+");
    console.log(`|  Empresa: ${this.nombre}`);
    console.log(`|  Presidente: ${this.presidente}`);
    console.log(`|  RUC: ${this.ruc}`);
    console.log(`|  Direccion: ${this.direccionPostal}`);
    console.log("+-------------------------------------------------------------------+\n");

    if (this.unidadRaiz) {
      console.log("JERARQUIA DE UNIDADES DE NEGOCIO:");
      console.log("-------------------------------------------------------------------");
      this.unidadRaiz.mostrarInfo(0);
    } else {
      console.log("No hay unidades de negocio configuradas");
    }
  }

  /**
   * Muestra un resumen ejecutivo con totales
   */
  mostrarResumenEjecutivo() {
    console.log("\n+-------------------------------------------------------------------+");
    console.log(`|  RESUMEN EJECUTIVO - ${this.nombre}`);
    console.log("+-------------------------------------------------------------------+");
    console.log(`|  Total Empleados:               ${this.getTotalEmpleados()}`);
    console.log(`|  Beneficios Brutos (trimestre): $${this.getTotalBeneficios().toLocaleString()}`);
    console.log(`|  Inversion en Edificios:        $${this.getTotalInversion().toLocaleString()}`);
    console.log(`|  Promedio Contratos/semana:     ${this.getPromedioContratos()}`);
    console.log("+-------------------------------------------------------------------+\n");
  }
}
