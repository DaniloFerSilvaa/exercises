export type Student = {
     id:number;
     active:boolean;
     name:string;
     email:string;
     avatar:string;
     grade1:number;
     grade2:number;
}

export type Client = {
     firstName: string;
     lastName: string;
     avatar: string;
     titleJob: string
     email: string;
}    

export type Workouts = {
     name: string;
     link: string;
}