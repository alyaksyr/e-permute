import { Inspection } from "./inspection";
import { Personnel } from "./personnel";

export class Demande {
    id_demande:number;
    num_demande:number;
    annee_demande:string;
    proprietaire_demande:Personnel;
    iepp_demande:Inspection;
    service_demande:string;
    localite_demande:string;
    couverture_demande:string;
    description_demande:string;
    validite_demande:number;
    etat_demande:number;

    constructor(options:
        {
            id_demande?:number,
            num_demande?:number,
            annee_demande?:string,
            proprietaire_demande?:Personnel,
            iepp_demande?:Inspection,
            service_demande?:string,
            localite_demande?:string,
            couverture_demande?:string,
            description_demande?:string,
            validite_demande?:number,
            etat_demande?:number

        }
    ={}){
        this.id_demande = options.id_demande;
        this.num_demande = options.num_demande;
        this.annee_demande = options.annee_demande;
        this.proprietaire_demande = options.proprietaire_demande;
        this.iepp_demande = options.iepp_demande;
        this.service_demande = options.service_demande;
        this.localite_demande = options.localite_demande;
        this.couverture_demande = options.couverture_demande;
        this.description_demande = options.description_demande;
        this.validite_demande = options.validite_demande;
        this.etat_demande = options.etat_demande;
    }
}
