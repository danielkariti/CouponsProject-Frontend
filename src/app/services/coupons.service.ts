import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CouponDataObject } from '../models/CouponDataObject';
import { Coupon } from '../models/Coupon';


@Injectable({
    // One object for the entire website
    providedIn: 'root'
})
export class CouponsService {
 
    constructor(private http: HttpClient) {}

    public getAllCoupons(): Observable<CouponDataObject[]> {
        return this.http.get<CouponDataObject[]>("http://localhost:8080/coupon");
    }

    public createCoupon(coupon : Coupon): Observable<void[]> {
        return this.http.post<void[]>("http://localhost:8080/coupon", coupon);
    }

    public getAllCouponsByCompanyId(): Observable<Coupon[]> {
        return this.http.get<Coupon[]>("http://localhost:8080/coupon/byCompany");
    }

    public getAllCouponsByCompany(id: number): Observable<Coupon[]> {
        return this.http.get<Coupon[]>("http://localhost:8080/coupon/company?id=" + id);
    }

    public removeCoupon(id: number): Observable<void[]> {
        return this.http.delete<void[]>("http://localhost:8080/coupon/" + id);
    }

    public updateCoupon(coupon : Coupon): Observable<void[]> {
        return this.http.put<void[]>("http://localhost:8080/coupon", coupon);
    }
}
