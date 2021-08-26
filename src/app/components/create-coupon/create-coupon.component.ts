import { Component, OnInit } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/Coupon';
import { FormUtils } from 'src/app/utils/FormUtils';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public coupon: Coupon;

  constructor(private couponsService: CouponsService, private usersService: UsersService, private router: Router) {
    this.coupon = new Coupon();
   }

  ngOnInit(): void {
  }

  public createCoupon(){
  
  let token = sessionStorage.getItem("token");

  if (token == null) {
    this.router.navigate(["/login"]);
  }

this.coupon.category = this.coupon.category.toUpperCase();

  const obs = this.couponsService.createCoupon(this.coupon);
  obs.subscribe(coupon => {
    this.router.navigate(["/panel"]);
  }, error => {
    alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
  });
  }

  onInputChange(newValue) {
    this.coupon.image = newValue;
  } 

  public leaveForm() {

    let confirm = FormUtils.confirmLeave();

    if(confirm){
      this.router.navigate(["/panel"]);
    }
    return;
  }

}
