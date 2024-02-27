export interface RegisterModel{
    name:string;
    username:string;
    email:string;
    password:string;
    roleList:string[];
}

export interface UserListItem{
    id:string;
    name:string;
    username:string;
    email:string;
    password:string;
    roleList:string[];
    moniker:string
}

