import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoApiService {

  private _httpClient: HttpClient

  constructor(httpClient: HttpClient) {
      this._httpClient = httpClient;
   }

  obtercandidato(){
    9
  }


}
