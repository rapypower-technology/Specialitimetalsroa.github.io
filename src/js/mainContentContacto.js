// js/mainContentContactanos.js
function createMainContentContacto() {
    const section = document.createElement('contacto');
    section.innerHTML = `
     <section id="contacto" class="contact-section">
         <h2>Líderes en la Venta de Metales Especiales y Plásticos de Alta Calidad</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Centro de Contacto</h3>
                    <div class="contact-details">
                        <div class="contact-item">
                            <span class="material-icons">location_on</span>
                            <div>
                                <h4>Ubicación Principal</h4>
                                <p>Delfin S/N, Industrial Cuamatla, 54730 Cuautitlán Izcalli,Méx</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="material-icons">phone</span>
                            <div>
                                <h4>Línea Directa</h4>
                                <p>+52 (55) 26-57-29-03
                                
                                </p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="material-icons">email</span>
                            <div>
                                <h4>Correo Empresarial</h4>
                                <p>ventas@metalesespecialesmexico.com.mx</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="material-icons">schedule</span>
                            <div>
                                <h4>Horario de Atención</h4>
                                <p>Lunes a Viernes: 9:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <h4>Redes Empresariales</h4>
                        <div class="social-grid">
                            <a href="#" class="social-link" aria-label="Facebook">
                                <span class="material-icons">facebook</span>
                            </a>
                            <a href="#" class="social-link" aria-label="LinkedIn">
                                <span class="material-icons">linkedin</span>
                            </a>
                        </div>
                    </div>
                </div>

                 <div class="contact-form-container">
                  
                    <form id="contactForm" class="contact-form" onsubmit="sendToWhatsApp(event)">
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" id="nombre" name="nombre" required>
                                <label for="nombre">Nombre Completo</label>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" name="email" required>
                                <label for="email">Correo Electrónico</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="tel" id="telefono" name="telefono" required>
                                <label for="telefono">Teléfono</label>
                            </div>
                            <div class="form-group">
                                <select id="servicio" name="servicio" required>
                                    <option value="">Selecciona una opci&oacute;n</option>
                                    <option value="Bronce" id="rpt_main_09">Bronce</option>
                                        <option value="Cobre" id="rpt_main_10">Cobre</option>
                                        <option value="Pl&aacute;sticos-de-Ingenier&iacute;a" id="rpt_main_11">Pl&aacute;sticos de Ingenier&iacute;a</option>
                                        <option value="Acero-Inoxidable" id="rpt_main_12">Acero Inoxidable</option>
                                        <option value="Acero-al-Carb&oacute;n" id="rpt_main_13">Acero al Carb&oacute;n</option>
                                        <option value="Otros" id="rpt_main_14">Otros</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                            <label for="mensaje">Mensaje</label>
                        </div>
                        <button type="submit" class="submit-button">
                            <span class="material-icons">send</span>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>




    `;
    return section;
  }
  
  // Exponer la función al ámbito global
  window.createMainContentContacto = createMainContentContacto;
  

  function sendToWhatsApp(event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    const whatsappMessage = `Hola, soy ${nombre}, me gustaría obtener más información sobre el servicio de ${servicio}. Mi correo es ${email} y mi número de teléfono es ${telefono}. Mensaje: ${mensaje}`;

    const whatsappUrl = `https://wa.me/5526572903?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}