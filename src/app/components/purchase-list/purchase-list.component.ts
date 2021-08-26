import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/models/Purchase';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  public purchases : Purchase[];

  constructor(private purchasesService: PurchasesService, private router: Router) {
    this.purchases = [];
   }

  ngOnInit(): void {

    
    const observable = this.purchasesService.getAllPurchases();
    observable.subscribe(purchasesList => {
        this.purchases = purchasesList;
    }, error => {
      alert("Error! Status: " + error.status + ", Message: " + error.error.errorMessage);
    })

  }

}
