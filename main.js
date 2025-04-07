function cargarPagina(nombre) {
    const rutaHtml = `screens/${nombre}/${nombre}.html`;
    const rutaJs = `screens/${nombre}/${nombre}.js`;
  
    // Cargar HTML
    fetch(rutaHtml)
      .then(res => {
        if (!res.ok) throw new Error(`No se pudo cargar ${rutaHtml}`);
        return res.text();
      })
      .then(html => {
        document.getElementById('contenido').innerHTML = html;
  
        // Cargar JS del componente (si existe)
        const script = document.createElement('script');
        script.src = rutaJs;
        script.onload = () => console.log(`${rutaJs} cargado`);
        script.onerror = () => console.warn(`No se pudo cargar ${rutaJs}`);
        document.body.appendChild(script);
      })
      .catch(err => {
        console.error(err);
        document.getElementById('contenido').innerHTML = `<p>Error al cargar la pantalla.</p>`;
      });
  }
  
  window.addEventListener('hashchange', () => {
    const pagina = location.hash.substring(1) || 'landing';
    cargarPagina(pagina);
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const pagina = location.hash.substring(1) || 'landing';
    cargarPagina(pagina);
  });
  