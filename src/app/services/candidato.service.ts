import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Candidato } from "../models/candidato.model";

@Injectable({
    providedIn: 'root'
})


export class CandidatoService{

    private  ApiUrl: string = "http://localhost:3000/candidato";

    constructor(private httpClient: HttpClient){     
    }

    obterCandidato(){
        return this.httpClient.get<Candidato[]>(this.ApiUrl)
    }
}