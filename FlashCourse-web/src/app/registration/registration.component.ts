/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/registration/registration.component.ts
The register component has a single register() method that creates a new user with
user service when the register form is submitted.
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
