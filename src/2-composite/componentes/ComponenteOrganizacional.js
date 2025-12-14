/**
 * Component (Componente) - Interfaz base del patrón Composite
 * Define las operaciones comunes para hojas y compuestos
 */
export class ComponenteOrganizacional {
  constructor(nombre) {
    if (new.target === ComponenteOrganizacional) {
      throw new Error("No se puede instanciar la clase abstracta ComponenteOrganizacional");
    }
    this.nombre = nombre;
    this.padre = null;
  }

  /**
   * Obtiene el número de empleados
   * @returns {number}
   */
  getEmpleados() {
    throw new Error("Método getEmpleados() debe ser implementado");
  }

  /**
   * Obtiene los beneficios brutos del último trimestre
   * @returns {number}
   */
  getBeneficiosBrutos() {
    throw new Error("Método getBeneficiosBrutos() debe ser implementado");
  }

  /**
   * Obtiene la inversión en edificios
   * @returns {number}
   */
  getInversionEdificios() {
    throw new Error("Método getInversionEdificios() debe ser implementado");
  }

  /**
   * Obtiene el número medio de contratos realizados por semana
   * @returns {number}
   */
  getContratosSemanales() {
    throw new Error("Método getContratosSemanales() debe ser implementado");
  }

  /**
   * Muestra información del componente
   * @param {number} nivel - Nivel de indentación
   */
  mostrarInfo(nivel = 0) {
    throw new Error("Método mostrarInfo() debe ser implementado");
  }

  /**
   * Añade un componente hijo (solo para compuestos)
   * @param {ComponenteOrganizacional} componente
   */
  añadir(componente) {
    throw new Error("No se pueden añadir componentes a una hoja");
  }

  /**
   * Elimina un componente hijo (solo para compuestos)
   * @param {ComponenteOrganizacional} componente
   */
  eliminar(componente) {
    throw new Error("No se pueden eliminar componentes de una hoja");
  }

  /**
   * Obtiene los componentes hijos (solo para compuestos)
   * @returns {ComponenteOrganizacional[]}
   */
  getHijos() {
    return [];
  }

  /**
   * Indica si es un componente compuesto
   * @returns {boolean}
   */
  esCompuesto() {
    return false;
  }
}

