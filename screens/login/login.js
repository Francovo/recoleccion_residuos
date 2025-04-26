function iniciarSesion() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  const userDataString = localStorage.getItem('userData');

  if (!userDataString) {
    Swal.fire({
      title: 'Error!',
      text: 'No hay usuarios registrados.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  const userData = JSON.parse(userDataString); // Convertimos a objeto

  if (userData.email === email && userData.password === pass) {
    location.hash = 'dashboard';
  } else if (userData.email !== email) {
    Swal.fire({
      title: 'Error!',
      text: 'El correo ingresado es incorrecto.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else if (userData.password !== pass) {
    Swal.fire({
      title: 'Error!',
      text: 'La contraseña ingresada es incorrecta.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}
