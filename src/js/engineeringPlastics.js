


// js/mainContentContactanos.js
function createServiceengineeringPlastics() {
    const section = document.createElement('section');
    section.innerHTML = `
        <section class="rpt_container_section_second rpt_container_section_second_07">
            <nav class="home-services-ifo">
                <h2>
                    <b>
                        Pl&aacute;sticos de Ingenier&iacute;a
                    </b>
                </h2>
            </nav>
  
  
            
        </section>
        <section class="rpt_container_section_third rpt_container_section_third_07">
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
                                    Los pl&aacute;sticos de ingenier&iacute;a y comerciales, tienen gran aceptaci&oacute;n para el reemplazo de muchas de las piezas en la maquinaria de todas las industrias. Esto principalmente se debe a las caracter&iacute;sticas especificas de cada uno, as&iacute; como el bajo costo en comparaci&oacute;n con metales tanto suaves (bronce, aluminio, lat&oacute;n, etcétera) como a los aceros al carb&oacute;n.
                            </p>
                            <p id="rpt_main_06">
                                    Algunas caracter&iacute;sticas naturales, en algunos pl&aacute;sticos de ingenier&iacute;a, se pueden mejorar a&ntilde;adi&eacute;ndoles componentes a la formulaci&oacute;n.
                            </p>
                        </article>
                        <article class="article_01" id="tabs2" style="display: none;">
                            <p id="rpt_main_07">
                                    Nylamid. Resistente al impacto; absorbe cargas que pueden llegar a fracturar los dientes de un engrane met&aacute;lico. Autolubricante. Reduce el ruido, es de bajo peso y seguro, pues no produce chispas. Tipos M, XL, 901, SL y Nylatron.
                            </p>
                            <p id="rpt_main_08">
                                    Acrilico. Es un material pl&aacute;stico, altamente flexible, capaz de soportar largo periodos de tiempo a la intemperie, es inherente a casi la totalidad de productos alimenticios. Puede f&aacute;cilmente adquirir formas por diversos m&eacute;todos, donde podemos mencionar doblados, termoformados, tridimensionales.Su transparencia es similar al cristal de cuarzo con &iacute;ndice de luz de 92%, el m&aacute;s alto entre otros materiales sint&eacute;ticos, y con calidad superior al vidrio con un &iacute;ndice de luz de 84%. Y pesa la mitad del vidrio.
                            </p>
                            <p id="rpt_main_09">
                                    Polietileno. (UHMW-PE). El polietileno de ultra alto peso molecular tiene una alta resistencia al desgaste, con bajo coeficiente de fricci&oacute;n. En deslizamientos contra metales, tiene propiedades autolubricantes, generando mecanismos silenciosos.
                            </p>
                            <p id="rpt_main_10">
                                    Polietileno (UHMW-PE). Posee una excelente resistencia a los qu&iacute;micos corrosivos. No absorbe humedad y tiene una alta resistencia al impacto. Termoformable, termodoblable, soldable y atornillable. Autorizado por la FDA / USDA / TIF, para el contacto con alimentos.
                            </p>
                            <p id="rpt_main_11">
                                    Acetal.Es un material pl&aacute;stico t&eacute;cnico de alta resistencia mec&aacute;nica y rigidez; utilizado para la producci&oacute;n de distintas piezas industriales, en especial para aquellos que deben operar en ambientes h&uacute;medos. Tambi&eacute;n se le conoce como poliacetal, poliformaldeh&iacute;do y qu&iacute;micamente como polioximetileno (POM).
                            </p>
                            <p id="rpt_main_12">
                                    Peek.Termopl&aacute;stico semi-cristalino. Material de prop&oacute;sito general, no reforzado y ofrece la m&aacute;s alta elongaci&oacute;n y tenacidad entre todos los tipos de su familia. Tiene la mayor resistencia a la Temperatura y una estabilidad dimensional incomparable.
                            </p>
                            <p id="rpt_main_13">
                                    440C. (UNS S44004). Es un acero inoxidable martens&iacute;tico de alta resistencia y alta dureza, que se utiliza en aplicaciones que requieren una resistencia superior a la corrosi&oacute;n y una alta dureza.
                            </p>
                        </article>
                    </section>
                </nav>
                <nav class="rpt_container_info_services">
                    <h5>
                        Pl&aacute;sticos de Ingenier&iacute;a
                    </h5>
                    <img src="src/img/services/engineeringPlastics2.webp" alt="Metales Especiales" class="hero-img-left-table">
                
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