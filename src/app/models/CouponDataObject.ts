import { Coupon } from './Coupon';
export class CouponDataObject{
    public constructor(
        public coupon?:Coupon,
        public companyName?:string     
    ){}
}
