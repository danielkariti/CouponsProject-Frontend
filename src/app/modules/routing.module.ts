import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { CompanyComponent } from '../components/company/company.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { UpdatePersonalInfoComponent } from '../components/update-personal-info/update-personal-info.component';
import { CreateCouponComponent } from '../components/create-coupon/create-coupon.component';
import { CompanyGuard } from '../guards/CompanyGuard';
import { ProfileGuard } from '../guards/profileguard';
import { CreateCompanyComponent } from '../components/create-company/create-company.component';
import { CompanyPageComponent } from '../components/company-page/company-page.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';


const routes: Routes = [
  { path: "home", component: CustomerComponent },
  { path: "register", component: RegisterComponent },
  // { path: "products", canActivate: [LoginGuardService], component: ProductsComponent },
  // { path: "users", canActivate: [LoginGuardService], component: UsersComponent },
  // { path: "add-user", canActivate: [LoginGuardService], component: AddUserComponent },
  { path: "about", component: AboutComponent },
  { path: "profile", canActivate: [ProfileGuard], component: ProfileComponent },
  { path: "admin", loadChildren: "./admin.module#AdminModule" },
  { path: "customer", component: CustomerComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "update-personal-info", component: UpdatePersonalInfoComponent },
  { path: "panel", canActivate: [CompanyGuard], component: CompanyComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "create-coupon", canActivate: [CompanyGuard], component: CreateCouponComponent },
  { path: "create-company", component: CreateCompanyComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "company-page", component: CompanyPageComponent },
  { path: "logout", redirectTo: "login", pathMatch: "full" },
  { path: "", redirectTo: "home", pathMatch: "full" }, // pathMatch = התאמת המחרוזת הריקה לכלל הנתיב
  // { path: "**", component: Page404Component } // Page not Found (Must be the last one!!!)
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes) // Importing the above routes
  ]
})
export class RoutingModule {

}
