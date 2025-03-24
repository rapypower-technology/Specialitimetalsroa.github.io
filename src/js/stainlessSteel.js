


// js/mainContentContactanos.js
function createServicestainlessSteel() {
    const section = document.createElement('section');
    section.innerHTML = `
        <section class="rpt_container_section_second rpt_container_section_second01 rpt_container_section_second_05">
            <nav class="home-services-ifo-01">
                <h2>
                    <b>
                        Acero Inoxidable
                    </b>
                </h2>
            </nav>
  
  
            
        </section>
        <section class="rpt_container_section_third rpt_container_section_third_05">
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
                                El acero inoxidable se utiliza en muchas aplicaciones y cada grado se puede utilizar en una amplia gama de funciones. Conocido por su resistencia a la corrosi&oacute;n, los diferentes grados y acabados de acero inoxidable, hacen que sea adecuado para una amplia variedad de ambientes.
                            </p>
                            <p id="rpt_main_06">
                                Independientemente de la aplicaci&oacute;n, hay un grado de acero inoxidable que satisfaga a las caracter&iacute;sticas espec&iacute;ficas de su proyecto.
                            </p>
                        </article>
                        <article class="article_01" id="tabs2" style="display: none;">
                            <p id="rpt_main_07">
                                    303 (UNS S30300) es un acero inoxidable austenítico no magn&eacute;tico para maquinado libre que es una modificaci&oacute;n del acero inoxidable b&aacute;sico de 10% cromo 8% n&iacute;quel dise&ntilde;ado especialmente para una mejor maquinabilidad al tiempo que mantiene sus buenas propiedades mec&aacute;nicas y unaresistencia a la corrosi&oacute;n.
                            </p>
                            <p id="rpt_main_08">
                                    304. (UNS S30400). Es el acero inoxidable m&aacute;s com&uacute;n y ampliamente utilizado. Es un acero inoxidable austen&iacute;tico, con propiedades no magn&eacute;ticas en el estado recocido, que ofrece buena resistencia a la corrosi&oacute;n, tanto a exposiciones qu&iacute;micas como atmosf&eacute;ricas.
                            </p>
                            <p id="rpt_main_09">
                                    310. Es frecuentemente usado en servicios de alta temperatura. Se utiliza para fabricar calentadores de aire, equipo para tratamiento t&eacute;rmico de aceros, equipo qu&iacute;mico de procesos.
                            </p>
                            <p id="rpt_main_10">
                                    316. (UNS S31600). Es un acero inoxidable austen&iacute;tico, de cromo-n&iacute;quel con molibdeno a&ntilde;adido, que proporciona una mayor resistencia a la corrosi&oacute;n y una mayor resistencia a temperaturas elevadas. No es endurecible por tratamiento t&eacute;rmico.
                            </p>
                            <p id="rpt_main_11">
                                    410. (UNS S41000). Es el acero inoxidable martens&iacute;tico b&aacute;sico, de uso general, que se utiliza para las partes altamente tensionadas y proporciona buena resistencia a la corrosi&oacute;n, m&aacute;s alta resistencia y dureza.
                            </p>
                            <p id="rpt_main_12">
                                    430. (UNS S43000). El grado 430 es un grado ferr&iacute;tico, que combina buenas caracter&iacute;sticas de resistencia a la corrosi&oacute;n y maleabilidad, con propiedades mec&aacute;nicas &uacute;tiles. Su capacidad para resistir el ataque de &aacute;cido n&iacute;trico permite su uso en aplicaciones qu&iacute;micas espec&iacute;ficas.
                            </p>
                            <p id="rpt_main_13">
                                    440C. (UNS S44004). Es un acero inoxidable martens&iacute;tico de alta resistencia y alta dureza, que se utiliza en aplicaciones que requieren una resistencia superior a la corrosi&oacute;n y una alta dureza.
                            </p>
                        </article>
                    </section>
                </nav>
                <nav class="rpt_container_info_services">
                    <h5>
                        Acero Inoxidable
                    </h5>
                    <img src="src/img/services/stainlessSteel2.webp" alt="Metales Especiales" class="hero-img-left-table">
                
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