function pokemon_with_rails() {
    window.onload = function () {
        Cargando_al_Paginar('div_cargando')
    }
    $(document).on("click", `ul[class="pagination pagination-sm"]`, function () {
        ocultar_y_mostrar_divs('vista', 'div_cargando');
    });


    function ocultar_y_mostrar_divs(table, id_div) {
        document.getElementById(table).setAttribute('style', 'display:none')
        document.getElementById(id_div).setAttribute('style', 'display:block')
    }

    function Cargando_al_Paginar(id) {
        $(`#${id}`).append(`
     <span class="loading-wrap">
      <span class="loading-text" style="text-align: center"><h2 class='saving_pagination'>Recopilando información<span>.</span><span>.</span><span>.</span> </h2></span>
      <span class="animation-wrap"><span class="animation-dot"></span></span>
      </span>
     `)
    }
}

function ocultar_div_y_mostrar_table(table, id_div) {
    document.getElementById(table).setAttribute('style', 'margin-right:10px')
    document.getElementById(id_div).setAttribute('style', 'display:none')
}