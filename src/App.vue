<template>

    <fundo3-d/>

    <AppNavbar 
      :user="user" 
      :menuLinks="menuLinks" 
      :isDarkMode="isDarkMode" 
      @toggle-theme="toggleTheme" 
    />
    
        <Sobre/>

        <Projetos :projetos="projetos"/>

        <AppStack :techStack="techStack"/>
        
        <contato/>

        <AppFooter/>

        <!-- Popup do WhatsApp  -->
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
import Fundo3D from './components/Fundo3D.vue';
import AppStack from './components/AppStack.vue'; 
//

export default {
    //  lógica do app.js - onde estão os dados e métodos principais do app
    ...appLogic, 

    // 2. Registramos os componentes manualmente para garantir
    components: {
        ...(appLogic.components || {}),
        AppNavbar, Sobre, Projetos, Contato, Fundo3D, AppStack, AppFooter
    }
}
</script>

<style>
    @import './assets/css/style.css';
    @import './assets/css/animated_card.css';
    @import './assets/css/whatsapp.css'; 
    @import './assets/css/footer.css';
    @import './assets/css/button_mode.css';
    @import './assets/css/contato.css';
</style>