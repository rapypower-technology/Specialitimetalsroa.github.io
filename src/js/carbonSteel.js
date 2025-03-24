


// js/mainContentContactanos.js
function createServicecarbonSteel() {
    const section = document.createElement('section');
    section.innerHTML = `
        <section class="rpt_container_section_second rpt_container_section_second02 rpt_container_section_second_06">
            <nav class="home-services-ifo-02">
                <h2>
                    <b>
                        Acero al Carb&oacute;n
                    </b>
                </h2>
            </nav>
  
  
            
        </section>
        <section class="rpt_container_section_third rpt_container_section_third_06">
            <nav class="rpt_container_services">
                <nav class="rpt_table_with_tabs_primary">
                    <ul class="tabs_01">
                        <li>
                            <a href="#tabs1" class="tab-link active">
                                <i class="fa fa-star"></i>&nbsp;
                                <span class="tab-text" id="rpt_main_03">
                                    Caracter&iacute;sticas
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#tabs2" class="tab-link">
                                <i class="fa-solid fa-screwdriver-wrench"></i>&nbsp;
                                <span class="tab-text" id="rpt_main_04">
                                    Aleaciones
                                </span>
                            </a>
                        </li>
                    </ul>
                    <section class="rpt_sections_table_with_tabs_primary">
                        <article class="article_01" id="tabs1">
                            <p id="rpt_main_05">
                                    El acero al carb&oacute;n es una aleaci&oacute;n que consiste en hierro y carbono. Se permiten varios otros elementos, con porcentajes m&aacute;ximos bajos.
                            </p>
                            <p id="rpt_main_06">
                                    Hay cuatro tipos de acero al carb&oacute;n basados en la cantidad de carbono presente en la aleaci&aacute;n. Los aceros con bajo contenido de carbono son m&aacute;s suaves y se forman m&aacute;s f&aacute;cilmente, y los aceros con un mayor contenido de carbono son m&aacute;s duros y m&aacute;s fuertes, pero menos d&uacute;ctiles, y se vuelven m&aacute;s dif&iacute;ciles de mecanizar y soldar.
                            </p>
                        </article>
                        <article class="article_01" id="tabs2" style="display: none;">
                            <p id="rpt_main_07">
                                    AISI 1018, AISI 1020, AISI 1045, AISI 1010,ANSI 1022, AISI 1215, AISI 1144, AISI 4140 Tratado, AISI 4140 Recocido, AISI 8620, AISI 12L14, AISI 9840. Grado Herramienta: A-2, D-2, H-13, O-1, S-1, S-7, M-2,SW55.
                            </p>
                            <p id="rpt_main_08">
                                    Presentaciones: Barra redonda, barra cuadrada, barra hexagonal y barra hueca (buje), solera, &aacute;ngulo, PTR, rejilla Irving. Tubo de c&eacute;dula y bridas.
                            </p>
                            <p id="rpt_main_09">
                                    Placas (Planch&oacute;n): A-36, A-515, A-516, A-572. HARDOX® 400, 450, 500, 550, 600.
                            </p>
                            <p id="rpt_main_10">
                                    Presentaciones: Placa y rollo.
                            </p>
                        </article>
                    </section>
                </nav>
                <nav class="rpt_container_info_services">
                    <h5>
                        Acero al Carb&oacute;n
                    </h5>
                    <img src="src/img/services/carbonSteel2.webp" alt="Metales Especiales" class="hero-img-left-table">
                
                </nav>
            </nav>
        </section>
       
    `;
  
    // Agregar funcionalidad para las pestañas
    const tabs = section.querySelectorAll('.tabs_01 li a');
    const articles = section.querySelectorAll('.rpt_sections_table_with_tabs_primary article');
  
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace
  
            // Remover la clase 'active' de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            // Ocultar todos los artículos
            articles.forEach(article => article.style.display = 'none');
  
            // Agregar la clase 'active' a la pestaña seleccionada
            this.classList.add('active');
            // Mostrar el artículo correspondiente
            const targetId = this.getAttribute('href');
            const targetArticle = section.querySelector(targetId);
            targetArticle.style.display = 'block';
        });
    });
  
    
  
    return section;
  }
  
  // Expose the function to the global scope
  window.createServicebronze = createServicebronze;