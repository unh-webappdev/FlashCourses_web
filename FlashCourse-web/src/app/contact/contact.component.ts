/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/contact/contact.component.ts
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  contact() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Comment successful', true);
          this.router.navigate(['home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}