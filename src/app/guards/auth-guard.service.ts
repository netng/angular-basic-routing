import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        boolean |
        Observable<boolean> |
        Promise<boolean>
    {
        const isLoggedIn: boolean = this.authService.isAuthenticated();
        
        if (isLoggedIn) {
            return true;
        } else {
            return this.router.navigate(['/']);
        }
    }
}