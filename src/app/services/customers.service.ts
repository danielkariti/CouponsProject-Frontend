import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';


@Injectable({
    // One object for the entire website
    providedIn: 'root'
})
export class CustomersService {
 
    constructor(private http: HttpClient) {}

    public register(customer: Customer): Observable<void> {
        return this.http.post<void>("http://localhost:8080/customer/register", customer);
      }

    public getCustomer(): Observable<Customer>{
        return this.http.get<Customer>("http://localhost:8080/customer");
    }

    public updateCustomer(customer: Customer): Observable<void>{
        return this.http.put<void>("http://localhost:8080/customer", customer);
    }

    
    public removeCustomer(id: number): Observable<void[]> {
        return this.http.delete<void[]>("http://localhost:8080/customer/" + id);
    }

    public getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>("http://localhost:8080/customer/all");
    }

}
