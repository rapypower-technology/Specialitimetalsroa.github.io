

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
      await loadScript('src/js/brass.js');
      await loadScript('src/js/copper.js');
      await loadScript('src/js/aluminum.js');
      await loadScript('src/js/stainlessSteel.js');
      await loadScript('src/js/carbonSteel.js');
      await loadScript('src/js/engineeringPlastics.js');
      const servicios = document.createElement('servicios');
      servicios.innerHTML = `
      <section  class="services">
        <h2>Servicios</h2>
      </section>
        `;

      servicios.appendChild(createServicebronze());
      servicios.appendChild(createServiceBrass());
      servicios.appendChild(createServiceCopper());
      servicios.appendChild(createServiceAluminum());
      servicios.appendChild(createServicestainlessSteel());
      servicios.appendChild(createServicecarbonSteel());
      servicios.appendChild(createServiceengineeringPlastics());
      return servicios;
  } catch (error) {
      console.error('Error loading service scripts:', error);
  }
}


