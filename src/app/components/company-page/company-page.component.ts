import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { Company } from 'src/app/models/Company';
import { User } from 'src/app/models/User';
import { CompaniesService } from 'src/app/services/companies.service';
import { UsersService } from 'src/app/services/users.service';
import { CouponsService } from 'src/app/services/coupons.service';
import { Coupon } from 'src/app/models/Coupon';
import { SortUtils } from 'src/app/utils/SortUtils';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  public company : any;
  public updatedUser:any = {};
  public updatedCoupon:any = {};
  public users: User[];
  public coupons: Coupon[];
  public showUsers: boolean;
  public showCoupons: boolean;
  public isSorted : boolean;

  constructor(private couponsService: CouponsService, private companiesService: CompaniesService, public usersService: UsersService, private router: Router) { 
    this.users = [];
  }

  ngOnInit(): void {

    this.showCompanyCoupons();
    this.showCompanyUsers();  
    
    
  }

  public showUser(user: User) {
    this.updatedUser = user;

  }

  public showCoupon(coupon: Coupon) {
    this.updatedCoupon = coupon;

  }

  public removeUser(id : number){
    const observable = this.usersService.removeUser(id);
    observable.subscribe(() => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public updateCoupon(coupon : Coupon){
    
    const observable = this.couponsService.updateCoupon(coupon);

    observable.subscribe(() => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public showCompanyCoupons() {

    this.showUsers = false;
    this.showCoupons = true;

    let companyId = +sessionStorage.getItem("currentCompanyId");
    const observable = this.couponsService.getAllCouponsByCompany(companyId);

    observable.subscribe(couponsList => {
      this.coupons = couponsList;
  }, error => {
    alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
  });

  }

  public showCompanyUsers() {

    this.showUsers = true;
    this.showCoupons = false;
    
    let companyId = +sessionStorage.getItem("currentCompanyId");
    const obs = this.usersService.getAllUsersByCompanyId(companyId);
    obs.subscribe(usersList => {
      this.users = usersList;
  }, error => {
    alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
  });

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

}
