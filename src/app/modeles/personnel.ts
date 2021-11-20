import { Inspection } from "./inspection";

export class Personnel {
    
    user_pers:number;
    matricule_pers:string;
    nom_pers:string;
    nom_jeune_fille_pers:string;
    prenoms_pers:string;
    date_nais_pers:Date
    lieu_nais_pers:string
    marie_pers:number;
    sante_pers:number;
    iepp_pers:Inspection
    localite_pers:string;
    emploi_pers:string;
    fonction_pers:string;
    service_pers:string;
    classe_tenue_pers:string;

    constructor(options:
        {
            user_pers?:number,
            matricule_pers?:string,
            nom_pers?:string,
            nom_jeune_fille_pers?:string,
            prenoms_pers?:string,
            date_nais_pers?:Date
            lieu_nais_pers?:string
            marie_pers?:number,
            sante_pers?:number,
            iepp_pers?:Inspection
            localite_pers?:string,
            emploi_pers?:string,
            fonction_pers?:string,
            service_pers?:string,
            classe_tenue_pers?:string

        }
    ={}){
        this.user_pers = options.user_pers;
        this.matricule_pers = options.matricule_pers;
        this.nom_pers = options.nom_pers;
        this.nom_jeune_fille_pers = options.nom_jeune_fille_pers;
        this.prenoms_pers = options.prenoms_pers;
        this.date_nais_pers = options.date_nais_pers;
        this.lieu_nais_pers = options.lieu_nais_pers;
        this.marie_pers = options.marie_pers;
        this.sante_pers = options.sante_pers;
        this.iepp_pers = options.iepp_pers;
        this.localite_pers = options.localite_pers;
        this.emploi_pers = options.emploi_pers;
        this.fonction_pers = options.fonction_pers;
        this.service_pers = options.service_pers;
        this.classe_tenue_pers = options.classe_tenue_pers;
    }
}
