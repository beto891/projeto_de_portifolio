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
      techStack: [
        { icone: 'fab fa-html5', titulo: 'Frontend', descricao: 'Estruturação Web', tags: ['HTML5', 'Semantic UI'], velocidade: "1" },
        { icone: 'fab fa-css3-alt', titulo: 'Styling', descricao: 'Design Responsivo', tags: ['CSS3', 'Flexbox', 'Grid'], velocidade: "1.5" },
        { icone: 'fab fa-bootstrap', titulo: 'Framework CSS', descricao: 'Componentes Ágeis', tags: ['Bootstrap 5', 'UI/UX'], velocidade: "2" },
        { icone: 'fab fa-js-square', titulo: 'Linguagem', descricao: 'Interatividade Dinâmica', tags: ['JavaScript', 'ES6+', 'Async'], velocidade: "1.2" },
        { icone: 'fab fa-vuejs', titulo: 'Framework JS', descricao: 'Single Page Applications', tags: ['Vue.js', 'Vite', 'Composition API'], velocidade: "2.5" },
        { icone: 'fab fa-python', titulo: 'Backend', descricao: 'Lógica e Scripts', tags: ['Python', 'POO', 'Automação'], velocidade: "1.8" },
        { icone: 'fas fa-flask', titulo: 'Micro-framework', descricao: 'APIs Restful', tags: ['Flask', 'Python', 'Web API'], velocidade: "2" },
        { icone: 'fas fa-database', titulo: 'Linguagem de Consulta', descricao: 'Manipulação de Dados', tags: ['SQL', 'Query Optimization'], velocidade: "1.5" },
        { icone: 'fas fa-server', titulo: 'Cache & NoSQL', descricao: 'Alta Performance', tags: ['Redis', 'In-memory', 'Queues'], velocidade: "3" },
        { icone: 'fas fa-elephant', titulo: 'Banco de Dados', descricao: 'Relacional Robusto', tags: ['PostgreSQL', 'Modelagem'], velocidade: "2.2" }, // Nota: 'fas fa-elephant' ou 'fas fa-database'
        { icone: 'fab fa-git-alt', titulo: 'Versionamento', descricao: 'Controle de Código', tags: ['Git', 'Branching'], velocidade: "1" },
        { icone: 'fab fa-github', titulo: 'Plataforma', descricao: 'Colaboração & CI/CD', tags: ['Github', 'Actions', 'Open Source'], velocidade: "1.2" },
        { icone: 'fas fa-cloud-upload-alt', titulo: 'Deployment', descricao: 'Hospedagem Cloud', tags: ['Render', 'PaaS', 'Cloud'], velocidade: "2.8" }
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