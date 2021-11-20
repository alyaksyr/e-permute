export class Direction {
    id_dren:number;
    ville_dren:string;
    nom_dren:string;
    contact_dren:string;
    email_dren:string;
    adresse_dren:string;

    constructor(options:
        {
            id_dren?:number,
            ville_dren?:string,
            nom_dren?:string,
            contact_dren?:string,
            email_dren?:string,
            adresse_dren?:string

        }
    ={}){
        this.id_dren = options.id_dren;
        this.ville_dren = options.ville_dren;
        this.nom_dren = options.nom_dren;
        this.contact_dren = options.contact_dren;
        this.email_dren = options.email_dren;
        this.adresse_dren = options.adresse_dren;
    }
}
