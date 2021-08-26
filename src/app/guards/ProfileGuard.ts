import { Injectable, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

    public constructor(private usersService: UsersService, private router: Router) {}

    public canActivate(): boolean {
        const token = sessionStorage.getItem("token");
        const userType = sessionStorage.getItem("userType");
        if(token !=null && userType == "CUSTOMER") {
            return true;
        }
        this.usersService.logout();    
        this.router.navigateByUrl("/login");
        return false;
    }

}
