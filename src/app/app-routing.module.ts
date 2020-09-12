import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import {DogListComponent} from './components/dog-list/dog-list.component'
import {DogFormComponent} from './components/dog-form/dog-form.component'
import {DogViewComponent} from './components/dog-view/dog-view.component'

//Definición de rutas
const routes: Routes = [
  {
    path: 'dogs',
    component: DogListComponent
  },
  {
    path: 'dogs/new',
    component: DogFormComponent
  },
  {
    path: 'dogs/:id',
    component: DogViewComponent
  },
  {
    path: '',
    redirectTo: '/dogs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
