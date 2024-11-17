import { Component } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';
import { Candidato } from '../../models/candidato.model';

@Component({
  selector: 'cand-list',
  standalone: true,
  imports: [],
  templateUrl: './cand-list.component.html',
  styleUrl: './cand-list.component.scss'
})
export class CandListComponent {

  candidatos: Candidato[] = []

  constructor(private CandidatoService: CandidatoService){
    console.log()
  }  

  obterCandidatoCadastrado(){

  }
}
