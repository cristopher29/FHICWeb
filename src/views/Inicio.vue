<template>
    <div class="container">
        <div class="row my-5 justify-content-center mx-auto">
            <div class="col p-5 text-center">
                <h2>Plataforma para realizar</h2>
                <h2>peticiones y quejas sobre tu ciudad</h2>
                <router-link to="/crear-peticion" class="btn btn-primary btn-lg my-4">Iniciar una petición</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-8">
                <h4 class="mb-4">Peticiones recientes</h4>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://i.imgur.com/SjEGt8D.png">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Falta de limpieza en las calles</h6>
                                <div class="progress progress-striped">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span>40 votos de 100 </span>
                                    </div>
                                </div>
                                <p class="card-text text-justify">
								Últimamente, en la zona de los alrededores donde vivo, hay algunos contenedores que están acumulando residuos debido a que no se está cumpliendo con su horario de recogida.
								Hace falta que el ayuntamiento y la empresa de trata de residuos de la ciudad cumplan con sus obligaciones y retiren las bolsas de basura y residuos varios acumulados y cumplan a partir de ahora para mantener las calles limpias.
								La situación es INSOSTENIBLE!
								</p>
								<a href="#" class="btn btn-primary">Votar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://www.citadines.com/content/dam/tal/media/images/properties/philippines/manila/citadines-bay-city-manila/amenities/citadines-bay-city-manila-350x350.jpg">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Mal uso de las plazas de carga y descarga</h6>
                                <div class="progress progress-striped">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                        <span>20 votos de 100 </span>
                                    </div>
                                </div>
                                <p class="card-text text-justify">
								Cerca de la oficina donde trabajo hay una zona con plazas de parquing reservadas para carga y descarga para los vehículos que abastecen los comercios de la zona.
								Pues desde hará más o menos un mes las plazas reservadas en cuestión se han visto ocupadas por vehículos de particulares por las mañanas de algunos de los trabajadores de las oficinas cercanas, violando así las normas de uso de dichos aparcamientos.
								Pedimos pues que, desde el servicio de policía de tráfico y grúas municipales, vigilen la zona en hora punta para así retirar los vehículos infractores y de este modo no se dificulte el tráfico por los camiones de carga y descarga.
								</p>
								<a href="#" class="btn btn-primary">Votar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://ssl.viaimage.viafrance.com/img/img-350x350/2/9/3/293101_350x350.jpg">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Zona infantil en mal estado</h6>
                                <div class="progress progress-striped">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                        <span>80 votos de 100 </span>
                                    </div>
                                </div>
                                <p class="card-text text-justify">
								El parque donde mi hijo y sus amigos suelen ir a jugar por la tarde está en mal estado.
								La zona de juego infantil suele estar rodeada por una valla. Pues dicha valla, en distintos lugares, tiene los listones de madera rotos y deteriorados, de manera que son peligrosos por su forma punzante y astillas.
								Rogamos a los encargados de parques y jardines que lo solucionen con la mayor brevedad posible.
								</p>
								<a href="#" class="btn btn-primary">Votar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <button class="btn btn-primary my-4">Ver más</button>
                </div>
            </div>
            <div class="col col-md-4">
                <h4 class="mb-4">Temas</h4>
                <div class="button-group-pills text-center" data-toggle="buttons">
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Cultura</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Seguridad</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Transporte público</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Medio ambiente</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Servicios sociales</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Educación</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Mantenimiento</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Ocio</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Servicios funerarios</div>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Inicio",
    }
</script>

<style scoped>

</style>