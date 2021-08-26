import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Purchase } from 'src/app/models/Purchase';
import { CustomersService } from 'src/app/services/customers.service';
import { PurchasesService } from 'src/app/services/purchases.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public customer: Customer;
  public purchases: Purchase[];
  public isShowAllPurchases: boolean;


  constructor(private customersService: CustomersService, public usersService: UsersService, private purchasesService: PurchasesService,  private router: Router) {
    this.purchases = [];
  }

  ngOnInit(): void {

    let token = sessionStorage.getItem("token");
    let observable = this.customersService.getCustomer();

    if (token == null) {
      this.router.navigate(["/login"]);
    }

    observable.subscribe(customer => {
      this.customer = customer;
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

    let obs = this.purchasesService.getAllPurchasesByUserId();

    obs.subscribe(purchasesList => {
      this.purchases = purchasesList;
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public showPurchase(purchase: Purchase) {

}

  public changePassword(){

    this.router.navigate(["/change-password"]);
    
  }

  public updatePersonalInfo(){
    this.router.navigate(["/update-personal-info"]);
  }

}
