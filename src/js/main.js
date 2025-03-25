function loadPage(scriptName) {
    const oldScript = document.getElementById('pageScript');
    if (oldScript) oldScript.remove();
    const s = document.createElement('script');
    s.src = scriptName;
    s.id = 'pageScript';
    document.body.appendChild(s);
    // Remover cualquier hash visible en la URL
    history.replaceState(null, null, window.location.pathname + window.location.search);
}

function initTabs() {
    // Seleccionar todas las pestañas y los artículos correspondientes
    const tabs = document.querySelectorAll('.tabs_01 li a');
    const articles = document.querySelectorAll('.rpt_sections_table_with_tabs_primary article');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento por defecto

            // Quitar la clase 'active' de todas las pestañas y ocultar todos los artículos
            tabs.forEach(t => t.classList.remove('active'));
            articles.forEach(article => article.style.display = 'none');

            // Marcar la pestaña clicada como activa y mostrar el artículo correspondiente
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            const targetArticle = document.querySelector(targetId);
            if (targetArticle) {
                targetArticle.style.display = 'block';
            }
            // Ocultar el hash en la URL
            history.replaceState(null, null, window.location.pathname + window.location.search);
        });
    });
}

function handleHash() {
    // Obtener el hash (sin el símbolo "#") o asignar "inicio" por defecto
    const hash = window.location.hash.substring(1) || 'inicio';

    // Si el hash indica un servicio seleccionado con formato "servicios-*"
    if (hash.startsWith('servicios-')) {
        return;
    }

    if (hash.startsWith('servicios')) {
        const parts = hash.split('-');
        if (parts.length > 1) {
            const metal = parts[1].toLowerCase();
            switch (metal) {
                case 'bronce':
                    loadPage('src/js/services/bronce.js');
                    break;
                case 'laton':
                    loadPage('src/js/services/brass.js');
                    break;
                case 'cobre':
                    loadPage('src/js/services/cobre.js');
                    break;
                case 'aluminio':
                    loadPage('src/js/services/aluminum.js');
                    break;
                case 'acero-inoxidable':
                    loadPage('src/js/services/stainlessSteel.js');
                    break;
                case 'plasticosdeingenieria':
                case 'plasticos-ingenieria':
                    loadPage('src/js/services/engineeringPlastics.js');
                    break;
                case 'aceroalcarbon':
                case 'acero-al-carbon':
                    loadPage('src/js/services/carbonSteel.js');
                    break;
                default:
                    loadPage('src/js/webs/servicios.js');
            }
        } else {
            loadPage('src/js/webs/servicios.js');
        }
    } else if (hash.startsWith('tab')) {
        // Inicializa las pestañas
        initTabs();
        // Buscar la pestaña cuyo href coincida con el hash actual
        const targetTab = document.querySelector(`.tabs_01 li a[href="#${hash}"]`);
        if (targetTab) {
            targetTab.click();
        } else {
            // Si no se encuentra, activa la primera pestaña por defecto
            const firstTab = document.querySelector('.tabs_01 li a');
            if (firstTab) firstTab.click();
        }
        // Ocultar el hash en la URL
        history.replaceState(null, null, window.location.pathname + window.location.search);
        return;
    } else {
        // Cargar las páginas según el hash principal
        switch (hash) {
            case 'inicio':
                loadPage('src/js/webs/inicio.js');
                break;
            case 'productos':
                loadPage('src/js/webs/productos.js');
                break;
            case 'nosotros':
                loadPage('src/js/webs/nosotros.js');
                break;
            case 'contacto':
                loadPage('src/js/webs/contacto.js');
                break;
            default:
                loadPage('src/js/webs/inicio.js');
        }
    }
    // Finalmente, ocultar cualquier hash en la URL
    history.replaceState(null, null, window.location.pathname + window.location.search);
}

// Escuchar el cambio de hash en la URL
window.addEventListener('hashchange', handleHash);

// Al cargar el DOM, inicializar la funcionalidad correspondiente
document.addEventListener('DOMContentLoaded', function () {
    handleHash();
    // Si existen tabs en la página, inicialízalos
    if (document.querySelector('.tabs_01 li a')) {
        initTabs();
    }
});
