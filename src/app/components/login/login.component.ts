import { Component, OnInit } from '@angular/core';
import { UserLoginDetails } from 'src/app/models/UserLoginDetails';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLoginDetails: UserLoginDetails;

  constructor(private usersService: UsersService, private router: Router) {
    this.userLoginDetails = new UserLoginDetails();
  }

  ngOnInit(): void {
  }

  public login(): void{

    const observable = this.usersService.login(this.userLoginDetails);

    observable.subscribe(successfulServerRequestData => {
        this.usersService.setLoginToken(successfulServerRequestData.token);

        sessionStorage.setItem("token", successfulServerRequestData.token+"");
        sessionStorage.setItem("userType", successfulServerRequestData.userType+"");
        this.usersService.isLoggedIn = true;
       

        if(successfulServerRequestData.userType == "CUSTOMER"){
          this.usersService.isUserCustomer=true;
            this.router.navigate(["/customer"]);
        }

        if(successfulServerRequestData.userType == "ADMIN"){
            this.usersService.isUserAdmin=true;
            this.router.navigate(["/admin"]);
        }

        if(successfulServerRequestData.userType == "COMPANY"){
            this.usersService.isUserCompany=true;
            this.router.navigate(["/panel"]);
        }
    }, error => { 
        alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);            
    }); 

  }
}
