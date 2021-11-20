import { Direction } from "./direction";

export class Inspection {
    id_iepp:number;
    dren_iepp: Direction;
    ville_iepp:string;
    nom_iepp:string;
    contact_iepp:string;
    email_iepp:string;
    adresse_iepp:string;

    constructor(options:
        {
            id_iepp?:number,
            dren_iepp?: Direction,
            ville_iepp?:string,
            nom_iepp?:string,
            contact_iepp?:string,
            email_iepp?:string,
            adresse_iepp?:string

        }
    ={}){
        this.id_iepp = options.id_iepp;
        this.dren_iepp = options.dren_iepp;
        this.ville_iepp = options.ville_iepp;
        this.nom_iepp = options.nom_iepp;
        this.contact_iepp = options.contact_iepp;
        this.email_iepp = options.email_iepp;
        this.adresse_iepp = options.adresse_iepp;
    }
}
