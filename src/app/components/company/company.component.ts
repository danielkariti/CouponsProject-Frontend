import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { CouponsService } from 'src/app/services/coupons.service';
import { Coupon } from 'src/app/models/Coupon';
import { SortUtils } from 'src/app/utils/SortUtils';
import { FormUtils } from 'src/app/utils/FormUtils';




@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public coupons: Coupon[];
  public updatedCoupon:any = {};
  public isSorted : boolean;
 
  

  constructor(private couponsService: CouponsService, private usersService: UsersService, private router: Router) {
    this.coupons = [];
   }

  ngOnInit(): void {

    const observable = this.couponsService.getAllCouponsByCompanyId();

    observable.subscribe(couponsList => {
        this.coupons = couponsList;
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });
  }

  public removeCoupon(id: number){

    const observable = this.couponsService.removeCoupon(id);
    observable.subscribe(id => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public updateCoupon(coupon : Coupon){
    
    const observable = this.couponsService.updateCoupon(coupon);

    observable.subscribe(coupon => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);  
    });

  }

  public showCoupon(coupon: Coupon) {
    this.updatedCoupon = coupon;

  }

  public changePassword(){

    this.router.navigate(["/change-password"]);
    
  }

  public sortByPrice() {

    if(!this.isSorted){
      this.isSorted = true;
     this.coupons = SortUtils.sortMinToMaxPrice(this.coupons);
    }
    else{
      this.isSorted = false;
     this.coupons = SortUtils.sortMaxToMinPrice(this.coupons);
    }

  }


  public leaveForm() {

    let confirm = FormUtils.confirmLeave();

    if(confirm){
      window.location.reload();
    }
    return;
  }

}

