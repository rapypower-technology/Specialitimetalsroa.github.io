
document.addEventListener("DOMContentLoaded", () => {
    const header = createHeader();
    document.body.prepend(header);
    

    setupMenuToggle(header);
    setupScrollEffect(header);
    setupActiveMenu(); // Activa la funcionalidad de selección de sección
});

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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadScript('src/js/header.js');
        await loadScript('src/js/mainContentInicio.js');
        await loadScript('src/js/mainContentServicios.js');
        await loadScript('src/js/mainContentAcercaDe.js');
        await loadScript('src/js/mainContentContacto.js');
        await loadScript('src/js/footer.js');

        // Crear y añadir los contenedores al DOM
        const container = document.getElementById('container');
        const header = createHeader();  // 👈 Primero creamos el header
        container.appendChild(header);

        const main = document.createElement('main');
        main.appendChild(createMainContentInicio());
        main.appendChild(await createMainContentServicios());  // 👈 Asegurarse de que se espera a que se carguen los scripts de servicios
        main.appendChild(createMainContentAcercaDe());
        main.appendChild(createMainContentContacto());
        container.appendChild(main);

        container.appendChild(createFooter());

        // Asegurar que el header está en el DOM antes de usar querySelector
        if (header) {
            setupMenuToggle(header); // 👈 Pasamos el header correctamente
        }

        if (typeof setupActiveMenu === "function") setupActiveMenu();

    } catch (error) {
        console.error('Error loading scripts:', error);
    }
});



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

    // Mejora el rendimiento usando throttle (controla la frecuencia de ejecución)
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
    window.addEventListener("load", updateActiveLink); // Ejecutar cuando cargue la página
}


// 📌 Función para manejar el menú responsive
function setupMenuToggle(header) {
    const menuToggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");

    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

// 📌 Función optimizada para efecto de scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
