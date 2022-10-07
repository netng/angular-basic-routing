import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    isLoggedIn: boolean = false;

    constructor() { }

    login(): void {
        this.isLoggedIn = true;
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isAuthenticated(): boolean {
        console.log(this.isLoggedIn);
        return this.isLoggedIn;
    }
}