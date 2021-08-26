import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '../models/Purchase';


@Injectable({
    // One object for the entire website
    providedIn: 'root'
})
export class PurchasesService {
 
    constructor(private http: HttpClient) {}

    public createPurchase(purchase: Purchase): Observable<void> {
        return this.http.post<void>("http://localhost:8080/purchase", purchase);

    }

    public getAllPurchasesByUserId(): Observable<Purchase[]> {
        return this.http.get<Purchase[]>("http://localhost:8080/purchase/customer");
    }

    public getAllPurchases(): Observable<Purchase[]> {
        return this.http.get<Purchase[]>("http://localhost:8080/purchase");
    }
}
