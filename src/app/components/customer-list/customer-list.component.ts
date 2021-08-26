import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { UsersService } from 'src/app/services/users.service';
import { FormUtils } from 'src/app/utils/FormUtils';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[];
  public updatedCustomer: any = {};


  constructor(private customersService: CustomersService, private usersService: UsersService, private router: Router) {
    this.customers = [];

  }

  ngOnInit(): void {

    const observable = this.customersService.getAllCustomers();
    observable.subscribe(customerList => {
      this.customers = customerList;
      console.log(this.customers);
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    })

  }

  public removeCustomer(id: number) {

    const observable = this.customersService.removeCustomer(id);
    observable.subscribe(() => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public updateCustomer(customer: Customer) {

    const observable = this.customersService.updateCustomer(customer);
    observable.subscribe(() => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public showCustomer(customer: Customer) {
    this.updatedCustomer = customer;
  }

  public leaveForm() {

    let confirm = FormUtils.confirmLeave();

    if (confirm) {
      window.location.reload();
    }
    return;
  }


}
