function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add("footer");
    footer.innerHTML = `
    <div class="footer-container">
        <div class="footer-section footer-branding fade-in">
            <img src="src/img/company/SiteLogo.webp" alt="Logo de Rapypower" class="footer-logo scale-on-hover">
            <p class="footer-tagline">Specialiti Metals ROA</p>
        </div>

        <div class="footer-section footer-links fade-in delay-1">
            <h3>Enlaces Rápidos</h3>
            <ul>
                <li><a href="#inicio" class="hover-underline">Inicio</a></li>
                <li><a href="#servicios" class="hover-underline">Servicios</a></li>
                <li><a href="#nosotros" class="hover-underline">Nosotros</a></li>
                <li><a href="#contacto" class="hover-underline">Contacto</a></li>
            </ul>
        </div>

        <div class="footer-section footer-contact fade-in delay-2">
            <h3>Contacto</h3>
            <ul>
                <li><i class="fas fa-envelope pulse-icon"></i> <a href="mailto:contacto@rapypower.com">ventas@metalesespecialesmexico.com.mx</a></li>
                <li><i class="fas fa-phone pulse-icon"></i> <a href="tel:+52556572903">+52 (55) 26-57-29-03</a></li>
                <li><i class="fas fa-map-marker-alt pulse-icon"></i> Delfin S/N, Industrial Cuamatla, 54730 Cuautitlán Izcalli,Méx</li>
            </ul>
        </div>

        <div class="footer-section footer-social fade-in delay-3">
            <h3>Conéctate con Nosotros</h3>
            <div class="social-icons">
                <a href="#" target="_blank" aria-label="Facebook" class="social-icon hover-scale"><i class="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank" aria-label="Telegram" class="social-icon hover-scale"><i class="fab fa-telegram-plane"></i></a>
                <a href="#" target="_blank" aria-label="WhatsApp" class="social-icon hover-scale"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom fade-in delay-4">
        <p>&copy; ${new Date().getFullYear()} Rapypower Technology Solutions. Todos los derechos reservados.</p>
        <p>⚙️ Desarrollado por Rapypower Technology Solutions</p>
    </div>

    <a href="https://wa.me/5526572903" class="whatsapp-float floating-button" target="_blank" aria-label="Chatea con nosotros en WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
    `;
    return footer;
}

window.createFooter = createFooter;