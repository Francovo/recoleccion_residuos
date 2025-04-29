function cerrarSesion() {
  Swal.fire({
    title: "sesion finalizada",
    icon: "success",
    draggable: true
  });
    location.hash = 'landing';
  }
  