/**
 * PATRON COMPOSITE - Jerarquia de Unidades de Negocio
 * 
 * Implementa el patron Composite para representar una estructura
 * jerarquica de unidades de negocio dentro de una empresa.
 * 
 * Estructura:
 * - ComponenteOrganizacional (Component)
 * - UnidadNegocio (Leaf)
 * - UnidadNegocioCompuesta (Composite)
 * - Empresa (Client)
 * 
 * Calculos:
 * - Empleados, beneficios e inversiones se suman
 * - Contratos semanales se promedian
 */

import { UnidadNegocio } from "./componentes/UnidadNegocio.js";
import { UnidadNegocioCompuesta } from "./componentes/UnidadNegocioCompuesta.js";
import { Empresa } from "./Empresa.js";

// ============================================================================
// DEMOSTRACION
// ============================================================================

console.log("===============================================================");
console.log("  PATRON COMPOSITE - ESTRUCTURA ORGANIZACIONAL");
console.log("===============================================================");

// 1. Crear la empresa
console.log("\n[PASO 1] Creando la empresa");
console.log("---------------------------------------------------------------");

const empresa = new Empresa(
  "TechCorp S.A.",
  "Maria Garcia Lopez",
  "20123456789",
  "Av. Tecnologia 1234, Lima, Peru"
);

console.log(`[OK] Empresa "${empresa.nombre}" creada`);

// 2. Crear unidades de negocio simples (hojas)
console.log("\n[PASO 2] Creando unidades de negocio simples (hojas)");
console.log("---------------------------------------------------------------");

const ventasNacionales = new UnidadNegocio(
  "Ventas Nacionales",
  "Carlos Perez",
  50, 1500000, 500000, 25
);

const ventasInternacionales = new UnidadNegocio(
  "Ventas Internacionales",
  "Ana Rodriguez",
  30, 2000000, 300000, 15
);

const desarrollo = new UnidadNegocio(
  "Desarrollo de Software",
  "Luis Martinez",
  80, 800000, 200000, 10
);

const infraestructura = new UnidadNegocio(
  "Infraestructura TI",
  "Pedro Sanchez",
  25, 300000, 1000000, 5
);

const soporte = new UnidadNegocio(
  "Soporte Tecnico",
  "Laura Diaz",
  40, 200000, 100000, 50
);

const seleccion = new UnidadNegocio(
  "Seleccion de Personal",
  "Carmen Torres",
  15, 100000, 50000, 8
);

const capacitacion = new UnidadNegocio(
  "Capacitacion",
  "Roberto Flores",
  10, 150000, 80000, 12
);

console.log("[OK] 7 unidades de negocio simples creadas");

// 3. Crear unidades compuestas (divisiones)
console.log("\n[PASO 3] Creando divisiones compuestas");
console.log("---------------------------------------------------------------");

const divisionVentas = new UnidadNegocioCompuesta(
  "Division de Ventas",
  "Fernando Gonzalez"
);
divisionVentas
  .agregar(ventasNacionales)
  .agregar(ventasInternacionales);

const divisionTecnologia = new UnidadNegocioCompuesta(
  "Division de Tecnologia",
  "Marta Ruiz"
);
divisionTecnologia
  .agregar(desarrollo)
  .agregar(infraestructura)
  .agregar(soporte);

const divisionRRHH = new UnidadNegocioCompuesta(
  "Division de Recursos Humanos",
  "Jose Herrera"
);
divisionRRHH
  .agregar(seleccion)
  .agregar(capacitacion);

console.log("[OK] 3 divisiones compuestas creadas");

// 4. Crear la direccion general (raiz)
console.log("\n[PASO 4] Creando direccion general y conectando estructura");
console.log("---------------------------------------------------------------");

const direccionGeneral = new UnidadNegocioCompuesta(
  "Direccion General",
  "Maria Garcia Lopez"
);
direccionGeneral
  .agregar(divisionVentas)
  .agregar(divisionTecnologia)
  .agregar(divisionRRHH);

empresa.setUnidadRaiz(direccionGeneral);

console.log("[OK] Estructura jerarquica completa configurada");

// 5. Mostrar estructura completa
console.log("\n[PASO 5] Visualizando estructura organizacional");
empresa.mostrarEstructura();

// 6. Mostrar resumen ejecutivo
console.log("\n[PASO 6] Resumen ejecutivo de la empresa");
empresa.mostrarResumenEjecutivo();

// 7. Demostrar calculos en diferentes niveles
console.log("[PASO 7] Demostracion de calculos por nivel");
console.log("---------------------------------------------------------------");

console.log("\nDivision de Ventas:");
console.log(`   Empleados: ${divisionVentas.getEmpleados()}`);
console.log(`   Beneficios: $${divisionVentas.getBeneficiosBrutos().toLocaleString()}`);
console.log(`   Inversion: $${divisionVentas.getInversionEdificios().toLocaleString()}`);
console.log(`   Contratos/semana (promedio): ${divisionVentas.getContratosSemanales()}`);

console.log("\nDivision de Tecnologia:");
console.log(`   Empleados: ${divisionTecnologia.getEmpleados()}`);
console.log(`   Beneficios: $${divisionTecnologia.getBeneficiosBrutos().toLocaleString()}`);
console.log(`   Inversion: $${divisionTecnologia.getInversionEdificios().toLocaleString()}`);
console.log(`   Contratos/semana (promedio): ${divisionTecnologia.getContratosSemanales()}`);

console.log("\nUnidad Simple (Desarrollo de Software):");
console.log(`   Empleados: ${desarrollo.getEmpleados()}`);
console.log(`   Beneficios: $${desarrollo.getBeneficiosBrutos().toLocaleString()}`);
console.log(`   Inversion: $${desarrollo.getInversionEdificios().toLocaleString()}`);
console.log(`   Contratos/semana: ${desarrollo.getContratosSemanales()}`);

// 8. Agregar nueva unidad dinamicamente
console.log("\n[PASO 8] Agregando nueva unidad dinamicamente");
console.log("---------------------------------------------------------------");

const nuevaUnidad = new UnidadNegocio(
  "Marketing Digital",
  "Sofia Castro",
  20, 500000, 150000, 30
);

divisionVentas.agregar(nuevaUnidad);
console.log("[OK] Nueva unidad 'Marketing Digital' agregada a Division de Ventas");

console.log("\nNuevos totales de Division de Ventas:");
console.log(`   Empleados: ${divisionVentas.getEmpleados()} (antes: 80)`);
console.log(`   Beneficios: $${divisionVentas.getBeneficiosBrutos().toLocaleString()} (antes: $3,500,000)`);

console.log("\nNuevos totales de la Empresa:");
empresa.mostrarResumenEjecutivo();

console.log("Demostracion del patron Composite completada.");
console.log("===============================================================\n");
