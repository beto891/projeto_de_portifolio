<template>
    <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold text-info" href="#">
                    <i class="fas fa-code"></i>
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item" v-for="link in menuLinks" :key="link.text">
                            <a class="nav-link" :href="link.url">{{ link.text }}</a>
                        </li>
                        
                        <li class="nav-item">
                            <button @click="toggleTheme" class="btn btn-outline-info ms-lg-3 rounded-circle shadow-sm">
                                <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  

       <header id="hero" class="text-center py-5 d-flex align-items-center" style="min-height: 100vh;">
            
           <img src="/img/background-img.png" class="overlay-img rellax " >


            <div id="three-canvas-container" class="position-absolute w-100 h-100 rellax" data-rellax-speed="2" style="z-index: 1; pointer-events: none;"></div>

            <div class="container position-relative rellax" data-rellax-speed="4" style="z-index: 2;">
                <h1 class="display-4 fw-bold text-white">{{ user.role }}</h1>
                <p class="lead text-light opacity-75">{{ user.bio }}</p>
                <div class="mt-4">
                    <a href="#contato" class="btn btn-primary btn-lg px-4 shadow-lg">Fale Comigo</a>
                </div>
            </div>
        </header>

</template>

<script>
export default {
  name: 'AppNavbar',
  // IMPORTANTE: Declarar as props que o componente vai usar
  props: {
    user: {
      type: Object,
      required: true // Se não vier, o Vue avisa no console
    },
    menuLinks: {
      type: Array,
      default: () => []
    },
    isDarkMode: Boolean
  }
}
</script>