export interface AuthCredentials{
    username:string;
    password:string;
}

export class JwtToken{
    token:string;
    constructor(token: string){
        this.token = token; 
    }
}