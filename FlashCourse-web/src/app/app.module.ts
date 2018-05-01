/*
  app.module.ts
  Location: /FlashCourses_web/FlashCourse-web/src/app/
  Primary Contributor: Lawrence Thompson
  Last Updated: April 30th, 2018
  Description: A listing of modules for the Angular App.
  Completion Status: Prototyped. All next steps will alter this.

 */

import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { CoursesComponent } from './courses/courses.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { HttpClient } from '@angular/common/http';
import { routing } from './app-routing.module';
import { DecksComponent } from './decks/decks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    InstitutionsComponent,
    CoursesComponent,
    FlashcardsComponent,
    DecksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    HttpClientModule,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
