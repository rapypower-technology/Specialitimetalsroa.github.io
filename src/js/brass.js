


// js/mainContentContactanos.js
function createServiceBrass() {
    const section = document.createElement('section');
    section.innerHTML = `
    <section class="rpt_container_section_second rpt_container_section_second02 rpt_container_section_second_02">
        <nav class="home-services-ifo-02">
            <h2>
                <b>
                    Latón
                </b>
            </h2>
        </nav>
    </section>
    <section class="rpt_container_section_third rpt_container_section_third_02">
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
                                    El lat&oacute;n es ampliamente utilizado y menos costoso. Posee una resistencia a la corrosi&oacute;n relativamente buena y, en algunas composiciones, una ductilidad excepcionalmente buena, adem&aacute;s de excelentes caracter&iacute;sticas de maquinabilidad y moldeo.
                        </p>
                        <p id="rpt_main_06">
                                    El alto contenido de plomo resulta en una ductilidad y plasticidad relativamente bajas.
                        </p>
                    </article>
                    <article class="article_01" id="tabs2" style="display: none;">
                        <p id="rpt_main_07">
                                    C26000. Compuesto de Cobre y Zinc, semiduro. Aplicado generalmente para joyer&iacute;a, componentes el&eacute;ctricos y conexiones. Buena resistencia al agua neutra o alcalina. Es el más d&uacute;ctil de los latones. Tiene una resistencia a la corrosi&oacute;n excelente en la mayor&iacute;a de los ambientes, pero no es adecuada para ciertas sustancias, tales como &aacute;cido ac&eacute;tico, amon&iacute;aco h&uacute;medo o compuestos de amon&iacute;aco, &aacute;cido clorh&iacute;drico y &aacute;cido n&iacute;trico.
                        </p>
                        <p id="rpt_main_08">
                                    C36000. Cobre, Zinc y Plomo. Buena resistencia a la corrosi&oacute;n. Muy apropiado para las operaciones de maquinado de alta velocidad, rolado de cuerdas y de moleteado. Es est&aacute;ndar en comparaci&oacute;n con el resto de las aleaciones de cobre. Se suelda convencionalmente. Tiene un contenido de plomo de entre 2,5% y 3,7%, lo que permite que sea mecanizado libre o de corte libre.
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
            <nav class="rpt_container_info_services ">
                <h5>
                    Latón
                </h5>
                <img src="src/img/services/brass2.webp" alt="Metales Especiales" class="hero-img-left-table">
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
  window.createServiceBrass = createServiceBrass;
  