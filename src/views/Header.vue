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
          </ul>

          <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="City" aria-label="City" id="city">
            <input class="btn btn-success my-2 my-sm-0" type="submit" value="Search" >
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