import { Pipe, PipeTransform } from '@angular/core';
import { CouponDataObject } from '../models/CouponDataObject';

@Pipe({
    name: 'maxPricePipe'
})
export class CouponsPipeByMaxPrice implements PipeTransform {

    transform(coupons: CouponDataObject[], maxPrice:number): any {
        
        if(maxPrice>0){
            return coupons.filter(coupon => coupon.coupon.price<=maxPrice);
        }
        return coupons;
    }
}
