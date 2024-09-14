import { Component } from '@angular/core';
import { DexHeaderComponent } from '../../shared/dex-header/dex-header.component';
import { CandSearchComponent } from '../../shared/cand-search/cand-search.component';
import { CandListComponent } from '../../shared/cand-list/cand-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CandListComponent ,
    CandSearchComponent,
    DexHeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
