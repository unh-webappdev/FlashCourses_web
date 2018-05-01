/*

  institutions.component.ts
  Location: /FlashCourses_web/FlashCourse-web/src/app/institutions/
  Primary Contributor: Lawrence Thompson
  Last Updated: April 30th, 2018
  Description: The Logic for Institutions.
  Completion Status: Unused, will be used in data service. For more information
    about suggested changes and improvements, refer to Web-App architecture -
    Next Steps.

  Not currently implemented. See App Architecture - Next Steps
  For future implementation ideas.

 */

import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Institution } from '../institution';
import { Course } from '../course';
@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})



export class InstitutionsComponent implements OnInit {
  institutionData: Object;
  _InstitutionsArray: Institution[];
  courseData: Object;
  _courseArray: Course[];
  constructor(private http: Http, private dataService: DataService) { }

/*
getInstitutions() -> a data service implementation of institutions, modularized.
Incomplete. See App Architecture - Next Steps for more details
getInstitutions(): void {
    this.dataService.grabInstitutionData()
      .subscribe(
        (resultArray) => {
          this._InstitutionsArray = resultArray;
        },
        error => console.log("Error :: " + error)
      );
  }
 */
/*
getCourses() -> a data service implementation of courses, modularized.
Incomplete. See App Architecture - Next Steps for more details
getCourses(courseReq): void{
  this.dataService.getCourseData(courseReq)
  .subscribe(
    (resultArray) => {
      this._courseArray = resultArray;
    },
    error => console.log("Error :: " + error)
  );
  this.dataService.coursesLoaded = true;
  console.log(this._courseArray);
}
 */
  ngOnInit(): void {
   // this.getInstitutions();
  }

}
