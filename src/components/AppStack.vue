<template>
  <section id="stack" class="py-5 position-relative overflow-hidden">
    <div class="position-absolute text-info opacity-10 rellax" data-rellax-speed="-1" style="top: 5%; left: 10%; font-size: 8rem;">
      <i class="fas fa-code"></i>
    </div>

    <div class="container position-relative" style="z-index: 2;">
      <h2 class="text-center mb-5 fw-bold text-white">Stack tecnológica</h2>
      
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          '768': { slidesPerView: 2 },
          '1024': { slidesPerView: 3 }
        }"
        class="pb-5"
      >
        <swiper-slide v-for="item in techStack" :key="item.titulo">
          <div class="card h-100 p-4 bg-body-tertiary border-secondary border-opacity-25 card-hover shadow-lg mx-2">
            <div class="text-info mb-3 fs-1"><i :class="item.icone"></i></div>
            <h4 class="fw-bold">{{ item.titulo }}</h4>
            <p class="text-secondary small">{{ item.descricao }}</p>
            <div class="d-flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in item.tags" :key="tag" class="badge bg-dark border border-secondary">
                {{ tag }}
              </span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  // techStack deve estar aqui ou vindo do seu app.js
    props: {
        techStack: {
        type: Array,
        required: true,
        },
    },
};
</script>

<style>
/* Ajuste para as bolinhas da paginação aparecerem bem no fundo escuro */
.swiper-pagination-bullet {
  background: #0dcaf0 !important; 
}
.swiper-slide {
  height: auto; /* Garante que os cards tenham a mesma altura */
}
</style>

