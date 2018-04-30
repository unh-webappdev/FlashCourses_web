/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/_guards/auth.guard.ts
The auth guard is used to prevent unauthenticated users from accessing restricted routes, 
it's used in app.routing.ts to protect the home page route.
*/
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}