<template>
    <div class="container">
        <div class="row my-5 justify-content-center mx-auto">
            <div class="col p-5 text-center">
                <h2>Plataforma para realizar</h2>
                <h2>peticiones y quejas sobre tu ciudad</h2>
                <router-link to="/crear-peticion" class="btn btn-primary my-4">Iniciar una petición</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-8">
                <h4 class="mb-4">Peticiones recientes</h4>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://via.placeholder.com/350x350">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Card Title</h6>
                                <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="https://www.google.com" class="btn btn-primary">read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://via.placeholder.com/350x350">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Card Title</h6>
                                <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="https://www.google.com" class="btn btn-primary">read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-12 p-3 my-4">
                    <div class="row ">
                        <div class="col-md-4">
                            <img class="w-100" src="https://via.placeholder.com/350x350">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block">
                                <h6 class="card-title">Card Title</h6>
                                <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="https://www.google.com" class="btn btn-primary">read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-4">
                <h4 class="mb-4">Temas</h4>
                <div>
                    <button class="btn btn-primary m-2">Cultura</button> <button class="btn btn-primary m-2">Transporte público</button> <button class="btn btn-primary m-2">Medio ambiente</button>
                    <button class="btn btn-primary m-2">Sanidad</button> <button class="btn btn-primary m-2">Servicios sociales</button> <button class="btn btn-primary m-2">Educación</button>
                    <button class="btn btn-primary m-2">Seguridad</button> <button class="btn btn-primary m-2">Mantenimiento</button> <button class="btn btn-primary m-2">Ocio</button>
                    <button class="btn btn-primary m-2">Servicios funerarios</button>
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