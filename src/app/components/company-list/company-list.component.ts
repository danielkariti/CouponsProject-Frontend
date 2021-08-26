import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { Coupon } from 'src/app/models/Coupon';
import { User } from 'src/app/models/User';
import { CompaniesService } from 'src/app/services/companies.service';
import { UsersService } from 'src/app/services/users.service';
import { FormUtils } from 'src/app/utils/FormUtils';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public companies : Company[];
  public coupons: Coupon[];
  public users: User[];
  public updatedCompany:any = {};

  constructor(private companiesService: CompaniesService, private usersService: UsersService, private router: Router) { 
    this.companies = [];
    this.coupons = [];
    this.users = [];
  }

  ngOnInit(): void {

    const observable = this.companiesService.getAllCompanies();
    observable.subscribe(companyList => {
        this.companies = companyList;
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    })

  }

  public removeCompany(id: number){

    const observable = this.companiesService.removeCompany(id);
    observable.subscribe(() => {
      window.location.reload();
    }, error => {
       alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public updateCompany(company : Company){
    
    const observable = this.companiesService.updateCompany(company);
    observable.subscribe(() => {
      window.location.reload();
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    });

  }

  public showCompany(company: Company) {
    this.updatedCompany = company;

  }

  public showCompanyInfo(id : number){
    sessionStorage.setItem("currentCompanyId", id + "");
    this.router.navigate(["/company-page"]);
  }


  public changePassword(){

    this.router.navigate(["/change-password"]);
    
  }

  public leaveForm() {

    let confirm = FormUtils.confirmLeave();

    if (confirm) {
      window.location.reload();
    }
    return;
  }
}



