import { Coupon } from '../models/Coupon';

export class SortUtils{
    public constructor(
    ){}

    static sortMinToMaxPrice(coupons: Coupon[]) {

        let sortedMinToMax = coupons.sort((coupon1, coupon2) => (coupon1.price < coupon2.price ? -1 : 1));
        return sortedMinToMax;
    }


    static sortMaxToMinPrice(coupons: Coupon[]) {
        
        let sortedMaxToMin = coupons.sort((coupon1, coupon2) => (coupon1.price > coupon2.price ? -1 : 1));
        return sortedMaxToMin;
    }
}

