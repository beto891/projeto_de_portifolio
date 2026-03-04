/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // Define que arquivos .vue são componentes Vue válidos
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// Adicione isso para o TypeScript aceitar seu arquivo de lógica JS
declare module "./app.js" {
  const appLogic: any;
  export default appLogic;
}