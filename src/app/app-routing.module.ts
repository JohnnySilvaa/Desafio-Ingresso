import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filme-lista/filmes/filmes.component';
import { FilmeListaComponent } from './filmes/filme-lista/filme-lista.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'filme-lista',
    component: FilmeListaComponent
  },
  { 
    path: 'filme-form', 
    component: FilmeFormComponent,
  },

  { 
    path: '**', 
    component: NotFoundComponent, 
  },     



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
