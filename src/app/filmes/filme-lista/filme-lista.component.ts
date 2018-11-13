import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme/filme';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme/filme.service';

@Component({
  selector: 'app-filme-lista',
  templateUrl: './filme-lista.component.html',
  styleUrls: ['./filme-lista.component.css']
})
export class FilmeListaComponent  implements OnInit{

  filmes: Filme[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private FilmeService: FilmeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.filmes = this.activatedRoute.snapshot.data['filmes'];
    });
  }

}
