function inicializar() {
  const tablaBody = document.querySelector('#tablaHistorial tbody');
  const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];

  if (!tablaBody) {
    console.error('No se encontró la tabla para el historial.');
    return;
  }

  if (solicitudes.length === 0) {
    tablaBody.innerHTML = '<tr><td colspan="5">No hay solicitudes registradas.</td></tr>';
    return;
  }

  solicitudes.forEach((solicitud) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${solicitud.id}</td>
      <td>${formatearTipoResiduo(solicitud.tipoResiduo)}</td>
      <td>${solicitud.cantidad}</td>
      <td>${solicitud.fecha}</td>
      <td>${formatearTipoSolicitud(solicitud.tipoSolicitud)}</td>
    `;
    tablaBody.appendChild(row);
  });
}

function formatearTipoResiduo(tipo) {
  switch(tipo) {
    case 'organico': return 'Orgánico';
    case 'inorganico': return 'Inorgánico reciclable';
    case 'peligroso': return 'Peligroso';
    default: return tipo;
  }
}

function formatearTipoSolicitud(tipo) {
  return tipo === 'programada' ? 'Programada' : 'Por Demanda';
}
