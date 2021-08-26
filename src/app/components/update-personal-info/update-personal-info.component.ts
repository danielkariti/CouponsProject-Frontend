import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { UsersService } from 'src/app/services/users.service';
import { FormUtils } from 'src/app/utils/FormUtils';

@Component({
  selector: 'app-update-personal-info',
  templateUrl: './update-personal-info.component.html',
  styleUrls: ['./update-personal-info.component.css']
})
export class UpdatePersonalInfoComponent implements OnInit {


  public customer = {} as Customer;

  constructor(private customersService: CustomersService, public usersService: UsersService, private router: Router) {
    
   }

  ngOnInit(): void {
    let token = sessionStorage.getItem("token");
    let observable = this.customersService.getCustomer();

    observable.subscribe(customer => {
      this.customer = customer;
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });
  }

  public updatePersonalInfo(){

    let observable = this.customersService.updateCustomer(this.customer);

    observable.subscribe(customer => {
      this.router.navigate(["/profile"]);
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public leaveForm() {

    let confirm = FormUtils.confirmLeave();

    if(confirm){
      this.router.navigate(["/profile"]);
    }
    return;
  }

}
