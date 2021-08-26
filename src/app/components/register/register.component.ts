import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public customer:Customer;

  constructor(private customersService: CustomersService, private router: Router) { 
    this.customer = new Customer(); 
  }

  ngOnInit(): void {
  }

  public register(): void{
    
    


    const observable = this.customersService.register(this.customer);
     
    observable.subscribe(customer => {
          this.router.navigate(["/login"]);

  }, error => { // Reaching here means that the server had failed
              // serverErrorResponse is the object returned from the ExceptionsHandler
     alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);         
  }); 

}

}
