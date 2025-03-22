// js/mainContentAcercaDe.js
function createMainContentAcercaDe() {
    const section = document.createElement('section');
    section.innerHTML = '<h2>Acerca de</h2><p>Contenido de la sección acerca de.</p>';
    return section;
  }
  
  // Exponer la función al ámbito global
  window.createMainContentAcercaDe = createMainContentAcercaDe;
  