export class User {
    id:number;
    mobile:string;
    email:string;
    role:string;
    password:string;
    token:string

    constructor(options:
        {
            id?:number,
            role?:string,
            mobile?:string,
            email?:string,
            password?:string
            token?:string
        }
    ={}){
        this.id = options.id;
        this.mobile = options.mobile;
        this.role = options.role;
        this.email = options.email;
        this.password = options.password;
        this.token = options.token;
    }
}
