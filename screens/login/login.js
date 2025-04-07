function iniciarSesion() {
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
  
    if (email && pass) {
      alert(`¡Bienvenido, ${email}!`);
      location.hash = 'dashboard';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  