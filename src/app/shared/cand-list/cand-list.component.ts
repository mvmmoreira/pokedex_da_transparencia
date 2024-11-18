import { Component } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';
import { Candidato } from '../../models/candidato.model';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'cand-list',
  standalone: true,
  imports: 
  [
    CommonModule
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
}
