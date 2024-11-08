export interface CandidatoApi {
    id: number,
    nome: string,
    nascimento: string,
    genero: string,
    coligacao: string,
    partido: string,
    url: string,
    orcamentoGasto: number,
    numeroEleicao: number,
    limiteLegalDeGasto: number,
    candidatoAReeleicao: false,
    estadoCivil: string,
    raca: string,
    grauDeInstrucao: string,
    nacionalidade: string
}