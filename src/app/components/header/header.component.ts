import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn;

  constructor(public usersService: UsersService, private router: Router) {
    this.isLoggedIn = usersService.isLoggedIn;
   }

  ngOnInit(): void {
  }

public logout() {
  this.usersService.logout();
  this.usersService.isLoggedIn = false;
  this.usersService.userType = null;
  sessionStorage.clear();
  this.router.navigate(["/logout"]);
}

}
