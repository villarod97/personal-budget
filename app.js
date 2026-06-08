let nombres = ['salario', 'renta', 'comida', 'transporte'];
let valores = [3500, -800, -700, -400];

let continuar = 'si';

while (continuar === 'si') {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso / gasto):');
  const monto = parseFloat(prompt('Monto:'));

  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
    alert('Datos inválidos. Intenta de nuevo.');
  } else {
    let valor;
    if (tipo === 'ingreso') {
      valor = monto;
    } else {
      valor = -monto;
    }

    nombres.push(nombre);
    valores.push(valor);

    console.log('Movimiento registrado.');
  }

  continuar = prompt('¿Deseas agregar otro movimiento? (si / no):');
  if (continuar === null) continuar = 'no';
}

// ── Función mostrarResumen ──────────────────────────────────
function mostrarResumen() {
  let totalIngresos = 0;  // acumulador 1: solo positivos
  let totalGastos = 0;    // acumulador 2: solo negativos

  console.log('\n===== DETALLE DE MOVIMIENTOS =====');

  for (let i = 0; i < nombres.length; i++) {
    const tipo = valores[i] > 0 ? 'Ingreso' : 'Gasto';
    console.log(`  ${tipo}: ${nombres[i]} → S/ ${valores[i].toFixed(2)}`);

    // Mismo for, dos acumuladores según el signo
    if (valores[i] > 0) {
      totalIngresos += valores[i];   // suma ingresos
    } else {
      totalGastos += valores[i];     // suma gastos (negativo)
    }
  }

  const balance = totalIngresos + totalGastos;

  console.log('\n===== DESGLOSE POR TIPO =====');
  console.log(`  Total ingresos : S/ ${totalIngresos.toFixed(2)}`);
  console.log(`  Total gastos   : S/ ${totalGastos.toFixed(2)}`);
  console.log(`  Balance final  : S/ ${balance.toFixed(2)}`);

  if (balance >= 0) {
    console.log('\n✅ Estás en positivo. ¡Buen trabajo!');
  } else {
    console.log('\n⚠️  Estás en negativo. Revisa tus gastos.');
  }
}

// Llamar al resumen al terminar
mostrarResumen();