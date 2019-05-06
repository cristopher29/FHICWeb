<template>
  <div>
    <div class="justify-content-center flex-column bg-yellow">
      <div class="container">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-5">
            <ul class="navbar-nav mr-auto">
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item my-auto">
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" aria-label="Search">
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                </form>
              </li>
              <li class="nav-item my-auto ml-3">
                <div class="d-flex">
                  <span class="my-auto"><h6 class="my-0 text-white">Alberto. A</h6></span>
                  <div class="d-flex h-100 my-0 ml-3">
                    <div class="image_outer_container">
                      <div class="green_icon"></div>
                      <div class="image_inner_container">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png">
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <!-- / Navigation -->
      </div> <!-- .container -->
    </div>
    <div class="d-flex justify-content-center flex-column bg-dark">
      <div class="container">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark px-0">
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarNavDropdown2" style="">

            <ul class="navbar-nav w-100 justify-content-center">
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

          </div>
        </nav>
        <!-- / Navigation -->
      </div> <!-- .container -->
    </div>

  </div>

</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style scoped>

</style>