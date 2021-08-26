import { User } from './User';
export class Customer{
    public constructor(
        public name?:string,
        public email?:string,
        public age?:number,
        public user?:User      
    ){
        this.user = new User();
        this.user.type= "CUSTOMER";
    }

}