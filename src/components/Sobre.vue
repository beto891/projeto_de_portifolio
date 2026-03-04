<template>

     <section id="sobre" class="py-5 bg-body">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <h2 class="fw-bold mb-4">Sobre Mim</h2>
                        <p class="lead text-secondary">
                            Unindo suporte operacional e desenvolvimento de software.
                        </p>
                        <p>
                            Transformo desafios lógicos em código eficiente e escalável. Como <strong>Desenvolvedor</strong>, 
                            minha especialidade é arquitetar soluções que garantam performance e estabilidade. Recentemente, 
                            desenvolvi um sistema de checking completo que integra processamento em tempo real via WebSockets e tarefas em segundo plano com Celery.

                            Acompanho o ciclo de vida do desenvolvimento, desde a modelagem de dados com SQLAlchemy até o deploy automatizado em plataformas cloud. Tenho facilidade em identificar e resolver gargalos técnicos complexos, como falhas de conexão de rede, dependências circulares e otimização de build de containers.
                        </p>
                        <p>
                            Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong>. Meu foco é transmutar essa experiência técnica em soluções de software eficientes, utilizando <strong>Python</strong> no backend e <strong>Vue.js</strong> no frontend para criar sistemas escaláveis e inteligentes.
                        </p>
                        
                        <div class="mt-4">
                            <span class="badge bg-primary-subtle text-primary border border-primary-subtle me-2 p-2">Backend (Python)</span>
                            <span class="badge bg-success-subtle text-success border border-success-subtle me-2 p-2">Frontend (Vue.js)</span>
                            <span class="badge bg-info-subtle text-info border border-info-subtle p-2">Infraestrutura TI</span>
                        </div>
                    </div>
                    
                    <div class="col-lg-5 offset-lg-1">
                        <div class="p-4 bg-body-tertiary rounded shadow-sm border border-secondary border-opacity-25">
                            <h4 class="mb-4 text-info fw-bold"><i class="fas fa-graduation-cap me-2"></i>Educação & Carreira</h4>
                            <div class="position-relative ps-3 border-start border-info border-2">
                                <div class="mb-4 position-relative">
                                    <div class="position-absolute translate-middle-x start-0 bg-info rounded-circle" style="width:12px; height:12px; left:-7px; top:8px;"></div>
                                    <h6 class="fw-bold mb-1">Graduando em Análise e Desenv. de Sistemas</h6>
                                    <p class="small text-secondary mb-0">Estácio | Em andamento</p>
                                </div>
                                <div class="position-relative">
                                    <div class="position-absolute translate-middle-x start-0 bg-secondary rounded-circle" style="width:12px; height:12px; left:-7px; top:8px;"></div>
                                    <h6 class="fw-bold mb-1">Técnico em TI</h6>
                                    <p class="small text-secondary mb-0">Experiência em Operações e Mídia OOH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
    export default {
        name: 'Sobre',
    }
</script>