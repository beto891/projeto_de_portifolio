<template>
  <section id="contato" class="py-5  position-relative d-flex align-items-center" style="min-height: 100vh;">
    <img src="/img/background-img4.png"
         class="img-bg rellax" 
         data-rellax-speed="-3" 
         data-rellax-percentage="0.5">

    <div class="overlay-dark"></div>

    <div class="container content-wrapper">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center glass-card p-5 rellax" data-rellax-speed="1">
          <h1 class="display-3 text-white mb-4 fw-bold text-gradient">
            Vamos criar algo incrível?
          </h1>
          <p class="lead text-white-50 mb-5">
            Entre em contato comigo e vamos transformar <span class="text-info fw-bold">ideias</span> em <span class="text-info fw-bold">realidade digital</span>.
          </p>
          
          <div class="d-flex justify-content-center gap-3">
             <a href="#contato" class="btn btn-info btn-lg px-4 shadow">Mande um Alô</a>
             <a href="#" class="btn btn-outline-light btn-lg px-4">Ver Currículo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

    export default {
    name: 'Contato',
    }
</script>