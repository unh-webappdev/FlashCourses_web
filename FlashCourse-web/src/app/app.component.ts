/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/app.component.ts
The app component is the root component of the application, it defines the root tag of 
the app as <app-root></app-root> with the selector property. The moduleId property is set to allow a 
relative path to be used for the templateUrl.
*/
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Home';
}
