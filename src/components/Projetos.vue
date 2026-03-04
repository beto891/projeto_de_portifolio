<template>
    <section id="projetos" class="py-5">
            <img src="/img/background-img3.png" alt="Nebulosa" 
           class="img-bg rellax position-absolute w-100 h-100" data-rellax-speed="-3" data-rellax-percentage="0.5" style="object-fit: cover; z-index: 0; ">

            <div class="container">
                <h1 class="text-center mb-5 fw-bold">Projetos em Destaques</h1>
                
                <transition-group name="list" tag="div" class="row g-4">
                    <div class="col-12 col-md-6 col-lg-4" v-for="projeto in projetos" :key="projeto.id">
                        <div class="card h-100 shadow-sm border-0 card-hover">
                            <img :src="projeto.imagem" class="card-img-top" :alt="projeto.titulo">
                            
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title fw-bold">{{ projeto.titulo }}</h5>
                                <p class="card-text text-secondary flex-grow-1">
                                    {{ projeto.descricao }}
                                </p>
                                
                                <div class="mt-3">
                                    <span v-for="tech in projeto.techs" :key="tech"
                                          class="badge rounded-pill bg-info text-dark me-1">
                                        {{ tech }}
                                    </span>
                                </div>
                                
                                <a href="#" class="btn btn-outline-primary btn-sm mt-3">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
        </section>
</template>

<script>
    export default {
  name: 'AppProjetos',
  // ESSA PARTE É O QUE FAZ OS CARDS APARECEREM:
  props: {
    projetos: {
      type: Array,
      required: true
    }
  }
}
</script>