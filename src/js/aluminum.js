// js/mainContentContactanos.js
function createServiceAluminum() {
    const section = document.createElement('section');
    section.innerHTML = `
    <section class="rpt_container_section_second rpt_container_section_second02 rpt_container_section_second_04">
        <nav class="home-services-ifo-02">
            <h2>
                <b>
                    Aluminio
                </b>
            </h2>
        </nav>


        
    </section>
    <section class="rpt_container_section_third rpt_container_section_third_04">
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
                            El aluminio es com&uacute;nmente utilizado debido a su versatilidad, ideal para casi cualquier aplicaci&oacute;n. Debido a su resistencia a la corrosi&oacute;n, fuerza impresionante, y ligereza inimaginable en peso, el aluminio tiende a ser una aleaci&oacute;n muy atractiva.
                        </p>
                        <p id="rpt_main_06">
                            Uno de los rasgos m&aacute;s importantes es su capacidad para ser fabricado y mecanizado f&aacute;cilmente, as&iacute; como su naturaleza no t&oacute;xica y su alta conductividad t&eacute;rmica. Es ampliamente utilizado en toda la industria alimenticia.
                        </p>
                    </article>
                    <article class="article_01" id="tabs2" style="display: none;">
                        <p id="rpt_main_07">
                          Aluminio 6061. Buena resistencia a la corrosi&oacute;n, suelda satisfactoriamente.
                        </p>
                        <p id="rpt_main_08">
                          Aluminio 7075. Superior estabilidad, resistencia a la corrosi&oacute;n y al desgaste.
                        </p>
                        <p id="rpt_main_09">
                          Alumec 89. Es una aleaci&oacute;n de aluminio de alta resistencia recomendada para moldes de soplado, prototipos y series de fabricaci&oacute;n cortas, con bajas demandas de resistencia y resistencia al desgaste. Tambi&eacute;n es apta para muchas aplicaciones de ingenier&iacute;a.
                        </p>
                        <p id="rpt_main_10">
                          Aleaci&oacute;n 2024: es una de las aleaciones de aluminio de alta resistencia m&aacute;s utilizadas, hace tiempo conocida como duraluminio.
                        </p>
                       
                        
                        <p>
                            <span id="rpt_main_15">
                                ¿Buscas alguna aleaci&oacute;n distinta? Escr&iacute;benos al correo  
                            </span>
                            <strong>
                                ventas@metalesespecialesmexico.com.mx
                            </strong>
                        </p>
                    </article>
                </section>
            </nav>
            <nav class="rpt_container_info_services">
                <h5>
                    Aluminio
                </h5>
                <img src="src/img/services/aluminum2.webp" alt="Metales Especiales" class="hero-img-left-table">
            
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
  
  // Exponer la función al ámbito global
  window.createServiceAluminum = createServiceAluminum;
  