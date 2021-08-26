import { User } from './User';
import { Coupon } from './Coupon';
export class Company{
    public constructor(
        public id?:number,
        public companyName?:string,
        public email?:string,
        public phoneNumber?:number,  
        public address?:string,
        public coupons?:any[]
    ){}

}