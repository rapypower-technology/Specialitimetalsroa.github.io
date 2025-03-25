document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { name: 'bronce', label: 'Bronce', file: 'src/js/services/bronce.js' },
        { name: 'laton', label: 'Latón', file: 'src/js/services/laton.js' },
        { name: 'cobre', label: 'Cobre', file: 'src/js/services/cobre.js' },
        { name: 'aluminio', label: 'Aluminio', file: 'src/js/services/aluminio.js' },
        { name: 'acero-inoxidable', label: 'Acero Inoxidable', file: 'src/js/services/acero-inoxidable.js' },
        { name: 'plasticos-ingenieria', label: 'Plásticos de Ingeniería', file: 'src/js/services/plasticos-ingenieria.js' },
        { name: 'acero-al-carbon', label: 'Acero al Carbón', file: 'src/js/services/acero-al-carbon.js' }
    ];

    const container = document.getElementById('cards-container');
    if (!container) {
        console.error('Contenedor #cards-container no encontrado');
        return;
    }

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `<h3>${service.label}</h3>`;
        card.addEventListener('click', () => {
            // Carga el servicio correspondiente
            loadPage(service.file);
            // Después de un breve retardo se muestra la información asignada por el script
            setTimeout(() => {
                // Se asume que cada servicio asigna window.serviceInfo
                const info = window.serviceInfo || 'Información no disponible';
                card.innerHTML = `<h3>${service.label}</h3><p>${info}</p>`;
            }, 500);
        });
        container.appendChild(card);
    });
});
