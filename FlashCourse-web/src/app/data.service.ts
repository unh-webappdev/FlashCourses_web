/*

  data.service.ts
  Lawrence P. Thompson
  Location: /FlashCourses_web/FlashCourse-web/src/app/
  Primary Contributor: Lawrence Thompson
  Last Updated: April 30th, 2018
  Description: The data service for all data in app.
  Completion Status: Unused, will be used in data service. For more information
    about suggested changes and improvements, refer to Web-App architecture -
    Next Steps.

  Currently not implemented. Passes data between components
  for more modularized components.

  Once implemented, FlashCourses will be closer to the industry
  standard.

 */





import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Http,
  Response,
  Request,
  RequestOptions,
  Headers
} from '@angular/http';


import {Observable} from 'rxjs/Observable';
import { Institution } from './institution';
import { Course } from './course';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

/*
  DataService is an Injectable, and can be used to pass data
  between components.
*/

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
    institutionData: Object;
    coursesLoaded = false;
    courseData: Object;
    // private http: Http;

/*
  grabInstitutionData() -> does an API call,
      and returns data to component.
*/
//  grabInstitutionData(): Observable<Institution[]> {
//     return this.http
//       .get(`http://127.0.0.1:8000/courses/api/institution/list/`)
//       .do((response: Response) => {
//         this.institutionData = <Institution[]>response;
//         return this.institutionData;
//       })
//       .catch(this.handleError);
//   }

/*
  getCourseData() -> does an API call,
      and returns data to component.
      takes in argument courseReq -> request as a variable.
*/
// getCourseData(courseReq): Observable<Course[]> {
//   console.log(courseReq);
//   return this.http
//     .get(`http://127.0.0.1:8000/courses/api/institution/detail/${courseReq}`)
//     .do((response: Response) => {
//       this.courseData = <Course[]>response;
//       return this.courseData;
//     })
//     .catch(this.handleError);
// }

/*
  handleError(error: Response)
    Passes in error related arguments to respect DRY.
    Takes in argument of error -> returns statusText
*/

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}

/* 
  showListData() -> shows that InstitutionData is working.
*/
async showListData() {
  // let listdata = this.grabInstitutionData();
  // console.log(listdata);
}




}
