document.getElementById('main').innerHTML = `
    <style>
        #productosNav button.active {
            background-color: #007bff; /* Fondo del botón activo */
            color: #fff;
        }
    </style>
    <section id="busqueda">
        <h2>Búsqueda de Producto</h2>
        <input type="text" id="productoBusqueda" placeholder="Buscar producto..." />
        <button id="btnBusqueda">Buscar</button>
    </section>
    <section id="productosNav">
        <button onclick="filterButtonClick(event, 'destacado')">Productos Destacados</button>
        <button onclick="filterButtonClick(event, 'oferta')">Ofertas Especiales</button>
        <button onclick="filterButtonClick(event, 'nuevo')">Nuevos Productos</button>
    </section>
    <section id="productoContent">
        <p>Selecciona una opción para ver los productos.</p>
    </section>
`;

if (!window.products) {
    window.products = [
        // 1. Bronce
        {
            id: 1,
            name: "Bujes de bronce",
            description: "Alta resistencia al desgaste, utilizados en maquinaria industrial.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$350 MXN"
        },
        {
            id: 2,
            name: "Placas de bronce",
            description: "Placas resistentes a la corrosión para aplicaciones mecánicas y decorativas.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$1,200 MXN",
            newPrice: "$950 MXN"
        },
        {
            id: 3,
            name: "Varillas de bronce",
            description: "Material ideal para fabricar piezas mecánicas de precisión.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$480 MXN"
        },
        {
            id: 4,
            name: "Engranajes de bronce",
            description: "Baja fricción y larga duración, perfectos para maquinaria.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$2,500 MXN",
            newPrice: "$2,000 MXN"
        },
        // 2. Latón
        {
            id: 5,
            name: "Tubería de latón",
            description: "Resistente a la corrosión, ideal para fontanería.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$870 MXN"
        },
        {
            id: 6,
            name: "Lámina de latón",
            description: "Material maleable y conductor para componentes eléctricos.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$900 MXN",
            newPrice: "$750 MXN"
        },
        {
            id: 7,
            name: "Tornillos de latón",
            description: "Resistentes a la oxidación, ideales para instalaciones eléctricas.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$150 MXN"
        },
        {
            id: 8,
            name: "Accesorios hidráulicos de latón",
            description: "Conectores para tuberías de gas y agua.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$320 MXN"
        },
        // 3. Cobre
        {
            id: 9,
            name: "Cable de cobre",
            description: "Alta conductividad eléctrica, utilizado en instalaciones industriales.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$1,150 MXN"
        },
        {
            id: 10,
            name: "Tubería de cobre",
            description: "Usada en sistemas de refrigeración y aire acondicionado.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$2,000 MXN",
            newPrice: "$1,750 MXN"
        },
        {
            id: 11,
            name: "Barras de cobre",
            description: "Excelente conductor para sistemas eléctricos industriales.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$980 MXN"
        },
        {
            id: 12,
            name: "Lámina de cobre",
            description: "Aplicación en blindajes electromagnéticos y decoraciones.",
            type: "nuevo",
            image: "src/img/products/Prueba.webp",
            cost: "$1,100 MXN"
        },
        // 4. Aluminio
        {
            id: 13,
            name: "Perfiles de aluminio",
            description: "Aplicaciones en construcción y estructuras ligeras.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$520 MXN"
        },
        {
            id: 14,
            name: "Placas de aluminio",
            description: "Usadas en la industria aeronáutica y automotriz.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$1,800 MXN",
            newPrice: "$1,500 MXN"
        },
        {
            id: 15,
            name: "Láminas de aluminio anodizado",
            description: "Protección contra la corrosión y uso en decoración.",
            type: "nuevo",
            image: "src/img/products/Prueba.webp",
            cost: "$1,250 MXN"
        },
        {
            id: 16,
            name: "Radiadores de aluminio",
            description: "Sistemas de enfriamiento en vehículos y maquinaria.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$3,400 MXN"
        },
        // 5. Acero Inoxidable
        {
            id: 17,
            name: "Tuberías de acero inoxidable",
            description: "Aplicaciones en la industria alimentaria y química.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$2,600 MXN"
        },
        {
            id: 18,
            name: "Láminas de acero inoxidable",
            description: "Resistente a la corrosión y altas temperaturas.",
            type: "nuevo",
            image: "src/img/products/Prueba.webp",
            cost: "$1,800 MXN"
        },
        // 6. Plásticos de Ingeniería
        {
            id: 19,
            name: "Piezas de PEEK",
            description: "Alta resistencia química y térmica.",
            type: "nuevo",
            image: "src/img/products/Prueba.webp",
            cost: "$2,100 MXN"
        },
        {
            id: 20,
            name: "Barras de UHMW",
            description: "Excelente resistencia a la abrasión.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$1,450 MXN"
        },
        // Extras para llegar a 30 productos
        {
            id: 21,
            name: "Bujes de bronce Edición Especial",
            description: "Edición limitada con mayor resistencia y precisión.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$400 MXN"
        },
        {
            id: 22,
            name: "Bujes de bronce Edición Especial 2",
            description: "Alta calidad para aplicaciones industriales exigentes.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$410 MXN"
        },
        {
            id: 23,
            name: "Bujes de bronce Edición Especial 3",
            description: "Optimizado para larga durabilidad en entornos críticos.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$420 MXN"
        },
        {
            id: 24,
            name: "Placas de bronce Edición Premium",
            description: "Con tecnología avanzada para resistencia mejorada.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$1,300 MXN",
            newPrice: "$1,100 MXN"
        },
        {
            id: 25,
            name: "Placas de bronce Edición Premium 2",
            description: "Calidad superior en acabados y durabilidad.",
            type: "oferta",
            image: "src/img/products/Prueba.webp",
            oldPrice: "$1,350 MXN",
            newPrice: "$1,150 MXN"
        },
        {
            id: 26,
            name: "Tornillos de latón Edición Plus",
            description: "Mayor resistencia a la oxidación y precisión en funcionamiento.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$170 MXN"
        },
        {
            id: 27,
            name: "Barras de cobre Edición Especial",
            description: "Mejoradas para conductividad y durabilidad extremas.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$1,050 MXN"
        },
        {
            id: 28,
            name: "Radiadores de aluminio Edición Turbo",
            description: "Optimizado para sistemas de enfriamiento de alto rendimiento.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$3,600 MXN"
        },
        {
            id: 29,
            name: "Tuberías de acero inoxidable Premium",
            description: "Diseñadas para la industria alimentaria, con estándares superiores.",
            type: "destacado",
            image: "src/img/products/Prueba.webp",
            cost: "$2,800 MXN"
        },
        {
            id: 30,
            name: "Piezas de PEEK Avanzadas",
            description: "Innovación en resistencia química y térmica.",
            type: "nuevo",
            image: "src/img/products/Prueba.webp",
            cost: "$2,300 MXN"
        }
    ];
}

