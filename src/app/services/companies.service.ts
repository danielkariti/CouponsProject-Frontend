import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';


@Injectable({
    // One object for the entire website
    providedIn: 'root'
})
export class CompaniesService {

    public currentCompany : Company;
 
    constructor(private http: HttpClient) {}

    public getAllCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>("http://localhost:8080/company");
    }

    public createCompany(company : Company): Observable<void[]> {
        return this.http.post<void[]>("http://localhost:8080/company", company);
    }

    public removeCompany(id: number): Observable<void[]> {
        return this.http.delete<void[]>("http://localhost:8080/company/" + id);
    }

    public updateCompany(company : Company): Observable<void[]> {
        return this.http.put<void[]>("http://localhost:8080/company", company);
    }

    public getCompanyByName(companyName : string): Observable<Company> {
        return this.http.get<Company>("http://localhost:8080/company/byName/" + companyName);
    }

    public getCompany(id : number): Observable<Company> {
        return this.http.get<Company>("http://localhost:8080/company/" + id);
    }



}