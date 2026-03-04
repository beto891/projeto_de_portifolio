<template>
  
    <AppNavbar 
      :user="user" 
      :menuLinks="menuLinks" 
      :isDarkMode="isDarkMode" 
      @toggle-theme="toggleTheme" 
    />
    
       <Sobre/>

      <Projetos :projetos="projetos"/>

        <section id="stack" class="py-5 position-relative overflow-hidden">
            <div class="position-absolute text-info opacity-10 rellax" data-rellax-speed="-1" style="top: 5%; left: 10%; font-size: 8rem;">
                <i class="fas fa-code"></i>
            </div>

            <div class="container position-relative" style="z-index: 2;">
                <h2 class="text-center mb-5 fw-bold text-white">Stack tecnológica</h2>
                
                <div class="row g-4 justify-content-center">
                    <div v-for="item in techStack" :key="item.titulo" class="col-md-4 rellax" :data-rellax-speed="item.velocidade">
                        <div class="card h-100 p-4 bg-body-tertiary border-secondary border-opacity-25 card-hover shadow-lg">
                            <div class="text-info mb-3 fs-1"><i :class="item.icone"></i></div>
                            <h4 class="fw-bold">{{ item.titulo }}</h4>
                            <p class="text-secondary small">{{ item.descricao }}</p>
                            <div class="d-flex flex-wrap gap-2 mt-auto">
                                <span v-for="tag in item.tags" :key="tag" class="badge bg-dark border border-secondary">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <contato/>

        <AppFooter/>

             <div v-if="showWhatsappAlert" class="custom-whatsapp-popup">
                <div class="popup-content">
                    <a href="https://wa.me/5511965743272" target="_blank" class="popup-link">
                        <div class="popup-icon">
                            <i class="fab fa-whatsapp"></i>
                            <span class="online-indicator"></span>
                        </div>
                        <div class="popup-text">
                            <span class="popup-name">Ediberto Santana</span>
                            <span class="popup-msg">Olá! Como posso ajudar hoje?</span>
                        </div>
                    </a>
                    <button @click="showWhatsappAlert = false" class="popup-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
</template>

<script>

// @ts-ignore
import appLogic from './app.js';
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';
import Sobre from './components/Sobre.vue';
import Projetos from './components/Projetos.vue';
import Contato from './components/Contato.vue';
//

export default {
    // 1. Espalhamos a lógica do app.js primeiro
    ...appLogic, 

    // 2. Registramos os componentes manualmente para garantir
    components: {
        // Se o appLogic já tiver componentes, mantemos eles e adicionamos o Footer
        ...(appLogic.components || {}),
        AppNavbar, Sobre, Projetos, Contato, AppFooter
    }
}
</script>

<style>
@import './assets/css/style.css';
@import './assets/css/animated_card.css';
@import './assets/css/whatsapp.css'; 
@import './assets/css/footer.css';
@import './assets/css/button_mode.css';
</style>