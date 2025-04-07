function registrarse() {
    const nombre = document.getElementById('regNombre').value;
    const correo = document.getElementById('regCorreo').value;
    const telefono = document.getElementById('regTelefono').value;
    const direccion = document.getElementById('regDireccion').value;
    const clave = document.getElementById('regClave').value;
  
    if (nombre && correo && telefono && direccion && clave) {
      alert(`¡Gracias por registrarte, ${nombre}!`);
      location.hash = 'login';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  