import { Component, OnInit } from '@angular/core';
import { UserLoginDetails } from 'src/app/models/UserLoginDetails';
import { UsersService } from 'src/app/services/users.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public userLoginDetails: UserLoginDetails;

  constructor(public usersService: UsersService) {
    if (sessionStorage.getItem("token")) {
      usersService.isLoggedIn = true;

      if (sessionStorage.getItem("userType") == "COMPANY") {
        usersService.isUserCompany = true;
      }

      if (sessionStorage.getItem("userType") == "ADMIN") {
        usersService.isUserAdmin = true;
      }

      if (sessionStorage.getItem("userType") == "CUSTOMER") {
        usersService.isUserCustomer = true;
      }
    }
  }

  ngOnInit(): void {
  }

}

