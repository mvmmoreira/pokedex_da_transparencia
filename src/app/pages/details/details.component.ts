import { Component } from '@angular/core';
import { DexHeaderComponent } from '../../shared/dex-header/dex-header.component';
import { CandListComponent } from '../../shared/cand-list/cand-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidato } from '../../models/candidato.model';
import { CandidatoService } from '../../services/candidato.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    DexHeaderComponent,
    CandListComponent,
    RouterModule,
    CommonModule
    ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  
  candidato: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']; // Captura o ID da URL
    this.http.get<any>(`http://localhost:3000/candidatos/${id}`)
      .subscribe(data => this.candidato = data);
  }

}
