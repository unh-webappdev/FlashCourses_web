/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/_services/authentication.service.ts
The JWT authentication service is used to login and logout of the application, 
to login it posts the users credentials to the api and checks the response for a JWT token, 
if there is one it means authentication was successful so the user details are added to local storage
and the token saved to the AuthenticationService.token property. 

The token property is used by other services in the application to set the authorization header
of http requests made to secure api endpoints.
The logged in user details are stored in local storage so the user will stay logged in if they refresh the browser and also between browser sessions until they logout. If you don't want the user to stay logged in between refreshes or sessions the behavior could easily be changed by storing user details somewhere less persistent such as session storage or in a property of the authentication service.
*/

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Subject, Observable } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('http://159.65.236.42/api/token/', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().access;
                
                if (token) {
                    // set token property
                    this.token = token;
                    console.log(response);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
    
}