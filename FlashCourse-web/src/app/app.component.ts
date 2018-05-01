/*
  app.component.ts
  Location: /FlashCourses_web/FlashCourse-web/src/app/
  Primary Contributor: Lawrence Thompson
  Description: The Logic for the App Component.
  Last Updated: April 30th 2018
  Routing components are passed into the router-outlet component tag.
  Completion Status: Prototyped. Logic is in other components.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
}
