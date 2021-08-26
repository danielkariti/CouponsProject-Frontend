import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { CompaniesService } from 'src/app/services/companies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public company: Company;

  constructor(private companiesService: CompaniesService, private usersService: UsersService, private router: Router) {
    this.company = new Company();
    this.company.coupons = null;
   }

  ngOnInit(): void {
  }

  public createCompany(){
  
    let token = sessionStorage.getItem("token");
  
    if (token == null) {
      this.router.navigate(["/login"]);
    }
    const obs = this.companiesService.createCompany(this.company);
    obs.subscribe(company => {
      this.router.navigate(["/admin/company-list"]);
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });
    }

}
