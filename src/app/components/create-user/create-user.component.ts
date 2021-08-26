import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { User } from 'src/app/models/User';
import { CompaniesService } from 'src/app/services/companies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public user: User;
  public company = {} as any;

  constructor(private companiesService : CompaniesService ,private usersService: UsersService, private router: Router) { 
    this.user = new User();
  }

  ngOnInit(): void {

    let companyId = +sessionStorage.getItem("currentCompanyId");
    const observable = this.companiesService.getCompany(companyId);
    observable.subscribe(company => {
      this.company = company;
  }, error => {
      alert('Failed to get companies ' + JSON.stringify(error));
  });

  }

  public createUser(){
  
  
    let token = sessionStorage.getItem("token");
  
    if (token == null) {
      this.router.navigate(["/login"]);
    }
    this.user.company = this.company;
    this.user.companyId = this.company.id;
    this.user.type = "COMPANY";
    const obs = this.usersService.createUser(this.user);
    obs.subscribe(() => {
      this.router.navigate(["/company-page"]);
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });
    }

}
