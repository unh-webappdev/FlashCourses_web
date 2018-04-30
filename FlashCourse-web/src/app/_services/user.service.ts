import { Http } from '@angular/http';
/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/_services/user.service.ts
The user service contains a method for getting all users from the api,
accessing a secure api endpoint with the http authorization header set after logging in to the application.
*/
import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {
    API_URL: string = 'http://159.65.236.42';
    AUTH_TOKEN: string = '';

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        const httpOptions = {
            httpHeaders: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.AUTH_TOKEN
            })
        };
        // get users from api
        return this.http.post('http://159.65.236.42/api/token/', httpOptions)
            .map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://159.65.236.42/accounts/api/registration', user);
    }

    update(user: User) {
        return this.http.put('/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/users/' + id);
    }
}