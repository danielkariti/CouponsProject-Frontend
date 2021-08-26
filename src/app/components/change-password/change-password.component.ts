import { Component, OnInit } from '@angular/core';
import { ChangePasswordDetails } from 'src/app/models/ChangePasswordDetails';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public changePasswordDetails: ChangePasswordDetails;

  constructor(private usersService: UsersService, private router: Router) {
    this.changePasswordDetails = new ChangePasswordDetails();
   }

  ngOnInit(): void {
  }

  public changePassword(){
    const observable = this.usersService.changePassword(this.changePasswordDetails);

    observable.subscribe(changePasswordDetails => {  
      if(sessionStorage.getItem("userType") == "CUSTOMER"){
          this.router.navigate(["/profile"]);
      }

      if(sessionStorage.getItem("userType") == "ADMIN"){
          this.router.navigate(["/admin"]);
      }

      if(sessionStorage.getItem("userType") == "COMPANY"){
          this.router.navigate(["/panel"]);
      }
      
  }, error => { // Reaching here means that the server had failed
              // serverErrorResponse is the object returned from the ExceptionsHandler
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);            
  }); 

  }

}
