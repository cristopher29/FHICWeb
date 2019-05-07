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
                            <img class="w-100" src="https://i.travelapi.com/hotels/2000000/1460000/1452100/1452074/925e404d_b.jpg">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Card Title</h6>
                                <div class="progress progress-striped">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span>40 votos de 100 </span>
                                    </div>
                                </div>
                                <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                <h6 class="card-title">Card Title</h6>
                                <div class="progress progress-striped">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span>40 votos de 100 </span>
                                    </div>
                                </div>
                                <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="#" class="btn btn-primary">Votar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://media.grenoble-tourisme.com/filer_public_thumbnails/filer_public/5b/73/5b735f80-ae5b-44c5-93a5-99e0cf36b584/grenoble_patrimoine__pierre_jayet-3.jpg__350x350_q90_crop_subject_location-2007%2C1469_subsampling-2_upscale.jpg">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Card Title</h6>
                                <div class="progress progress-striped">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span>40 votos de 100 </span>
                                    </div>
                                </div>
                                <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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