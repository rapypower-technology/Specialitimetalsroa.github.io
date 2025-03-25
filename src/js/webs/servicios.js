(function() {
    async function showScript(scriptPath) {
        try {
            // Importar dinámicamente el módulo para soportar export
            const module = await import(`/${scriptPath}`);
            const serviceInfo = module.default;
            document.getElementById('serviceContent').innerHTML = `<p>${serviceInfo}</p>`;
        } catch (err) {
            console.error(err);
            document.getElementById('serviceContent').innerHTML = `<p>Error al cargar el servicio.</p>`;
        }
    }
    
    document.getElementById('main').innerHTML = `
        <div id="serviciosCards" class="cards-container">
            ${['bronze','brass', 'copper','aluminum','stainlessSteel','carbonSteel', 'engineeringPlastics'].map(name => `
                <div class="card" onclick="showScript('src/js/services/${name}.js');">
                    <img src="src/img/services/${name}2.webp" alt="${name}">
                    <h3>${name}</h3>
                </div>
            `).join('')}
        </div>
        <div id="serviceContent">
            <!-- Contenedor para mostrar el contenido del JS -->
        </div>
    `;
    
    // Mostrar por defecto el servicio "bronce"
    showScript('src/js/services/bronze.js');
    
    // Agregar la clase 'active' a la tarjeta predeterminada
    document.querySelector('#serviciosCards .card').classList.add('active');
    
    // Asignar event listeners para manejar la clase 'active'
    const cards = document.querySelectorAll('#serviciosCards .card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remover 'active' de todas las tarjetas
            document.querySelectorAll('#serviciosCards .card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            console.log('Tarjeta seleccionada:', card);
        });
    });
})();

