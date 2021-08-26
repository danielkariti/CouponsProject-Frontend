import { Coupon } from './Coupon';
import { Customer } from './Customer';

export class Purchase {
    public constructor(
        public customer?: Customer,
        public amount?:number,
        public purchaseDate?: Date,
        public coupon?: Coupon   
    ){
        this.coupon = new Coupon();
    }

}