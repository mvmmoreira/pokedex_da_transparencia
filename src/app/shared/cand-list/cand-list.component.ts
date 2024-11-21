import { Component } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';
import { Candidato } from '../../models/candidato.model';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CandSearchComponent } from '../cand-search/cand-search.component';

@Component({
  selector: 'cand-list',
  standalone: true,
  imports: 
  [
    CommonModule,RouterModule,CandSearchComponent,
  ],
  templateUrl: './cand-list.component.html',
  styleUrl: './cand-list.component.scss'
})
export class CandListComponent {

  //candidatos: Candidato[] = []
  candidatos$ = new Observable<Candidato[]>();

  constructor(private CandidatoService: CandidatoService){
    this.obterCandidatoCadastrado();
  }  

  obterCandidatoCadastrado(){
   // this.CandidatoService.obterCandidato()
    //  .subscribe(candidatos => this.candidatos = candidatos)
    this.candidatos$ = this.CandidatoService.obterCandidato();
  }

  //public search(value: any){
    //const filter = this.candidatos$.filter( (res: any) => {
      //return !res.nome.indexOf(value.toLowerCase());
    //});
    //this.candidatos$ = filter;
  //}
}
