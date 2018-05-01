/*
  courses.component.ts
  Location: /FlashCourses_web/FlashCourse-web/src/app/courses/
  Primary Contributor: Lawrence Thompson
  Last Updated: April 30th, 2018
  Description: The Logic for Courses.
  Completion Status: Unused, will be used in data service. For more information
    about suggested changes and improvements, refer to Web-App architecture -
    Next Steps.
*/

import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseData: Object;
  _courseArray: Course[];

  constructor(private http: Http, private dataService: DataService) { }
/*
  Courses components are currently unimplemented.
  Uses a data service.
*/

/*   getCourses(courseReq): void{
    this.dataService.getCourseData(courseReq)
    .subscribe(
      (resultArray) => {
        this._courseArray = resultArray;
      },
      error => console.log("Error :: " + error)
    );
    this.dataService.coursesLoaded = true;
  } */

  ngOnInit() {
  }

}
