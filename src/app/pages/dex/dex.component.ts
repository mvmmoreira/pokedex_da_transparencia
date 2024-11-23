import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from '../../models/candidato.model';
import { CandidatoService } from '../../services/candidato.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dex',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dex.component.html',
  styleUrl: './dex.component.scss'
})
export class DexComponent {
  candidatos$ = new Observable<Candidato[]>();
  candidatoSelecionado!: Candidato | null;

  constructor(private CandidatoService: CandidatoService){}  

  ngOnInit(): void {
    this.obterCandidatoCadastrado();
  }

  obterCandidatoCadastrado(): void{
    this.candidatos$ = this.CandidatoService.obterCandidato();
    this.candidatos$.subscribe((candidatos)=>{
      if(candidatos.length > 0) {
        this.candidatoSelecionado = candidatos[0];
      }
    });
    }

  selecionarCandidato(candidato: Candidato): void {
    this.candidatoSelecionado = candidato;
  }
}
