import Rellax from 'rellax';

export default {
  data() {
    return {
      isDarkMode: true,
      showWhatsappAlert: false,
      parallaxInstance: null, // Armazena a instância para poder destruir depois
      user: {
        role: 'Desenvolvedor Full-Stack',
        bio: 'Especialista em ecossistema Python e Vue.js focado em performance.'
      },
      menuLinks: [
        { text: 'Sobre', url: '#sobre' },
        { text: 'Projetos', url: '#projetos' },
        { text: 'Contato', url: '#contato' }
      ],
      projetos: [],
      projetosData: [
        {
          id: 1,
          titulo: 'OOH Campaign Manager',
          descricao: 'Dashboard para controle de anúncios externos com métricas em tempo real.',
          imagem: '/img/ooh.png',
          techs: ['Python', 'FastAPI', 'Vue.js']
        },
        {
          id: 2,
          titulo: 'Task Kanban',
          descricao: 'Aplicação de produtividade com colunas arrastáveis.',
          imagem: '/img/kanban.png',
          techs: ['Flask', 'JavaScript', 'Bootstrap']
        }
      ],
      techStack: [ // Adicionei para evitar erros de renderização no v-for do stack
        { icone: 'fab fa-python', titulo: 'Backend', descricao: 'Python & FastAPI', tags: ['Python', 'SQL', 'FastAPI'], velocidade: "2" },
        { icone: 'fab fa-vuejs', titulo: 'Frontend', descricao: 'Vue.js & Vite', tags: ['Vue 3', 'JS', 'Bootstrap'], velocidade: "3" }
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
    },
    fecharWhatsapp() {
      this.showWhatsappAlert = false;
      localStorage.setItem('whatsapp-hide-until', Date.now() + 900000);
    },
    initParallax() {
      // Usamos a variável importada Rellax e não window.Rellax
      if (document.querySelector('.rellax')) {
        this.parallaxInstance = new Rellax('.rellax', { 
          center: true,
          breakpoints: [576, 768, 1201] 
        });
      }
    }
  },
  mounted() {
    // 1. Inicialização de Tema
    const savedTheme = localStorage.getItem('portfolio-theme');
    this.isDarkMode = savedTheme ? savedTheme === 'dark' : true;
    document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');

    // 2. Carregamento de Projetos e Parallax
    // O timeout garante que o DOM do v-for esteja pronto
    setTimeout(() => { 
      this.projetos = this.projetosData; 
      this.$nextTick(() => {
        this.initParallax();
      });
    }, 300);

    // 3. Lógica do WhatsApp (ADS tip: encapsular lógica temporal)
    const gerenciarAlerta = () => {
      const esconderAte = localStorage.getItem('whatsapp-hide-until');
      if (esconderAte && Date.now() < parseInt(esconderAte, 10)) return;
      
      this.showWhatsappAlert = true;
      // Auto-hide após 20s
      setTimeout(() => { this.showWhatsappAlert = false; }, 20000);
    };
    setTimeout(gerenciarAlerta, 5000);
  },
  beforeUnmount() {
    // Boa prática: destrói o parallax ao sair da página para poupar CPU
    if (this.parallaxInstance) {
      this.parallaxInstance.destroy();
    }
  }
}