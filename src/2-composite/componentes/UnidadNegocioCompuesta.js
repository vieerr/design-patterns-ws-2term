import { ComponenteOrganizacional } from "./ComponenteOrganizacional.js";

/**
 * Composite (Compuesto) - Unidad de negocio que contiene otras unidades
 * Los valores se calculan como suma/media de las subunidades
 */
export class UnidadNegocioCompuesta extends ComponenteOrganizacional {
  constructor(nombre, gerente) {
    super(nombre);
    this.gerente = gerente;
    this.hijos = [];
  }

  /**
   * Agrega una subunidad de negocio
   * @param {ComponenteOrganizacional} componente
   */
  agregar(componente) {
    componente.padre = this;
    this.hijos.push(componente);
    return this;
  }

  /**
   * Elimina una subunidad de negocio
   * @param {ComponenteOrganizacional} componente
   */
  eliminar(componente) {
    const index = this.hijos.indexOf(componente);
    if (index !== -1) {
      componente.padre = null;
      this.hijos.splice(index, 1);
    }
    return this;
  }

  getHijos() {
    return this.hijos;
  }

  esCompuesto() {
    return true;
  }

  /**
   * Suma de empleados de todas las subunidades
   */
  getEmpleados() {
    return this.hijos.reduce((total, hijo) => total + hijo.getEmpleados(), 0);
  }

  /**
   * Suma de beneficios brutos de todas las subunidades
   */
  getBeneficiosBrutos() {
    return this.hijos.reduce((total, hijo) => total + hijo.getBeneficiosBrutos(), 0);
  }

  /**
   * Suma de inversiones en edificios de todas las subunidades
   */
  getInversionEdificios() {
    return this.hijos.reduce((total, hijo) => total + hijo.getInversionEdificios(), 0);
  }

  /**
   * Media de contratos semanales de todas las subunidades
   */
  getContratosSemanales() {
    if (this.hijos.length === 0) return 0;
    const suma = this.hijos.reduce((total, hijo) => total + hijo.getContratosSemanales(), 0);
    return Math.round((suma / this.hijos.length) * 100) / 100;
  }

  mostrarInfo(nivel = 0) {
    const indent = "  ".repeat(nivel);
    const prefix = nivel === 0 ? "" : "|-- ";
    
    console.log(`${indent}${prefix}[Division] ${this.nombre}`);
    console.log(`${indent}    Gerente: ${this.gerente}`);
    console.log(`${indent}    Total Empleados: ${this.getEmpleados()}`);
    console.log(`${indent}    Total Beneficios Brutos: $${this.getBeneficiosBrutos().toLocaleString()}`);
    console.log(`${indent}    Total Inversion Edificios: $${this.getInversionEdificios().toLocaleString()}`);
    console.log(`${indent}    Media Contratos/semana: ${this.getContratosSemanales()}`);
    console.log(`${indent}    Subunidades: ${this.hijos.length}`);
    
    this.hijos.forEach((hijo) => {
      hijo.mostrarInfo(nivel + 1);
    });
  }
}
