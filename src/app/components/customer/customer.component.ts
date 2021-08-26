import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/Purchase';
import { CouponDataObject } from 'src/app/models/CouponDataObject';
import { CouponsService } from 'src/app/services/coupons.service';
import { UsersService } from 'src/app/services/users.service';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    public coupons: CouponDataObject[];
    public isShowAllCoupons: boolean;
    public maxPrice: number;
    public displayedCoupon: CouponDataObject;
    public amount: number;
    public purchase: Purchase;
    public category: string;

    //   constructor(private userService:UserService) { }
    constructor(private couponsService: CouponsService, private purchaseService: PurchasesService, private usersService: UsersService, private router: Router) {
        this.coupons = [];
        this.displayedCoupon = null;
        this.amount = 1;
        this.purchase = new Purchase();
        this.maxPrice = 0;
    }

    ngOnInit() {
        this.isShowAllCoupons = true;
        let observable = this.couponsService.getAllCoupons();

        observable.subscribe(couponsList => {
            this.coupons = couponsList;
        }, error => {
            alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
        });
    }

    public showCoupon(coupon: CouponDataObject) {
        // Debugging using printing the object value in the browser's console
        this.displayedCoupon = coupon;
        this.isShowAllCoupons = false;
    }

    public showCoupons() {
        this.isShowAllCoupons = true;
    }

    public purchaseCoupon() {
        if(!this.usersService.isLoggedIn){
            this.router.navigate(["/login"]);
        }
        this.purchase.coupon = this.displayedCoupon.coupon;
        this.purchase.amount = this.amount;
        this.purchase.purchaseDate = new Date(Date.now());
        let token = sessionStorage.getItem("token");
        const obs = this.purchaseService.createPurchase(this.purchase);
        obs.subscribe(() => {
            window.location.reload();
        }, error => {
            alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
        });
    }


    // <input type="text" name="name" value="1">
    public plusButton() {
        if(this.amount >= this.displayedCoupon.coupon.couponStock){
            return this.displayedCoupon.coupon.couponStock;
        }
        this.amount++;
        return this.amount;
    }

    public minusButton() {
        if (this.amount == 1) {
            this.amount = 1;
            return this.amount;
        }
        this.amount--;
        return this.amount;
    }

    public totalPriceCalc() {
        let initialPrice = this.displayedCoupon.coupon.price;
        let totalPrice = initialPrice * this.amount;
        return totalPrice;
        // let price = this.displayedCoupon.coupon.price*this.amount;
        // return price.toFixed(2);
    }
}