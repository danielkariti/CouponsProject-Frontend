import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import { UserLoginDetails } from '../models/UserLoginDetails';
import { ChangePasswordDetails } from '../models/ChangePasswordDetails';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private loginToken: string;
  public userType: string;
  public isLoggedIn: boolean;
  public isUserAdmin: boolean;
  public isUserCompany: boolean;
  public isUserCustomer: boolean;

  constructor(private http: HttpClient) {

  }

  public login(userLoginDetails: UserLoginDetails): Observable<SuccessfulLoginServerResponse> {
    return this.http.post<SuccessfulLoginServerResponse>("http://localhost:8080/user/login", userLoginDetails);
  }

  public logout() {
    let token = sessionStorage.getItem("token");
    sessionStorage.removeItem(token);
    this.isLoggedIn = false;
    this.userType = null;
    this.isUserAdmin = false;
    this.isUserCompany = false;
    this.isUserCustomer = false;

  }

  public changePassword(changePasswordDetails: ChangePasswordDetails): Observable<void> {
    return this.http.put<void>("http://localhost:8080/user/changePassword", changePasswordDetails);
  }

  public createUser(user: User): Observable<void> {

    return this.http.post<void>("http://localhost:8080/user", user);
  }

  public updateUser(user: User): Observable<void> {

    return this.http.put<void>("http://localhost:8080/user", user);
  }

  public removeUser(id: number): Observable<void> {

    return this.http.delete<void>("http://localhost:8080/user/" + id);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/user");
}

public getAllUsersByCompanyId(id: number): Observable<User[]> {
  return this.http.get<User[]>("http://localhost:8080/user/byCompany?id=" + id);
}

  

  public getLoginToken(): string {
    return this.loginToken;
  }

  public setLoginToken(token: any): void {
    this.loginToken = token;
  }
}





