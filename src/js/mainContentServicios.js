

function loadScript(url) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
  });
}

async function createMainContentServicios() {
  try {
      await loadScript('src/js/bronze.js');
      await loadScript('src/js/Brass.js');
      await loadScript('src/js/Copper.js');
      await loadScript('src/js/Aluminum.js');

      const servicios = document.createElement('section');
      servicios.innerHTML = `
      <section id="servicios" class="services">
        <h2>Servicios</h2>
        
        
      </section>
        `;

      servicios.appendChild(createServicebronze());
      servicios.appendChild(createServiceBrass());
      servicios.appendChild(createServiceCopper());
      servicios.appendChild(createServiceAluminum());

      return servicios;
  } catch (error) {
      console.error('Error loading service scripts:', error);
  }
}


