import { Component } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';
import { Candidato } from '../../models/candidato.model';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'cand-list',
  standalone: true,
  imports: [NgForOf,
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
