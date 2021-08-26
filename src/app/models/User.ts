import { Company } from './Company';
export class User{
    public constructor(
        public username?:string,
        public password?:string,
        public type?:string,
        public company?:Company,
        public companyId?: number     
    ){}

}