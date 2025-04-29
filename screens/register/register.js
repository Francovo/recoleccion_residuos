function registrarse() {
  const nombre = document.getElementById("regNombre").value;
  const correo = document.getElementById("regCorreo").value;
  const telefono = document.getElementById("regTelefono").value;
  const direccion = document.getElementById("regDireccion").value;
  const clave = document.getElementById("regClave").value;

  if (nombre && correo && telefono && direccion && clave) {
    userData = {
      name: nombre,
      email: correo,
      phone: telefono,
      adress: direccion,
      password: clave,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    location.hash = "login";
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Por favor completa todos los campos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}
