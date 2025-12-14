import { ComponenteOrganizacional } from "./ComponenteOrganizacional.js";

/**
 * Leaf (Hoja) - Unidad de negocio simple sin subunidades
 * Representa una unidad de negocio individual con sus propios datos
 */
export class UnidadNegocio extends ComponenteOrganizacional {
  constructor(nombre, gerente, empleados, beneficiosBrutos, inversionEdificios, contratosSemanales) {
    super(nombre);
    this.gerente = gerente;
    this._empleados = empleados;
    this._beneficiosBrutos = beneficiosBrutos;
    this._inversionEdificios = inversionEdificios;
    this._contratosSemanales = contratosSemanales;
  }

  getEmpleados() {
    return this._empleados;
  }

  getBeneficiosBrutos() {
    return this._beneficiosBrutos;
  }

  getInversionEdificios() {
    return this._inversionEdificios;
  }

  getContratosSemanales() {
    return this._contratosSemanales;
  }

  mostrarInfo(nivel = 0) {
    const indent = "  ".repeat(nivel);
    const prefix = nivel === 0 ? "" : "|-- ";
    
    console.log(`${indent}${prefix}[Unidad] ${this.nombre}`);
    console.log(`${indent}    Gerente: ${this.gerente}`);
    console.log(`${indent}    Empleados: ${this._empleados}`);
    console.log(`${indent}    Beneficios Brutos: $${this._beneficiosBrutos.toLocaleString()}`);
    console.log(`${indent}    Inversion Edificios: $${this._inversionEdificios.toLocaleString()}`);
    console.log(`${indent}    Contratos/semana: ${this._contratosSemanales}`);
  }
}
