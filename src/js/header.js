document.getElementById('header').innerHTML = `

        <div class="container">
            <div class="logo">
                <a href="#"><img src="src/img/company/SiteLogo.webp" alt="Logo"></a>
            </div>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#inicio" class="nav-link">Inicio</a></li>
                    <li><a href="#productos" class="nav-link">Productos</a></li>
                    <li><a href="#servicios" class="nav-link">Servicios</a></li>
                    <li><a href="#nosotros" class="nav-link">Nosotros</a></li>
                    <li><a href="#contacto" class="nav-link">Contacto</a></li>
                </ul>
            </nav>
            <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
   
`;

// 📌 Función para manejar el menú activo en base a la sección visible
function setupActiveMenu() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    if (!navLinks.length || !sections.length) return; // Verifica que existan elementos
    let lastActive = null; // Guarda el último enlace activo para evitar cambios innecesarios
    function updateActiveLink() {
        let scrollPos = window.scrollY + window.innerHeight * 0.2; // Ajuste para mejorar la detección
        sections.forEach(section => {
            let offsetTop = section.offsetTop;
            let offsetBottom = offsetTop + section.offsetHeight;
            if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                let activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink && lastActive !== activeLink) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    activeLink.classList.add("active");
                    lastActive = activeLink;
                }
            }
        });
    }
    let throttleTimeout;
    function throttledUpdate() {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                updateActiveLink();
                throttleTimeout = null;
            }, 100); // Ejecuta la actualización cada 100ms como máximo
        }
    }
    window.addEventListener("scroll", throttledUpdate);
    window.addEventListener("load", updateActiveLink); // Ejecuta al cargar la página
}

// 📌 Función para manejar el menú responsive adaptada al header
function setupMenuToggle() {
    const header = document.getElementById('header');
    const menuToggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

// 📌 Función optimizada para efecto de scroll en el header
window.addEventListener("scroll", () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Inicialización de las funciones
setupActiveMenu();
setupMenuToggle();

// Agregar eventos click para cambiar el botón activo manualmente
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Establecer "Inicio" como activo por defecto al cargar la página
window.addEventListener("load", () => {
    const defaultLink = document.querySelector('.nav-link[href="#inicio"]');
    if (defaultLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        defaultLink.classList.add('active');
    }
});