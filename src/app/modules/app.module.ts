import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin.module';
import { UsersService } from '../services/users.service';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { LoginComponent } from '../components/login/login.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RegisterComponent } from '../components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from '../components/customer/customer.component';
import { CompanyComponent } from '../components/company/company.component';
import { RoutingModule } from './routing.module';
import { CouponsService } from '../services/coupons.service';
import { PurchasesService } from '../services/purchases.service';
import { CustomersService } from '../services/customers.service';
import { CompaniesService } from '../services/companies.service';
import { AuthenticationInterceptor } from '../interceptors/AuthenticationInterceptor';
import { ProfileComponent } from '../components/profile/profile.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { UpdatePersonalInfoComponent } from '../components/update-personal-info/update-personal-info.component';
import { CreateCouponComponent } from '../components/create-coupon/create-coupon.component';
import { CreateCompanyComponent } from '../components/create-company/create-company.component';
import { CompanyPageComponent } from '../components/company-page/company-page.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { CouponsPipeByCategory } from '../pipes/CouponsPipeByCategory';
import { CouponsPipeByMaxPrice } from '../pipes/CouponsPipeByMaxPrice';




@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    CustomerComponent,
    CompanyComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    ChangePasswordComponent,
    UpdatePersonalInfoComponent,
    CreateCouponComponent,
    CreateCompanyComponent,
    CompanyPageComponent,
    CreateUserComponent,
    CouponsPipeByCategory,
    CouponsPipeByMaxPrice
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    RouterModule, RoutingModule
  ],
  providers: [UsersService, CouponsService, PurchasesService, CustomersService, CompaniesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
