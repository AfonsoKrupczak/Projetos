// Importando os componentes necessários para as rotas
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core'; // Importando o NgModule do core do Angular
import { RouterModule, Routes } from '@angular/router'; // Importando o RouterModule e Routes do pacote de roteamento do Angular
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

// Definindo as rotas da aplicação
const routes: Routes = [
  {
    path: '', // Quando a rota é vazia
    redirectTo: 'listarPensamento', // Redireciona para a rota 'listarPensamento'
    pathMatch: 'full' // A rota precisa ser exatamente vazia para o redirecionamento acontecer
  },
  {
    path: 'criarPensamento', // Quando a rota é 'criarPensamento'
    component: CriarPensamentoComponent // Renderiza o componente CriarPensamentoComponent
  },
  {
    path: 'listarPensamento', // Quando a rota é 'listarPensamento'
    component: ListarPensamentoComponent // Renderiza o componente ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id', // Quando a rota é 'pensamentos/excluirPensamento/:id', onde ':id' é um parâmetro
    component: ExcluirPensamentoComponent // Renderiza o componente ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id', // Quando a rota é 'pensamentos/editarPensamento/:id', onde ':id' é um parâmetro
    component: EditarPensamentoComponent // Renderiza o componente EditarPensamentoComponent
  }
];

// Definindo o módulo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importando o RouterModule com as rotas definidas
  exports: [RouterModule] // Exportando o RouterModule para que as rotas possam ser usadas em outros módulos
})
export class AppRoutingModule { } // Exportando a classe AppRoutingModule
