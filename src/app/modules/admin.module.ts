import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { CustomerListComponent } from '../components/customer-list/customer-list.component';
import { CompanyListComponent } from '../components/company-list/company-list.component';
import { AdminGuard } from '../guards/adminguard';
import { PurchaseListComponent } from '../components/purchase-list/purchase-list.component';


const routes: Routes = [
    { 
        path: "admin", canActivate: [AdminGuard], component: AdminComponent, children:[
            { path: "customer-list", component: CustomerListComponent },
            { path: "company-list", component: CompanyListComponent },
            { path: "purchase-list", component: PurchaseListComponent },
            // { path: "delete", component: DeleteComponent },
        ]
    }
];

@NgModule({
    declarations: [ AdminComponent, 
        CustomerListComponent,
        CompanyListComponent,
        PurchaseListComponent
      ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes) // Importing the above routes
  ]
  })
export class AdminModule {

 }