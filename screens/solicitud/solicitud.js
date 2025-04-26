document.getElementById('solicitudForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const tipoResiduo = document.getElementById('tipoResiduo').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;
    const tipoSolicitud = document.getElementById('tipoSolicitud').value;
  
    const nuevaSolicitud = {
      id: Date.now(), 
      tipoResiduo,
      cantidad,
      fecha,
      tipoSolicitud
    };
  
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
  
    solicitudes.push(nuevaSolicitud);
  
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
  
    Swal.fire({
      title: '¡Solicitud enviada!',
      text: 'Tu solicitud ha sido registrada exitosamente.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  
    this.reset();
  });
  