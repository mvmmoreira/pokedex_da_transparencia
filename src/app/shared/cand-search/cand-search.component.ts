import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'cand-search',
  standalone: true,
  imports: [],
  templateUrl: './cand-search.component.html',
  styleUrl: './cand-search.component.scss'
})
export class CandSearchComponent {
  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();

  public search(value:any){
    this.emmitSearch.emit(value);
  }
}
