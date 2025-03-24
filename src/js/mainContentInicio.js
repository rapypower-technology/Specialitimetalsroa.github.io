window.addEventListener("scroll", function () {
    const leftImage = document.querySelector(".hero-img-left");
    const rightImage = document.querySelector(".hero-img-right");
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 200) {
        leftImage.style.transform = "translateX(-100%)"; // Se desliza hacia la izquierda
        leftImage.style.opacity = "0"; // Se desvanece
        
        rightImage.style.transform = "translateX(100%)"; // Se desliza hacia la derecha
        rightImage.style.opacity = "0"; // Se desvanece
    } else {
        leftImage.style.transform = "translateX(0)"; // Regresa desde la izquierda
        leftImage.style.opacity = "0.5"; // Se muestra con transparencia
        
        rightImage.style.transform = "translateX(0)"; // Regresa desde la derecha
        rightImage.style.opacity = "0.5"; // Se muestra con transparencia
    }
  });
  

// js/mainContentInicio.js
function createMainContentInicio() {
    const section = document.createElement('inicio');
    section.innerHTML = `
    
        <section id="inicio" class="hero">
            <h1>
            Materiales de Alta Calidad para la Industria
            </h1>
            <p class="hero-subtitle">
            Ofrecemos una amplia gama de metales especiales, incluyendo acero, hierro y aleaciones de alto rendimiento, cuidadosamente seleccionados para garantizar calidad, resistencia y durabilidad
            </p>
            <img src="src/img/index/Acero-inoxidable.webp" alt="Metales Especiales" class="hero-img-left">
            <img src="src/img/index/Brass2.webp" alt="Metales Especiales" class="hero-img-right">
                
             <div class="hero-content">
                <div class="service-grid">
                    <div class="service-card">
                        <img src="src/img/cards/Bronze3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Bronce</h2>
                        <p>El bronce está disponible en un amplio rango de aleaciones para distintos propósitos, desde rodamientos hasta para aplicaciones marítimas.</p>
                    </div>
                    <div class="service-card">
                        <img src="src/img/cards/Brass3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Latón</h2>
                        <p>El latón es ampliamente utilizado y menos costoso. Posee una resistencia a la corrosión relativamente buena.</p>
                    </div>
                    <div class="service-card">
                        <img src="src/img/cards/Copper3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Cobre</h2>
                        <p>Debido a su alta conductividad térmica, excelente dureza y resistencia a altas temperaturas, las aleaciones de cobre se utilizan frecuentemente para aplicaciones que requieren alta conductividad eléctrica y resistencia mecánica superior.</p>
                    </div>
                    <div class="service-card">
                        <img src="src/img/cards/aluminum3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Aluminio</h2>
                        <p>El aluminio es comúnmente utilizado debido a su versatilidad, ideal para casi cualquier aplicación. Debido a su resistencia a la corrosión, fuerza impresionante, y ligereza inimaginable en peso, el aluminio tiende a ser una aleación muy atractiva.</p>
                    </div>
                    <div class="service-card">
                        <img src="src/img/cards/Stainless-steel3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Acero Inoxidable</h2>
                        <p>El acero inoxidable se utiliza en muchas aplicaciones y cada grado se puede utilizar en una amplia gama de funciones. Conocido por su resistencia a la corrosión, los diferentes grados y acabados de acero inoxidable, hacen que sea adecuado para una amplia variedad de ambientes.</p>
                    </div>
                      <div class="service-card">
                        <img src="src/img/cards/Stainless-steel3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Plásticos de Ingeniería</h2>
                        <p>Los plásticos de ingeniería y comerciales, tienen gran aceptación para el reemplazo de muchas de las piezas en la maquinaria de todas las industrias.</p>
                    </div>
                    <div class="service-card">
                        <img src="src/img/cards/engineering_plastics3.webp" alt="Metales Especiales" class="material-icons">
                        <h2>Acero al carbón</h2>
                        <p>El acero al carbono representa el 90% de la producción total de acero, mientras que el acero aleado abarca el 10%. Se define como una aleación de hierro y carbono, con la adición de otros elementos como manganeso. Su proporción de carbono y tratamiento térmico determinan sus propiedades, otorgándole alta resistencia y maleabilidad, lo que lo hace ideal para diversas aplicaciones industriales..</p>
                    </div>
                  
                   
                </div>
            </div>
        </section>

    `;
    return section;
  }
  
  // Exponer la función al ámbito global
  window.createMainContentInicio = createMainContentInicio;
  