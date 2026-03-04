<template>
     <footer class="py-5 position-relative overflow-hidden custom-footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <!-- <span class="fw-bold fs-5">{{ user.name }}</span> -->
                        <p class="text-secondary small mb-0">© 2026 - Todos os direitos reservados.</p>
                    </div>

                    <div class="col-md-4 text-center mb-3 mb-md-0">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item"><a href="#home" class="nav-link p-0 text-secondary">Home</a></li>
                            <li class="list-inline-item mx-2">·</li>
                            <li class="list-inline-item"><a href="#projetos" class="nav-link p-0 text-secondary">Projetos</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 text-center text-md-end">
                        <a href="https://www.linkedin.com/in/ediberto-santana-4b1113272/" target="_blank" class="btn btn-outline-secondary btn-sm rounded-circle me-2">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/beto891" target="_blank" class="btn btn-outline-secondary btn-sm rounded-circle me-2">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="mailto:seu-email@gmail.com" class="btn btn-outline-secondary btn-sm rounded-circle">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
    export default{ 
        name: 'AppFooter'
    }
</script>
