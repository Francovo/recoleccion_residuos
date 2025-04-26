function showComponent(componentId) {
    const components = ['landing', 'register', 'login', 'dashboard', 'historial'];
    components.forEach(id => {
      const el = document.getElementById(id);
      el.style.display = (id === componentId) ? 'block' : 'none';
    });
  }
  
  window.addEventListener('hashchange', () => {
    const route = window.location.hash.slice(1);
    showComponent(route || 'landing');
  });
  
  window.addEventListener('load', () => {
    const route = window.location.hash.slice(1);
    showComponent(route || 'landing');
  });

  window.addEventListener('load', () => {
    const route = window.location.hash.slice(1);
    showComponent(route || 'historial');
  });