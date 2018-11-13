import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from './filme/filme.module';
import { FilmeFormModule } from './filme-form/filme-form.module';
import { FilmeListaModule } from './filme-lista/filme-lista.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({

  imports: [
    CommonModule,
    FilmeModule,
    FilmeFormModule,
    FilmeListaModule,
    RouterModule,


  ]
})
export class FilmesModule { }
