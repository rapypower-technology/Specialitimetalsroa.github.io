// js/mainContentContactanos.js
function createServiceCopper() {
    const section = document.createElement('section');
    section.innerHTML = '<h2>Contáctanos</h2><p>Contenido de la sección contáctanos.</p>';
    return section;
  }
  
  // Exponer la función al ámbito global
  window.createServiceCopper = createServiceCopper;
  