// Archivo de servicio para Aluminio.
console.log('Servicio Aluminio cargado');
// Información adicional asignada a variable:
const serviceInfo = 
`
    <section class="rpt_container_section_second rpt_container_section_second01 rpt_container_section_second_03">
        <nav class="home-services-ifo-01">
            <h2>
                <b>
                    Cobre
                </b>
            </h2>
        </nav>
    </section>
    <section class="rpt_container_section_third rpt_container_section_third_03">
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
                              Debido a su alta conductividad t&eacute;rmica, excelente dureza y resistencia a altas temperaturas, las aleaciones de cobre se utilizan frecuentemente para aplicaciones que requieren alta conductividad el&eacute;ctrica y resistencia mec&aacute;nica superior.
                          </p>
                          <p id="rpt_main_06">
                              Es su fuerza la que hace que esta aleaci&oacute;n sea una gran opci&oacute;n cuando se requiere resistencia al desgaste y a la corrosi&oacute;n, adem&aacute;s de excelentes propiedades para rodamientos.
                          </p>
                      </article>
                      <article class="article_01" id="tabs2" style="display: none;">
                          <p id="rpt_main_07">
                              Cobre Clase II. Cobre Cromo Zirconio (C-18150). Por resistencia, generalmente utilizado en la fabricaci&oacute;n de electrodos para la soldadura, el zirconio permite al electrodo no pegarse al soldar l&aacute;minas galvanizadas.
                          </p>
                          <p id="rpt_main_08">
                              Cobre Clase III. Cobre Berilio (C-17510). Esta clase ofrece una excelente resistencia y dureza, de alta conductividad t&eacute;rmica y el&eacute;ctrica, adem&aacute;s de resistencia a la tensi&oacute;n.
                          </p>
                          <p id="rpt_main_09">
                              Cobre Clase IV. Cobre Berilio (C-172). Cobre de aleaci&oacute;n al 2% de berilio. Ofrece una alta resistencia y dureza comparada con otras aleaciones, caracter&iacute;sticas comparadas con el acero y de propiedades anti-corrosi&oacute;n.
                          </p>
                          <p id="rpt_main_10">
                              Cobre Electrolítico (C-1110). De excelente conductividad el&eacute;ctrica y t&eacute;rmica, es maleable, resistente a la corrosi&oacute;n, antimagn&eacute;tico, antichispa y con propiedades criog&eacute;nicas.
                          </p>
                          <p id="rpt_main_11">
                              Cobre Fosforoso (C-51000). Con una excelente conductividad el&eacute;ctrica y t&eacute;rmica, es maleable, resistente a la corrosi&oacute;n, antimagn&eacute;tico, antichispa y con propiedades criog&eacute;nicas.
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
        </nav>
    </section>
   
`;  


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const articles = document.querySelectorAll('.article_01');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            // Eliminar la clase 'active' de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            // Agregar la clase 'active' a la pestaña clicada
            tab.classList.add('active');
            // Mostrar el contenido correspondiente
            const target = tab.getAttribute('href');
            articles.forEach(article => {
                article.style.display = 'none';
            });
            document.querySelector(target).style.display = 'block';
            // Evitar que la página se desplace al inicio
            history.pushState(null, null, target);
        });
    });

    // Manejar el evento de popstate para evitar el desplazamiento al inicio
    window.addEventListener('popstate', (event) => {
        const activeTab = document.querySelector('.tab-link.active');
        if (activeTab) {
            const target = activeTab.getAttribute('href');
            document.querySelector(target).style.display = 'block';
        }
    });
});

export default serviceInfo;


