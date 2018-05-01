/*
  app-routing.module.ts
  Location: /FlashCourses_web/FlashCourse-web/src/app/
  Primary Contributor: Lawrence Thompson
  Last Updated: April 30th, 2018
  Description: The routing logic of API routes from component to component.
  Completion Status: Prototyped. Routing will be done by passing in variables.
*/

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent} from './courses/courses.component';
import { FlashcardsComponent} from './flashcards/flashcards.component';
import { HomeComponent } from './home/home.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegistrationComponent } from './registration/registration.component';
import { TermsComponent } from './terms/terms.component';
import { ActivatedRoute } from '@angular/router';

/*
    Routes to redirect to certain components
    See App Architecture, Next Steps for more strategies.
*/
const routes: Routes = [
// {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
// },
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'courses',
    component: CoursesComponent
},
{path: 'flashcards',
component: FlashcardsComponent
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'home/:id',
    component: HomeComponent
},
{
    path: 'institutions',
    component: InstitutionsComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'privacy',
    component: PrivacyComponent
},
{
    path: 'registration',
    component: RegistrationComponent
},
{
    path: 'terms',
    component: TermsComponent
},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);