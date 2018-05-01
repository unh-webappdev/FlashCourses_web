/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 29, 2018
Path: /app/app.module.ts
The app module defines the root module of the application along with metadata about the module.
*/
import { HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ApiProvider } from './_providers/api';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { CoursesComponent } from './courses/courses.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { routing } from './app-routing.module';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService} from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { AlertService } from './_services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    InstitutionsComponent,
    CoursesComponent,
    PrivacyComponent,
    FlashcardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ApiProvider,
    AuthGuard,
    AuthenticationService,
    UserService,
    AlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
