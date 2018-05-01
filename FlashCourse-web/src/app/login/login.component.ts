/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 29, 2018
Path: /app/login/login.component.ts
The login component uses the authentication service to login and logout of the application. 
It automatically logs the user out when it initializes (ngOnInit) so the login page can also be used to logout.
*/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { LoginModel } from '../_models/login';
import { TokenModel } from '../_models/token';
import { ApiProvider } from '../_providers/api';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  Token: TokenModel;
  loginModel = new LoginModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) { 
          this.router.navigate(['../home/home.component']);
        } 
        else {
          console.log(this.error);
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}