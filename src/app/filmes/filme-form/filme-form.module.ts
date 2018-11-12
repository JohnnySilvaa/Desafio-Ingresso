import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from '../filme/filme.module';
import { RouterModule } from '@angular/router';
import { FilmeFormComponent } from './filme-form.component';

@NgModule({
  declarations: [FilmeFormComponent],
  imports: [
    CommonModule,
    FilmeModule,
    RouterModule,
    
  ],
  exports: [
    FilmeFormComponent,
],
})
export class FilmeFormModule { }
