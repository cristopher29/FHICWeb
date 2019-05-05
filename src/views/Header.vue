<template>
  <div class="bg-top d-flex justify-content-center flex-column">
    <div class="container">
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark pt-4 px-0">
        <a class="navbar-brand mr-5" href="#">
          App
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarNavDropdown" style="">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/crear-peticion">Crear petición</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mis peticiones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mi perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Configuración</a>
            </li>
          </ul>

          <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search"  aria-label="City" id="city">
            <input class="btn btn-success my-2 my-sm-0" type="submit" value="Buscar" >
          </div>
          <span class="mx-3 my-0"><h6 class="my-0 text-white">Alberto. A</h6></span>
          <div class="d-flex h-100 my-0">

            <div class="image_outer_container">
              <div class="green_icon"></div>
              <div class="image_inner_container">
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png">
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- / Navigation -->
    </div> <!-- .container -->

    <!-- Inner Wrapper -->
    <div class="inner-wrapper mt-auto mb-auto container">
      <div class="row justify-content-center text-center">
        <div class="col">
          <h2 class="text-white">
            App
          </h2>
        </div>
      </div>
    </div>
    <!-- / Inner Wrapper -->
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style scoped>

</style>