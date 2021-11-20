import { Personnel } from "./personnel";

export class Fiche {
    id_fiche:number;
    num_fiche:string;
    annee_fiche:string;
    demandeur_fiche:Personnel;
    accepteur_fiche:Personnel;
    demande_fiche:number;

    constructor(options:
        {
            id_fiche?:number,
            num_fiche?:string,
            annee_fiche?:string,
            demandeur_fiche?:Personnel,
            accepteur_fiche?:Personnel,
            demande_fiche?:number

        }
    ={}){
        this.id_fiche = options.id_fiche;
        this.num_fiche = options.num_fiche;
        this.annee_fiche = options.annee_fiche;
        this.demandeur_fiche = options.demandeur_fiche;
        this.accepteur_fiche = options.accepteur_fiche;
        this.demande_fiche = options.demande_fiche;
    }
}
