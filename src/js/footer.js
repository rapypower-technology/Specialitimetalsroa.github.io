// js/footer.js
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>Derechos reservados &copy; 2025</p>';
    return footer;
  }
  
  // Exponer la función al ámbito global
  window.createFooter = createFooter;
  