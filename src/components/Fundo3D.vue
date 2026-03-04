<template>
  <div ref="container3d" class="canvas-container"></div>
</template>

<script>
import { initModelScene } from '../utils/loader3d.js';

export default {
  name: 'Fundo3D',
  data() {
    return {
      manager: null
    };
  },
  mounted() {
    // Se o seu arquivo está em public/models/nave.glb, o caminho é '/models/nave.glb'
    this.manager = initModelScene(this.$refs.container3d, '/robot_playground.glb');
  },
  beforeUnmount() {
    if (this.manager) {
      this.manager.destroy();
    }
  }
}
</script>

<style>
/* No seu Fundo3D.vue */
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* 1. O segredo: valor de z-index superior ao da Navbar (geralmente > 1000) */
  z-index: 9999; 
  
  /* 2. CRUCIAL: permite que o clique "atravesse" o 3D e chegue nos botões/links */
  pointer-events: none; 
  
  /* 3. Garante que o fundo do canvas não cubra o site com uma cor sólida */
  background: transparent !important;
}
</style>