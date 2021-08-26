import { Pipe, PipeTransform } from '@angular/core';
import { CouponDataObject } from '../models/CouponDataObject';

@Pipe({
    name: 'categoryPipe'
})
export class CouponsPipeByCategory implements PipeTransform {

    transform(coupons: CouponDataObject[], category:string): any {
        if(category == "default"){
            return coupons;
        }
        if(category){
            return coupons.filter(coupon => coupon.coupon.category == category );
        }
        return coupons;
    }
}
