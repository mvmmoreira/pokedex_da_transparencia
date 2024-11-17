import { Component } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';
import { Candidato } from '../../models/candidato.model';
import { CommonModule } from '@angular/common';

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

  candidatos: Candidato[] = []

  constructor(private CandidatoService: CandidatoService){
    this.obterCandidatoCadastrado
  }  

  obterCandidatoCadastrado(){
    this.CandidatoService.obterCandidato()
      .subscribe(candidatos => this.candidatos =candidatos)
  }
}