function renderCards(list) {
    let html = '<div class="cards">';
    list.forEach(product => {
        html += `<div class="card">
            <img src="${product.image}" alt="${product.name}" />
            <h4>${product.name}</h4>
            <p>${product.description}</p>`;
        if(product.type === 'oferta'){
            html += `<p><del>${product.oldPrice}</del> <strong>${product.newPrice}</strong></p>`;
        } else {
            html += `<p>Costo: ${product.cost}</p>`;
        }
        html += `<button onclick="openWhatsApp(${product.id})">Consultar WhatsApp</button>`;
        html += `</div>`;
    });
    html += '</div>';
    document.getElementById('productoContent').innerHTML = html;
}

function updateProductContent(filter) {
    const results = window.products.filter(p => p.type === filter);
    renderCards(results);
}

function openWhatsApp(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;
    let message = `Sigue disponible: ${product.name} - ${product.description}`;
    if(product.type === 'oferta'){
        message += ` Precio anterior: ${product.oldPrice}, Precio oferta: ${product.newPrice}`;
    } else if(product.cost) {
        message += ` Costo: ${product.cost}`;
    }
    window.open(`https://wa.me/5211234567890?text=${encodeURIComponent(message)}`, '_blank');
    history.replaceState(null, null, window.location.pathname);
}

function buscarProducto() {
    const query = document.getElementById('productoBusqueda').value.toLowerCase().trim();
    const results = window.products.filter(p => 
        p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
    );
    if(results.length === 0) {
        document.getElementById('productoContent').innerHTML = `<p>No se encontraron productos para "${query}".</p>`;
    } else {
        renderCards(results);
    }
}

function filterButtonClick(e, filter) {
    e.preventDefault();
    const buttons = document.querySelectorAll('#productosNav button');
    buttons.forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
    updateProductContent(filter);
}

renderCards(window.products);

document.getElementById('btnBusqueda').addEventListener('click', buscarProducto);
document.getElementById('productoBusqueda').addEventListener('input', buscarProducto);
