let currentPage = 1;
let totalPages = 1;
const itemsPerPage = 12;

function updatePaginationInfo() {
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages;
}

function home() {
    const padre = document.getElementById('padre');

    if (padre) {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`)
            .then(response => response.json())
            .then(data => {
                if (data.count > 0) {
                    totalPages = Math.ceil(data.count / itemsPerPage);
                    updatePaginationInfo();

                    padre.innerHTML = "";

                    for (let pokemons of data.results) {
                        fetch(pokemons.url)
                            .then(response => response.json())
                            .then(especifico => {
                                let imagen = especifico.sprites.front_default ? especifico.sprites.front_default : "https://img1.freepng.es/20180518/skl/kisspng-price-sentricon-edam-5afeeca3ae54d9.5401031315266561637141.jpg";

                                let tarjeta = `
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="card-img-top" src='${imagen}' alt="img_${pokemons.name}" style="width: 100px; height: 100px; margin: auto; display: block">
                                            <div class="card-body">
                                                <h5 class="card-title" style="text-align: center">${pokemons.name} <span>${especifico.stats[0].base_stat}hp</span></h5>
                                                <p class="card-body-text">Exp ${especifico.base_experience}</p>
                                            </div>
                                            <div class="card-footer">
                                                <div class="card-footer-social">
                                                    <h3>${especifico.stats[1].base_stat}</h3>
                                                    <p><i class="fa fa-rocket" aria-hidden="true"></i> Ataque</p>
                                                </div>
                                                <div class="card-footer-social">
                                                    <h3>${especifico.stats[2].base_stat}</h3>
                                                    <p><i class="fa fa-star" aria-hidden="true"></i> Especial</p>
                                                </div>
                                                <div class="card-footer-social">
                                                    <h3>${especifico.stats[3].base_stat}</h3>
                                                    <p><i class="fa fa-shield" aria-hidden="true"></i> Defensa</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

                                padre.innerHTML += tarjeta;
                            });
                    }
                }
            });
    }
}


window.onload = function () {
    document.getElementById('prevPage')?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            home();
        }
    });

    document.getElementById('nextPage')?.addEventListener('click', () => {
        currentPage++;
        home();
    });

    home();
}
